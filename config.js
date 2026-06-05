/**
 * config.js — Project Brief Adapter
 *
 * @role     adapter / data-config
 * @contract APP_CONFIG → consumed by index.html + mobile.html + qr.html
 *
 * Project : Projek Pembangunan Kompleks Mahkamah Baharu Sri Aman, Sarawak
 * Client  : Jabatan Perdana Menteri — Bahagian Hal Ehwal Undang-Undang (BHEUU)
 * Manager : JKR Malaysia (Cawangan Kontrak dan Ukur Bahan)
 * D&B     : Wekajaya Sdn Bhd
 * Consult : DPI Konsult Sdn Bhd
 * Contract: JKR/PER/IP/CKUB/170/2023
 *
 * Site    : Jalan Bayu, Sri Aman, Sarawak — Lots 2000, 2003, 2004, 2008
 * Centre  : 1.2255°N, 111.4610°E
 * SI      : 7 BH (to SPT 50×5) + 32 JKR Probes
 */

const APP_CONFIG = {
  "lang": "ms",
  "pageTitle": "Mahkamah Baharu Sri Aman — Project Brief",

  "project": {
    "title": "Projek Pembangunan Kompleks Mahkamah Baharu Sri Aman, Sarawak",
    "subtitle": "Kompleks Mahkamah Baharu · Jalan Bayu, Sri Aman · Reka Bentuk & Bina",
    "designStandard": "JKR Standard Specification · MS 1754:2004 · Eurocode 7",
    "tenderNumber": "JKR/PER/IP/CKUB/170/2023",
    "indicativePrice": "—",
    "durationMonths": "—",
    "cidbClass": "—",
    "procurementMethod": "Reka Bentuk & Bina",
    "documentPrice": "—"
  },

  "client": {
    "name": "JABATAN PERDANA MENTERI",
    "subname": "Bahagian Hal Ehwal Undang-Undang (BHEUU)",
    "url": "https://www.bheuu.gov.my",
    "logo": "assets/logos/consultant-logo.png"
  },

  "consultant": {
    "name": "DPI Konsult Sdn Bhd",
    "subname": "Civil & Structural Consultant",
    "logo": "assets/logos/consultant-logo.png"
  },

  "alerts": [
    {
      "title": "Mesyuarat Reka Bentuk Geoteknik — 8 Jun 2026",
      "body": "Mesyuarat kompulsori bersama Wekajaya Sdn Bhd dan JKR pada 8 Jun 2026, jam 9:30 pagi, Aras 23A Menara PJD, Ibu Pejabat JKR KL. Kontrak pelantikan: JKR/PER/IP/CKUB/253/2025."
    },
    {
      "title": "Tanah Lembut — Peat & Lempung Lembut",
      "body": "Lapisan peat sehingga 10m tebal. FOS kecerunan: 1.639 (statik) / 1.316 (seismik 5.9% PGA). Enapan jumlah: 370mm. Had enapan pasca-binaan: 250mm. Semua bangunan dan utiliti di atas cerucuk."
    }
  ],

  "scope": [
    {"color":"#4CAF50","text":"Earthwork — Penimbusan platform ~1.0m, isipadu 20,000 m³ + surgecaj 7,000 m³. Aras platform RL 6.20m. Geotextile separator TS 30 sebelum penimbusan."},
    {"color":"#2196F3","text":"Drainage — 600mm U-drain pratuang + 4 kolam kering (OSD). Saliran akhir ke longkang Jalan Foocow. Saringan sampah di sump terakhir."},
    {"color":"#FF9800","text":"Road Works — Jalan dalaman lebar 7.2m, AC 40mm + binder 60mm + base 300mm. Pintu masuk utama ke Jalan Bayu, pintu kedua ke Jalan Foocow."},
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
    "problem": "Sri Aman, Sarawak memerlukan kompleks mahkamah baharu yang berdaya maju. Tapak di Jalan Bayu didominasi lapisan peat dan lempung lembut (SPT 0–4) sehingga kedalaman 10m, diikuti silt lembut sehingga 18–22m. Ini menimbulkan risiko enapan berlebihan dan kegagalan cerun jika reka bentuk geoteknik tidak menanganinya secara komprehensif.",
    "solution": "Pendekatan Reka Bentuk & Bina dengan Wekajaya Sdn Bhd sebagai kontraktor utama, dan DPI Konsult Sdn Bhd sebagai perunding sivil, struktur dan geoteknik. Siasatan tapak komprehensif: 7 lubang gerudi (BH) sehingga SPT 50×5 dan 32 probe JKR. Analisis enapan dan kestabilan cerun dijalankan menggunakan perisian Slope/W.",
    "outcome": "Platform bangunan ditinggikan ke RL 6.20m dengan geotextile separator. FOS kecerunan melebihi had minimum (1.639 statik, 1.316 seismik). Semua struktur didirikan di atas cerucuk. Enapan pasca-binaan dijangka tidak melebihi 250mm. Kelas simen sulfat-tahan ditetapkan berdasarkan ujian kimia tanah."
  },

  "facilities": [
    {
      "id":     "main-court",
      "name":   "Bangunan Utama Mahkamah",
      "abbr":   "Mahkamah",
      "role":   "Bangunan Utama",
      "tag":    "primary",
      "detail": "Kompleks mahkamah baharu, GFA ~5,800m². Aras lantai RL 6.20m. Didirikan di atas cerucuk spun 250mm Ø panjang 21m, beban kerja 200kN. Lantai bawah dan apron: suspended slab.",
      "lat": 1.2262, "lon": 111.4615,
      "marker": "M"
    },
    {
      "id":     "guardhouse",
      "name":   "Pondok Pengawal (×2)",
      "abbr":   "Pengawal",
      "role":   "Kemudahan Sokongan",
      "tag":    "extended",
      "detail": "Dua pondok pengawal — pintu masuk Jalan Bayu dan pintu masuk Jalan Foocow. Didirikan di atas cerucuk RC 150mm Ø, panjang 9m, beban kerja 30kN.",
      "lat": 1.2230, "lon": 111.4580,
      "marker": "G"
    },
    {
      "id":     "parking",
      "name":   "Kawasan Tempat Letak Kenderaan",
      "abbr":   "Parking",
      "role":   "Kemudahan Awam",
      "tag":    "extended",
      "detail": "56 TLK awam, 42 TLK kakitangan, 4 TLK hakim, 20 TLM motosikal. Jalan dalaman dan tempat letak di atas cerucuk RC 150mm Ø, panjang 9m. Konkrit turap dengan kontraksi joint.",
      "lat": 1.2245, "lon": 111.4635,
      "marker": "P"
    }
  ],

  "map": {
    "center": [1.2260, 111.4615],
    "zoom":   17,
    "bounds": [
      [1.220, 111.453],
      [1.234, 111.470]
    ]
  },

  "methodSegments": [],
  "methodBreakdown": [],
  "constructionMethods": [],

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
    {"label": "Tapak Keseluruhan", "lat": 1.2260, "lon": 111.4615, "zoom": 17},
    {"label": "BH1 (SW)",          "lat": 1.22278,"lon": 111.45957,"zoom": 19},
    {"label": "BH5 (NE)",          "lat": 1.22818,"lon": 111.46582,"zoom": 19},
    {"label": "Sri Aman Town",     "lat": 1.2333, "lon": 111.4621, "zoom": 14}
  ],

  "designStandards": [
    {"parameter": "Standard Reka Bentuk",         "unit": "—",    "value": "JKR SS 2014 · MS 1754:2004 · Eurocode 7"},
    {"parameter": "Aras Platform Bangunan",        "unit": "m RL", "value": "6.20"},
    {"parameter": "Aras Jalan Sedia Ada (Jln Bayu)","unit":"m RL", "value": "6.10"},
    {"parameter": "FOS Kecerunan — Statik",        "unit": "—",    "value": "≥ 1.5 (dicapai 1.639)"},
    {"parameter": "FOS Kecerunan — Seismik 5.9%",  "unit": "—",    "value": "≥ 1.3 (dicapai 1.316)"},
    {"parameter": "Enapan Jumlah",                 "unit": "mm",   "value": "370 (724 bulan)"},
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
      "name":   "Jabatan Perdana Menteri (BHEUU)",
      "abbr":   "JPM",
      "logo":   "assets/logos/consultant-logo.png",
      "url":    "https://www.bheuu.gov.my",
      "detail": "Jabatan Perdana Menteri, Bahagian Hal Ehwal Undang-Undang — pemilik aset mahkamah persekutuan."
    },
    {
      "role":   "Pengurus Projek",
      "name":   "Jabatan Kerja Raya Malaysia",
      "abbr":   "JKR",
      "logo":   "assets/logos/consultant-logo.png",
      "url":    "https://www.jkr.gov.my",
      "detail": "JKR Malaysia (CKUB) — pengurusan kontrak, pengawasan pembinaan dan kelulusan teknikal."
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
    "badge":    "JKR MALAYSIA · JPM BHEUU",
    "title":    "Kompleks Mahkamah Baharu Sri Aman",
    "subtitle": "Imbas untuk akses peta interaktif tapak projek, lokasi BH, data geoteknik dan skop kerja sivil",
    "chips":    ["📱 Mobile Friendly", "🟢 Sarawak · Sri Aman"],
    "note":     "Ketik mana-mana penanda untuk maklumat teknikal terperinci.",
    "url":      "https://dpiktender-sriaman.arh-homelab.workers.dev"
  },

  "dwgSnippets": [
    {
      "id":    "dwg-bh-plan",
      "label": "DWG · Pelan BH",
      "title": "Pelan Lokasi Lubang Gerudi & Probe",
      "ch":    "7 BH + 32 Probe JKR · Lot 2000, Jalan Bayu",
      "img":   "assets/drawings/bh-plan.png",
      "lat":   1.2255, "lon": 111.4610
    },
    {
      "id":    "dwg-settlement",
      "label": "DWG · Enapan",
      "title": "Analisis Enapan Penyatuan",
      "ch":    "Enapan jumlah 370mm · Had pasca-binaan 250mm",
      "img":   "assets/drawings/settlement.png",
      "lat":   1.2262, "lon": 111.4615
    }
  ],

  "routes": [],

  "legend": [
    {"color": "#27772C", "label": "Sempadan Tapak",              "sub": "Lot 2000, 2003, 2004, 2008 — Jalan Bayu, Sri Aman"},
    {"color": "#F44336", "label": "Lokasi Lubang Gerudi (BH 1–7)", "sub": "7 BH sehingga SPT 50×5 · Peat & lempung lembut 0–18m"},
    {"color": "#2196F3", "label": "Sistem Saliran",               "sub": "600mm U-drain + OSD 4 kolam kering"},
    {"color": "#FF9800", "label": "Jalan Dalaman",                "sub": "7.2m lebar · AC 40mm + binder 60mm · cerucuk RC 150mm"}
  ],

  /* ─────────────────────────────────────────────────────────────────────────
     GEOSPATIAL
     All coordinates: WGS84 decimal degrees [lat, lon]
     JUNC exception: [id, label, title, detail, LON, LAT]  ← lon/lat swapped
     Site: Lot 2000/2003/2004/2008, Jalan Bayu, Sri Aman, Sarawak
     Centre: 1.2260°N, 111.4615°E   (WGS84 from SI coordinate table)
     ───────────────────────────────────────────────────────────────────────── */
  "geo": {

    /* Site boundary polygon — approximate, traced from survey plan (Pelan Ukur Topografi)
       Lot 2000 (main), 2003 & 2004 (NW), 2008 (NE), bounded west by Jalan Bayu */
    "poly": [
      [1.2222, 111.4568],
      [1.2228, 111.4562],
      [1.2275, 111.4548],
      [1.2300, 111.4558],
      [1.2308, 111.4598],
      [1.2305, 111.4650],
      [1.2290, 111.4668],
      [1.2255, 111.4668],
      [1.2230, 111.4658],
      [1.2222, 111.4620],
      [1.2222, 111.4568]
    ],

    /* No pipeline chainage — building project */
    "chPts": [],

    "sPos": [],

    /* Borehole markers
       Format: [id, label, title, detail, LON, LAT]  ← JUNC lon/lat is SWAPPED */
    "junc": [
      [1, "BH1",
       "BH1 — Peat & Lempung Lembut (SW Tapak)",
       "BH1 (RL 5.07m): Peat SPT 0 dari 0–9m. Lempung lembut/silt SPT 0–3 sehingga 18m. Silt keras SPT 50 dari 18m+. Cu=9.7–26 kPa. Cc=0.477, eo=1.694, cv=1.474 m²/yr.",
       111.45957, 1.22278],

      [2, "BH2",
       "BH2 — Peat & Lempung Lembut (W Tapak)",
       "BH2 (RL 5.39m): Peat SPT 0 dari 0–9m. Lempung lembut SPT 0–2 sehingga 19m. Pasir padat SPT 50 dari 19m+. Cu=9–22 kPa. Cc=0.136–0.761, eo=0.650–2.133.",
       111.45706, 1.22522],

      [3, "BH3",
       "BH3 — Peat & Silt Lembut (Tengah Tapak)",
       "BH3 (RL 5.61m): Peat SPT 0 dari 0–9m. Silt sederhana SPT 3–12 sehingga 21m. Pasir padat SPT 50 dari 21m+. Cu tipikal 10 kPa.",
       111.46199, 1.22555],

      [4, "BH4",
       "BH4 — Peat & Silt (NE Tengah)",
       "BH4 (RL 5.52m): Peat SPT 0 dari 0–6m. Silt SPT 3–5 dari 6–12m. Silt keras SPT 8–50 dari 12m+. Cu=14–21 kPa. Cc=0.586–0.761, eo=1.701–1.981.",
       111.46412, 1.22709],

      [5, "BH5",
       "BH5 — Peat & Silt (E Tapak)",
       "BH5 (RL 5.53m): Peat SPT 0 dari 0–6m. Silt lembut SPT 3–8 dari 6–15m. Silt keras/pasir SPT 50 dari 15m+. Cu=14–30 kPa. Cc=0.131–0.697, eo=0.492–2.023.",
       111.46582, 1.22818],

      [6, "BH6",
       "BH6 — Peat & Silt (N Tapak)",
       "BH6 (RL 5.42m): Peat sehingga 9m. Silt lembut 9–18m (SPT 3–9). Silt keras SPT 50 dari 18m+. Cu=18–26 kPa. Cc=0.274–0.586.",
       111.4598, 1.22902],

      [7, "BH7",
       "BH7 — Peat & Lempung Lembut (NW Tapak)",
       "BH7 (RL ~5.1m): Peat 0–6m. Silt lembut 6–9m (SPT 0–4). Silt keras SPT 50 dari 9m+. Cu=17–35 kPa. Cc=0.278–0.949, eo=1.264–2.965.",
       111.4601, 1.22985]
    ],

    /* No pipeline props */
    "prop": [],

    /* Key site control points */
    "cps": [
      {
        "id": "CP1", "ch": 0,
        "name": "Bangunan Utama Mahkamah",
        "detail": "Bangunan kompleks mahkamah baharu, GFA ~5,800m². Cerucuk spun 250mm Ø, 21m, 200kN. Aras lantai RL 6.20m. Lantai bawah dan apron: suspended slab di atas cerucuk.",
        "lat": 1.2262, "lon": 111.4615, "url": ""
      },
      {
        "id": "CP2", "ch": 0,
        "name": "Pintu Masuk Utama — Jalan Bayu",
        "detail": "Pintu masuk utama dari Jalan Bayu (RL 6.10m). Laluan khas hakim dan awam. Pondok pengawal pada cerucuk RC 150mm Ø, 9m, 30kN.",
        "lat": 1.2230, "lon": 111.4577, "url": ""
      },
      {
        "id": "CP3", "ch": 0,
        "name": "OSD Pond & Kolam Kering",
        "detail": "OSD (On-Site Detention) dan 4 kolam kering (dry ponds) di belakang bangunan utama. Sistem saliran akhir ke longkang sedia ada Jalan Foocow melalui OSD.",
        "lat": 1.2270, "lon": 111.4638, "url": ""
      },
      {
        "id": "CP4", "ch": 0,
        "name": "Tap-Off Air Bersih — Jalan Foocow",
        "detail": "Titik tap paip 160mm Ø HDPE PN12.5 dari paip sedia ada di Jalan Foocow. 2 meter pukal (domestik + bomba). 3 hydrant pillar dalam tapak. Tertakluk kelulusan JBALBS.",
        "lat": 1.2238, "lon": 111.4618, "url": ""
      }
    ]
  }
};

/* Compatibility shim — flat references consumed by HTML engine */
APP_CONFIG.POLY   = APP_CONFIG.geo.poly;
APP_CONFIG.CH_PTS = APP_CONFIG.geo.chPts;
APP_CONFIG.JUNC   = APP_CONFIG.geo.junc;
APP_CONFIG.PROP   = APP_CONFIG.geo.prop;
APP_CONFIG.CPS    = APP_CONFIG.geo.cps;
APP_CONFIG.SPOS   = APP_CONFIG.geo.sPos;
