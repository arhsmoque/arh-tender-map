# ARCH_REVIEW_PLAN.md — arh-tender-map

Architecture optimisation plan. Each task is self-contained: an agent can pick up any single task from this file using only the repo file state. No session context required.

**Source review:** `claude/tender-map-arch-review-igsDF`  
**Reference model:** `arhsmoque/arh-fnb-webapp` (main branch)  
**Objective:** cheapest and fastest edits, cheap new-deployment generation, runnable by agents with limited capabilities.

---

## Status legend

- `[ ]` — not started
- `[~]` — in progress
- `[x]` — done

---

## Priority 1 — Agent-readiness essentials (low effort, high ROI)

These changes cost almost nothing to implement and immediately make the repo safe for stateless agents.

### Task 1.1 — Expand AGENTS.md `[x]`

**What:** Upgrade `AGENTS.md` from the current 2.7 KB stub to a full agent runbook modelled on `arh-fnb-webapp/AGENTS.md`.

**Why:** The current AGENTS.md states what files exist but does not give an agent enough to operate autonomously. A stateless agent reading it cannot answer: What command do I run to verify a change? What is the risk class of editing config.js? What is the commit policy? What should I never do?

**Minimum additions:**
- Quick Commands section (even if just `# no recipe yet — browser-smoke instead`)
- Risk classification table (per-surface risk class: read_only / local_mutation)
- Expanded invariants with code examples
- Commit/push policy with exceptions
- What-not-to-do section
- Documentation trigger table
- config.js structural note (two-zone split and coordinate order inconsistency — see Task 2.1)

**Files changed:** `AGENTS.md`  
**Agent instructions:** Replace `AGENTS.md` with the version already committed on this branch as a starting point. Expand each section to match the depth of `arh-fnb-webapp/AGENTS.md`.

---

### Task 1.2 — Add CLAUDE.md `[x]`

**What:** Add `CLAUDE.md` — Claude Code-specific guidance, separate from AGENTS.md.

**Why:** `AGENTS.md` is for all agents. `CLAUDE.md` is read by Claude Code CLI specifically and gives it commit/push policy, quick commands, and architecture context without parsing the full AGENTS.md.

**Files changed:** `CLAUDE.md` (new)  
**Agent instructions:** The file is already committed on this branch. Review it and verify it is consistent with `AGENTS.md`.

---

### Task 1.3 — Add CONFORMANCE_CHECKLIST.yml and METADATA.yml `[x]`

**What:** Add structured audit files.

**Why:** Gives agents and the future `ubap-check.py` a machine-readable project contract. Also matches the UBAP governance standard used by arh-fnb-webapp and dpik-tugas-app.

**Files changed:** `CONFORMANCE_CHECKLIST.yml` (new), `METADATA.yml` (new)  
**Agent instructions:** Files committed on this branch. Update them when deployment, stack, or workflow changes.

---

## Priority 2 — Structural fix to config.js

### Task 2.1 — Consolidate geospatial arrays into APP_CONFIG `[~]`

**Status note (2026-06-03):** Partial implementation exists on two branches:
- `claude/tender-presentation-creation-r0Xa6`: previous agent added `routes`, `contextCards`, `kmzPath`, `chainageInterval`, `quickNav` keys to the APP_CONFIG body. Geospatial arrays still in Zone 2 (post-object assignments).
- `claude/tender-map-arch-review-igsDF` (this branch): config.js updated with HOSP SDG PATH KMZ coordinates, Air Selangor teal theme (`#009B9B`), JKR `client2`, photo-grid contextCard type, and Python-computed 100m chainage marks. Geospatial arrays still in Zone 2.

**Full task definition remains:** Move `APP_CONFIG.POLY`, `APP_CONFIG.CH_PTS`, etc. into the APP_CONFIG object body as `geo:{}` sub-object, fix JUNC coordinate naming inconsistency, update all HTML readers.

**What:** Move `APP_CONFIG.POLY`, `APP_CONFIG.CH_PTS`, `APP_CONFIG.SPOS`, `APP_CONFIG.JUNC`, `APP_CONFIG.PROP`, `APP_CONFIG.CPS` from post-object assignments into the `APP_CONFIG` object body as named keys.

**Current structure (broken into two zones):**
```js
const APP_CONFIG = {
  project: { ... },
  ...
  // object closes here
};

// Then separately:
APP_CONFIG.POLY = [ ... ];
APP_CONFIG.CH_PTS = [ ... ];
APP_CONFIG.JUNC = [ ... ];  // WARNING: [ch, id, name, desc, LON, LAT] — LON before LAT
APP_CONFIG.PROP = [ ... ];
APP_CONFIG.CPS  = [ ... ];
```

**Target structure (single zone):**
```js
const APP_CONFIG = {
  project: { ... },
  ...
  geo: {
    poly:   [ [lat, lon], ... ],
    chPts:  [ [ch, lat, lon], ... ],
    sPos:   [],
    junc:   [ [ch, id, name, desc, lon, lat], ... ],  // keep LON,LAT order — matches HTML renderer
    prop:   [ [ch, name, desc, type], ... ],
    cps:    [ { id, name, lat, lon, url }, ... ],
  },
};
```

**JUNC coordinate order warning:** `JUNC` entries use `[ch, id, name, desc, LON, LAT]` — LON at index 4, LAT at index 5. This is intentional: the HTML renderer uses `JUNC.forEach(([ch,num,name,desc,lon,lat])=>{...marker([lat,lon])})`. Do NOT change the order without updating the HTML renderer simultaneously.

**Files changed:** `config.js`, `index.html` (update any `geo.` path references if restructuring)

**Agent instructions:**
1. Read `config.js` fully before editing.
2. Read all `APP_CONFIG.JUNC` references in `index.html` — check which index the HTML uses for lat and lon.
3. Make the structural change, keeping all values identical.
4. Run `node --check config.js` after the change.

---

### Task 2.2 — Add provision-new-tender-deployment.schema.json `[ ]`

**What:** Add `recipes/provision-new-tender-deployment.schema.json` — a JSON schema describing all required fields for a new tender deployment input file.

**Why:** This is the contract between a human or agent providing tender data and the provisioner script (Task 3.2). Without a schema, a provisioner cannot validate inputs before mutating git state.

**Minimum schema fields:**
```json
{
  "tender_slug": "string (kebab-case, used as branch name: tender/<slug>)",
  "project.title": "string",
  "project.tenderNumber": "string",
  "client.name": "string",
  "client.logo": "string (relative path or empty)",
  "consultant.name": "string",
  "map.center": "[lat, lon]",
  "map.zoom": "integer",
  "scope": "array of { color, text }",
  "contacts": "array of { label, members[] }",
  "geo.poly": "array of [lat, lon]",
  "geo.cps": "array of { id, name, lat, lon, url }"
}
```

**Files changed:** `recipes/provision-new-tender-deployment.schema.json` (new), `recipes/` directory (create if absent)

---

## Priority 3 — Automation (uv Python recipes)

All recipes use the uv standalone script pattern:
- Shebang: `#!/usr/bin/env -S uv run --script`
- PEP 723 `/// script` metadata block with `requires-python = "==3.12.*"` and pinned deps
- Run with: `uv run --script recipes/<name>.py`
- Never run with bare `python`

### Task 3.1 — Add recipes/ubap-check.py `[ ]`

**What:** Deterministic conformance gate for routine changes. Run after any edit.

**Modelled on:** `arh-fnb-webapp/recipes/ubap-check.py` — strip Firebase-specific checks, keep the structural ones.

**Checks to include:**
- Required files exist: `AGENTS.md`, `README.md`, `METADATA.yml`, `CONFORMANCE_CHECKLIST.yml`, `recipes/index.yml`
- `wrangler.jsonc` project name matches expected value
- Python syntax check on all `recipes/*.py`
- JS syntax check on `config.js` (`node --check config.js`)
- Catalog refs in `recipes/index.yml` point to existing files
- No hardcoded project-specific strings in `index.html` (check for tender number as a regression guard)

**Output:** JSON UBAP envelope, non-zero exit on failure.

**Files changed:** `recipes/ubap-check.py` (new), `recipes/index.yml` (new), `AGENTS.md` (update Quick Commands)

---

### Task 3.2 — Add recipes/provision-new-tender-deployment.py `[ ]`

**What:** Automated provisioner. Takes an input JSON, generates `config.js`, creates `tender/<slug>` branch, commits, pushes.

**Modelled on:** `arh-fnb-webapp/recipes/provision-new-store-deployment.py`

**Steps the script performs:**
1. Read and validate input JSON against schema (Task 2.2)
2. Parse KMZ from `geo.kmzPath` if provided — extract polyline, compute 100m chainage marks
3. Generate `config.js` from template (jinja2), filling in all APP_CONFIG fields
4. Check that `tender/<slug>` branch does not already exist on origin
5. Create branch from `main`
6. Write generated `config.js` to branch
7. Commit with message `config(<slug>): initial tender adapter`
8. Push to origin
9. Print deployment URL

**Dependencies:** `jinja2>=3.1`, `pyyaml>=6.0`; optionally `folium>=0.17` for `--preview` map

**Usage:**
```bash
uv run --script recipes/provision-new-tender-deployment.py --input recipes/inputs/<tender>.json
uv run --script recipes/provision-new-tender-deployment.py --dry-run --input recipes/inputs/<tender>.json
```

**Files changed:** `recipes/provision-new-tender-deployment.py` (new)

---

### Task 3.3 — Add recipes/sync-base-engine-to-tender-branches.py `[ ]`

**What:** When `index.html`, `mobile.html`, or `qr.html` changes on `main`, propagate to all `tender/*` branches.

**Modelled on:** `arh-fnb-webapp/recipes/sync-base-engine-to-store-branches.py`

**BASE_ENGINE_FILES:**
```python
BASE_ENGINE_FILES = ["index.html", "mobile.html", "qr.html"]
```

**Usage:**
```bash
# Check drift (read-only)
uv run --script recipes/sync-base-engine-to-tender-branches.py

# Apply and push
uv run --script recipes/sync-base-engine-to-tender-branches.py --apply --push
```

**Files changed:** `recipes/sync-base-engine-to-tender-branches.py` (new)

---

## Priority 4 — Cloudflare multi-branch deployment

### Task 4.1 — Switch to multi-tender branch architecture `[ ]`

**What:** Adopt FNB's multi-branch deployment pattern. Each tender lives on `tender/<slug>`, auto-deployed by Cloudflare Pages.

**Target state:**
```
main                       → base engine (blank template config.js)
tender/hospital-serdang    → config.js for PN0000023850
tender/next-project        → config.js for next tender
```

**Cloudflare Pages setup (one-time):**
- Project name: `tender-map` (shared across all tenders, do not change per project)
- Branch pattern: `tender/*` (wildcard)
- Build command: none; Build output: `/`

**Steps:**
1. Create `tender/hospital-serdang` from current `main` (or from `claude/tender-map-arch-review-igsDF`)
2. Strip hardcoded values from `main`'s `config.js` (blank template)
3. Update `wrangler.jsonc` name to `tender-map`
4. Connect CF Pages to repo with wildcard branch rule
5. Update `AGENTS.md` deployment section

**Files changed:** `wrangler.jsonc`, `config.js` on `main`, `AGENTS.md`

---

### Task 4.2 — Optional: add tender-links Worker `[ ]`

**What:** Short-link Worker for tender QR codes. Mirrors `arh-fnb-webapp/shortener/`.

**When to implement:** When there are 2+ active tender deployments with printed QR codes.

**Files to add:** `shortener/worker.js`, `shortener/wrangler.jsonc`

---

## Execution order for a single agent session

```
1. Tasks 1.1–1.3: already done on this branch
2. Task 2.1: consolidate config.js — do before writing provisioner
3. Task 2.2: write schema after 2.1 so field names match
4. Task 3.1: write ubap-check.py — needs recipes/ and index.yml
5. Task 3.2: write provisioner — depends on schema (2.2) and config.js structure (2.1)
6. Task 3.3: write sync script — simple, can be done any time after 3.1
7. Task 4.1: multi-branch switch — do last; it changes main structure
8. Task 4.2: defer until 2+ tenders exist
```

## Notes for agents picking up individual tasks

- Always read `AGENTS.md` first.
- For any Task 2.x or 3.x: read `config.js` fully before editing.
- For Task 2.1: read ALL JUNC references in `index.html` before changing coordinate format — HTML destructures as `[ch,num,name,desc,lon,lat]`, LON at index 4.
- For Task 3.x recipes: use `uv run --script` pattern only; see `arh-fnb-webapp/recipes/ubap-check.py` as the canonical example.
- Run `node --check config.js` after any config.js change.
- No build step. No npm. No package.json. Browser-smoke HTML files after changes.
- Commit and push automatically after completing a task.
