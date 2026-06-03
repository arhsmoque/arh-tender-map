/**
 * config.js — Project Brief Adapter
 *
 * @role     adapter / data-config
 * @contract APP_CONFIG → consumed by index.html + mobile.html + qr.html
 *
 * Project : Hospital Serdang & HSIS Cardiology Block Water Supply Pipeline
 * Client  : Pengurusan Air Selangor Sdn Bhd
 * Prepared: DPI Konsult Sdn Bhd
 *
 * Route A (300mm HDPE): IOI Conezion → Hospital Serdang (HSIS), 1,452.45m
 * Route B (300mm HDPE / 250mm HDPE HDD): HSIS → Hospital Veterinar, 746.40m
 * Total: 2,198.85m
 *
 * SOURCE OF TRUTH: Tender Drawing AIS/2024(T)HS/KB/01–09, October 2025
 */

const APP_CONFIG = {
  "lang": "en",
  "pageTitle": "Hospital Serdang Water Supply — Project Brief",

  "project": {
    "title": "Proposed Pipe Laying and Improvement Works for Hospital Serdang and Hospital Sultan Idris Shah (Cardiology Block)",
    "subtitle": "New dedicated water supply pipeline · 2.20 km · 3 hospitals served",
    "designStandard": "SYABAS Standard Specification 2007 / JKR Standard Specification 2014"
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
    "totalLengthKm": 2.20,
    "route1LengthM": 1452,
    "route2LengthM": 746,
    "hospitalsServed": 3
  },

  "rationale": {
    "problem": "Hospital Sultan Idris Shah's Cardiology Block experienced persistent low water pressure after its opening. Air Selangor's investigation identified a root cause originating at the project's planning phase: the suction tank's Top Water Level (69.95m ODL) was sized using pressure readings recorded in March 2020, during the strictest Movement Control Order period, when water usage was abnormally low. Under normal peak operating conditions, actual supply pressure falls to approximately 69m ODL — equal to the design TWL, leaving no hydraulic head for gravity-fed supply.",
    "solution": "Concluding that temporary mitigation was insufficient, Air Selangor defined a permanent solution: a new dedicated pipeline from IOI City Reservoir to establish a redundant supply path independent of the existing Semenyih Balancing Reservoir grid. DPI Konsult Sdn Bhd was appointed as Engineering Consultant for detailed design and construction supervision. During design development, the scope was extended to supply Hospital Veterinar, strengthening the wider distribution network.",
    "outcome": "On completion, the project establishes a dual-source, contingency-fed water grid for a critical healthcare cluster. The new pipeline and the existing Semenyih Balancing Reservoir supply operate as mutually redundant sources. If either source is disrupted, the alternate route sustains continuous water supply to all three hospitals — securing long-term water resilience for the region's national cardiology and specialist care facilities."
  },

  "facilities": [
    {
      "id": "ioi",
      "name": "IOI City Reservoir",
      "abbr": "Source",
      "role": "Water Source",
      "tag": "existing",
      "detail": "Existing 900mm water main from IOI City Reservoir. The new Route A pipeline connects via live hot tapping at CH 0+000 (Route A), establishing a supply path independent of Semenyih Balancing Reservoir.",
      "lat": 2.966963, "lon": 101.721050,
      "marker": "A"
    },
    {
      "id": "hsis",
      "name": "Hospital Sultan Idris Shah",
      "abbr": "HSIS",
      "role": "Primary Beneficiary",
      "tag": "primary",
      "detail": "Malaysia's National Cardiology Referral Centre. Persistent low pressure at the Cardiology Block was the triggering event for this project. Route A terminates at the Hospital Serdang bulk meter (CH 1+452, Route A), which serves HSIS.",
      "lat": 2.975669, "lon": 101.717638,
      "marker": "C"
    },
    {
      "id": "hvet",
      "name": "Hospital Veterinar UPM",
      "abbr": "HVet",
      "role": "Extended Beneficiary",
      "tag": "extended",
      "detail": "Added to scope during design development to amplify the project's strategic benefit. Route B (300mm HDPE / 250mm HDPE HDD) proceeds westward from HSIS along FT 345, transitions via HDD under the utility corridor (CH 492–600, Route B), and connects to the existing supply at Hospital Veterinar via hot tapping at CH 746 (Route B).",
      "lat": 2.976714, "lon": 101.711815,
      "marker": "D"
    }
  ],

  "map": {
    "center": [2.9720, 101.7185],
    "zoom": 14,
    "bounds": [
      [2.9640, 101.7090],
      [2.9780, 101.7230]
    ]
  },

  /* ── Method segments — cumulative chainage, aligned to tender drawing SOT ── */
  "methodSegments": [
    {"fromCh":0,      "toCh":15,     "color":"#0099D4","method":"opentrench"},
    {"fromCh":15,     "toCh":60,     "color":"#ff8833","method":"pipejacking"},
    {"fromCh":60,     "toCh":725,    "color":"#0066aa","method":"underpaved"},
    {"fromCh":725,    "toCh":800,    "color":"#0099D4","method":"opentrench"},
    {"fromCh":800,    "toCh":950,    "color":"#e06020","method":"twinpipejacking"},
    {"fromCh":950,    "toCh":1000,   "color":"#0099D4","method":"opentrench"},
    {"fromCh":1000,   "toCh":1300,   "color":"#0066aa","method":"underpaved"},
    {"fromCh":1300,   "toCh":1390,   "color":"#0099D4","method":"opentrench"},
    {"fromCh":1390,   "toCh":1430,   "color":"#ff8833","method":"pipejacking"},
    {"fromCh":1430,   "toCh":1452.45,"color":"#0099D4","method":"opentrench"},
    /* Route B starts at cumulative CH 1452.45 */
    {"fromCh":1452.45,"toCh":1802.45,"color":"#44AEDD","method":"opentrench"},
    {"fromCh":1802.45,"toCh":1944.45,"color":"#44AEDD","method":"sidetable"},
    {"fromCh":1944.45,"toCh":2052.45,"color":"#ff33cc","method":"hdd"},
    {"fromCh":2052.45,"toCh":2177.45,"color":"#0066aa","method":"underpaved"},
    {"fromCh":2177.45,"toCh":2198.85,"color":"#44AEDD","method":"opentrench"}
  ],

  "methodBreakdown": [
    {"method":"Under Paved Road",                "metres":1090.00, "pct":50, "color":"#0066aa"},
    {"method":"Open Trench",                     "metres":623.85,  "pct":28, "color":"#0099D4"},
    {"method":"Side Table / Unpaved",            "metres":142.00,  "pct":6,  "color":"#44AEDD"},
    {"method":"Twin Pipe Jacking (SKVE)",        "metres":150.00,  "pct":7,  "color":"#e06020"},
    {"method":"Horizontal Directional Drilling", "metres":108.00,  "pct":5,  "color":"#ff33cc"},
    {"method":"Single Pipe Jacking",             "metres":85.00,   "pct":4,  "color":"#ff7733"}
  ],

  "constructionMethods": [
    {
      "id": "opentrench",
      "label": "Open Trench",
      "color": "#0099D4",
      "chainage": "Route A: CH 0–15, 725–800, 950–1000, 1300–1390, 1430–1452 · Route B: CH 0–492, 725–746 (route-relative)",
      "total": "1,592.45 m · 72% of total",
      "detail": "Open-cut excavation along road carriageways, side tables, and unpaved verges. Minimum pipe cover 1.2m. Road reinstatement via mill-and-pave to JKR standard. Temporary reinstatement within the same working day. Coordination required with Majlis Perbandaran Sepang (Lebuh IRC) and JKR Federal (FT 345)."
    },
    {
      "id": "underpaved",
      "label": "Under Paved Road",
      "color": "#0066aa",
      "chainage": "Route A: CH 60–725, 1000–1300 · Route B: CH 600–725 (route-relative)",
      "total": "390 m · 18% of total",
      "detail": "Trench excavation beneath existing paved road surfaces. Mill-and-pave reinstatement to local authority standard. Includes coordination with road maintenance teams and traffic management plans."
    },
    {
      "id": "jacking",
      "label": "Pipe Jacking",
      "color": "#ff8833",
      "chainage": "Route A: CH 15–60 (single) · CH 800–950 (twin) · CH 1390–1430 (single)",
      "total": "235 m alignment · 300mm pipe installed",
      "detail": "Single pipe jacking at two smaller crossings on Route A (CH 15–60 and CH 1390–1430). Twin pipe jacking beneath the South Klang Valley Expressway (SKVE) at CH 800–950: two parallel 300mm HDPE pipes in RC jacking sleeves. No SKVE traffic disruption expected — operations from jacking pits only. Continuous settlement monitoring throughout."
    },
    {
      "id": "hdd",
      "label": "Horizontal Directional Drilling",
      "color": "#ff33cc",
      "chainage": "Route B · CH 492–600 (route-relative)",
      "total": "108 m bore",
      "detail": "HDD beneath the existing utility corridor along Jalan Hospital Serdang (FT 345). Product pipe: 250mm Ø HDPE PN10. Minimum bore depth: 3.0m. Entry and exit angle: 10°–18°. Transition chamber at CH 492 connects the MS and HDPE sections; sluice valve at CH 600."
    },
    {
      "id": "hottap",
      "label": "Hot Tapping",
      "color": "#22cc77",
      "chainage": "CH 0+000 (Route A start) · CH 1+452 (Route A end / bulk meter) · CH 746 (Route B end)",
      "total": "3 live connections",
      "detail": "Live tapping on the existing 900mm pipe from IOI City Reservoir at CH 0+000 (Route A). Bulk meter and electromagnetic flowmeter installation at CH 1+452 (Route A end). Live tapping on the existing 150mm MS pipe at Hospital Veterinar at CH 746 (Route B end). Works fully coordinated with Air Selangor Operations. No interruption to hospital water supply during connection works."
    }
  ],

  "designStandards": [
    {"parameter": "Design Standard",           "unit": "—",    "value": "SYABAS SS 2007 / JKR SS 2014"},
    {"parameter": "Route A Pipe Diameter",     "unit": "mm Ø","value": "300 (HDPE) — main · 900 (MS) — hot tap"},
    {"parameter": "Route B Pipe Diameter",     "unit": "mm Ø","value": "300 (HDPE) — main · 250 (HDPE) — HDD · 150 (MS) — hot tap"},
    {"parameter": "Min. Pipe Cover",           "unit": "m",    "value": "1.2"},
    {"parameter": "HDD Min. Depth",            "unit": "m",    "value": "3.0"},
    {"parameter": "HDD Entry / Exit Angle",    "unit": "°",    "value": "10 – 18"},
    {"parameter": "Pipe Jacking Tol. (H)",     "unit": "mm",   "value": "±75"},
    {"parameter": "Pipe Jacking Tol. (V)",     "unit": "mm",   "value": "±25"},
    {"parameter": "Field Pressure Test",       "unit": "bar",  "value": "15 (10 min)"},
    {"parameter": "Leakage Test",              "unit": "bar",  "value": "12 (24 hr)"},
    {"parameter": "Chlorination",              "unit": "mg/L", "value": "40 (min. 24 hr)"}
  ],

  "projectTeam": [
    {
      "role": "Client",
      "name": "Pengurusan Air Selangor Sdn Bhd",
      "abbr": "Air Selangor",
      "logo": "https://i.imgur.com/zPDIZvW.png",
      "url": "https://www.airselangor.com",
      "detail": "Project owner. Emergency and Ad-Hoc Water Improvement Program."
    },
    {
      "role": "Engineering Consultant",
      "name": "DPI Konsult Sdn Bhd",
      "abbr": "DPI Konsult",
      "logo": "assets/logos/consultant-logo.png",
      "url": null,
      "detail": "Detailed design, tender documentation, and construction supervision."
    }
  ],

  "governingAuthorities": [
    {
      "name": "Majlis Perbandaran Sepang",
      "abbr": "MPS",
      "chainageFrom": 0,
      "chainageTo": 800,
      "chainageLabel": "Route A · CH 0 – 800",
      "roads": "Lebuh IRC / Persiaran IRC-3",
      "landmarks": "IOI Conezion Tower C, Clio 1 & 2 Residences",
      "type": "Local Authority"
    },
    {
      "name": "Lembaga Lebuhraya Malaysia / SKVE",
      "abbr": "LLM",
      "chainageFrom": 800,
      "chainageTo": 950,
      "chainageLabel": "Route A · CH 800 – 950",
      "roads": "SKVE Mainline",
      "landmarks": "90° bend near SKVE Exit to Lebuh IRC (westbound)",
      "type": "Highway Authority"
    },
    {
      "name": "JKR Federal",
      "abbr": "JKR",
      "chainageFrom": 950,
      "chainageTo": 2198,
      "chainageLabel": "Route A · CH 950 – 1452 · Route B · CH 0 – 746",
      "roads": "Jalan Hospital Serdang (FT345)",
      "landmarks": "SKVE Exit 2601, Hospital Serdang Bulk Meter, Hospital Veterinar UPM",
      "type": "Federal Road Authority"
    }
  ],

  "quickNav": [
    {"label": "Start — IOI",       "lat": 2.966963, "lon": 101.721050, "zoom": 17},
    {"label": "SKVE Jacking",     "lat": 2.974198, "lon": 101.722521, "zoom": 17},
    {"label": "HSIS Off-take",    "lat": 2.975669, "lon": 101.717638, "zoom": 17},
    {"label": "HVet End",         "lat": 2.976714, "lon": 101.711815, "zoom": 17}
  ],

  "theme": {
    "bg":      "#f0f6fc",
    "panel":   "#ffffff",
    "panel2":  "#e8f2fa",
    "panel3":  "#d4e9f7",
    "border":  "rgba(0,120,190,0.12)",
    "border2": "rgba(0,120,190,0.25)",
    "text":    "#0d2137",
    "muted":   "#4d7a9a",
    "faint":   "#b5d4ea",
    "accent":  "#0099D4",
    "accent2": "rgba(0,153,212,0.10)",
    "amber":   "#F5A623",
    "green":   "#22aa66",
    "magenta": "#cc22aa",
    "orange":  "#e07020"
  },

  "qrPage": {
    "badge":    "PENGURUSAN AIR SELANGOR SDN BHD",
    "title":    "Hospital Serdang Water Supply — Project Brief",
    "subtitle": "Scan to access the interactive pipeline route map with construction method details",
    "chips":    ["📱 Mobile Friendly", "🔵 Air Selangor"],
    "note":     "Tap any pipeline segment or node for technical details.",
    "url":      "https://dpiktender.arh-homelab.workers.dev"
  },

  "dwgSnippets": [
    {
      "id":    "dwg-ch0",
      "label": "DWG · CH 0+000",
      "title": "Hot Tap — Existing 900mm Ø MS Pipe (CH 0+000)",
      "ch":    "CH 0+000 · Route A Start · IOI Conezion",
      "img":   "assets/drawings/ch0-ch100serdang.png",
      "lat":   2.966963, "lon": 101.721050
    },
    {
      "id":    "dwg-skve",
      "label": "DWG · CH 0+800",
      "title": "Twin Pipe Jacking — SKVE Crossing",
      "ch":    "CH 0+800 – 0+950 · Twin 300mm HDPE in RC sleeves",
      "img":   "assets/drawings/twin-jacking-serdang.png",
      "lat":   2.974198, "lon": 101.722521
    },
    {
      "id":    "dwg-conn",
      "label": "DWG · CH 1+390",
      "title": "Pipe Jacking — HSIS Approach",
      "ch":    "CH 1+390 – 1+430 · Single pipe jacking near FT 345",
      "img":   "assets/drawings/connection-jacking-hsis.png",
      "lat":   2.975289, "lon": 101.718054
    },
    {
      "id":    "dwg-hsis",
      "label": "DWG · CH 1+452",
      "title": "Hot Tap + Bulk Meter — HSIS Off-Take (Route A End)",
      "ch":    "CH 1+452 · Route A End / Route B Start · Bulk meter & electromagnetic flowmeter",
      "img":   "assets/drawings/hot-tapping-hsis.png",
      "lat":   2.975669, "lon": 101.717638
    },
    {
      "id":    "dwg-hdd",
      "label": "DWG · CH 1+944",
      "title": "HDD Crossing — FT 345 Utility Corridor (Route B)",
      "ch":    "CH 1+944 – 2+052 · 108m bore · 250mm HDPE PN10 · Route B CH 492–600",
      "img":   "assets/drawings/hdd-ms200.png",
      "lat":   2.975608, "lon": 101.714811
    },
    {
      "id":    "dwg-hvet",
      "label": "DWG · CH 2+198",
      "title": "Hot Tap — Existing 150mm Ø MS Pipe (Hospital Veterinar)",
      "ch":    "CH 2+198 · Route B End · Hospital Veterinar UPM",
      "img":   "assets/drawings/hot-tapping-hvet.png",
      "lat":   2.976726, "lon": 101.711796
    }
  ],

  "geo": {
    "poly": [
      [2.966930, 101.721100],
      [2.966888, 101.721243],
      [2.966882, 101.721309],
      [2.967083, 101.721609],
      [2.967679, 101.721927],
      [2.971794, 101.722915],
      [2.973205, 101.722734],
      [2.973463, 101.722607],
      [2.974241, 101.721538],
      [2.974924, 101.719534],
      [2.974978, 101.719310],
      [2.975301, 101.717744],
      [2.975595, 101.717810],
      [2.975580, 101.717901],
      [2.975644, 101.717990],
      [2.975597, 101.717813],
      [2.975305, 101.717741],
      [2.975517, 101.716552],
      [2.975515, 101.713421],
      [2.975609, 101.712447],
      [2.976677, 101.711923],
      [2.976714, 101.711815]
    ],

    "chPts": [
      [0,       2.966963, 101.721050],
      [100,     2.967338, 101.721723],
      [200,     2.968170, 101.722063],
      [300,     2.969046, 101.722264],
      [400,     2.969923, 101.722466],
      [500,     2.970797, 101.722678],
      [600,     2.971667, 101.722904],
      [700,     2.972549, 101.722835],
      [800,     2.973435, 101.722677],
      [900,     2.974225, 101.722404],
      [1000,    2.974431, 101.721527],
      [1100,    2.974637, 101.720650],
      [1200,    2.974866, 101.719780],
      [1300,    2.975113, 101.718937],
      [1400,    2.975289, 101.718054],
      [1452,    2.975400, 101.717700],
      [1600,    2.975637, 101.716612],
      [1700,    2.975616, 101.715712],
      [1800,    2.975608, 101.714811],
      [1900,    2.975517, 101.714069],
      [2000,    2.975539, 101.713169],
      [2073,    2.975603, 101.712510],
      [2198,    2.976714, 101.711815]
    ],

    "sPos": [],

    "junc": [
      [0,      "A", "IOI Conezion — Route A Start",
       "CH 0+000 (Route A). Live hot tap on the existing 900mm Ø MS pipe from IOI City Reservoir. New redundant water supply path begins here.",
       101.721050, 2.966963],
      [37,     "B", "Pipe Jacking — Route A Start",
       "CH 0+015 – 0+060 (Route A). Single pipe jacking. 300mm concrete base, pipe sleeve, jacking pit and receiving pit.",
       101.721400, 2.967100],
      [875,    "C", "Twin Pipe Jacking — SKVE Crossing",
       "CH 0+800 – 0+950 (Route A). Twin pipe jacking beneath the South Klang Valley Expressway (SKVE). Two parallel 300mm Ø HDPE pipes in RC sleeves. No SKVE traffic disruption expected.",
       101.722521, 2.974198],
      [1410,   "D", "Pipe Jacking — HSIS Approach",
       "CH 1+390 – 1+430 (Route A). Single pipe jacking near FT 345. Match line at CH 1+400.",
       101.718200, 2.975300],
      [1452,   "E", "Hospital Serdang — Bulk Meter Off-Take",
       "CH 1+452 (Route A End / Route B Start). Bulk meter, electromagnetic flowmeter, and hot tap connection serving HSIS.",
       101.717638, 2.975669],
      [1998,   "F", "HDD Crossing — FT 345 Utility Corridor",
       "CH 1+944 – 2+052 cumulative (Route B CH 492–600). HDD beneath FT 345. Product pipe: 250mm Ø HDPE PN10, 108m bore. Min. depth 3.0m.",
       101.714811, 2.975608],
      [2198,   "G", "Hospital Veterinar — Route B End",
       "CH 2+198 cumulative (Route B CH 746). Hot tap on the existing 150mm Ø MS pipe to Hospital Veterinar UPM. Final connection point.",
       101.711815, 2.976714]
    ],

    "prop": [
      [37,     "Single Pipe Jacking — Route A Start",
       "CH 0+015 – 0+060. 45m drive. 300mm Ø HDPE in RC sleeve.",
       "jacking"],
      [875,    "Twin Pipe Jacking — SKVE Crossing",
       "CH 0+800 – 0+950. 150m twin drive. Two parallel 300mm Ø HDPE pipes in RC sleeves. Settlement monitoring required.",
       "jacking"],
      [1410,   "Single Pipe Jacking — HSIS Approach",
       "CH 1+390 – 1+430. 40m drive. 300mm Ø HDPE in RC sleeve.",
       "jacking"],
      [1998,   "HDD Crossing — FT 345 Utility Corridor",
       "Route B CH 492–600. 108m bore. 250mm Ø HDPE PN10. Entry/exit angles 10°–18°. Transition chamber at CH 492.",
       "hdd"],
      [1452,   "Electromagnetic Flowmeter + Bulk Meter",
       "Electromagnetic flowmeter and bulk meter installed at the Hospital Serdang off-take (CH 1+452, Route A End).",
       "flowmeter"],
      [2177,   "Hot Tap — Hospital Veterinar",
       "Live hot tap on existing 150mm Ø MS pipe at Hospital Veterinar UPM (Route B End).",
       "hottap"]
    ],

    "cps": [
      {"id":"CP1","name":"IOI Conezion — Start Route A",       "lat":2.966963,"lon":101.721050,"url":""},
      {"id":"CP2","name":"SKVE Twin Pipe Jacking Zone",       "lat":2.974198,"lon":101.722521,"url":""},
      {"id":"CP3","name":"Hospital Serdang (HSIS) Bulk Meter","lat":2.975669,"lon":101.717638,"url":""},
      {"id":"CP4","name":"Hospital Veterinar — End Route B",  "lat":2.976714,"lon":101.711815,"url":""}
    ]
  }
};

// Compatibility shim — flat keys for HTML engine destructuring
APP_CONFIG.POLY   = APP_CONFIG.geo.poly;
APP_CONFIG.CH_PTS = APP_CONFIG.geo.chPts;
APP_CONFIG.JUNC   = APP_CONFIG.geo.junc;
APP_CONFIG.PROP   = APP_CONFIG.geo.prop;
APP_CONFIG.CPS    = APP_CONFIG.geo.cps;
APP_CONFIG.SPOS   = APP_CONFIG.geo.sPos;
