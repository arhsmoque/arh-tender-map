/**
 * config.js — Project Brief Adapter
 * Project : Projek Pembangunan Kompleks Mahkamah Baharu Sri Aman, Sarawak
 * Contract: JKR/PER/IP/CKUB/253/2025
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
  "pageTitle": "Mesyuarat Reka Bentuk Geoteknik — Mahkamah Baharu Sri Aman",

  "project": {
    "title": "Projek Pembangunan Kompleks Mahkamah Baharu Sri Aman, Sarawak",
    "subtitle": "Memo WSB/ENG/MBSA/DPIK/2026(008) · 8 June 2026, 9.30 am · Menara PJD",
    "designStandard": "JKR Standard Specification · MS 1754:2004 · Eurocode 7 · BS 5930:2015 · MS 2038:2024",
    "tenderNumber": "JKR/PER/IP/CKUB/253/2025",
    "contractNumber": "JKR/PER/IP/CKUB/253/2025",
    "indicativePrice": "—",
    "durationMonths": "—",
    "cidbClass": "—",
    "procurementMethod": "Reka Bentuk & Bina",
    "documentPrice": "—"
  },

  "client": {
    "name": "JABATAN KERJA RAYA MALAYSIA",
    "subname": "Kementerian Kerja Raya · Bahagian Reka Bentuk Geoteknik Bangunan",
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
      "body": "Berdasarkan memo Wekajaya Engineering Department WSB/ENG/MBSA/DPIK/2026(008) bertarikh 29/5/2026 kepada DPI Konsult Sdn Bhd. Mesyuarat ditetapkan pada 8 June 2026 (Monday), jam 9.30 am, Bilik Mesyuarat Bahagian Reka Bentuk Geoteknik Bangunan, Tingkat 23A, Menara PJD, Ibu Pejabat JKR Malaysia. Contract No: JKR/PER/IP/CKUB/253/2025. Kehadiran perunding adalah wajib."
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
    {"color":"#F44336","text":"Geotechnical — Cerucuk Spun 250mm Ø, 21m, 200kN (bangunan utama). Cerucuk RC 150mm, 9m, 20kN (jalan/tempat letak/bangunan ancilari). Bakau 6m, 5kN (utiliti/pagar)."}
  ],

  "contacts": [
    {
      "label": "DPI Konsult — Civil & Structural",
      "members": [
        {"name": "Ir. Hilmi Omar",              "title": "Attn memo Wekajaya · DPI Konsult",         "email": "hilmio@dpik.com.my"},
        {"name": "Ir. Mohd Rawawi",             "title": "Attn memo Wekajaya · DPI Konsult",         "email": "—"},
        {"name": "Ir. Ahmad Saifuddin",         "title": "Attn memo Wekajaya · DPI Konsult",         "email": "—"},
        {"name": "Hazwani",                     "title": "Attn memo Wekajaya · DPI Konsult",         "email": "—"},
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
    "briefing":      "8 June 2026 (Monday), 9.30 am — Tingkat 23A, Menara PJD, Ibu Pejabat JKR Malaysia",
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
      "detail": "Dua pondok pengawal — pintu masuk Jalan Bayu dan pintu masuk Jalan Foocow. Didirikan di atas cerucuk RC 150mm Ø, panjang 9m, beban kerja 20kN.",
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
    "center": [1.23059, 111.45736],
    "zoom":   17,
    "bounds": [
      [1.22930, 111.45610],
      [1.23190, 111.45880]
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

  "seismicCondition": {
    "enabled": true,
    "defaultOn": false,
    "label": "Keadaan Seismik Tapak",
    "source": "Independent Geotechnical Checker Report Rev 02, Section 3.1 and Figure 3",
    "position": {"lat": 1.23059, "lon": 111.45736},
    "radiusM": 520,
    "pgaG": 0.06,
    "pgaPercentG": 5.9,
    "mmi": "IV–V",
    "zone": "V–VI (NA to MS EN 1998-1:2017)",
    "classification": "Kawasan seismik rendah; gegaran ringan hingga sederhana.",
    "designMeaning": "Kesan struktur dijangka boleh diabaikan hingga sangat kecil, tetapi semakan cerun seismik masih perlu dibuktikan.",
    "decision": "FOS seismik 1.316 melepasi minimum 1.3; isu dominan JKR kekal enapan tanah lembut dan kawalan pembinaan.",
    "disclaimer": "Lingkaran ini ialah penanda keadaan reka bentuk tapak, bukan kontur hazard nasional. Untuk kontur wilayah, import data rasmi JMG atau GEM GeoTIFF berlesen.",
    "references": [
      {"name": "FACE / ICE Report", "use": "Nilai tapak muktamad untuk mesyuarat: PGA 0.06g dan MMI IV–V."},
      {"name": "Dlubal Geo-Zone Tool", "use": "Semakan rujukan lokasi mengikut MS EN 1998-1."},
      {"name": "GEM Global Seismic Hazard Map / ATLAS", "use": "Rujukan global dan sumber GeoTIFF / hazard curve jika JKR mahu lapisan wilayah."},
      {"name": "ThinkHazard Malaysia", "use": "Konteks komunikasi risiko: hazard gempa perlu dipertimbang dalam reka bentuk dan pembinaan."}
    ]
  },

  "decisionBrief": {
    "purpose": "Menyokong Mesyuarat Reka Bentuk Geoteknik JKR pada 8 Jun 2026 dengan menukar data siasatan tapak Sri Aman kepada bukti keputusan untuk penerimaan platform, enapan, cerun, cerucuk dan kawalan pembinaan.",
    "meeting": {
      "date": "8 June 2026",
      "time": "9.30 am",
      "venue": "Bilik Mesyuarat Bahagian Reka Bentuk Geoteknik Bangunan, Tingkat 23A, Menara PJD, Ibu Pejabat JKR Malaysia",
      "memoRef": "WSB/ENG/MBSA/DPIK/2026(008)",
      "memoDate": "29/5/2026",
      "contractNo": "JKR/PER/IP/CKUB/253/2025",
      "from": "Akmal Bahri Bin Bakri, Wekajaya Sdn Bhd",
      "to": "DPI Konsult Sdn Bhd",
      "attendance": "Kehadiran perunding adalah wajib berdasarkan memo Wekajaya WSB/ENG/MBSA/DPIK/2026(008), 29/5/2026."
    },
    "decisionQuestions": [
      {
        "label": "Strategi platform",
        "question": "Bolehkah JKR menerima RL 6.20m dengan timbusan ~1.0m di atas peat / silt lembut?",
        "evidence": "Sempadan Lot 2000, 7 BH, 32 MP, separator TS 30, cerun timbus 1V:2H, ~20,000 m³ timbusan + 7,000 m³ surgecaj.",
        "status": "Terima dengan syarat kawalan pembinaan"
      },
      {
        "label": "Risiko enapan",
        "question": "Adakah enapan pasca-binaan boleh diterima untuk operasi kompleks mahkamah?",
        "evidence": "Enapan jumlah ~391mm (median Cc); pasca-binaan 272mm pada 36 bulan median Cc, 229mm pada 36 bulan purata Cc, 209mm pada 48 bulan purata Cc.",
        "status": "Keputusan bergantung pada tempoh program dan titik kawalan pemantauan"
      },
      {
        "label": "Kestabilan cerun",
        "question": "Adakah cerun timbus melepasi FOS minimum JKR untuk semakan statik dan seismik?",
        "evidence": "Morgenstern-Price / Slope-W: FOS 1.639 statik dan 1.316 seismik berbanding minimum 1.5 dan 1.3; FOS cerun timbus setempat 4.83.",
        "status": "Boleh diterima dengan perlindungan hakisan"
      },
      {
        "label": "Keadaan seismik",
        "question": "Adakah hazard gempa menjadi pemacu reka bentuk utama untuk tapak Sri Aman?",
        "evidence": "Laporan ICE menyatakan kawasan seismik rendah; PGA 0.06g bersamaan MMI IV–V. Semakan cerun seismik menggunakan 5.9% PGA menghasilkan FOS 1.316 melebihi minimum 1.3.",
        "status": "Bukan pemacu utama; kekalkan sebagai semakan bukti, bukan isu keputusan dominan"
      },
      {
        "label": "Pilihan asas",
        "question": "Adakah panjang dan kapasiti cerucuk konsisten dengan bukti borehole?",
        "evidence": "Cadangan perunding: spun 250mm, 21m, 200kN; RC 150mm, 9m, 20kN; bakau 100mm, 6m, 5kN. Semakan ICE Table 11: spun 20m/240kN, RC 15m/21kN, bakau 12m/5kN.",
        "status": "Sahkan rejim ujian dan semakan jurutera geoteknik untuk anomali"
      }
    ],
    "evidenceGates": [
      "Sahkan sempadan kadaster Lot 2000 dan susun atur tapak terhadap eLASIS sebelum taklimat dimuktamadkan.",
      "Kaitkan setiap zon kemudahan dengan borehole berdekatan dan kedalaman lapisan lembut; jangan anggap tapak seragam.",
      "Tetapkan trigger pemantauan enapan jika program 36 bulan dikekalkan.",
      "Lindungi cerun sementara dalam satu minggu; hydroseed/geomat, cut-off drain, toe drain dan cascading drain.",
      "Jalankan Static Load Test pada 1% titik cerucuk dan PDA / High Strain Dynamic Test sekurang-kurangnya 3%."
    ],
    "sourceNotes": [
      "Memo mesyuarat: Wekajaya Engineering Department Memo WSB/ENG/MBSA/DPIK/2026(008), 29/5/2026; Contract No JKR/PER/IP/CKUB/253/2025.",
      "Ekstrak teknikal: Independent Geotechnical Checker Report Rev 02, 7 Mei 2026.",
      "Koordinat: Projek Mahkamah Sri Aman.kmz, eksport Google Earth Pro."
    ]
  },

  "reportBrief": {
    "title": "Indeks Bukti Laporan",
    "purpose": "Menjadikan webapp memadai untuk mesyuarat: JKR boleh melihat keputusan, bukti, implikasi reka bentuk dan tindakan susulan tanpa menatal PDF penuh.",
    "sections": [
      {
        "name": "Kedudukan tapak & sempadan",
        "decisionUse": "Mengesahkan keputusan geoteknik dibuat dalam lot sebenar yang akan dibangunkan.",
        "evidence": "Lot 2000 ditentukur daripada KMZ dan disemak terhadap overlay eLASIS.",
        "presentation": "Peta satelit + sempadan + kadaster + BH."
      },
      {
        "name": "Siasatan tapak",
        "decisionUse": "Menentukan sama ada data mencukupi untuk menerima model tanah.",
        "evidence": "7 BH sehingga SPT 50×5, 32 Mackintosh Probe sehingga 15m, sampel undisturbed dan ujian makmal.",
        "presentation": "Marker BH, log borehole, heatmap ketebalan peat."
      },
      {
        "name": "Model tanah lembut",
        "decisionUse": "Mengenal pasti zon risiko enapan dan sokongan asas.",
        "evidence": "Peat 6–9m; lapisan N≤4 sehingga 16.5m maksimum di BH6.",
        "presentation": "Kad BH mengikut lapisan dan carta profil SPT."
      },
      {
        "name": "Enapan",
        "decisionUse": "Memutuskan sama ada tempoh pembinaan, surcharge dan pemantauan mencukupi.",
        "evidence": "Enapan jumlah ~391mm median Cc; pasca-binaan 266–272mm pada 36 bulan dan 209–231mm pada 48 bulan.",
        "presentation": "Carta enapan vs masa + status had 250mm."
      },
      {
        "name": "Cerun dan seismic check",
        "decisionUse": "Mengesahkan cerun selamat dalam kes statik dan seismik.",
        "evidence": "FOS 1.639 statik, 1.316 seismik, 4.83 untuk fill slope setempat.",
        "presentation": "Kad FOS + layer keadaan seismik tapak."
      },
      {
        "name": "Asas cerucuk",
        "decisionUse": "Mengesahkan strategi asas untuk bangunan, jalan, parkir, utiliti dan pagar.",
        "evidence": "Cadangan perunding: spun 250mm x 21m x 200kN; RC 150mm x 9m x 20kN; bakau 100mm x 6m x 5kN. Semakan ICE Table 11: spun 20m/240kN; RC 15m/21kN; bakau 12m/5kN.",
        "presentation": "Kad kapasiti membezakan cadangan perunding dan graf perbandingan ICE."
      },
      {
        "name": "Kawalan pembinaan",
        "decisionUse": "Menukar risiko teknikal kepada syarat penerimaan JKR.",
        "evidence": "TS 30 separator, perlindungan cerun, drain, pemantauan enapan, Static Load Test 1%, PDA / HSDT 3%.",
        "presentation": "Evidence gates sebelum persetujuan."
      }
    ]
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
    {"label": "Lot 2000",          "lat": 1.23059, "lon": 111.45736, "zoom": 18},
    {"label": "BH1 (W)",           "lat": 1.230844613982477, "lon": 111.4567190721134, "zoom": 19},
    {"label": "BH3 (Ctr)",         "lat": 1.230382214306199, "lon": 111.4570586755615, "zoom": 19},
    {"label": "BH6 (S)",           "lat": 1.229859064507745, "lon": 111.4574453288203, "zoom": 19},
    {"label": "Sri Aman Town",     "lat": 1.2333,  "lon": 111.4621,  "zoom": 14}
  ],

  "designStandards": [
    {"parameter": "Standard Reka Bentuk",         "unit": "—",    "value": "JKR SS 2014 · MS 1754:2004 · Eurocode 7"},
    {"parameter": "Aras Platform Bangunan",        "unit": "m RL", "value": "6.20"},
    {"parameter": "Aras Jalan Sedia Ada (Jln Bayu)","unit":"m RL", "value": "6.10"},
    {"parameter": "FOS Kecerunan — Statik",        "unit": "—",    "value": "≥ 1.5 (dicapai 1.639)"},
    {"parameter": "FOS Kecerunan — Seismik 5.9%",  "unit": "—",    "value": "≥ 1.3 (dicapai 1.316)"},
    {"parameter": "Keadaan Seismik Tapak",          "unit": "—",    "value": "PGA 0.06g · MMI IV–V · rendah"},
    {"parameter": "Enapan Penuh Konsolidasi",       "unit": "mm",   "value": "~391 (Cc median) / ~334 (Cc purata)"},
    {"parameter": "Had Enapan Pasca-Binaan",        "unit": "mm",   "value": "≤ 250"},
    {"parameter": "Cerucuk Spun (Bangunan Utama)", "unit": "—",    "value": "250mm Ø · 21m · 200kN"},
    {"parameter": "Cerucuk RC (Jalan/Letak/Ancilari)","unit":"—",  "value": "150mm Ø · 9m · 20kN"},
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
    {"color": "#FFB800", "l": "Keadaan Seismik Tapak",          "s": "PGA 0.06g · MMI IV–V · FOS seismik 1.316 > 1.3"},
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
      "ancillary":    {"type": "RC 150mm Ø",           "lengthM": 9,  "workingLoadKn": 20,  "bhs": ["BH1","BH2","BH3","BH6","BH7"]},
      "roadParking":  {"type": "RC 150mm Ø",           "lengthM": 9,  "workingLoadKn": 20,  "bhs": ["BH1","BH2","BH3","BH6","BH7"]},
      "utilityFence": {"type": "Bakau 100mm Ø",        "lengthM": 6,  "workingLoadKn": 5,   "bhs": ["BH1","BH2","BH3","BH6","BH7"]}
    },

    "boreholes": [
      {
        "id": "BH1", "lat": 1.230844613982477, "lon": 111.4567190721134, "rlM": 5.07, "depthM": 25.615,
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
        "id": "BH2", "lat": 1.231202385599171, "lon": 111.4572890642997, "rlM": 5.39, "depthM": 25.660,
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
        "id": "BH3", "lat": 1.230382214306199, "lon": 111.4570586755615, "rlM": 5.61, "depthM": 28.660,
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
        "id": "BH4", "lat": 1.230870433257311, "lon": 111.457249267201, "rlM": 5.52, "depthM": 30.085,
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
        "id": "BH5", "lat": 1.230696016581852, "lon": 111.4577186724582, "rlM": 5.53, "depthM": 24.070,
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
        "id": "BH6", "lat": 1.229859064507745, "lon": 111.4574453288203, "rlM": 5.42, "depthM": 30.160,
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
        "id": "BH7", "lat": 1.230239735274369, "lon": 111.4579427722577, "rlM": 5.10, "depthM": 24.070,
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
      [1.229498521188063, 111.4574098079336],
      [1.230446514601365, 111.4585316598169],
      [1.230369167465016, 111.4582565607028],
      [1.231722979978533, 111.4574392550496],
      [1.230873587566818, 111.4563604495926],
      [1.230057271916703, 111.4569801122528],
      [1.229498521188063, 111.4574098079336]
    ],
    "chPts": [],
    "sPos": [],
    "junc": [
      [1, "BH1", "BH1 — Peat & Soft Silt (W)",       "BH1 (RL 5.07m, GWL 3.34m): Peat 0–9m. Soft silt N=0–3 (9–13.5m). Stiff silt N=7–18 (13.5–19.5m). Hard silt N=50 (19.5–25.6m). Kedalaman 25.6m.", 111.4567190721134, 1.230844613982477],
      [2, "BH2", "BH2 — Peat & Soft Clay (NW)",      "BH2 (RL 5.39m, GWL 2.58m): Peat 0–9m. Soft clay N=0–2 (9–15m). Stiff silt N=6–19 (15–19.5m). Hard silt N=50 (19.5–25.7m). Kedalaman 25.7m.", 111.4572890642997, 1.231202385599171],
      [3, "BH3", "BH3 — Peat & Medium Silt (Ctr)",   "BH3 (RL 5.61m, GWL 2.30m): Peat 0–9m. Soft silt N=0–3 (9–15m). Medium silt N=6–12 (15–22.5m). Hard silt N=50 (22.5–28.7m). Kedalaman 28.7m.", 111.4570586755615, 1.230382214306199],
      [4, "BH4", "BH4 — Peat & Silt (Ctr-N)",        "BH4 (RL 5.52m, GWL 2.99m): Peat 0–6m. Soft silt N=3–4 (6–10.5m). Stiff silt N=5–15 (10.5–19.5m). Hard silt N=50 (19.5–30.1m). Kedalaman 30.1m.", 111.457249267201, 1.230870433257311],
      [5, "BH5", "BH5 — Peat & Soft Silt (E)",       "BH5 (RL 5.53m, GWL 2.36m): Peat 0–6m. Soft silt N=3–4 (6–10.5m). Stiff silt N=5–12 (10.5–18m). Hard silt N=50 (18–24.1m). Kedalaman 24.1m.", 111.4577186724582, 1.230696016581852],
      [6, "BH6", "BH6 — Peat & Soft Silt (S)",       "BH6 (RL 5.42m, GWL 2.92m): Peat 0–9m. Soft silt N=0–4 (9–16.5m). Stiff silt N=5–16 (16.5–22.5m). Hard silt N=50 (22.5–30.2m). Kedalaman 30.2m.", 111.4574453288203, 1.229859064507745],
      [7, "BH7", "BH7 — Peat & Soft Silt (SE)",      "BH7 (RL 5.10m, GWL 1.76m): Peat 0–6m. Soft silt N=0–4 (6–10.5m). Stiff silt N=5–10 (10.5–18m). Hard silt N=50 (18–24.1m). Kedalaman 24.1m.", 111.4579427722577, 1.230239735274369]
    ],
    "prop": [],
    "cps": [
      {"id": "CP1", "ch": 0, "name": "Bangunan Utama Mahkamah",      "detail": "GFA ~5,800m². Cerucuk spun 250mm Ø, 21m, 200kN. Aras lantai RL 6.20m.",    "lat": 1.23090, "lon": 111.45740, "url": ""},
      {"id": "CP2", "ch": 0, "name": "Pintu Masuk Utama — Jalan Bayu","detail": "Pintu masuk utama (RL 6.10m). Pondok pengawal pada cerucuk RC 150mm Ø, 9m, 20kN.", "lat": 1.22980, "lon": 111.45730, "url": ""},
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
