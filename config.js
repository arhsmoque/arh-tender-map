/**
 * config.js — Project Brief Adapter
 * Project : Projek Pembangunan Kompleks Mahkamah Baharu Sri Aman, Sarawak
 * Contract: JKR/PER/IP/CKUB/170/2023
 * Client  : Jabatan Kerja Raya Malaysia (JKR)
 * Manager : JKR Malaysia (Cawangan Kontrak dan Ukur Bahan)
 * D&B     : Wekajaya Sdn Bhd
 * Consult : DPI Konsult Sdn Bhd
 * ICE     : ConsultFACE Sdn Bhd (Ir. Dr. Mohd Farid)
 * Site    : Jalan Bayu, Sri Aman, Sarawak — Lots 2000, 2003, 2004, 2008
 *
 * Source of truth: FACE_ICE GEOTECHNICAL_MAHKAMAH BAHARU SRI AMAN_02.pdf (Rev 02, 2026-05-07)
 */

const APP_CONFIG = {
  "lang": "ms",
  "pageTitle": "Mahkamah Baharu Sri Aman — Taklimat Projek",

  "project": {
    "title": "Projek Pembangunan Kompleks Mahkamah Baharu Sri Aman, Sarawak",
    "subtitle": "Kompleks Mahkamah Baharu · Jalan Bayu, Sri Aman · Reka Bentuk & Bina",
    "designStandard": "JKR Standard Specification · MS 1754:2004 · Eurocode 7 · BS 5930:2015 · MS 2038:2024",
    "tenderNumber": "JKR/PER/IP/CKUB/170/2023",
    "indicativePrice": "—",
    "durationMonths": "—",
    "cidbClass": "—",
    "procurementMethod": "Reka Bentuk & Bina",
    "documentPrice": "—"
  },

  "client": {
    "name": "JABATAN KERJA RAYA MALAYSIA",
    "subname": "Kementerian Kerja Raya · Cawangan Kontrak & Ukur Bahan (CKUB)",
    "url": "https://www.jkr.gov.my",
    "logo": "assets/logos/jkr-logo.svg"
  },

  "consultant": {
    "name": "DPI Konsult Sdn Bhd",
    "subname": "Civil, Structural & Geotechnical Consultant",
    "logo": "assets/logos/consultant-logo.png"
  },

  "alerts": [
    {
      "title": "Mesyuarat Reka Bentuk Geoteknik — 8 Jun 2026",
      "body": "Mesyuarat kompulsori bersama Wekajaya Sdn Bhd dan JKR pada 8 Jun 2026, jam 9:30 pagi, Aras 23A Menara PJD, Ibu Pejabat JKR KL. Kontrak pelantikan: JKR/PER/IP/CKUB/253/2025."
    },
    {
      "title": "Tanah Lembut — Peat & Lempung Lembut (SPT N≤4)",
      "body": "Lapisan peat (~6–9m tebal) di atas silt lembut sangat lembut (N≤4). Zon N≤4 sehingga 16.5m (BH6), 15m (BH2, BH3), 13.5m (BH1), 10.5m (BH4, BH5, BH7). FOS kecerunan: 1.639 (statik) / 1.316 (seismik 5.9% PGA). Enapan jumlah ~391mm (penuh konsolidasi, Cc median). Had enapan pasca-binaan: 250mm. Semua bangunan dan utiliti di atas cerucuk."
    }
  ],

  "scope": [
    {"color":"#4CAF50","text":"Earthwork — Penimbusan platform ~1.0m (RL 5.2m → 6.2m), isipadu ~20,000 m³ + surgecaj 7,000 m³. Geotextile separator TS 30 sebelum penimbusan. Cerun timbus 1V:2H + hydroseed."},
    {"color":"#2196F3","text":"Drainage — 600mm U-drain pratuang + 4 kolam kering (OSD). Saliran akhir ke longkang Jalan Foocow. Saringan sampah di sump terakhir."},
    {"color":"#FF9800","text":"Road Works — Jalan dalaman lebar 7.2m, AC 40mm + binder 60mm + base 300mm. Pintu masuk utama ke Jalan Bayu, pintu kedua ke Jalan Foocow. Cerucuk RC 150mm Ø di bawah turapan."},
    {"color":"#00BCD4","text":"External Water — Paip 160mm Ø HDPE PN12.5 dari Jalan Foocow (JBALBS). Tangki 60,000L (1 hari simpanan). 3 hydrant pillar. DI pipe 150mm Ø untuk lintasan jalan."},
    {"color":"#9C27B0","text":"Sewerage — Paip 225mm Ø HDPE berganding berganda. STP dalam tapak, 178 P.E. (5,800m² mahkamah + 2 pondok pengawal)."},
    {"color":"#F44336","text":"Geotechnical — Cerucuk Spun 250mm Ø, 21m, 200kN (bangunan utama). Cerucuk RC 150mm, 9m, 30kN (jalan/tempat letak/bangunan ancilari). Bakau 6m, 5kN (utiliti/pagar)."}
  ],

  "contacts": [
    {
      "label": "DPI Konsult — Civil & Structural",
      "members": [
        {"name": "Ir. Hilmi Bin Omar",          "title": "Jurutera Profesional (Awam) C17478 — BEM", "email": "cns@dpik.com.my"},
        {"name": "Ir. Saaidin Bin Abu Bakar",   "title": "Geotechnical Engineer — BEM 2615",         "email": "cns@dpik.com.my"}
      ]
    },
    {
      "label": "Kontraktor Utama (D&B)",
      "members": [
        {"name": "Akmal Bahri (Wekajaya)",       "title": "Design & Build Contractor — 227571V",      "email": "—"}
      ]
    },
    {
      "label": "Independent Checker (ICE)",
      "members": [
        {"name": "Ir. Dr. Mohd Farid Bin Ahmad", "title": "ConsultFACE Sdn Bhd — C110961",           "email": "—"}
      ]
    }
  ],

  "dates": {
    "advertisement": "—",
    "download":      "—",
    "briefing":      "8 Jun 2026, 9:30am — Aras 23A Menara PJD, KL",
    "closing":       "—",
    "active":        null
  },

  "photos": [],

  "stats": {
    "totalLengthKm":               "—",
    "lengthKm":                    "—",
    "constructionDurationMonths":  "—",
    "landAcquisitionLots":         "4",
    "landAreaEkar":                "—",
    "landAreaSqm":                 "~14,000"
  },

  "rationale": {
    "problem": "Sri Aman, Sarawak memerlukan kompleks mahkamah baharu yang berdaya maju. Tapak di Jalan Bayu didominasi lapisan peat dan silt lembut sangat lembut (SPT N≤4) sehingga kedalaman 10.5–16.5m bergantung kepada lokasi borehole, diikuti silt teguh sehingga 19.5–22.5m. Ini menimbulkan risiko enapan berlebihan dan kegagalan cerun jika reka bentuk geoteknik tidak menanganinya secara komprehensif.",
    "solution": "Pendekatan Reka Bentuk & Bina dengan Wekajaya Sdn Bhd sebagai kontraktor utama, dan DPI Konsult Sdn Bhd sebagai perunding sivil, struktur dan geoteknik. Siasatan tapak komprehensif: 7 lubang gerudi (BH) sehingga SPT 50×5 dan 32 probe Mackintosh. Analisis enapan dan kestabilan cerun dijalankan menggunakan perisian Slope/W. Geotextile separator TS 30 untuk pengasingan lapisan.",
    "outcome": "Platform bangunan ditinggikan ke RL 6.20m dengan geotextile separator. FOS kecerunan melebihi had minimum (1.639 statik, 1.316 seismik). Semua struktur didirikan di atas cerucuk. Enapan pasca-binaan dijangka tidak melebihi 250mm. Kelas simen sulfat-tahan ditetapkan berdasarkan ujian kimia tanah (sulfat 0.4–1.4%, pH 4–6)."
  },

  "facilities": [
    {
      "id":     "main-court",
      "name":   "Bangunan Utama Mahkamah",
      "abbr":   "Mahkamah",
      "role":   "Bangunan Utama",
      "tag":    "primary",
      "detail": "Kompleks mahkamah baharu, GFA ~5,800m². Aras lantai RL 6.20m. Didirikan di atas cerucuk spun 250mm Ø panjang 21m, beban kerja 200kN. Lantai bawah dan apron: suspended slab.",
      "lat": 1.23090, "lon": 111.45740,
      "marker": "M"
    },
    {
      "id":     "guardhouse",
      "name":   "Pondok Pengawal (×2)",
      "abbr":   "Pengawal",
      "role":   "Kemudahan Sokongan",
      "tag":    "extended",
      "detail": "Dua pondok pengawal — pintu masuk Jalan Bayu dan pintu masuk Jalan Foocow. Didirikan di atas cerucuk RC 150mm Ø, panjang 9m, beban kerja 30kN.",
      "lat": 1.22980, "lon": 111.45720,
      "marker": "G"
    },
    {
      "id":     "parking",
      "name":   "Kawasan Tempat Letak Kenderaan",
      "abbr":   "Parking",
      "role":   "Kemudahan Awam",
      "tag":    "extended",
      "detail": "56 TLK awam, 42 TLK kakitangan, 4 TLK hakim, 20 TLM motosikal. Jalan dalaman dan tempat letak di atas cerucuk RC 150mm Ø, panjang 9m. Konkrit turap dengan kontraksi joint.",
      "lat": 1.23040, "lon": 111.45770,
      "marker": "P"
    },
    {
      "id":     "osd",
      "name":   "OSD & Kolam Kering",
      "abbr":   "OSD",
      "role":   "Saliran",
      "tag":    "extended",
      "detail": "4 kolam kering (dry ponds) + OSD di belakang bangunan utama. Sistem saliran akhir ke longkang sedia ada Jalan Foocow.",
      "lat": 1.23100, "lon": 111.45790,
      "marker": "D"
    }
  ],

  "map": {
    "center": [1.23053, 111.45744],
    "zoom":   17,
    "bounds": [
      [1.228, 111.454],
      [1.234, 111.461]
    ]
  },

  "cadastre": {
    "enabled": true,
    "defaultOn": false,
    "label": "Kadaster eLASIS",
    "type": "arcgisExport",
    "serviceUrl": "https://gislink.sarawak.gov.my/server/rest/services/eLASIS_M/Lot_Boundary/MapServer/export",
    "proxyUrl": "https://gislink.sarawak.gov.my/DotNet/proxy.ashx?",
    "layers": "show:0",
    "format": "png32",
    "opacity": 0.72,
    "minZoom": 16,
    "attribution": "eLASIS / Land and Survey Department Sarawak",
    "note": "Live eLASIS cadastral boundary service is token-protected and is requested through the public eLASIS GIS proxy used by their own viewer. If access is blocked, replace this with an exported local GeoJSON/PDF-derived layer."
  },

  "methodSegments": [],
  "methodBreakdown": [],
  "constructionMethods": [],
  "routes": [],

  "governingAuthorities": [
    {
      "name":          "Majlis Daerah Sri Aman",
      "abbr":          "MDSA",
      "chainageFrom":  0,
      "chainageTo":    0,
      "chainageLabel": "Kelulusan Pembangunan & OSC",
      "roads":         "Jalan Bayu / Jalan Foocow",
      "landmarks":     "Kompleks Mahkamah Baharu Sri Aman",
      "type":          "Local Authority"
    },
    {
      "name":          "Jabatan Pengairan dan Saliran (JPS) Sarawak",
      "abbr":          "JPS",
      "chainageFrom":  0,
      "chainageTo":    0,
      "chainageLabel": "Kelulusan Saliran — SUStoM",
      "roads":         "OSD + Jalan Foocow outfall",
      "landmarks":     "Pre-consult 27 Jan 2026 telah dijalankan",
      "type":          "Drainage Authority"
    },
    {
      "name":          "JBALBS (Jabatan Bekalan Air Luar Bandar Sarawak)",
      "abbr":          "JBALBS",
      "chainageFrom":  0,
      "chainageTo":    0,
      "chainageLabel": "Kelulusan Bekalan Air",
      "roads":         "Tap-off dari Jalan Foocow",
      "landmarks":     "160mm Ø HDPE PN12.5",
      "type":          "Water Authority"
    }
  ],

  "quickNav": [
    {"label": "Tapak Keseluruhan", "lat": 1.23053, "lon": 111.45744, "zoom": 17},
    {"label": "BH1 (W)",           "lat": 1.23068, "lon": 111.45683, "zoom": 19},
    {"label": "BH3 (SW-Ctr)",      "lat": 1.23032, "lon": 111.45718, "zoom": 19},
    {"label": "BH5 (E)",           "lat": 1.23079, "lon": 111.45804, "zoom": 19},
    {"label": "Sri Aman Town",     "lat": 1.2333,  "lon": 111.4621,  "zoom": 14}
  ],

  "designStandards": [
    {"parameter": "Standard Reka Bentuk",         "unit": "—",    "value": "JKR SS 2014 · MS 1754:2004 · Eurocode 7"},
    {"parameter": "Aras Platform Bangunan",        "unit": "m RL", "value": "6.20"},
    {"parameter": "Aras Jalan Sedia Ada (Jln Bayu)","unit":"m RL", "value": "6.10"},
    {"parameter": "FOS Kecerunan — Statik",        "unit": "—",    "value": "≥ 1.5 (dicapai 1.639)"},
    {"parameter": "FOS Kecerunan — Seismik 5.9%",  "unit": "—",    "value": "≥ 1.3 (dicapai 1.316)"},
    {"parameter": "Enapan Penuh Konsolidasi",       "unit": "mm",   "value": "~391 (Cc median) / ~334 (Cc purata)"},
    {"parameter": "Had Enapan Pasca-Binaan",        "unit": "mm",   "value": "≤ 250"},
    {"parameter": "Cerucuk Spun (Bangunan Utama)", "unit": "—",    "value": "250mm Ø · 21m · 200kN"},
    {"parameter": "Cerucuk RC (Jalan/Letak/Ancilari)","unit":"—",  "value": "150mm Ø · 9m · 30kN"},
    {"parameter": "Bakau (Utiliti/Pagar)",          "unit": "—",    "value": "Ø100mm · 6m · 5kN"},
    {"parameter": "Simen — Kelas (Sulfat/pH)",      "unit": "—",    "value": "≥ 300 kg/m³ · w/c ≤ 0.5"},
    {"parameter": "Jalan Dalaman — Lebar Minimum",  "unit": "m",    "value": "7.2"},
    {"parameter": "Reka Bentuk Turapan (10 tahun)", "unit": "—",    "value": "AC 40mm + Binder 60mm + Base 300mm + Sub-base 100mm"},
    {"parameter": "Permintaan Air",                 "unit": "L/hari","value": "59,000"},
    {"parameter": "Populasi Setara (Kumbahan)",     "unit": "PE",   "value": "178"}
  ],

  "projectTeam": [
    {
      "role":   "Pemilik Projek",
      "name":   "Jabatan Kerja Raya Malaysia",
      "abbr":   "JKR",
      "logo":   "assets/logos/jkr-logo.svg",
      "url":    "https://www.jkr.gov.my",
      "detail": "JKR Malaysia (CKUB) — pengurusan kontrak, pengawasan pembinaan dan kelulusan teknikal. Kementerian Kerja Raya."
    },
    {
      "role":   "Kontraktor Utama (D&B)",
      "name":   "Wekajaya Sdn Bhd",
      "abbr":   "Wekajaya",
      "logo":   null,
      "url":    null,
      "detail": "Kontraktor Reka Bentuk & Bina (Lot 2595 & 2596, Sri Aman). Tanggungjawab penuh terhadap reka bentuk dan pembinaan."
    },
    {
      "role":   "Perunding Sivil & Struktur",
      "name":   "DPI Konsult Sdn Bhd",
      "abbr":   "DPI Konsult",
      "logo":   "assets/logos/consultant-logo.png",
      "url":    null,
      "detail": "Reka bentuk terperinci: sivil (earthwork, drainage, road, water, sewerage) dan geoteknik. Penyeliaan pembinaan."
    },
    {
      "role":   "Independent Geotechnical Checker",
      "name":   "ConsultFACE Sdn Bhd",
      "abbr":   "FACE",
      "logo":   null,
      "url":    null,
      "detail": "Ir. Dr. Mohd Farid Bin Ahmad (C110961). Penilaian bebas reka bentuk geoteknik, kestabilan cerun dan asas cerucuk."
    }
  ],

  "theme": {
    "bg":      "#f3f7f0",
    "panel":   "#ffffff",
    "panel2":  "#e8f2e4",
    "panel3":  "#d3e8cc",
    "border":  "rgba(39,119,44,0.12)",
    "border2": "rgba(39,119,44,0.28)",
    "text":    "#182d0e",
    "muted":   "#4a7a3a",
    "faint":   "#b0d8a0",
    "accent":  "#27772C",
    "accent2": "rgba(39,119,44,0.10)",
    "amber":   "#FF9800",
    "green":   "#4CAF50",
    "magenta": "#9C27B0",
    "orange":  "#F44336"
  },

  "qrPage": {
    "badge":    "JKR MALAYSIA · SRI AMAN",
    "title":    "Kompleks Mahkamah Baharu Sri Aman",
    "subtitle": "Imbas untuk akses peta interaktif tapak projek, lokasi BH, data geoteknik dan skop kerja sivil",
    "chips":    ["📱 Mobile Friendly", "🟢 Sarawak · Sri Aman"],
    "note":     "Ketik mana-mana penanda untuk maklumat teknikal terperinci.",
    "url":      "https://dpiktender-sriaman.arh-homelab.workers.dev"
  },

  "dwgSnippets": [],

  "legend": [
    {"color": "#27772C", "l": "Sempadan Tapak",               "s": "Lot 2000, 2003, 2004, 2008 — Jalan Bayu, Sri Aman"},
    {"color": "#F44336", "l": "Lokasi Lubang Gerudi (BH 1–7)", "s": "7 BH sehingga SPT 50×5 · Zon N≤4 sehingga 16.5m"},
    {"color": "#2196F3", "l": "Sistem Saliran",                "s": "600mm U-drain + OSD 4 kolam kering"},
    {"color": "#FF9800", "l": "Jalan Dalaman",                 "s": "7.2m lebar · AC 40mm + binder 60mm · cerucuk RC 150mm"},
    {"color": "#9C27B0", "l": "Bangunan & Kemudahan",          "s": "Mahkamah, pondok pengawal, tempat letak"}
  ],

  /* ─────────────────────────────────────────────────────────────────────────
     GEOTECHNICAL DATA — source: FACE ICE Geotechnical Report Rev 02 (2026-05-07)
     All values verified against sriaman_geotech_data.json extract.
     Layer boundaries follow subsurface N-value zones: N≤4 / N5-19 / N≥50.
     gwlM = water level depth from OGL (m bgl).
     ───────────────────────────────────────────────────────────────────────── */
  "geotechnical": {
    "siSummary": {
      "boreholes": 7,
      "probes": 32,
      "bhTermination": "SPT 50 × 5",
      "probeTermination": "15.0m bgl",
      "undisturbedSamples": true,
      "labTests": ["UU Triaxial", "Consolidation", "Atterberg Limits", "Moisture Content", "Chemical Content", "Ignition Loss"]
    },

    "seismic": {
      "zone": "V–VI (MS EN 1998-1:2017 NA)",
      "pga": "0.06g (5.9%)",
      "mmi": "IV–V",
      "description": "Light to moderate shaking with negligible to very minor structural damage."
    },

    "chemical": {
      "sulphate": {"range": "0.4 – 1.4%", "class": "Class 2 (Moderate)", "note": "Sulphate-tolerant cement required"},
      "chloride": {"range": "0 – 20 mg/kg (moderate)", "class": "Moderate", "note": "Reinforcement protection required"},
      "ph": {"range": "4.0 – 6.0", "class": "Acidic", "note": "Cement content ≥ 300 kg/m³, w/c ≤ 0.5"}
    },

    "earthwork": {
      "existingRL": 5.2,
      "platformRL": 6.2,
      "fillHeight": 1.0,
      "fillSlope": "1V:2H",
      "slopeProtection": "Hydroseed + cut-off drain + toe drain + cascading drain",
      "geotextile": "TS 30 separator before fill",
      "volume": "~20,000 m³ + 7,000 m³ surge"
    },

    "settlement": {
      "totalSettlementMm": 391,
      "totalSettlementTimeMonths": 451,
      "postConstructionLimitMm": 250,
      "curves": [
        {"months": 0,   "mm": 0},
        {"months": 3,   "mm": 39},
        {"months": 12,  "mm": 78},
        {"months": 50,  "mm": 156},
        {"months": 114, "mm": 235},
        {"months": 226, "mm": 313},
        {"months": 338, "mm": 352},
        {"months": 451, "mm": 372}
      ],
      "postConstruction": [
        {"scenario": "36 months construction (median Cc)", "mm": 272},
        {"scenario": "36 months construction (avg Cc)",    "mm": 229},
        {"scenario": "48 months construction (avg Cc)",    "mm": 209}
      ]
    },

    "slopeStability": {
      "method": "Morgenstern-Price (Slope/W)",
      "fillSlopeFos": 4.83,
      "staticFos": 1.639,
      "seismicFos": 1.316,
      "requiredStatic": 1.5,
      "requiredSeismic": 1.3,
      "analysisHeightM": 1.0
    },

    "pileDesign": {
      "mainBuilding": {"type": "Spun 250mm Ø Class B", "lengthM": 21, "workingLoadKn": 200, "bhs": ["BH4", "BH5"]},
      "ancillary":    {"type": "RC 150mm Ø",           "lengthM": 9,  "workingLoadKn": 30,  "bhs": ["BH1","BH2","BH3","BH6","BH7"]},
      "roadParking":  {"type": "RC 150mm Ø",           "lengthM": 9,  "workingLoadKn": 30,  "bhs": ["BH1","BH2","BH3","BH6","BH7"]},
      "utilityFence": {"type": "Bakau 100mm Ø",        "lengthM": 6,  "workingLoadKn": 5,   "bhs": ["BH1","BH2","BH3","BH6","BH7"]}
    },

    "boreholes": [
      {
        "id": "BH1", "lat": 1.23068, "lon": 111.45683, "rlM": 5.07, "depthM": 25.615,
        "gwlM": 3.34,
        "layers": [
          {"depthFrom": 0.00, "depthTo": 9.00,  "soil": "Peat",             "spt": "0",    "colour": "#5D4037"},
          {"depthFrom": 9.00, "depthTo": 13.50, "soil": "Soft Sandy Silt",  "spt": "0–3",  "colour": "#A1887F"},
          {"depthFrom": 13.50,"depthTo": 19.50, "soil": "Stiff Sandy Silt", "spt": "7–18", "colour": "#BCAAA4"},
          {"depthFrom": 19.50,"depthTo": 25.615,"soil": "Hard Sandy Silt",  "spt": "50",   "colour": "#795548"}
        ],
        "lab": {"cuKpa": [9.7, 26], "cc": 0.477, "eo": 1.694, "cv": 1.474}
      },
      {
        "id": "BH2", "lat": 1.23113, "lon": 111.45700, "rlM": 5.39, "depthM": 25.660,
        "gwlM": 2.58,
        "layers": [
          {"depthFrom": 0.00, "depthTo": 9.00,  "soil": "Peat",             "spt": "0",    "colour": "#5D4037"},
          {"depthFrom": 9.00, "depthTo": 15.00, "soil": "Soft Clay/Silt",   "spt": "0–2",  "colour": "#A1887F"},
          {"depthFrom": 15.00,"depthTo": 19.50, "soil": "Stiff Sandy Silt", "spt": "6–19", "colour": "#BCAAA4"},
          {"depthFrom": 19.50,"depthTo": 25.660,"soil": "Hard Sandy Silt",  "spt": "50",   "colour": "#795548"}
        ],
        "lab": {"cuKpa": [9, 22], "ccRange": [0.136, 0.761], "eoRange": [0.650, 2.133]}
      },
      {
        "id": "BH3", "lat": 1.23032, "lon": 111.45718, "rlM": 5.61, "depthM": 28.660,
        "gwlM": 2.30,
        "layers": [
          {"depthFrom": 0.00, "depthTo": 9.00,  "soil": "Peat",              "spt": "0",    "colour": "#5D4037"},
          {"depthFrom": 9.00, "depthTo": 15.00, "soil": "Soft Sandy Silt",   "spt": "0–3",  "colour": "#A1887F"},
          {"depthFrom": 15.00,"depthTo": 22.50, "soil": "Medium Sandy Silt", "spt": "6–12", "colour": "#BCAAA4"},
          {"depthFrom": 22.50,"depthTo": 28.660,"soil": "Hard Sandy Silt",   "spt": "50",   "colour": "#795548"}
        ],
        "lab": {"cuKpa": [10], "note": "Typical"}
      },
      {
        "id": "BH4", "lat": 1.23113, "lon": 111.45754, "rlM": 5.52, "depthM": 30.085,
        "gwlM": 2.99,
        "layers": [
          {"depthFrom": 0.00, "depthTo": 6.00,  "soil": "Peat",             "spt": "0",    "colour": "#5D4037"},
          {"depthFrom": 6.00, "depthTo": 10.50, "soil": "Soft Sandy Silt",  "spt": "3–4",  "colour": "#A1887F"},
          {"depthFrom": 10.50,"depthTo": 19.50, "soil": "Stiff Sandy Silt", "spt": "5–15", "colour": "#BCAAA4"},
          {"depthFrom": 19.50,"depthTo": 30.085,"soil": "Hard Sandy Silt",  "spt": "50",   "colour": "#795548"}
        ],
        "lab": {"cuKpa": [14, 21], "ccRange": [0.586, 0.761], "eoRange": [1.701, 1.981]}
      },
      {
        "id": "BH5", "lat": 1.23079, "lon": 111.45804, "rlM": 5.53, "depthM": 24.070,
        "gwlM": 2.36,
        "layers": [
          {"depthFrom": 0.00, "depthTo": 6.00,  "soil": "Peat",             "spt": "0",    "colour": "#5D4037"},
          {"depthFrom": 6.00, "depthTo": 10.50, "soil": "Soft Sandy Silt",  "spt": "3–4",  "colour": "#A1887F"},
          {"depthFrom": 10.50,"depthTo": 18.00, "soil": "Stiff Sandy Silt", "spt": "5–12", "colour": "#BCAAA4"},
          {"depthFrom": 18.00,"depthTo": 24.070,"soil": "Hard Sandy Silt",  "spt": "50",   "colour": "#795548"}
        ],
        "lab": {"cuKpa": [14, 30], "ccRange": [0.131, 0.697], "eoRange": [0.492, 2.023]}
      },
      {
        "id": "BH6", "lat": 1.22993, "lon": 111.45765, "rlM": 5.42, "depthM": 30.160,
        "gwlM": 2.92,
        "layers": [
          {"depthFrom": 0.00, "depthTo": 9.00,  "soil": "Peat",             "spt": "0–1",  "colour": "#5D4037"},
          {"depthFrom": 9.00, "depthTo": 16.50, "soil": "Soft Sandy Silt",  "spt": "0–4",  "colour": "#A1887F"},
          {"depthFrom": 16.50,"depthTo": 22.50, "soil": "Stiff Sandy Silt", "spt": "5–16", "colour": "#BCAAA4"},
          {"depthFrom": 22.50,"depthTo": 30.160,"soil": "Hard Sandy Silt",  "spt": "50",   "colour": "#795548"}
        ],
        "lab": {"cuKpa": [18, 26], "ccRange": [0.274, 0.586]}
      },
      {
        "id": "BH7", "lat": 1.23014, "lon": 111.45791, "rlM": 5.10, "depthM": 24.070,
        "gwlM": 1.76,
        "layers": [
          {"depthFrom": 0.00, "depthTo": 6.00,  "soil": "Peat",             "spt": "0",    "colour": "#5D4037"},
          {"depthFrom": 6.00, "depthTo": 10.50, "soil": "Soft Sandy Silt",  "spt": "0–4",  "colour": "#A1887F"},
          {"depthFrom": 10.50,"depthTo": 18.00, "soil": "Stiff Sandy Silt", "spt": "5–10", "colour": "#BCAAA4"},
          {"depthFrom": 18.00,"depthTo": 24.070,"soil": "Hard Sandy Silt",  "spt": "50",   "colour": "#795548"}
        ],
        "lab": {"cuKpa": [17, 35], "ccRange": [0.278, 0.949], "eoRange": [1.264, 2.965], "cvRange": [0.483, 2.005]}
      }
    ],

    "mackintoshProbes": {
      "count": 32,
      "terminationM": 15.0,
      "blows": [128,125,169,158,183,83,130,134,149,159,130,158,145,137,163,169,168,166,149,154,162,147,178,176,137,168,148,146,145,153,164,92]
    },

    "pileCapacityIce": {
      "bakau100": [
        {"bh": "BH1", "capacityKn": 3},
        {"bh": "BH2", "capacityKn": 2},
        {"bh": "BH3", "capacityKn": 4},
        {"bh": "BH6", "capacityKn": 4},
        {"bh": "BH7", "capacityKn": 10}
      ],
      "rc150": [
        {"bh": "BH1", "capacityKn": 23},
        {"bh": "BH2", "capacityKn": 15},
        {"bh": "BH3", "capacityKn": 18},
        {"bh": "BH6", "capacityKn": 14},
        {"bh": "BH7", "capacityKn": 37}
      ],
      "spun250": [
        {"bh": "BH4", "capacityKn": 230},
        {"bh": "BH5", "capacityKn": 250}
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     GEOSPATIAL — WGS84
     ───────────────────────────────────────────────────────────────────────── */
  "geo": {
    "poly": [
      [1.22946, 111.45743],
      [1.23042, 111.45852],
      [1.23038, 111.45829],
      [1.23160, 111.45746],
      [1.23088, 111.45635],
      [1.22946, 111.45743]
    ],
    "chPts": [],
    "sPos": [],
    "junc": [
      [1, "BH1", "BH1 — Peat & Soft Silt (W)",       "BH1 (RL 5.07m, GWL 3.34m): Peat 0–9m. Soft silt N=0–3 (9–13.5m). Stiff silt N=7–18 (13.5–19.5m). Hard silt N=50 (19.5–25.6m). Kedalaman 25.6m.", 111.45683, 1.23068],
      [2, "BH2", "BH2 — Peat & Soft Clay (NW)",      "BH2 (RL 5.39m, GWL 2.58m): Peat 0–9m. Soft clay N=0–2 (9–15m). Stiff silt N=6–19 (15–19.5m). Hard silt N=50 (19.5–25.7m). Kedalaman 25.7m.", 111.45700, 1.23113],
      [3, "BH3", "BH3 — Peat & Medium Silt (SW-Ctr)","BH3 (RL 5.61m, GWL 2.30m): Peat 0–9m. Soft silt N=0–3 (9–15m). Medium silt N=6–12 (15–22.5m). Hard silt N=50 (22.5–28.7m). Kedalaman 28.7m.", 111.45718, 1.23032],
      [4, "BH4", "BH4 — Peat & Silt (N-Ctr)",        "BH4 (RL 5.52m, GWL 2.99m): Peat 0–6m. Soft silt N=3–4 (6–10.5m). Stiff silt N=5–15 (10.5–19.5m). Hard silt N=50 (19.5–30.1m). Kedalaman 30.1m.", 111.45754, 1.23113],
      [5, "BH5", "BH5 — Peat & Soft Silt (E)",       "BH5 (RL 5.53m, GWL 2.36m): Peat 0–6m. Soft silt N=3–4 (6–10.5m). Stiff silt N=5–12 (10.5–18m). Hard silt N=50 (18–24.1m). Kedalaman 24.1m.", 111.45804, 1.23079],
      [6, "BH6", "BH6 — Peat & Soft Silt (S)",       "BH6 (RL 5.42m, GWL 2.92m): Peat 0–9m. Soft silt N=0–4 (9–16.5m). Stiff silt N=5–16 (16.5–22.5m). Hard silt N=50 (22.5–30.2m). Kedalaman 30.2m.", 111.45765, 1.22993],
      [7, "BH7", "BH7 — Peat & Soft Silt (SE)",      "BH7 (RL 5.10m, GWL 1.76m): Peat 0–6m. Soft silt N=0–4 (6–10.5m). Stiff silt N=5–10 (10.5–18m). Hard silt N=50 (18–24.1m). Kedalaman 24.1m.", 111.45791, 1.23014]
    ],
    "prop": [],
    "cps": [
      {"id": "CP1", "ch": 0, "name": "Bangunan Utama Mahkamah",      "detail": "GFA ~5,800m². Cerucuk spun 250mm Ø, 21m, 200kN. Aras lantai RL 6.20m.",    "lat": 1.23090, "lon": 111.45740, "url": ""},
      {"id": "CP2", "ch": 0, "name": "Pintu Masuk Utama — Jalan Bayu","detail": "Pintu masuk utama (RL 6.10m). Pondok pengawal pada cerucuk RC 150mm Ø, 9m, 30kN.", "lat": 1.22980, "lon": 111.45730, "url": ""},
      {"id": "CP3", "ch": 0, "name": "OSD Pond & Kolam Kering",       "detail": "OSD + 4 kolam kering di belakang bangunan. Saliran ke Jalan Foocow.",        "lat": 1.23100, "lon": 111.45790, "url": ""},
      {"id": "CP4", "ch": 0, "name": "Tap-Off Air Bersih",            "detail": "Paip 160mm Ø HDPE PN12.5 dari Jalan Foocow. 3 hydrant pillar. JBALBS.",       "lat": 1.22970, "lon": 111.45760, "url": ""}
    ]
  }
};

/* Compatibility shim */
APP_CONFIG.POLY   = APP_CONFIG.geo.poly;
APP_CONFIG.CH_PTS = APP_CONFIG.geo.chPts;
APP_CONFIG.JUNC   = APP_CONFIG.geo.junc;
APP_CONFIG.PROP   = APP_CONFIG.geo.prop;
APP_CONFIG.CPS    = APP_CONFIG.geo.cps;
APP_CONFIG.SPOS   = APP_CONFIG.geo.sPos;
