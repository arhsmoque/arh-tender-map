/**
 * config.js — Tender Briefing Map Adapter
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
  "project": {
    "title": "Proposed Pipe Laying and Improvement Works for Hospital Serdang and Hospital Sultan Idris Shah (Blok Pusat Kardiologi)",
    "subtitle": "Route 1: IOI Conezion → HSIS (400mm MSCL, ~1.49km) · Route 2: HSIS → HVet (200mm MSCL/HDPE, ~0.59km) · Tender Terbuka",
    "tenderNumber": "PN0000023850",
    "programme": "Air Selangor Emergency and Ad-Hoc Water Improvement Program",
    "indicativePrice": "TBA",
    "durationMonths": 24,
    "cidbClass": "G7 — Kategori ME",
    "cidbSpecialization": "ME01",
    "procurementMethod": "Tender Terbuka",
    "designStandard": "SYABAS Standard Specification 2007 / JKR Standard Specification 2014",
    "documentPrice": "TBA"
  },
  "client": {
    "name": "PENGURUSAN AIR SELANGOR",
    "subname": "SDN BHD",
    "url": "https://www.airselangor.com",
    "logo": "https://iconape.com/wp-content/png_logo_vector/air-selangor-logo.png"
  },
  "client2": {
    "name": "JABATAN KERJA RAYA",
    "subname": "MALAYSIA",
    "logo": "assets/logos/jkr-logo.png",
    "url": "https://www.jkr.gov.my"
  },
  "consultant": {
    "name": "DPI Konsult Sdn Bhd",
    "subname": "Perunding Sivil & Struktur",
    "logo": "assets/logos/consultant-logo.png"
  },
  "dates": {
    "advertisement": "TBA",
    "download": {
      "start": "TBA",
      "end": "TBA",
      "price": "TBA"
    },
    "briefing": "TBA",
    "closing": {
      "date": "TBA",
      "time": "12.00 tgh"
    },
    "active": "briefing"
  },
  "stats": {
    "lengthKm": 2.07,
    "landAcquisitionLots": 0,
    "landAreaEkar": "—",
    "landAreaSqm": "—",
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
      "label": "Route 1 — 400mm MSCL (IOI Conezion → HSIS)",
      "color": "#009B9B",
      "glowColor": "rgba(0,155,155,0.14)",
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
      "label": "Route 2 — 200mm MSCL/HDPE (HSIS → Hospital Veterinar)",
      "color": "#FFB800",
      "glowColor": "rgba(255,184,0,0.14)",
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

  "photos": [],
  "scope": [
    {"color": "#009B9B", "text": "Route 1 — Pasang 400mm ND MSCL (IOI Conezion → Hospital Serdang, ~1.49km)"},
    {"color": "#FFB800", "text": "Route 2 — Pasang 200mm ND MSCL / HDPE (HSIS → Hospital Veterinar, ~0.59km)"},
    {"color": "#ff8833", "text": "Twin Pipe Jacking di bawah SKVE (~150m alignment, 300m paip)"},
    {"color": "#ff33cc", "text": "Horizontal Directional Drilling (HDD) — koridor utiliti FT 345"},
    {"color": "#aaff00", "text": "Bekalan & pasang injap (butterfly, sluice, air, scour) + bilik injap"},
    {"color": "#ffaa00", "text": "Pasang electromagnetic flowmeter, RTU panel & sistem SCADA telemetri"},
    {"color": "#22cc77", "text": "Hot tapping — sambungan ke paip sedia 900mm (IOI City Reservoir) & 200mm (HVet)"},
    {"color": "#ff4455", "text": "Pipe bridge / overcrossing di lokasi berkenaan"},
    {"color": "#7a84a0", "text": "Ujian tekanan & kebocoran, sterilisasi, dan pembebasan (commissioning)"},
    {"color": "#7a84a0", "text": "Kerja-kerja reinstatement jalan (sementara & kekal, kaedah mill & pave)"}
  ],
  "designStandards": [
    {"parameter": "Design Standard",           "unit": "—",    "value": "SYABAS SS 2007 / JKR SS 2014"},
    {"parameter": "Route 1 Pipe Diameter",     "unit": "mm ND","value": "400 (MSCL)"},
    {"parameter": "Route 2 Pipe Diameter",     "unit": "mm ND","value": "200 (MSCL / HDPE)"},
    {"parameter": "Min. Pipe Cover",           "unit": "m",    "value": "1.2"},
    {"parameter": "HDD Min. Depth",            "unit": "m",    "value": "3.0"},
    {"parameter": "HDD Entry / Exit Angle",    "unit": "°",    "value": "10 – 18"},
    {"parameter": "Pipe Jacking Tolerance (H)","unit": "mm",   "value": "±75"},
    {"parameter": "Pipe Jacking Tolerance (V)","unit": "mm",   "value": "±25"},
    {"parameter": "Field Pressure Test",       "unit": "bar",  "value": "15 (10 min)"},
    {"parameter": "Leakage Test Pressure",     "unit": "bar",  "value": "12 (24 jam)"},
    {"parameter": "Chlorination Concentration","unit": "mg/L", "value": "40 (min. 24 jam)"}
  ],
  "landAcquisition": [
    {"area": "Pengambilan Tanah",        "lots": "Tiada (ROW sedia ada)"},
    {"area": "Koridor Utiliti (KUSEL)",  "lots": "Kebenaran diperlukan"},
    {"area": "Permit Jalan (JKR / LLM)","lots": "Road Opening Permit"},
    {"area": "Permit SKVE (LLM / PLUS)","lots": "Works Under Highway Permit"}
  ],
  "alerts": [
    {
      "type": "warning",
      "title": "⚠ Twin Pipe Jacking Under SKVE",
      "body": "Kerja pipe jacking di bawah SKVE memerlukan permit LLM/PLUS dan pemantauan enapan berterusan. Tiada penutupan SKVE dijangka — operasi dari jacking pit sahaja."
    },
    {
      "type": "info",
      "title": "ℹ Bekalan Sedia Dikekalkan",
      "body": "Bekalan asal dari Semenyih Balancing Reservoir dikekalkan sepanjang pembinaan. Sambungan baru melalui <strong>hot tapping</strong> atau scheduled shut-down yang dikoordinasikan bersama Air Selangor Operations."
    }
  ],
  "contacts": [
    {
      "label": "Pemilik Projek — Air Selangor",
      "members": [
        {"name": "Pengurusan Air Selangor Sdn Bhd", "title": "Superintending Officer (S.O.)", "email": "—"}
      ]
    },
    {
      "label": "Perunding — DPI Konsult Sdn Bhd",
      "members": [
        {"name": "DPI Konsult Sdn Bhd", "title": "Perunding Sivil & Struktur", "email": "—"}
      ]
    },
    {
      "label": "Pihak Berkuasa — Kelulusan & Permit",
      "members": [
        {"name": "SPAN",       "title": "Pematuhan bahan & pendaftaran kontraktor", "email": "—"},
        {"name": "JKR",        "title": "Road opening permit, standard reinstatement", "email": "—"},
        {"name": "LLM / PLUS", "title": "Permit kerja bawah SKVE",                   "email": "—"},
        {"name": "KUSEL",      "title": "Permit koridor utiliti, watermain crossing", "email": "—"}
      ]
    }
  ],
  "contactsTabLabel": "Pasukan",

  "quickNav": [
    {"label": "SKVE Jacking",  "lat": 2.974198, "lon": 101.722521, "zoom": 17},
    {"label": "HSIS Off-take", "lat": 2.975669, "lon": 101.717638, "zoom": 17},
    {"label": "HVet End",      "lat": 2.975776, "lon": 101.712320, "zoom": 17}
  ],

  "theme": {
    "bg":      "#060d18",
    "panel":   "#0b1524",
    "panel2":  "#0f1d30",
    "panel3":  "#14253e",
    "border":  "rgba(255,255,255,0.07)",
    "border2": "rgba(255,255,255,0.13)",
    "text":    "#ddeeff",
    "muted":   "#6a88a8",
    "faint":   "#1e3a58",
    "accent":  "#009B9B",
    "accent2": "rgba(0,155,155,0.12)",
    "accent3": "rgba(0,155,155,0.06)",
    "amber":   "#FFB800",
    "red":     "#ff4455",
    "cyan":    "#33ccff",
    "magenta": "#ff33cc",
    "orange":  "#ff7733"
  },

  "contextCards": [
    {
      "title": "Latar Belakang Projek",
      "open": true,
      "type": "text",
      "body": "Hospital Serdang (Hospital Sultan Idris Shah / HSIS) dan Hospital Veterinar UPM bergantung kepada bekalan air daripada sistem grid sedia ada melalui paip 900mm dari IOI City Reservoir. Kapasiti semasa tidak mencukupi untuk memenuhi keperluan operasi blok Pusat Kardiologi baru yang sedang dibina.\n\nProjek ini bertujuan mewujudkan redundansi bekalan air dengan membina laluan paip baru dari IOI Conezion (CH0+000) melalui kawasan perumahan Lebuh IRC, merentasi SKVE menggunakan kaedah twin pipe jacking, dan menyambung ke off-take di HSIS. Route 2 kemudian menyambung dari HSIS ke Hospital Veterinar.\n\nKontraktor bertanggungjawab untuk semua kerja pembinaan, ujian, dan commissioning termasuk koordinasi dengan Air Selangor Operations bagi penjadualan shut-down dan hot-tapping."
    },
    {
      "title": "Kaedah Pembinaan Khusus",
      "open": false,
      "type": "text",
      "body": "🔵 Twin Pipe Jacking (SKVE Crossing)\nDua paip 400mm MSCL selari dijackingkan di bawah lebuhraya SKVE. Jacking pit di selatan, receiving pit di utara SKVE. Panjang alignment ~150m (jumlah paip ~300m). Tiada penutupan SKVE dijangkakan.\n\n🟣 Horizontal Directional Drilling (HDD)\nRoute 2: HDD di bawah koridor utiliti FT 345. Paip produk HDPE PN10 200mm. Kedalaman minimum 3.0m. Entry/exit angle: 10°–18°.\n\n🟢 Hot Tapping\nSambungan live ke paip sedia 900mm (IOI City Reservoir) dan 200mm (Hospital Veterinar) tanpa gangguan bekalan. Dikoordinasikan dengan Air Selangor Operations."
    },
    {
      "title": "Skop Kerja Ringkas",
      "open": false,
      "type": "scope"
    },
    {
      "title": "Piawai Rekabentuk",
      "open": false,
      "type": "table",
      "source": "designStandards"
    },
    {
      "title": "Permit & Kebenaran Diperlukan",
      "open": false,
      "type": "table",
      "columns": ["Pihak Berkuasa", "Jenis Permit"],
      "rows": [
        ["SPAN",                    "Pendaftaran kontraktor & pematuhan bahan"],
        ["JKR",                     "Road Opening Permit & standard reinstatement"],
        ["LLM / PLUS",              "Works Under Highway Permit (SKVE)"],
        ["KUSEL",                   "Permit koridor utiliti & watermain crossing"],
        ["Air Selangor Operations", "Penjadualan shut-down & hot-tap koordinasi"]
      ]
    },
    {
      "title": "Gambar Tapak",
      "open": false,
      "type": "photo-grid",
      "photos": []
    }
  ],

  "qrPage": {
    "badge":    "PENGURUSAN AIR SELANGOR SDN BHD",
    "title":    "Hospital Serdang Water Supply — Peta Interaktif",
    "subtitle": "Imbas kod QR untuk akses peta laluan paip, kaedah pembinaan (pipe jacking & HDD), dan lokasi tapak kerja",
    "chips":    ["📱 Mobile Friendly", "🔵 Air Selangor PN0000023850"],
    "note":     "Selepas imbas → peta projek dibuka secara terus.<br>Klik setiap node → butiran teknikal laluan dan kaedah pembinaan.",
    "url":      "https://dpiktender.pages.dev"
  }
};

// ---------------------------------------------------------------------------
// Geospatial arrays — from KMZ: AIS_SERDANG_baru_extension.kmz
// HOSP SDG PATH: 13 pts (CH0→CH1486, ~1,486m)
// MS200 VET:      5 pts (CH1486→CH2073, ~587m)
// CH_PTS: Python haversine at 100m + CH2073 endpoint
// JUNC coordinate order: [ch, id, name, desc, LON, LAT]  ← LON at index 4, LAT at index 5
//   (matches index.html JUNC renderer: JUNC.forEach(([ch,num,name,desc,lon,lat])=>{...marker([lat,lon])}))
// ---------------------------------------------------------------------------

APP_CONFIG.POLY = [
  // Route 1: HOSP SDG PATH (13 pts, lat,lon)
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
  // Route 2: MS200 VET (5 pts, lat,lon)
  [2.975393, 101.717547],
  [2.975618, 101.715984],
  [2.975600, 101.713985],
  [2.975519, 101.713117],
  [2.975776, 101.712320]
];

APP_CONFIG.CH_PTS = [
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
];

APP_CONFIG.SPOS = [];

APP_CONFIG.JUNC = [
  [0,    "A", "IOI Conezion — Hot Tap pada 900mm Main",
   "CH 0+000 (Route 1 mula). Hot tap live pada paip sedia 900mm diameter dari IOI City Reservoir. Bekalan redundan baru bermula di sini.",
   101.721050, 2.966963],
  [887,  "B", "SKVE Crossing — Twin Pipe Jacking",
   "CH ~0+887 hingga CH ~1+114. Twin pipe jacking di bawah South Klang Valley Expressway (SKVE). Dua paip 400mm MSCL selari. Jacking pit di selatan, receiving pit di utara SKVE.",
   101.722521, 2.974198],
  [1486, "C", "Hospital Serdang (HSIS) — Bulk Meter Off-Take",
   "CH 1+486 (Route 1 tamat / Route 2 mula). Bulk meter dan off-take ke Hospital Serdang. Electromagnetic flowmeter, RTU panel, dan sistem SCADA telemetri dipasang di sini.",
   101.717638, 2.975669],
  [2073, "D", "Hospital Veterinar (HVet) — Route 2 Tamat",
   "CH 2+073 (Hujung Route 2). Hot tap pada paip sedia 200mm diameter bekalan Hospital Veterinar UPM. Paip produk HDPE PN10 atau MSCL 200mm melalui HDD dan open trench.",
   101.712320, 2.975776]
];

APP_CONFIG.PROP = [
  [887,  "Twin Pipe Jacking — SKVE Crossing",
   "Dua drive selari 400mm MSCL. Jacking pits di kedua-dua sisi SKVE. Tiada gangguan lalulintas SKVE dijangkakan. Pemantauan enapan berterusan sepanjang operasi.",
   "jacking"],
  [1250, "HDD Crossing — Koridor Utiliti FT 345",
   "Route 2: HDD di bawah koridor utiliti sedia ada sepanjang FT 345. Paip produk HDPE PN10 200mm. Kedalaman minimum 3.0m. Entry/exit angle: 10°–18°.",
   "hdd"],
  [1486, "Flowmeter, RTU & SCADA Telemetri",
   "Pasang electromagnetic flowmeter, RTU panel, dan sistem SCADA telemetri di off-take Hospital Serdang.",
   "scada"]
];

APP_CONFIG.CPS = [
  {"id": "CP1", "name": "IOI Conezion — Start Route 1",       "lat": 2.966963, "lon": 101.721050, "url": ""},
  {"id": "CP2", "name": "SKVE Pipe Jacking Zone",             "lat": 2.974198, "lon": 101.722521, "url": ""},
  {"id": "CP3", "name": "Hospital Serdang (HSIS) Bulk Meter", "lat": 2.975669, "lon": 101.717638, "url": ""},
  {"id": "CP4", "name": "Hospital Veterinar — End Route 2",   "lat": 2.975776, "lon": 101.712320, "url": ""}
];
