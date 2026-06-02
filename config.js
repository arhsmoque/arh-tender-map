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
 * Coordinates derived from KMZ field survey (AIS_SERDANG_baru_extension.kmz).
 * Route 1 (400mm MSCL): IOI Conezion → Hospital Serdang, ~1,470m
 * Route 2 (200mm MSCL/HDPE): Hospital Serdang → Hospital Veterinar, ~587m
 */

const APP_CONFIG = {
  "project": {
    "title": "Proposed Pipe Laying and Improvement Works for Hospital Serdang and Hospital Sultan Idris Shah (Blok Pusat Kardiologi)",
    "subtitle": "Route 1: IOI Conezion → HSIS (400mm MSCL, ~1.47km) · Route 2: HSIS → HVet (200mm MSCL/HDPE, ~0.59km) · Tender Terbuka",
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
    "lengthKm": 2.06,
    "landAcquisitionLots": 0,
    "landAreaEkar": "—",
    "landAreaSqm": "—",
    "constructionDurationMonths": 24
  },
  "map": {
    "center": [2.9740, 101.7189],
    "zoom": 14,
    "bounds": [
      [2.9641, 101.7083],
      [2.9788, 101.7269]
    ]
  },

  "kmzPath": "assets/path.kmz",
  "chainageInterval": 100,

  "routes": [
    {
      "id": "r1",
      "label": "Route 1 — 400mm MSCL (IOI Conezion → HSIS)",
      "color": "#00aaff",
      "glowColor": "rgba(0,170,255,0.14)",
      "kmzSegments": [
        "CH70 - CH875 LEBUH IRC (PAVEMENT)",
        "PIPE JACKING 2 SKVE",
        "JLN FT345 MS600",
        "PIPE JACKING 3 HOSPITAL OFFTAKE MS400"
      ],
      "poly": [
        [2.9671388, 101.7215970],
        [2.9680565, 101.7220067],
        [2.9718443, 101.7229114],
        [2.9732826, 101.7227209],
        [2.9733684, 101.7226286],
        [2.9741327, 101.7224991],
        [2.9746452, 101.7204840],
        [2.9745199, 101.7206363],
        [2.9748711, 101.7195343],
        [2.9749471, 101.7194973],
        [2.9753631, 101.7175883],
        [2.9756498, 101.7176249],
        [2.9756173, 101.7178350]
      ]
    },
    {
      "id": "r2",
      "label": "Route 2 — 200mm MSCL/HDPE (HSIS → Hospital Veterinar)",
      "color": "#33ccff",
      "glowColor": "rgba(51,204,255,0.12)",
      "kmzSegments": [
        "MS200 VET"
      ],
      "poly": [
        [2.9753934, 101.7175465],
        [2.9756183, 101.7159836],
        [2.9756000, 101.7139846],
        [2.9755186, 101.7131169],
        [2.9757763, 101.7123205]
      ]
    }
  ],

  "photos": [],
  "scope": [
    {"color": "#00aaff", "text": "Route 1 — Pasang 400mm ND MSCL (IOI Conezion → Hospital Serdang, ~1.47km)"},
    {"color": "#33ccff", "text": "Route 2 — Pasang 200mm ND MSCL / HDPE (HSIS → Hospital Veterinar, ~0.59km)"},
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
    {"label": "SKVE Jacking",  "lat": 2.9741327, "lon": 101.7224991, "zoom": 17},
    {"label": "HSIS Off-take", "lat": 2.9756173, "lon": 101.7178350, "zoom": 17},
    {"label": "HVet End",      "lat": 2.9757763, "lon": 101.7123205, "zoom": 17}
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
    "accent":  "#00aaff",
    "accent2": "rgba(0,170,255,0.12)",
    "accent3": "rgba(0,170,255,0.06)",
    "amber":   "#ffaa00",
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
    }
  ],

  "qrPage": {
    "badge":    "PENGURUSAN AIR SELANGOR SDN BHD",
    "title":    "Hospital Serdang Water Supply — Peta Interaktif",
    "subtitle": "Imbas kod QR untuk akses peta laluan paip, kaedah pembinaan (pipe jacking & HDD), dan lokasi tapak kerja",
    "chips":    ["📱 Mobile Friendly", "🔵 Air Selangor PN0000023850"],
    "note":     "Selepas imbas → peta projek dibuka secara terus.<br>Klik setiap node → butiran teknikal laluan dan kaedah pembinaan.",
    "url":      ""
  }
};

// ---------------------------------------------------------------------------
// Geospatial arrays — fallback static (KMZ parser overrides at runtime)
// Derived from KMZ: AIS_SERDANG_baru_extension.kmz
// Route 1: 13 pts, ~1,470m | Route 2: 5 pts, ~587m
// ---------------------------------------------------------------------------

APP_CONFIG.POLY = [
  // Route 1 (400mm MSCL)
  [2.9671388, 101.7215970],
  [2.9680565, 101.7220067],
  [2.9718443, 101.7229114],
  [2.9732826, 101.7227209],
  [2.9733684, 101.7226286],
  [2.9741327, 101.7224991],
  [2.9746452, 101.7204840],
  [2.9745199, 101.7206363],
  [2.9748711, 101.7195343],
  [2.9749471, 101.7194973],
  [2.9753631, 101.7175883],
  [2.9756498, 101.7176249],
  [2.9756173, 101.7178350],
  // Route 2 (200mm MSCL/HDPE)
  [2.9753934, 101.7175465],
  [2.9756183, 101.7159836],
  [2.9756000, 101.7139846],
  [2.9755186, 101.7131169],
  [2.9757763, 101.7123205]
];

APP_CONFIG.CH_PTS = [
  [0,    2.9671388, 101.7215970],
  [100,  2.9679602, 101.7219638],
  [200,  2.9688287, 101.7221912],
  [300,  2.9697035, 101.7224001],
  [400,  2.9705783, 101.7226091],
  [500,  2.9714530, 101.7228180],
  [600,  2.9723371, 101.7228461],
  [700,  2.9732287, 101.7227281],
  [800,  2.9740773, 101.7225085],
  [900,  2.9743408, 101.7216809],
  [1000, 2.9745627, 101.7208083],
  [1100, 2.9746318, 101.7202851],
  [1200, 2.9749530, 101.7194702],
  [1300, 2.9751448, 101.7185904],
  [1400, 2.9753365, 101.7177105],
  [1500, 2.9754497, 101.7176190],
  [1600, 2.9755086, 101.7167461],
  [1700, 2.9756171, 101.7158534],
  [1800, 2.9756088, 101.7149529],
  [1900, 2.9756006, 101.7140524],
  [2000, 2.9755222, 101.7131556],
  [2097, 2.9757763, 101.7123205]
];

APP_CONFIG.SPOS = [];

APP_CONFIG.JUNC = [
  [0,    "A", "IOI Conezion — Hot Tap pada 900mm Main",
   "CH 0+000 (Route 1 mula). Hot tap live pada paip sedia 900mm diameter dari IOI City Reservoir. Electromagnetic flowmeter dan RTU panel dipasang di titik ini. Bekalan redundan baru bermula di sini.",
   101.7215970, 2.9671388],
  [800,  "B", "SKVE Crossing — Twin Pipe Jacking",
   "CH ~0+800 hingga CH ~0+950. Twin pipe jacking di bawah South Klang Valley Expressway (SKVE). Dua paip 400mm MSCL selari, ~150m alignment (300m paip dipasang). Jacking pit di selatan, receiving pit di utara SKVE.",
   101.7224991, 2.9741327],
  [1470, "C", "Hospital Serdang (HSIS) — Bulk Meter Off-Take",
   "CH 1+470 (Route 1 tamat / Route 2 mula). Bulk meter dan off-take ke Hospital Serdang. Electromagnetic flowmeter, RTU panel, dan sistem SCADA telemetri dipasang di sini.",
   101.7178350, 2.9756173],
  [2057, "D", "Hospital Veterinar (HVet) — Route 2 Tamat",
   "Hujung Route 2 (~587m dari HSIS). Hot tap pada paip sedia 200mm diameter bekalan Hospital Veterinar UPM. Paip produk HDPE PN10 atau MSCL 200mm melalui HDD dan open trench.",
   101.7123205, 2.9757763]
];

APP_CONFIG.PROP = [
  [800,  "Twin Pipe Jacking — SKVE Crossing",
   "Dua drive selari 400mm MSCL. Jacking pits di kedua-dua sisi SKVE. Tiada gangguan lalulintas SKVE dijangkakan. Pemantauan enapan berterusan sepanjang operasi.",
   "jacking"],
  [1200, "HDD Crossing — Koridor Utiliti FT 345",
   "Route 2: HDD di bawah koridor utiliti sedia ada sepanjang FT 345. Paip produk HDPE PN10 200mm. Kedalaman minimum 3.0m. Entry/exit angle: 10°–18°.",
   "hdd"],
  [1470, "Flowmeter, RTU & SCADA Telemetri",
   "Pasang electromagnetic flowmeter, RTU panel, dan sistem SCADA telemetri di off-take Hospital Serdang. Pemantauan aliran masa nyata untuk grid bekalan redundan.",
   "scada"]
];

APP_CONFIG.CPS = [
  {"id": "CP1", "name": "IOI Conezion — Start Route 1",       "lat": 2.9671388, "lon": 101.7215970, "url": ""},
  {"id": "CP2", "name": "SKVE Pipe Jacking Zone",             "lat": 2.9741327, "lon": 101.7224991, "url": ""},
  {"id": "CP3", "name": "Hospital Serdang (HSIS) Bulk Meter", "lat": 2.9756173, "lon": 101.7178350, "url": ""},
  {"id": "CP4", "name": "Hospital Veterinar — End Route 2",   "lat": 2.9757763, "lon": 101.7123205, "url": ""}
];
