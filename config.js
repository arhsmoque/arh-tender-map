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
 * NOTE: Map coordinates are approximate (field survey pending).
 * Update POLY, CH_PTS, SPOS, JUNC, PROP, CPS with verified survey data.
 */

const APP_CONFIG = {
  "project": {
    "title": "Proposed Pipe Laying and Improvement Works for Hospital Serdang and Hospital Sultan Idris Shah (Blok Pusat Kardiologi)",
    "subtitle": "Route 1: IOI Conezion → HSIS (400mm MSCL, ~1.45km) · Route 2: HSIS → HVet (200mm MSCL/HDPE, ~0.80km) · Tender Terbuka",
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
    "logo": "assets/logos/client-logo.png"
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
    "lengthKm": 2.25,
    "landAcquisitionLots": 0,
    "landAreaEkar": "—",
    "landAreaSqm": "—",
    "constructionDurationMonths": 24
  },
  "map": {
    "center": [2.9830, 101.7175],
    "zoom": 14,
    "bounds": [
      [2.9620, 101.7030],
      [3.0060, 101.7380]
    ]
  },
  "photos": [],
  "scope": [
    {
      "color": "#00aaff",
      "text": "Route 1 — Pasang 400mm ND MSCL (IOI Conezion → Hospital Serdang, ~1.45km)"
    },
    {
      "color": "#33ccff",
      "text": "Route 2 — Pasang 200mm ND MSCL / HDPE (HSIS → Hospital Veterinar, ~0.80km)"
    },
    {
      "color": "#ff8833",
      "text": "Twin Pipe Jacking di bawah SKVE (~150m alignment, 300m paip)"
    },
    {
      "color": "#ff33cc",
      "text": "Horizontal Directional Drilling (HDD) — koridor utiliti FT 345"
    },
    {
      "color": "#aaff00",
      "text": "Bekalan & pasang injap (butterfly, sluice, air, scour) + bilik injap"
    },
    {
      "color": "#ffaa00",
      "text": "Pasang electromagnetic flowmeter, RTU panel & sistem SCADA telemetri"
    },
    {
      "color": "#22cc77",
      "text": "Hot tapping — sambungan ke paip sedia 900mm (IOI City Reservoir) & 200mm (HVet)"
    },
    {
      "color": "#ff4455",
      "text": "Pipe bridge / overcrossing di lokasi berkenaan"
    },
    {
      "color": "#7a84a0",
      "text": "Ujian tekanan & kebocoran, sterilisasi, dan pembebasan (commissioning)"
    },
    {
      "color": "#7a84a0",
      "text": "Kerja-kerja reinstatement jalan (sementara & kekal, kaedah mill & pave)"
    }
  ],
  "designStandards": [
    {
      "parameter": "Design Standard",
      "unit": "—",
      "value": "SYABAS SS 2007 / JKR SS 2014"
    },
    {
      "parameter": "Route 1 Pipe Diameter",
      "unit": "mm ND",
      "value": "400 (MSCL)"
    },
    {
      "parameter": "Route 2 Pipe Diameter",
      "unit": "mm ND",
      "value": "200 (MSCL / HDPE)"
    },
    {
      "parameter": "Min. Pipe Cover",
      "unit": "m",
      "value": "1.2"
    },
    {
      "parameter": "HDD Min. Depth",
      "unit": "m",
      "value": "3.0"
    },
    {
      "parameter": "HDD Entry / Exit Angle",
      "unit": "°",
      "value": "10 – 18"
    },
    {
      "parameter": "Pipe Jacking Tolerance (H)",
      "unit": "mm",
      "value": "±75"
    },
    {
      "parameter": "Pipe Jacking Tolerance (V)",
      "unit": "mm",
      "value": "±25"
    },
    {
      "parameter": "Field Pressure Test",
      "unit": "bar",
      "value": "15 (10 min)"
    },
    {
      "parameter": "Leakage Test Pressure",
      "unit": "bar",
      "value": "12 (24 jam)"
    },
    {
      "parameter": "Chlorination Concentration",
      "unit": "mg/L",
      "value": "40 (min. 24 jam)"
    }
  ],
  "landAcquisition": [
    {
      "area": "Pengambilan Tanah",
      "lots": "Tiada (ROW sedia ada)"
    },
    {
      "area": "Koridor Utiliti (KUSEL)",
      "lots": "Kebenaran diperlukan"
    },
    {
      "area": "Permit Jalan (JKR / LLM)",
      "lots": "Road Opening Permit"
    },
    {
      "area": "Permit SKVE (LLM / PLUS)",
      "lots": "Works Under Highway Permit"
    }
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
        {
          "name": "Pengurusan Air Selangor Sdn Bhd",
          "title": "Superintending Officer (S.O.)",
          "email": "—"
        }
      ]
    },
    {
      "label": "Perunding — DPI Konsult Sdn Bhd",
      "members": [
        {
          "name": "DPI Konsult Sdn Bhd",
          "title": "Perunding Sivil & Struktur",
          "email": "—"
        }
      ]
    },
    {
      "label": "Pihak Berkuasa — Kelulusan & Permit",
      "members": [
        {
          "name": "SPAN",
          "title": "Pematuhan bahan & pendaftaran kontraktor",
          "email": "—"
        },
        {
          "name": "JKR",
          "title": "Road opening permit, standard reinstatement",
          "email": "—"
        },
        {
          "name": "LLM / PLUS",
          "title": "Permit kerja bawah SKVE",
          "email": "—"
        },
        {
          "name": "KUSEL",
          "title": "Permit koridor utiliti, watermain crossing",
          "email": "—"
        }
      ]
    }
  ],
  "theme": {
    "bg": "#060d18",
    "panel": "#0d1a2e",
    "panel2": "#112239",
    "panel3": "#162b47",
    "border": "rgba(255,255,255,0.07)",
    "border2": "rgba(255,255,255,0.13)",
    "text": "#ddeeff",
    "muted": "#6a88a8",
    "faint": "#1e3a58",
    "accent": "#00aaff",
    "accent2": "rgba(0,170,255,0.12)",
    "accent3": "rgba(0,170,255,0.06)",
    "amber": "#ffaa00",
    "red": "#ff4455",
    "cyan": "#33ccff",
    "magenta": "#ff33cc",
    "orange": "#ff7733"
  },
  "qrPage": {
    "badge": "PENGURUSAN AIR SELANGOR SDN BHD",
    "title": "Hospital Serdang Water Supply — Peta Interaktif",
    "subtitle": "Imbas kod QR untuk akses peta laluan paip, kaedah pembinaan (pipe jacking & HDD), dan lokasi tapak kerja",
    "chips": [
      "📱 Mobile Friendly",
      "🔵 Air Selangor PN0000023850"
    ],
    "note": "Selepas imbas → peta projek dibuka secara terus.<br>Klik setiap node → butiran teknikal laluan dan kaedah pembinaan.",
    "url": ""
  }
};

// ---------------------------------------------------------------------------
// Geospatial arrays — Route 1 (IOI Conezion → Hospital Serdang, 400mm MSCL)
// + Route 2 (Hospital Serdang → Hospital Veterinar, 200mm MSCL/HDPE)
//
// COORDINATES ARE APPROXIMATE — derived from route description in Method Statement.
// Replace with verified survey data (GPS or design drawings) before live briefing.
// ---------------------------------------------------------------------------

// Pipeline alignment polyline (Route 1 then Route 2)
APP_CONFIG.POLY = [
  // Route 1: IOI Conezion → Hospital Serdang (northeast along Lebuh IRC then FT 345)
  [2.9697, 101.7122],
  [2.9715, 101.7131],
  [2.9734, 101.7140],
  [2.9753, 101.7149],
  [2.9772, 101.7158],
  [2.9791, 101.7167],
  [2.9810, 101.7177],
  [2.9828, 101.7186],
  [2.9863, 101.7197],
  [2.9898, 101.7208],
  [2.9933, 101.7215],
  [2.9975, 101.7222],
  // Route 2: Hospital Serdang → Hospital Veterinar (westward along FT 345)
  [2.9968, 101.7195],
  [2.9961, 101.7168],
  [2.9954, 101.7141],
  [2.9950, 101.7118]
];

// Chainage points along Route 1 (100m intervals, approximate)
APP_CONFIG.CH_PTS = [
  [0,    2.9697, 101.7122],
  [200,  2.9715, 101.7131],
  [400,  2.9734, 101.7140],
  [600,  2.9753, 101.7149],
  [800,  2.9772, 101.7158],
  [950,  2.9791, 101.7167],
  [1100, 2.9810, 101.7177],
  [1250, 2.9828, 101.7186],
  [1300, 2.9863, 101.7197],
  [1350, 2.9898, 101.7208],
  [1400, 2.9933, 101.7215],
  [1450, 2.9975, 101.7222]
];

// Site photo positions (empty — populate after site visit)
APP_CONFIG.SPOS = [];

// Junction / key node points
APP_CONFIG.JUNC = [
  [0,    "A", "IOI Conezion — Tap on 900mm Main",
   "CH 0+000 (Route 1 mula). Hot tap pada paip sedia 900mm diameter dari IOI City Reservoir. Bekalan redundan baru bermula di sini. Koordinat perlu disahkan dari pelan rekabentuk.",
   101.7122, 2.9697],
  [950,  "B", "SKVE Crossing — Twin Pipe Jacking",
   "CH ~0+950 hingga CH ~1+100. Twin pipe jacking di bawah South Klang Valley Expressway (SKVE). Dua paip 400mm MSCL selari, ~150m alignment (300m paip dipasang). Jacking pit di selatan, receiving pit di utara SKVE.",
   101.7172, 2.9810],
  [1450, "C", "Hospital Serdang (HSIS) — Bulk Meter Off-Take",
   "CH 1+450 (Route 1 tamat / Route 2 mula). Bulk meter dan off-take ke Hospital Serdang (Hospital Sultan Idris Shah). Electromagnetic flowmeter, RTU panel, dan sistem SCADA telemetri dipasang di sini.",
   101.7222, 2.9975],
  [2250, "D", "Hospital Veterinar (HVet) — Route 2 Tamat",
   "Hujung Route 2 (~800m dari HSIS). Hot tap pada paip sedia 200mm diameter bekalan Hospital Veterinar UPM. Paip produk HDPE PN10 atau MSCL 200mm melalui HDD dan open trench.",
   101.7118, 2.9950]
];

// Proposed structures / special features
APP_CONFIG.PROP = [
  [950,  "Twin Pipe Jacking — SKVE Crossing",
   "Dua drive selari 400mm MSCL. Jacking pits di kedua-dua sisi SKVE. Tiada gangguan lalulintas SKVE dijangkakan. Pemantauan enapan berterusan sepanjang operasi. Jacking boleh diteruskan secara serentak (twin campaign).",
   "bridge"],
  [1250, "HDD Crossing — Koridor Utiliti FT 345",
   "Route 2: Horizontal Directional Drilling (HDD) di bawah koridor utiliti sedia ada sepanjang FT 345. Paip produk HDPE PN10 200mm. Kedalaman minimum 3.0m di bawah permukaan jalan. Entry/exit angle: 10°–18°.",
   "flyover"],
  [1450, "Flowmeter, RTU & SCADA Telemetri",
   "Pasang electromagnetic flowmeter, RTU panel, instrument panel, dan sistem SCADA telemetri di off-take Hospital Serdang. Pemantauan aliran masa nyata untuk grid bekalan redundan.",
   "jejantas"]
];

// Checkpoint navigation points
APP_CONFIG.CPS = [
  {
    "id": "CP1",
    "name": "IOI Conezion — Start Route 1",
    "lat": 2.9697,
    "lon": 101.7122,
    "url": ""
  },
  {
    "id": "CP2",
    "name": "SKVE Pipe Jacking Zone",
    "lat": 2.9810,
    "lon": 101.7177,
    "url": ""
  },
  {
    "id": "CP3",
    "name": "Hospital Serdang (HSIS) Bulk Meter",
    "lat": 2.9975,
    "lon": 101.7222,
    "url": ""
  },
  {
    "id": "CP4",
    "name": "Hospital Veterinar — End Route 2",
    "lat": 2.9950,
    "lon": 101.7118,
    "url": ""
  }
];
