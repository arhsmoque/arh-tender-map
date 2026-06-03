# AGENTS.md — arh-tender-map

Operating instructions for coding agents. Read this before touching any file.
For human onboarding, read `README.md` instead.

Architecture optimisation plan: `ARCH_REVIEW_PLAN.md` — read it to understand pending tasks and their execution order.

---

## Agent quick commands

```bash
# Verify JS syntax after any config.js edit
node --check config.js

# Serve locally for browser smoke test
npx serve .
# or: python -m http.server 8080

# (Future — Task 3.1) Cheap deterministic gate after routine changes
# uv run --script recipes/ubap-check.py

# (Future — Task 3.2) New tender deployment
# uv run --script recipes/provision-new-tender-deployment.py --input recipes/inputs/<tender>.json
# uv run --script recipes/provision-new-tender-deployment.py --dry-run --input recipes/inputs/<tender>.json

# (Future — Task 3.3) Sync base engine to tender branches after HTML changes on main
# uv run --script recipes/sync-base-engine-to-tender-branches.py --apply --push
```

Routine change flow: make the smallest source change → `node --check config.js` → browser-smoke affected pages → push.

---

## Architecture in one paragraph

This is a zero-build-step static map briefing suite. Three HTML files are the engine; one JS file is the project-specific adapter. Everything project-specific — client name, tender number, map coordinates, photos, contacts, scope items — lives in `config.js` under `APP_CONFIG`. The base engine never changes between deployments. Only `config.js` changes.

---

## File roles

| File | UBAP role | Who edits it |
|---|---|---|
| `config.js` | **Adapter / Rules-config** | Every new deployment — only file that changes |
| `index.html` | **Base** — desktop/projection map viewer | Engine changes only |
| `mobile.html` | **Base** — mobile-optimised viewer | Engine changes only |
| `qr.html` | **Base** — QR landing page | Engine changes only |
| `assets/logos/` | Client + consultant logos | Per deployment |
| `assets/photos/` | Site photos | Per deployment |
| `wrangler.jsonc` | Infrastructure config | Deployment name only |
| `AGENTS.md` | Agent runbook | Update when architecture or workflow changes |
| `ARCH_REVIEW_PLAN.md` | Optimisation task list | Update task status as work completes |

### The invariant

`index.html`, `mobile.html`, and `qr.html` must contain **zero hardcoded project-specific values**. Everything business-specific — project title, tender number, map coordinates, contacts, theme colours — lives in `config.js` under `APP_CONFIG`.

Before adding anything to an HTML file, ask: *does this belong in `config.js` instead?*

---

## config.js structure — two-zone layout (known issue)

The current `config.js` has a structural inconsistency that is pending cleanup (see `ARCH_REVIEW_PLAN.md` Task 2.1):

**Zone 1 (lines 1–~160):** Main `APP_CONFIG` JSON-like object — project details, client, map settings, scope, contacts, theme.

**Zone 2 (lines ~160–end):** Geospatial arrays appended as property assignments after the object closes:
```js
APP_CONFIG.POLY  = [ ... ];  // [lat, lon] pairs
APP_CONFIG.CH_PTS = [ ... ]; // [ch, lat, lon] triples
APP_CONFIG.SPOS  = [];       // site photo positions (empty)
APP_CONFIG.JUNC  = [ ... ];  // [ch, id, name, desc, LON, LAT] — NOTE: lon before lat (bug)
APP_CONFIG.PROP  = [ ... ];  // proposed structures
APP_CONFIG.CPS   = [ ... ];  // checkpoint navigation points
```

**Known coordinate order bug:** `JUNC` entries have `lon` at index 4 and `lat` at index 5. All other arrays use `[lat, lon]` order. Do not copy the JUNC index order when adding new junction entries — use the HTML reader as the source of truth for which index it reads.

To edit geospatial data: scroll past the closing `};` of the main APP_CONFIG object to find the array assignments.

---

## Build, lint, test, format

There is no build step, no bundler, no package.json, no linter, no formatter, no test suite. The output is the source.

**To verify the app works after a change:**
1. `node --check config.js` — catches JS syntax errors.
2. Open `index.html` directly in a browser (or `npx serve .`).
3. Check the browser console for errors.
4. Confirm the map renders, pipeline routes appear, layers toggle, sidebar tabs work.
5. Confirm the mobile view opens and bottom nav switches correctly.
6. Confirm the QR page displays the correct project title and chips.

---

## Risk classification

| Surface | Risk class | Notes |
|---|---|---|
| `config.js` edits | `local_mutation` | Changes affect all users on next deploy |
| `index.html` / `mobile.html` map render | `read_only` | No mutation; pure display |
| `qr.html` display | `read_only` | No mutation |
| Asset replacement (`assets/logos/`, `assets/photos/`) | `local_mutation` | Affects all users on next deploy |
| `wrangler.jsonc` changes | `local_mutation` + risk of URL change | Changing `name` changes the deployment URL |

---

## Critical invariants — do not break these

### 1. Zero hardcoded project text in HTML

If a value appears in `config.js`, reference it from there. Never duplicate it in HTML. Check before every HTML edit.

### 2. Photo paths are relative

`assets/photos/{img}` — keep this convention. Do not use absolute paths or URLs for local assets.

### 3. Logos are referenced by `client.logo` and `consultant.logo`

Do not hardcode logo filenames in HTML. The path is driven from `APP_CONFIG.client.logo` and `APP_CONFIG.consultant.logo`.

### 4. Geospatial arrays are raw JS, not JSON

`POLY`, `CH_PTS`, `SPOS`, `JUNC`, `PROP`, `CPS` are plain JS arrays in `config.js`, not JSON. This is intentional — it avoids parsing overhead and allows inline comments. Do not wrap them in `JSON.stringify` calls.

### 5. JUNC coordinate order is inconsistent (known bug)

JUNC entries currently use `[ch, id, name, desc, lon, lat]` (lon first at index 4). POLY and CH_PTS use `[lat, lon]`. Until Task 2.1 is completed, read the HTML source to confirm which index it uses before editing JUNC data. Do not silently swap coordinates — map markers will appear in the wrong location.

### 6. wrangler.jsonc project name

Do not change `"name"` in `wrangler.jsonc` without updating deployment documentation. Changing it changes the live URL.

---

## Deployment

Serve statically via Cloudflare Pages (auto on push), Cloudflare Workers (manual), GitHub Pages, or any static host.

```bash
# Cloudflare Pages (current method — auto on every push to connected branch)
git push origin main
# → Cloudflare Pages picks it up, deploys in ~30s

# Cloudflare Workers (manual)
npx wrangler deploy

# Local preview
npx serve .
# or: python -m http.server 8080
```

**Future multi-tender deployment (see ARCH_REVIEW_PLAN.md Task 4.1):**
```bash
# Each tender will live on its own branch:
git push origin tender/hospital-serdang
# → deploys to: tender-hospital-serdang-tender-map.pages.dev
```

**New project (current manual flow):**
1. Fork/clone this repo.
2. Replace `config.js` with new project data (both the JSON object and the geospatial arrays).
3. Replace `assets/logos/` and `assets/photos/`.
4. Update `qr.png` if generating a new QR code.
5. `node --check config.js`
6. Commit and push.

**New project (future automated flow — after Task 3.2):**
```bash
uv run --script recipes/provision-new-tender-deployment.py --input recipes/inputs/<tender>.json
```

---

## What to do when adding a new feature

1. Decide: does this belong in `config.js` (project-specific behaviour) or the HTML engine (all future deployments share it)?
2. If it is a new config field → add it to `APP_CONFIG` in `config.js`, handle it in the HTML via the field, never by hardcoded value.
3. If it is a new shared runtime asset referenced by the HTML files → document it in this file.
4. Run `node --check config.js`, browser-smoke all three HTML files, then push.
5. If it changes deployment, workflow, or multi-tender propagation → update `ARCH_REVIEW_PLAN.md` and this file.

---

## What not to do

- Do not add hardcoded project names, tender numbers, coordinates, phone numbers, or client names to `index.html`, `mobile.html`, or `qr.html`.
- Do not add a build step, bundler, npm, or package.json. The no-dependency constraint is intentional.
- Do not change the `wrangler.jsonc` project name without updating documentation.
- Do not use absolute paths for local assets.
- Do not copy the JUNC coordinate order for new array types — see invariant 5.
- Do not run recipe scripts with bare `python` when uv recipes exist — use `uv run --script`.

---

## Commit and push policy

Agents commit and push automatically after completing a change set. Do not wait for a manual push.

```bash
git add <files>
git commit -m "<type>(<scope>): <what changed>"
git push origin <branch>
```

After pushing base engine changes on `main`, check for tender branch drift (once Task 3.3 recipe exists):
```bash
uv run --script recipes/sync-base-engine-to-tender-branches.py
```

**Exception:** Do not push changes that alter the live deployment URL (`wrangler.jsonc name`) without confirming with the user — this breaks existing QR codes and shared links.
