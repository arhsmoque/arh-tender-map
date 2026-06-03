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
 * Route 1 (400mm MSCL): IOI Conezion → Hospital Serdang (HSIS), 1,452.45m
 * Route 2 (200mm MSCL/HDPE): HSIS → Hospital Veterinar, 746.40m
 * Total: 2,198.85m
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
    "solution": "Concluding that temporary mitigation was insufficient, Air Selangor defined a permanent solution: a new dedicated pipeline from IOI City Reservoir to establish a redundant supply path independent of the existing Semenyih Balancing Reservoir grid. DPI Konsult Sdn Bhd was appointed as Engineering Consultant for detailed design and construction supervision. During design development, the initial 600mm pipeline scope was value-engineered to 400mm — achieving full SPAN flow-velocity compliance and realising cost savings while retaining all hydraulic performance targets. The scope was further extended to supply Hospital Veterinar, strengthening the wider distribution network.",
    "outcome": "On completion, the project establishes a dual-source, contingency-fed water grid for a critical healthcare cluster. The new pipeline and the existing Semenyih Balancing Reservoir supply operate as mutually redundant sources. If either source is disrupted, the alternate route sustains continuous water supply to all three hospitals — securing long-term water resilience for the region's national cardiology and specialist care facilities."
  },

  "facilities": [
    {
      "id": "ioi",
      "name": "IOI City Reservoir",
      "abbr": "Source",
      "role": "Water Source",
      "tag": "existing",
      "detail": "Existing 900mm water main from IOI City Reservoir. The new Route 1 pipeline connects via live hot tapping at CH 0+000, establishing a supply path independent of Semenyih Balancing Reservoir.",
      "lat": 2.966963, "lon": 101.721050,
      "marker": "A"
    },
    {
      "id": "hsis",
      "name": "Hospital Sultan Idris Shah",
      "abbr": "HSIS",
      "role": "Primary Beneficiary",
      "tag": "primary",
      "detail": "Malaysia's National Cardiology Referral Centre. Persistent low pressure at the Cardiology Block was the triggering event for this project. Route 1 terminates at the Hospital Serdang bulk meter (CH 1+452), which serves HSIS. An electromagnetic flowmeter is installed at this off-take.",
      "lat": 2.975669, "lon": 101.717638,
      "marker": "C"
    },
    {
      "id": "hvet",
      "name": "Hospital Veterinar UPM",
      "abbr": "HVet",
      "role": "Extended Beneficiary",
      "tag": "extended",
      "detail": "Added to scope during design development to amplify the project's strategic benefit. Route 2 (200mm MSCL / 250mm HDPE) proceeds westward from HSIS along FT 345, transitions via HDD under the utility corridor, and connects to the existing 200mm supply at Hospital Veterinar via hot tapping at CH 2+073.",
      "lat": 2.975776, "lon": 101.712320,
      "marker": "D"
    }
  ],

  "map": {
    "center": [2.9720, 101.7185],
    "zoom": 14,
    "bounds": [
      [2.9640, 101.7090],
      [2.9780, 101.7250]
    ]
  },

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

  "methodBreakdown": [
    {"method":"Open Trench — Under Paved Road", "metres":1363.85, "pct":62, "color":"#0099D4"},
    {"method":"Side Table — Open Trench",       "metres":492.00,  "pct":22, "color":"#44AEDD"},
    {"method":"Twin Pipe Jacking (SKVE)",        "metres":150.00,  "pct":7,  "color":"#ff8833"},
    {"method":"Horizontal Directional Drilling", "metres":108.00,  "pct":5,  "color":"#ff33cc"},
    {"method":"Single Pipe Jacking",             "metres":85.00,   "pct":4,  "color":"#e06020"}
  ],

  "constructionMethods": [
    {
      "id": "opentrench",
      "label": "Open Trench",
      "color": "#0099D4",
      "chainage": "Majority of Route 1 & Route 2",
      "total": "1,855.85m · 84% of total",
      "detail": "Open-cut excavation along road carriageways and side tables. Minimum pipe cover 1.2m. Road reinstatement via mill-and-pave to JKR standard. Temporary reinstatement within the same working day. Coordination required with Majlis Perbandaran Sepang (Lebuh IRC) and JKR Federal (FT 345)."
    },
    {
      "id": "jacking",
      "label": "Pipe Jacking",
      "color": "#ff8833",
      "chainage": "CH 0+015–0+060 · CH 0+819–0+972 · CH 1+422–1+463",
      "total": "235m alignment · 300m pipe installed at SKVE",
      "detail": "Twin pipe jacking beneath the South Klang Valley Expressway (SKVE) at CH 0+819–0+972: two parallel 400mm MSCL pipes in 600mm RC jacking sleeves. Single pipe jacking at two smaller crossings on Route 1. No SKVE traffic disruption expected — operations from jacking pits only. Continuous settlement monitoring throughout."
    },
    {
      "id": "hdd",
      "label": "Horizontal Directional Drilling",
      "color": "#ff33cc",
      "chainage": "Route 2 · CH 0+492–0+600 (FT 345)",
      "total": "108m bore",
      "detail": "HDD beneath the existing utility corridor along Jalan Hospital Serdang (FT 345). Product pipe: 250mm Ø HDPE PN10. Minimum bore depth: 3.0m. Entry and exit angle: 10°–18°. Transition chamber at CH 492 connects the MSCL and HDPE sections; sluice valve at CH 600."
    },
    {
      "id": "hottap",
      "label": "Hot Tapping",
      "color": "#22cc77",
      "chainage": "CH 0+000 (Route 1 start) · CH 2+073 (Route 2 end)",
      "total": "2 live connections",
      "detail": "Live tapping on the existing 900mm pipe from IOI City Reservoir at CH 0+000, and on the existing 200mm pipe at Hospital Veterinar at CH 2+073. Works fully coordinated with Air Selangor Operations. No interruption to hospital water supply during connection works."
    }
  ],

  "designStandards": [
    {"parameter": "Design Standard",           "unit": "—",    "value": "SYABAS SS 2007 / JKR SS 2014"},
    {"parameter": "Route 1 Pipe Diameter",     "unit": "mm ND","value": "400 (MSCL)"},
    {"parameter": "Route 2 Pipe Diameter",     "unit": "mm ND","value": "200 (MSCL) / 250 (HDPE — HDD)"},
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
      "chainageLabel": "CH 0 – CH 800",
      "roads": "Lebuh IRC / Persiaran IRC-3",
      "landmarks": "IOI Conezion Tower C, Clio 1 & 2 Residences",
      "type": "Local Authority"
    },
    {
      "name": "Lembaga Lebuhraya Malaysia / SKVE",
      "abbr": "LLM",
      "chainageFrom": 800,
      "chainageTo": 950,
      "chainageLabel": "CH 800 – CH 950",
      "roads": "SKVE Mainline",
      "landmarks": "90° bend near SKVE Exit to Lebuh IRC (westbound)",
      "type": "Highway Authority"
    },
    {
      "name": "JKR Federal",
      "abbr": "JKR",
      "chainageFrom": 950,
      "chainageTo": 2073,
      "chainageLabel": "CH 950 – CH 2,073",
      "roads": "Jalan Hospital Serdang (FT345)",
      "landmarks": "SKVE Exit 2601, Hospital Serdang Bulk Meter",
      "type": "Federal Road Authority"
    }
  ],

  "quickNav": [
    {"label": "Start — IOI",  "lat": 2.966963, "lon": 101.721050, "zoom": 17},
    {"label": "SKVE Jacking","lat": 2.974198, "lon": 101.722521, "zoom": 17},
    {"label": "HSIS Off-take","lat": 2.975669, "lon": 101.717638, "zoom": 17},
    {"label": "HVet End",    "lat": 2.975776, "lon": 101.712320, "zoom": 17}
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
      "title": "Hot Tap — Existing 900mm×MS Pipe (CH 0+000)",
      "ch":    "CH 0+000 · Route 1 Start",
      "img":   "assets/drawings/ch0-ch100serdang.png",
      "lat":   2.966963, "lon": 101.721050
    },
    {
      "id":    "dwg-skve",
      "label": "DWG · CH 0+819",
      "title": "Twin Pipe Jacking — SKVE Crossing",
      "ch":    "CH 0+819 – 0+972 · Twin 400mm MSCL in 600mm RC sleeves",
      "img":   "assets/drawings/twin-jacking-serdang.png",
      "lat":   2.974198, "lon": 101.722521
    },
    {
      "id":    "dwg-conn",
      "label": "DWG · CH 1+325",
      "title": "Pipe Jacking Connection — HSIS Approach",
      "ch":    "CH 1+325 – 1+450 · Match Line CH 1+400",
      "img":   "assets/drawings/connection-jacking-hsis.png",
      "lat":   2.975289, "lon": 101.718054
    },
    {
      "id":    "dwg-hsis",
      "label": "DWG · CH 1+452",
      "title": "Hot Tap — Bulk Meter Off-Take (HSIS)",
      "ch":    "CH 1+452 · Route 1 End / Route 2 Start",
      "img":   "assets/drawings/hot-tapping-hsis.png",
      "lat":   2.975669, "lon": 101.717638
    },
    {
      "id":    "dwg-hdd",
      "label": "DWG · CH 1+873",
      "title": "HDD Crossing — FT 345 Utility Corridor",
      "ch":    "CH 1+873 – 1+958 · 108m bore · 250mm HDPE PN10",
      "img":   "assets/drawings/hdd-ms200.png",
      "lat":   2.975608, "lon": 101.714811
    },
    {
      "id":    "dwg-hvet",
      "label": "DWG · CH 2+073",
      "title": "Hot Tap — Existing 150mm MS Pipe (Hospital Veterinar)",
      "ch":    "CH 2+073 · Route 2 End",
      "img":   "assets/drawings/hot-tapping-hvet.png",
      "lat":   2.975776, "lon": 101.712320
    }
  ],

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
      [0,    "A", "IOI Conezion — Route 1 Start",
       "CH 0+000. Live hot tap on the existing 900mm pipe from IOI City Reservoir. New redundant water supply path begins here.",
       101.721050, 2.966963],
      [887,  "B", "SKVE — Twin Pipe Jacking",
       "CH 0+819 – CH 0+972. Twin pipe jacking beneath the South Klang Valley Expressway (SKVE). Two parallel 400mm MSCL pipes in 600mm RC sleeves. No SKVE traffic disruption expected.",
       101.722521, 2.974198],
      [1486, "C", "Hospital Serdang — Bulk Meter Off-Take",
       "CH 1+452 (Route 1 End / Route 2 Start). Bulk meter and off-take serving HSIS. Electromagnetic flowmeter installed at this point.",
       101.717638, 2.975669],
      [2073, "D", "Hospital Veterinar — Route 2 End",
       "CH 2+073. Hot tap on the existing 200mm supply to Hospital Veterinar UPM. Final connection point of the new pipeline.",
       101.712320, 2.975776]
    ],

    "prop": [
      [887,  "Twin Pipe Jacking — SKVE Crossing",
       "Two parallel 400mm MSCL drives. No SKVE traffic disruption expected. Continuous settlement monitoring throughout.",
       "jacking"],
      [1720, "HDD Crossing — FT 345 Utility Corridor",
       "Route 2: HDD beneath FT 345. Product pipe: 250mm Ø HDPE PN10, 108m bore. Min. depth 3.0m.",
       "hdd"],
      [1486, "Electromagnetic Flowmeter",
       "Electromagnetic flowmeter installed at the Hospital Serdang off-take (CH 1+452).",
       "flowmeter"]
    ],

    "cps": [
      {"id":"CP1","name":"IOI Conezion — Start Route 1",       "lat":2.966963,"lon":101.721050,"url":""},
      {"id":"CP2","name":"SKVE Pipe Jacking Zone",             "lat":2.974198,"lon":101.722521,"url":""},
      {"id":"CP3","name":"Hospital Serdang (HSIS) Bulk Meter", "lat":2.975669,"lon":101.717638,"url":""},
      {"id":"CP4","name":"Hospital Veterinar — End Route 2",   "lat":2.975776,"lon":101.712320,"url":""}
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
