# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**arh-tender-map** is a zero-build-step static map briefing suite for civil engineering tender projects. All files are plain HTML/CSS/JS deployed directly to Cloudflare. No build step, no package manager, no transpilation.

**Architecture:** Three HTML base-engine files + one JS adapter file (`config.js`). Everything project-specific lives in `config.js`. The HTML files are never edited between deployments.

## Key files

| File | Purpose |
|---|---|
| `config.js` | Project adapter — the ONLY file that changes per deployment |
| `index.html` | Desktop/projection map viewer (base engine) |
| `mobile.html` | Mobile map viewer (base engine) |
| `qr.html` | QR landing page (base engine) |
| `AGENTS.md` | Full agent runbook — read this before touching any file |
| `ARCH_REVIEW_PLAN.md` | Pending optimisation tasks — check status before starting new work |

## Deployment

- **No build command.** Push to branch → Cloudflare auto-deploys within ~30s.
- Config: `wrangler.jsonc` — do not change `name` without user confirmation (breaks live URLs).
- Local dev: open HTML files directly in browser, or `npx serve .`.

## Architecture

Three standalone HTML files — each is self-contained with all JS/CSS inlined:

| File | Purpose |
|---|---|
| `index.html` | Desktop map briefing with Leaflet, layer toggles, sidebar tabs |
| `mobile.html` | Mobile-optimised map with bottom navigation |
| `qr.html` | QR code landing page with project summary |

**No data backend.** All project data comes from `config.js` at page load. No Firebase, no API.

## config.js structure — important

The file has two zones. When editing coordinates or adding junctions, scroll past the closing `};` to find the geospatial array assignments (`APP_CONFIG.POLY`, `APP_CONFIG.JUNC`, etc.).

**Known bug:** `JUNC` entries have `lon` at index 4 and `lat` at index 5 — opposite to all other arrays. Read the HTML to confirm which index it reads before editing.

See `ARCH_REVIEW_PLAN.md` Task 2.1 for the consolidation plan.

## Code conventions

### config.js module organisation

```
const APP_CONFIG = {
  project:        ← tender metadata (title, number, programme)
  client:         ← client name + logo path
  consultant:     ← consultant name + logo path
  dates:          ← advertisement, download, briefing, closing dates
  stats:          ← numeric summary (length, lots, duration)
  map:            ← center, zoom, bounds
  photos:         ← site photo list
  scope:          ← work scope items with legend colours
  designStandards: ← design parameter table
  landAcquisition: ← land/permit requirements table
  alerts:         ← info/warning banners
  contacts:       ← contact groups with members
  theme:          ← CSS colour map
  qrPage:         ← QR page content
};

// Below the object: geospatial arrays (pending consolidation)
APP_CONFIG.POLY  = ...;
APP_CONFIG.CH_PTS = ...;
APP_CONFIG.SPOS  = ...;
APP_CONFIG.JUNC  = ...;
APP_CONFIG.PROP  = ...;
APP_CONFIG.CPS   = ...;
```

## Verification after a change

1. `node --check config.js` — catches syntax errors before browser test.
2. Open `index.html` in browser (or `npx serve .`).
3. Check browser console — no errors.
4. Map renders, pipeline routes visible, layer toggles work, sidebar tabs switch.
5. Mobile view opens, bottom nav works.
6. QR page shows correct project title.

## Commit and push policy

Commit and push automatically after completing a change set. Do not wait for a manual push.

**Exception:** Do not push `wrangler.jsonc` name changes without user confirmation — it changes the live deployment URL and breaks existing QR codes.

## Key constraints

- **No npm, no bundler, no transpilation.** Plain HTML/JS/CSS only.
- All business-specific values live in `config.js` only. Never hardcode in the HTML files.
- Do not change the `wrangler.jsonc` project name without user confirmation.
- Do not use absolute paths for local assets — keep relative `assets/` paths.
