/**
 * config.js — Water Supply Project Route Map Adapter
 *
 * @role     adapter / rules-config
 * @contract APP_CONFIG → consumed by index.html + mobile.html + qr.html
 *
 * Project : Hospital Serdang & HSIS Cardiology Block Water Supply Pipeline
 * Tender  : Air Selangor PN0000023850
 * Prepared: DPI Konsult Sdn Bhd
 *
 * Route 1 (400mm MSCL): CH0+000 (IOI Conezion hot tap) → CH1+486 (HSIS bulk meter), ~1.49km
 * Route 2 (200mm MSCL/HDPE): CH1+486 (HSIS) → CH2+073 (HVet), ~0.59km
 * Total pipeline: ~2.07km
 *
 * KMZ source: AIS_SERDANG_baru_extension.kmz
 * Coord source: HOSP SDG PATH (13 pts) + MS200 VET (5 pts) polylines from KMZ
 * Chainage marks: Python haversine computation at 100m intervals
 */

const APP_CONFIG = {
  "lang": "en",
  "pageTitle": "Hospital Serdang Water Supply — Technical Route Map",

  "project": {
    "title": "Proposed Pipe Laying and Improvement Works for Hospital Serdang and Hospital Sultan Idris Shah (Blok Pusat Kardiologi)",
    "subtitle": "Route 1: IOI Conezion → HSIS (400mm MSCL, 1.452km) · Route 2: HSIS → HVet (200mm MSCL/250mm HDPE, 0.746km)",
    "tenderNumber": "PN0000023850",
    "programme": "Air Selangor Emergency and Ad-Hoc Water Improvement Program",
    "durationMonths": 24,
    "designStandard": "SYABAS Standard Specification 2007 / JKR Standard Specification 2014",
    "status": "Technical Evaluation / Pre-Construction",
    "documentPrice": null
  },

  "client": {
    "name": "PENGURUSAN AIR SELANGOR",
    "subname": "SDN BHD",
    "url": "https://www.airselangor.com",
    "logo": "https://i.imgur.com/zPDIZvW.png"
  },

  "consultant": {
    "name": "DPI Konsult Sdn Bhd",
    "subname": "Civil & Structural Consultant",
    "logo": "assets/logos/consultant-logo.png"
  },

  "stats": {
    "lengthKm": 2.20,
    "route1LengthKm": 1.452,
    "route2LengthKm": 0.746,
    "constructionDurationMonths": 24
  },

  "map": {
    "center": [2.9720, 101.7185],
    "zoom": 14,
    "bounds": [
      [2.9640, 101.7090],
      [2.9780, 101.7250]
    ]
  },

  "kmzPath": "assets/path.kmz",
  "chainageInterval": 100,

  "routes": [
    {
      "id": "r1",
      "label": "Route 1 — 400mm MSCL (IOI Conezion → HSIS, 1.452km)",
      "color": "#0099D4",
      "glowColor": "rgba(0,153,212,0.14)",
      "kmzSegments": ["HOSP SDG PATH"],
      "poly": [
        [2.966963, 101.721050],
        [2.966886, 101.721276],
        [2.967127, 101.721634],
        [2.968116, 101.722050],
        [2.970429, 101.722582],
        [2.971866, 101.722956],
        [2.973374, 101.722689],
        [2.974198, 101.722521],
        [2.974667, 101.720524],
        [2.974919, 101.719579],
        [2.974996, 101.719524],
        [2.975384, 101.717580],
        [2.975669, 101.717638]
      ]
    },
    {
      "id": "r2",
      "label": "Route 2 — 200mm MSCL / 250mm HDPE (HSIS → Hospital Veterinar, 0.746km)",
      "color": "#F5A623",
      "glowColor": "rgba(245,166,35,0.14)",
      "kmzSegments": ["MS200 VET"],
      "poly": [
        [2.975393, 101.717547],
        [2.975618, 101.715984],
        [2.975600, 101.713985],
        [2.975519, 101.713117],
        [2.975776, 101.712320]
      ]
    }
  ],

  "methodSegments": [
    {"fromCh":0,    "toCh":15,   "color":"#0099D4","method":"opentrench"},
    {"fromCh":15,   "toCh":60,   "color":"#ff8833","method":"pipejacking"},
    {"fromCh":60,   "toCh":819,  "color":"#0099D4","method":"opentrench"},
    {"fromCh":819,  "toCh":972,  "color":"#ff8833","method":"pipejacking"},
    {"fromCh":972,  "toCh":1422, "color":"#0099D4","method":"opentrench"},
    {"fromCh":1422, "toCh":1463, "color":"#ff8833","method":"pipejacking"},
    {"fromCh":1463, "toCh":1486, "color":"#0099D4","method":"opentrench"},
    {"fromCh":1486, "toCh":1873, "color":"#F5A623","method":"opentrench"},
    {"fromCh":1873, "toCh":1958, "color":"#ff33cc","method":"hdd"},
    {"fromCh":1958, "toCh":2073, "color":"#F5A623","method":"opentrench"}
  ],

  "photos": [],

  "scope": [
    {"color": "#0099D4", "text": "Route 1 — Install 400mm ND MSCL Pipe (IOI Conezion → Hospital Serdang, ~1.49km)"},
    {"color": "#F5A623", "text": "Route 2 — Install 200mm ND MSCL / 250mm HDPE Pipe (HSIS → Hospital Veterinar, 0.746km)"},
    {"color": "#ff8833", "text": "Twin Pipe Jacking beneath SKVE (~150m alignment, 300m pipe)"},
    {"color": "#ff33cc", "text": "Horizontal Directional Drilling (HDD) — FT 345 Utility Corridor"},
    {"color": "#aaff00", "text": "Supply & install valves (butterfly, sluice, air, scour) + valve chamber"},
    {"color": "#ffaa00", "text": "Install electromagnetic flowmeter, RTU panel & SCADA telemetry system"},
    {"color": "#22cc77", "text": "Hot tapping — connection to existing 900mm pipe (IOI City Reservoir) & 200mm (HVet)"},
    {"color": "#ff4455", "text": "Pipe bridge / overcrossing at relevant locations"},
    {"color": "#7a84a0", "text": "Pressure & leakage testing, sterilisation, and commissioning"},
    {"color": "#7a84a0", "text": "Road reinstatement works (temporary & permanent, mill & pave method)"}
  ],

  "designStandards": [
    {"parameter": "Design Standard",           "unit": "—",    "value": "SYABAS SS 2007 / JKR SS 2014"},
    {"parameter": "Route 1 Pipe Diameter",     "unit": "mm ND","value": "400 (MSCL)"},
    {"parameter": "Route 2 Pipe Diameter",     "unit": "mm ND","value": "200 (MSCL) / 250 (HDPE — HDD)"},
    {"parameter": "Min. Pipe Cover",           "unit": "m",    "value": "1.2"},
    {"parameter": "HDD Min. Depth",            "unit": "m",    "value": "3.0"},
    {"parameter": "HDD Entry / Exit Angle",    "unit": "°",    "value": "10 – 18"},
    {"parameter": "Pipe Jacking Tolerance (H)","unit": "mm",   "value": "±75"},
    {"parameter": "Pipe Jacking Tolerance (V)","unit": "mm",   "value": "±25"},
    {"parameter": "Field Pressure Test",       "unit": "bar",  "value": "15 (10 min)"},
    {"parameter": "Leakage Test Pressure",     "unit": "bar",  "value": "12 (24 hr)"},
    {"parameter": "Chlorination Concentration","unit": "mg/L", "value": "40 (min. 24 hr)"}
  ],

  "constructionMethods": [
    {
      "id": "jacking",
      "shortLabel": "Twin Pipe Jacking",
      "fullLabel": "Twin Pipe Jacking — SKVE Crossing",
      "color": "#ff8833",
      "chainage": "CH 0+887 – CH 1+114",
      "detail": "Two 400mm MSCL pipes are jacked in parallel beneath the SKVE expressway. Jacking pit to the south, receiving pit to the north. Alignment ~150m (total pipe ~300m). No SKVE closure expected — operations from jacking pit only. Continuous settlement monitoring required."
    },
    {
      "id": "hdd",
      "shortLabel": "HDD",
      "fullLabel": "Horizontal Directional Drilling (HDD)",
      "color": "#ff33cc",
      "chainage": "Route 2 · CH 492–600 (FT 345)",
      "detail": "HDD beneath the existing utility corridor along FT 345. Product pipe: 250mm Ø HDPE PN10 (108m bore). Minimum depth: 3.0m. Entry angle 10°–18°, exit angle 10°–18°. Executed from a side-table road. Transition chamber at CH 492 and sluice valve at CH 600."
    },
    {
      "id": "hottap",
      "shortLabel": "Hot Tapping",
      "fullLabel": "Hot Tapping — Live Connection",
      "color": "#22cc77",
      "chainage": "CH 0+000 & CH 2+073",
      "detail": "Live connection to the existing 900mm pipe (IOI City Reservoir) at CH 0+000 and 200mm pipe (Hospital Veterinar) at CH 2+073. Fully coordinated with Air Selangor Operations. No interruption to continuous hospital water supply."
    },
    {
      "id": "opentrench",
      "shortLabel": "Open Trench",
      "fullLabel": "Open Trench Pipe Laying",
      "color": "#0099D4",
      "chainage": "CH 0+000 – CH 0+887 & CH 1+114 – CH 2+073",
      "detail": "Open trench method using excavators with reinstatement via mill & pave to JKR standard. Minimum pipe cover 1.2m. Coordination of JKR Road Opening Permit and KUSEL utility corridor permit required."
    }
  ],

  "pipelineFlow": [
    {"stage": "source",    "label": "IOI City Reservoir",   "detail": "Existing 900mm Pipe",             "type": "existing"},
    {"stage": "method",    "label": "Hot Tap",              "detail": "CH 0+000",                        "type": "method"},
    {"stage": "route",     "label": "Open Trench",          "detail": "400mm MSCL · ~800m",              "type": "route"},
    {"stage": "method",    "label": "Twin Pipe Jacking",    "detail": "SKVE · ~150m alignment",          "type": "method"},
    {"stage": "route",     "label": "Open Trench",          "detail": "400mm MSCL · ~500m",              "type": "route"},
    {"stage": "node",      "label": "Hospital Serdang",     "detail": "Bulk Meter · Flowmeter · SCADA",  "type": "node"},
    {"stage": "route",     "label": "Open Trench + HDD",    "detail": "200mm MSCL/HDPE · ~800m",         "type": "route"},
    {"stage": "node",      "label": "Hospital Veterinar",   "detail": "Hot Tap · Existing 200mm",        "type": "node"}
  ],

  "alerts": [
    {
      "type": "warning",
      "title": "⚠ Twin Pipe Jacking Under SKVE",
      "body": "Pipe jacking works beneath SKVE require LLM/PLUS permit and continuous settlement monitoring. No SKVE closure expected — operations from jacking pit only."
    },
    {
      "type": "info",
      "title": "ℹ Existing Supply Maintained",
      "body": "The existing supply from Semenyih Balancing Reservoir is maintained throughout construction. New connections are made via <strong>hot tapping</strong> or scheduled shut-down coordinated with Air Selangor Operations."
    }
  ],

  "contacts": [
    {
      "label": "Project Owner — Air Selangor",
      "members": [
        {"name": "Pengurusan Air Selangor Sdn Bhd", "title": "Superintending Officer (S.O.)", "email": "—"}
      ]
    },
    {
      "label": "Consultant — DPI Konsult Sdn Bhd",
      "members": [
        {"name": "DPI Konsult Sdn Bhd", "title": "Civil & Structural Consultant", "email": "—"}
      ]
    },
    {
      "label": "Authorities — Approvals & Permits",
      "members": [
        {"name": "SPAN",       "title": "Materials compliance & contractor registration", "email": "—"},
        {"name": "JKR",        "title": "Road opening permit & standard reinstatement",   "email": "—"},
        {"name": "LLM / PLUS", "title": "Works under SKVE highway permit",               "email": "—"},
        {"name": "KUSEL",      "title": "Utility corridor & watermain crossing permit",   "email": "—"}
      ]
    }
  ],

  "contactsTabLabel": "Team",

  "quickNav": [
    {"label": "SKVE Jacking",  "lat": 2.974198, "lon": 101.722521, "zoom": 17},
    {"label": "HSIS Off-take", "lat": 2.975669, "lon": 101.717638, "zoom": 17},
    {"label": "HVet End",      "lat": 2.975776, "lon": 101.712320, "zoom": 17}
  ],

  "theme": {
    "bg":      "#f0f6fc",
    "panel":   "#ffffff",
    "panel2":  "#e4f0fa",
    "panel3":  "#cce3f5",
    "border":  "rgba(0,120,190,0.13)",
    "border2": "rgba(0,120,190,0.26)",
    "text":    "#0d2137",
    "muted":   "#4d7a9a",
    "faint":   "#b5d8f0",
    "accent":  "#0099D4",
    "accent2": "rgba(0,153,212,0.12)",
    "accent3": "rgba(0,153,212,0.06)",
    "amber":   "#F5A623",
    "red":     "#e03040",
    "cyan":    "#00AEEF",
    "magenta": "#5544aa",
    "orange":  "#e06020"
  },

  "contextCards": [
    {
      "title": "Project Background",
      "open": true,
      "type": "text",
      "body": "Hospital Serdang (Hospital Sultan Idris Shah / HSIS) and Hospital Veterinar UPM currently rely on the existing grid supply via a 900mm pipe from IOI City Reservoir. The current capacity is insufficient to meet the operational requirements of the new Cardiology Centre Block under construction.\n\nThis project aims to establish water supply redundancy by constructing a new pipeline from IOI Conezion (CH0+000) through the Lebuh IRC residential area, crossing the SKVE via twin pipe jacking, and connecting to the off-take at HSIS. Route 2 then connects from HSIS to Hospital Veterinar.\n\nThe Contractor is responsible for all construction, testing, and commissioning works, including coordination with Air Selangor Operations for shut-down scheduling and hot-tapping."
    },
    {
      "title": "Pipeline Flow & Construction Methods",
      "open": false,
      "type": "flow"
    },
    {
      "title": "Specialised Construction Methods",
      "open": false,
      "type": "methods"
    },
    {
      "title": "Work Scope Summary",
      "open": false,
      "type": "scope"
    },
    {
      "title": "Design Standards",
      "open": false,
      "type": "table",
      "source": "designStandards"
    },
    {
      "title": "Required Permits & Approvals",
      "open": false,
      "type": "table",
      "columns": ["Authority", "Permit Type"],
      "rows": [
        ["SPAN",                    "Contractor registration & materials compliance"],
        ["JKR",                     "Road Opening Permit & standard reinstatement"],
        ["LLM / PLUS",              "Works Under Highway Permit (SKVE)"],
        ["KUSEL",                   "Utility corridor & watermain crossing permit"],
        ["Air Selangor Operations", "Shut-down scheduling & hot-tap coordination"]
      ]
    },
    {
      "title": "Site Photos",
      "open": false,
      "type": "photo-grid",
      "photos": []
    }
  ],

  "qrPage": {
    "badge":    "PENGURUSAN AIR SELANGOR SDN BHD",
    "title":    "Hospital Serdang Water Supply — Interactive Map",
    "subtitle": "Scan QR code to access the pipeline route map, construction methods (pipe jacking & HDD), and site work locations",
    "chips":    ["📱 Mobile Friendly", "🔵 Air Selangor PN0000023850"],
    "note":     "After scanning → project map opens directly.<br>Click each node → technical details on route and construction method.",
    "url":      "https://dpiktender.arh-homelab.workers.dev"
  },

  "geo": {
    "poly": [
      [2.966963, 101.721050],
      [2.966886, 101.721276],
      [2.967127, 101.721634],
      [2.968116, 101.722050],
      [2.970429, 101.722582],
      [2.971866, 101.722956],
      [2.973374, 101.722689],
      [2.974198, 101.722521],
      [2.974667, 101.720524],
      [2.974919, 101.719579],
      [2.974996, 101.719524],
      [2.975384, 101.717580],
      [2.975669, 101.717638],
      [2.975393, 101.717547],
      [2.975618, 101.715984],
      [2.975600, 101.713985],
      [2.975519, 101.713117],
      [2.975776, 101.712320]
    ],

    "chPts": [
      [0,    2.966963, 101.721050],
      [100,  2.967338, 101.721723],
      [200,  2.968170, 101.722063],
      [300,  2.969046, 101.722264],
      [400,  2.969923, 101.722466],
      [500,  2.970797, 101.722678],
      [600,  2.971667, 101.722904],
      [700,  2.972549, 101.722835],
      [800,  2.973435, 101.722677],
      [900,  2.974225, 101.722404],
      [1000, 2.974431, 101.721527],
      [1100, 2.974637, 101.720650],
      [1200, 2.974866, 101.719780],
      [1300, 2.975113, 101.718937],
      [1400, 2.975289, 101.718054],
      [1500, 2.975665, 101.717512],
      [1600, 2.975637, 101.716612],
      [1700, 2.975616, 101.715712],
      [1800, 2.975608, 101.714811],
      [1900, 2.975593, 101.713911],
      [2000, 2.975550, 101.713019],
      [2073, 2.975776, 101.712320]
    ],

    "sPos": [],

    "junc": [
      [0,    "A", "IOI Conezion — Hot Tap on 900mm Main",
       "CH 0+000 (Route 1 Start). Live hot tap on the existing 900mm pipe from IOI City Reservoir. New redundant water supply begins here.",
       101.721050, 2.966963],
      [887,  "B", "SKVE Crossing — Twin Pipe Jacking",
       "CH ~0+887 to CH ~1+114. Twin pipe jacking beneath the South Klang Valley Expressway (SKVE). Two parallel 400mm MSCL pipes. Jacking pit to the south, receiving pit to the north of SKVE.",
       101.722521, 2.974198],
      [1486, "C", "Hospital Serdang (HSIS) — Bulk Meter Off-Take",
       "CH 1+486 (Route 1 End / Route 2 Start). Bulk meter and off-take to Hospital Serdang. Electromagnetic flowmeter, RTU panel, and SCADA telemetry system installed here.",
       101.717638, 2.975669],
      [2073, "D", "Hospital Veterinar (HVet) — Route 2 End",
       "CH 2+073 (Route 2 End). Hot tap on the existing 200mm supply pipe to Hospital Veterinar UPM. Product pipe: HDPE PN10 or MSCL 200mm via HDD and open trench.",
       101.712320, 2.975776]
    ],

    "prop": [
      [887,  "Twin Pipe Jacking — SKVE Crossing",
       "Two parallel 400mm MSCL drives. Jacking pits on both sides of SKVE. No SKVE traffic disruption expected. Continuous settlement monitoring throughout operations.",
       "jacking"],
      [1250, "HDD Crossing — FT 345 Utility Corridor",
       "Route 2: HDD beneath the existing utility corridor along FT 345. Product pipe: HDPE PN10 200mm. Minimum depth: 3.0m. Entry/exit angle: 10°–18°.",
       "hdd"],
      [1486, "Flowmeter, RTU & SCADA Telemetry",
       "Install electromagnetic flowmeter, RTU panel, and SCADA telemetry system at the Hospital Serdang off-take.",
       "scada"]
    ],

    "cps": [
      {"id": "CP1", "name": "IOI Conezion — Start Route 1",       "lat": 2.966963, "lon": 101.721050, "url": ""},
      {"id": "CP2", "name": "SKVE Pipe Jacking Zone",             "lat": 2.974198, "lon": 101.722521, "url": ""},
      {"id": "CP3", "name": "Hospital Serdang (HSIS) Bulk Meter", "lat": 2.975669, "lon": 101.717638, "url": ""},
      {"id": "CP4", "name": "Hospital Veterinar — End Route 2",   "lat": 2.975776, "lon": 101.712320, "url": ""}
    ]
  }
};

// Compatibility shim — mobile.html engine destructures flat keys from APP_CONFIG
APP_CONFIG.POLY   = APP_CONFIG.geo.poly;
APP_CONFIG.CH_PTS = APP_CONFIG.geo.chPts;
APP_CONFIG.JUNC   = APP_CONFIG.geo.junc;
APP_CONFIG.PROP   = APP_CONFIG.geo.prop;
APP_CONFIG.CPS    = APP_CONFIG.geo.cps;
APP_CONFIG.SPOS   = APP_CONFIG.geo.sPos;
