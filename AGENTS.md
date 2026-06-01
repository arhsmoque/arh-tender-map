# AGENTS.md — arh-tender-map

Operating instructions for coding agents. Read this before touching any file.

---

## Architecture in one paragraph

This is a zero-build-step static map briefing suite. Three HTML files are the engine; one JS file is the project-specific adapter. Everything project-specific — client name, tender number, map coordinates, photos, contacts, scope items — lives in `config.js` under `APP_CONFIG`. The base engine never changes between deployments.

---

## File roles

| File | Role | Who edits it |
|---|---|---|
| `config.js` | **Adapter / Rules-config** | Every new deployment — only file that changes |
| `index.html` | **Base** — desktop/projection map viewer | Engine changes only |
| `mobile.html` | **Base** — mobile-optimized viewer | Engine changes only |
| `qr.html` | **Base** — QR landing page | Engine changes only |
| `assets/logos/` | Client + consultant logos | Per deployment |
| `assets/photos/` | Site photos | Per deployment |

### The invariant

`index.html`, `mobile.html`, and `qr.html` must contain zero hardcoded project-specific values. Everything business-specific — project title, tender number, map coordinates, contacts, theme colours — lives in `config.js` under `APP_CONFIG`.

Before adding anything to an HTML file, ask: *does this belong in `config.js` instead?*

---

## Build, lint, test, format

There is no build step, no bundler, no package.json, no linter, no formatter, no test suite. The output is the source.

**To verify the app works after a change:**
1. Open `index.html` directly in a browser (or serve with any static file server).
2. Check the browser console for errors.
3. Confirm the map renders, layers toggle, and sidebar tabs work.
4. Confirm the mobile view opens and bottom nav switches correctly.
5. Confirm the QR page displays the correct project title and chips.

---

## Deployment

Serve statically via GitHub Pages, Cloudflare Pages, or any static host.

```
# GitHub Pages (if repo is public)
Push to main → Settings → Pages → Source: Deploy from branch → main / root
```

For a new project:
1. Fork/clone this repo.
2. Replace `config.js` with new project data.
3. Replace `assets/logos/` and `assets/photos/`.
4. Update `qr.png` if generating a new QR code.
5. Commit and push.

---

## Critical invariants — do not break these

1. **Never hardcode project text in HTML.** If it appears in `config.js`, reference it from there.
2. **Photo paths are relative.** `assets/photos/{img}` — keep this convention.
3. **Logos are referenced by `client.logo` and `consultant.logo`.**
4. **Map arrays (POLY, CH_PTS, SPOS, JUNC, PROP, CPS) are raw JS arrays in config.js**, not JSON, to avoid parsing overhead.
