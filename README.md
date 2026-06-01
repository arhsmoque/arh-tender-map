# arh-tender-map

Base-engine + adapter pattern for interactive tender briefing maps.

Inspired by [arh-fnb-webapp](https://github.com/arhsmoque/arh-fnb-webapp) — same philosophy: one base engine, many deployments.

## Files

| File | Role | Changes per deployment? |
|---|---|---|
| `index.html` | Desktop/projection map viewer | **No** |
| `mobile.html` | Mobile-optimized viewer | **No** |
| `qr.html` | QR landing page | **No** |
| `config.js` | **Adapter** — all project data | **Yes** — only this file |
| `assets/logos/` | Client + consultant logos | **Yes** |
| `assets/photos/` | Site photos | **Yes** |

## Quick start

1. Copy this repo.
2. Replace `config.js` with your project data.
3. Swap `assets/logos/` and `assets/photos/`.
4. Serve statically (GitHub Pages, Cloudflare Pages, nginx, etc.).

No build step. No bundler. No dependencies except CDN-loaded Leaflet + QRCode.

## Deployment variants

| Variant | Entrypoint | Use case |
|---|---|---|
| Desktop / Projector | `index.html` | Briefing room, Google Earth side-by-side |
| Mobile / Shareable | `mobile.html` | WhatsApp/Telegram link to contractors |
| QR Poster | `qr.html` | Print and display at registration desk |

## Adapter contract (`config.js`)

```js
APP_CONFIG = {
  project: { title, subtitle, tenderNumber, programme, indicativePrice, durationMonths, cidbClass, ... },
  client:  { name, subname, url, logo },
  consultant: { name, subname, logo },
  dates:   { advertisement, download, briefing, closing, active },
  stats:   { lengthKm, landAcquisitionLots, landAreaEkar, landAreaSqm, constructionDurationMonths },
  map:     { center, zoom, bounds },
  photos:  [{ ch, img, label, note }],
  scope:   [{ color, text }],
  designStandards: [{ parameter, unit, value }],
  landAcquisition: [{ area, lots }],
  alerts:  [{ type, title, body }],
  contacts:[{ label, members: [{ name, title, email }] }],
  theme:   { bg, panel, panel2, text, muted, accent, ... },
  qrPage:  { badge, title, subtitle, chips, note, url },
  // Raw geospatial arrays
  POLY, CH_PTS, SPOS, JUNC, PROP, CPS
};
```

## Example deployment

- **FT264 Jalan Tun Hamzah** — first adapter using this base.

## License

Internal ARH use. Do not commit live credentials or sensitive project data to public branches.
