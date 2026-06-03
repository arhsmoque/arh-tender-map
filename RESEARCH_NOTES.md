# RESEARCH_NOTES.md — arh-tender-map

AI-era coding patterns, geospatial visualisation libs, and HTML presentation tooling.
Intended audience: agents and developers extending this repo.

---

## 1. AI-Era Coding Patterns

### 1.1 Context-as-Code

**What it is:** Treat operational context (architecture decisions, invariants, agent runbooks) as first-class versioned artefacts alongside source code. `AGENTS.md`, `CLAUDE.md`, `ARCH_REVIEW_PLAN.md`, and `CONFORMANCE_CHECKLIST.yml` in this repo are all context-as-code files.

**Why it matters:** A stateless agent cannot ask clarifying questions. If the context is not in the file tree, the agent must guess. Every missing invariant becomes a potential regression.

**Patterns adopted here:**
- `AGENTS.md`: full runbook, risk table, invariants with code, anti-patterns
- `CLAUDE.md`: Claude Code-specific shortcuts (subset of AGENTS.md)
- `ARCH_REVIEW_PLAN.md`: task list with `[ ]`/`[~]`/`[x]` status, self-contained task descriptions
- `CONFORMANCE_CHECKLIST.yml`: machine-readable audit contract
- `METADATA.yml`: project snapshot for tooling (branch naming, deployment URL patterns)

### 1.2 Token-Aware Design

**Problem:** LLM context windows are finite. Large, poorly-structured files waste tokens on irrelevant content.

**Practices:**
- **One file, one purpose.** `config.js` is the only file that changes per adapter. Base engine files (`index.html`, `mobile.html`) never change between deployments.
- **Inferable component names.** `provision-new-tender-deployment.py` encodes: verb (`provision`), object (`new-tender-deployment`). An agent can deduce what the script does without reading it.
- **Schema-first adapters.** `provision-new-tender-deployment.schema.json` defines the input contract. An agent generating a new adapter writes to the schema, not to the implementation.
- **Flat data structures.** `APP_CONFIG` is a flat JS object with well-named keys. An agent reading the first 50 lines of `config.js` understands the full adapter contract.
- **Comment budget rule:** Comment WHY, never WHAT. One line per non-obvious decision. No multi-paragraph docstrings.

### 1.3 Inferable Component Names

Good names allow agents to select the right tool without opening the file:

| Name pattern | Encodes |
|---|---|
| `provision-new-tender-deployment.py` | verb + object + lifecycle stage |
| `sync-base-engine-to-tender-branches.py` | verb + subject + target |
| `ubap-check.py` | protocol abbreviation + verb (run = verify) |
| `config.js` | role (adapter config, not logic) |
| `AGENTS.md` | audience + format |
| `ARCH_REVIEW_PLAN.md` | scope + document type |

**Anti-pattern:** `utils.js`, `helpers.py`, `common.js` — uninferrable, content must be opened.

### 1.4 Multi-Agent Handoff Governance

**Problem:** When multiple agents work on the same repo across sessions, each starts with no memory of what was done.

**Governance layers adopted here:**

1. **Task file with status symbols** (`ARCH_REVIEW_PLAN.md`): `[ ]`, `[~]`, `[x]`. Any agent can determine what is done, in-progress, and blocked without reading commit history.
2. **Execution order section**: Explicit dependency chain so an agent picking up mid-plan does not execute out-of-order.
3. **Self-contained task descriptions**: Each task in `ARCH_REVIEW_PLAN.md` includes: what to do, why, files to change, and agent instructions. No cross-task context required.
4. **Commit convention**: `feat(slug):`, `fix(slug):`, `docs:`, `config(slug):` — topic in parentheses makes branch purpose visible in git log without opening files.
5. **Branch naming**: `claude/task-description-NONCE` — purpose inferable, nonce prevents conflicts.
6. **CONFORMANCE_CHECKLIST.yml**: Acts as a merge gate checklist. An agent can run `ubap-check.py` to verify conformance before pushing.

### 1.5 Infra-as-Code Applied to Static PWAs

For zero-build-step deployments (this repo, arh-fnb-webapp), "infra-as-code" means:
- `wrangler.jsonc` defines the deployment unit (Cloudflare Pages project name)
- Branch name is the deployment selector (`tender/<slug>` → auto-deployed to unique CF Pages URL)
- `config.js` is the only deployment variable — all other files are shared base engine
- The provisioner script (`provision-new-tender-deployment.py`) is the IaC automation layer

### 1.6 Schema-First Adapter Pattern (UBAP v1.6)

Used in arh-fnb-webapp. Should be adopted here:

```
schema.json                ← defines the adapter contract
  ↓ validated by
provision-new-tender-deployment.py  ← reads schema, generates config.js
  ↓ produces
config.js                  ← the adapter (one file per deployment)
  ↓ consumed by
index.html                 ← base engine (never changes between deployments)
```

Benefit: a non-technical user or limited-capability agent can fill in the schema JSON and the provisioner handles the rest.

---

## 2. Python Geospatial Visualisation Libraries

### 2.1 KML/KMZ Parsing

| Library | Verdict | Notes |
|---|---|---|
| `fastkml` | Recommended for parsing | Pure Python, handles namespaces, extracts placemarks |
| `pykml` | Alternative | lxml-based, good for complex KML |
| `zipfile` (stdlib) | Use for KMZ | KMZ is just a ZIP; extract doc.kml then parse |
| `xml.etree.ElementTree` (stdlib) | Use for simple KML | Sufficient for coordinate extraction (used in this project's Python scripts) |

**Pattern used in this repo (stdlib only):**
```python
import zipfile, xml.etree.ElementTree as ET
with zipfile.ZipFile('file.kmz') as z:
    kml_data = z.read('doc.kml')
root = ET.fromstring(kml_data)
# extract coordinates from LineString/Point placemarks
```

### 2.2 Chainage Computation

| Library | Verdict | Notes |
|---|---|---|
| `math` (stdlib) | Sufficient | Haversine formula, no deps |
| `shapely` | Recommended for complex paths | `linestring.interpolate(distance)`, handles curves |
| `pyproj` | Use when projection needed | UTM coordinates for mm-accuracy chainage |

**Haversine (used in this repo, zero deps):**
```python
import math
def haversine(lat1, lon1, lat2, lon2):
    R = 6_371_000
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = math.radians(lat2-lat1)
    dl = math.radians(lon2-lon1)
    a = math.sin(dp/2)**2 + math.cos(p1)*math.cos(p2)*math.sin(dl/2)**2
    return 2*R*math.asin(math.sqrt(a))
```

### 2.3 Map Rendering

| Library | Verdict | Notes |
|---|---|---|
| `folium` | **Recommended** | Python → Leaflet HTML; minimal JS knowledge needed; wraps Leaflet directly |
| `plotly` (Mapbox) | Good for dashboards | Requires Mapbox token for satellite tiles |
| `pydeck` | Good for 3D/large datasets | WebGL-based, overkill for tender maps |
| `geopandas` + `matplotlib` | Static maps only | Not web-deployable |

**Why Folium for this project:**
- Outputs a standalone HTML file (no build step, matches repo's zero-build philosophy)
- Wraps Leaflet — same tile providers as current `index.html`
- Can generate the base map programmatically from `config.js` inputs
- Pattern: `provision-new-tender-deployment.py` could use Folium to generate a preview map

**Folium chainage overlay example:**
```python
import folium
m = folium.Map(location=[2.972, 101.718], zoom_start=14)
folium.PolyLine(poly_latlon, color='#009B9B', weight=4).add_to(m)
for ch, lat, lon in ch_pts:
    if ch % 500 == 0:
        folium.Marker([lat, lon], icon=folium.DivIcon(html=f'<div style="background:#FFB800">{ch}</div>')).add_to(m)
m.save('preview.html')
```

---

## 3. HTML Presentation Libraries (PowerPoint-in-HTML)

### 3.1 Templating

| Library | Verdict | Notes |
|---|---|---|
| `jinja2` | **Recommended** | Python-native, battle-tested, generates HTML from templates + data |
| `mako` | Alternative | Faster than Jinja2, similar syntax |
| `dominate` | Programmatic HTML | Pure Python DOM builder, no template syntax |

**Pattern for this repo:**
```python
from jinja2 import Template
html = Template(open('templates/context-card.html').read()).render(
    title="Latar Belakang Projek",
    body=project_background_text
)
```

### 3.2 Presentation Frameworks

| Library | Verdict | Notes |
|---|---|---|
| `reveal.js` | **Recommended for standalone** | CDN-hosted, zero-build, accessible via `<script>` tag |
| `impress.js` | CSS3 3D transitions | More complex, higher wow-factor |
| `quarto` | **Recommended for report generation** | Markdown → HTML slides/report; good for context cards |
| `slidev` | Vue-based | Requires Node.js build step, not suitable for this repo |

**Why reveal.js fits this repo:**
- CDN-hosted like Leaflet — no build step
- Can be embedded in a tab of `index.html`
- Data-driven: slides generated from `APP_CONFIG.contextCards` array

### 3.3 Recommended Tool Chain for Adapter Generation

```
Input: inputs/<tender>.json
  ↓ validated by schema.json
  ↓ processed by provision-new-tender-deployment.py
    ├─ fastkml/zipfile: parse KMZ → extract polyline coordinates
    ├─ math haversine: compute 100m chainage marks
    ├─ jinja2: render config.js template with all values
    └─ (optional) folium: generate preview map HTML
Output: config.js (deployment-ready adapter)
         preview.html (reviewer map, optional)
```

This chain requires only: `pyyaml`, `jinja2`, and optionally `folium` — all pip-installable, uv-compatible.

---

## 4. Recommendations for arh-tender-map

| Priority | Action |
|---|---|
| High | Add `provision-new-tender-deployment.py` using jinja2 + haversine |
| High | Add `provision-new-tender-deployment.schema.json` |
| Medium | Use `fastkml` or `zipfile+ElementTree` in provisioner for KMZ ingestion |
| Medium | Add `folium` preview map generation to provisioner (optional `--preview` flag) |
| Low | Explore `reveal.js` for a richer context tab presentation mode |
| Low | Add `shapely` for accurate chainage on curved alignments (sub-metre accuracy) |

---

*Generated: 2026-06-03. Update when adopting new libraries or patterns.*
