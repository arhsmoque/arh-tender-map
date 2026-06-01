/**
 * config.js — Tender Briefing Map Adapter
 *
 * @role     adapter / rules-config
 * @contract APP_CONFIG → consumed by index.html + mobile.html + qr.html
 *
 * This is the ONLY file that changes between tender briefing deployments.
 * Base engine files must contain zero hardcoded project-specific values.
 */

const APP_CONFIG = {
  "project": {
    "title": "Menaik Taraf Jalan Tun Hamzah (FT264) dari Persimpangan JPJ ke Persimpangan Semabok Lebuh AMJ (FT019), Daerah Melaka Tengah, Melaka",
    "subtitle": "4.5 km · T1-1 -> K2-2 · Piawaian JKR U5 · Tender Terbuka · CIDB G7 CE  · Tempoh: 36 Bulan",
    "tenderNumber": "JKR/CKUB/23313/2026",
    "programme": "RMKe-12 RP3",
    "indicativePrice": "RM 178,940,000.00",
    "durationMonths": 36,
    "cidbClass": "G7 — Kategori CE",
    "cidbSpecialization": "CE01 & CE02",
    "procurementMethod": "Tender Terbuka",
    "designStandard": "JKR U5",
    "documentPrice": "RM 1,500"
  },
  "client": {
    "name": "JABATAN KERJA RAYA",
    "subname": "MALAYSIA",
    "url": "https://www.jkr.gov.my",
    "logo": "assets/logos/client-logo.png"
  },
  "consultant": {
    "name": "DPI Konsult Sdn Bhd",
    "subname": "Perunding Sivil & Struktur",
    "logo": "assets/logos/consultant-logo.png"
  },
  "dates": {
    "advertisement": "12 Mac 2026",
    "download": {
      "start": "6 Apr 2026",
      "end": "13 Apr 2026",
      "price": "RM 1,500"
    },
    "briefing": "31 Mac 2026",
    "closing": {
      "date": "28 Apr 2026",
      "time": "12.00 tgh"
    },
    "active": "briefing"
  },
  "stats": {
    "lengthKm": 4.5,
    "landAcquisitionLots": 245,
    "landAreaEkar": "~20",
    "landAreaSqm": "80,560",
    "constructionDurationMonths": 36
  },
  "map": {
    "center": [
      2.212,
      102.294
    ],
    "zoom": 14,
    "bounds": [
      [
        2.193,
        102.282
      ],
      [
        2.232,
        102.302
      ]
    ]
  },
  "photos": [
    {
      "ch": 200,
      "img": "ch200_simpang_jpj.jpg",
      "label": "Simpang JPJ Bukit Katil",
      "note": "CH 0+200"
    },
    {
      "ch": 550,
      "img": "ch550_sk_demang.jpg",
      "label": "SK Dato Demang Hussin",
      "note": "CH 0+550 RHS"
    },
    {
      "ch": 730,
      "img": "ch730_perkuburan_islam_lama.jpg",
      "label": "Perkuburan Islam Lama Bukit Katil",
      "note": "CH 0+730 LHS"
    },
    {
      "ch": 790,
      "img": "ch790_klinik_desa.jpg",
      "label": "Klinik Desa Bukit Katil",
      "note": "CH 0+790 LHS"
    },
    {
      "ch": 900,
      "img": "ch900_masjid_raudhatul.jpg",
      "label": "Masjid Raudhatul Jannah Bukit Bayan",
      "note": "CH 0+900 LHS"
    },
    {
      "ch": 960,
      "img": "ch960_simpang_demang.jpg",
      "label": "Simpang Demang Hussin",
      "note": "CH 0+960"
    },
    {
      "ch": 1550,
      "img": "ch1550_monsoon_drain.jpg",
      "label": "Monsoon Drain",
      "note": "CH 1+550–1+750 RHS"
    },
    {
      "ch": 1775,
      "img": "ch1775_roundabout_tebing_tinggi.jpg",
      "label": "Roundabout Jalan Tebing Tinggi",
      "note": "CH 1+775"
    },
    {
      "ch": 1815,
      "img": "ch1815_arch_culvert.jpg",
      "label": "Arch Culvert",
      "note": "CH 1+815"
    },
    {
      "ch": 2200,
      "img": "ch2200_culvert_crossing.jpg",
      "label": "Culvert Crossing",
      "note": "CH 2+200"
    },
    {
      "ch": 2700,
      "img": "ch2700_perkuburan_cina.jpg",
      "label": "Perkuburan Cina",
      "note": "CH 2+700 LHS"
    },
    {
      "ch": 2775,
      "img": "ch2775_perkuburan_islam_duyong.jpg",
      "label": "Perkuburan Islam Bukit Duyong",
      "note": "CH 2+775 LHS"
    },
    {
      "ch": 3125,
      "img": "ch3125_overhead_gantry.jpg",
      "label": "Overhead Gantry Sign Board",
      "note": "CH 3+125"
    },
    {
      "ch": 3330,
      "img": "ch3330_persimpangan_duyong.jpg",
      "label": "Persimpangan Duyong",
      "note": "CH 3+330"
    },
    {
      "ch": 3330,
      "img": "ch3330_rs_wall_duyong.jpg",
      "label": "RS Wall Persimpangan Duyong",
      "note": "CH 3+330 RHS"
    },
    {
      "ch": 3675,
      "img": "ch3675_simpang_perigi_hang_tuah.jpg",
      "label": "Persimpangan Perigi Hang Tuah",
      "note": "CH 3+675"
    },
    {
      "ch": 3900,
      "img": "ch3900_crossing_culvert.jpg",
      "label": "Crossing Culvert",
      "note": "CH 3+900"
    },
    {
      "ch": 3600,
      "img": "ch3330_pokok_warisan.jpg",
      "label": "Pokok Warisan (Heritage Trees)",
      "note": "CH 3+330–4+300"
    }
  ],
  "scope": [
    {
      "color": "#ff8833",
      "text": "Menaik taraf jalan T1-1 kepada K2-2, 4.5 km (U5)"
    },
    {
      "color": "#ff33cc",
      "text": "Menggantikan 1 jambatan & membina 1 flyover (Duyong/Hang Tuah)"
    },
    {
      "color": "#33ccff",
      "text": "Membina U-Turn"
    },
    {
      "color": "#ff4455",
      "text": "Menaiktaraf 6 persimpangan"
    },
    {
      "color": "#aaff00",
      "text": "Membina 1 jejantas pejalan kaki & motosikal"
    },
    {
      "color": "#ffaa00",
      "text": "Membina 5 hentian bas"
    },
    {
      "color": "#22cc77",
      "text": "Membina 2 motorcycle shelter"
    },
    {
      "color": "#7a84a0",
      "text": "Pembentung & perparitan"
    },
    {
      "color": "#7a84a0",
      "text": "Kerja-kerja geoteknik"
    },
    {
      "color": "#7a84a0",
      "text": "Perabot jalan baharu"
    },
    {
      "color": "#ffcc00",
      "text": "Pemasangan lampu jalan LED (NSC)"
    },
    {
      "color": "#ff4455",
      "text": "Pengambilan tanah (245 lot, ~20 ekar)"
    },
    {
      "color": "#ff8833",
      "text": "Pengalihan utiliti"
    }
  ],
  "designStandards": [
    {
      "parameter": "Design Standard",
      "unit": "—",
      "value": "U5"
    },
    {
      "parameter": "Design Speed",
      "unit": "km/h",
      "value": "60"
    },
    {
      "parameter": "Lane Width",
      "unit": "m",
      "value": "3.50"
    },
    {
      "parameter": "Paved Shoulder",
      "unit": "m",
      "value": "2.50"
    },
    {
      "parameter": "Min. Median Width",
      "unit": "m",
      "value": "1.60"
    },
    {
      "parameter": "Min. Reserve Width",
      "unit": "m",
      "value": "40"
    },
    {
      "parameter": "Min. SSD",
      "unit": "m",
      "value": "85"
    },
    {
      "parameter": "Min. Radius",
      "unit": "m",
      "value": "135"
    },
    {
      "parameter": "Max Superelevation",
      "unit": "ratio",
      "value": "0.06"
    },
    {
      "parameter": "Max Grade",
      "unit": "%",
      "value": "8"
    }
  ],
  "landAcquisition": [
    {
      "area": "Mukim Bukit Katil",
      "lots": "65"
    },
    {
      "area": "Mukim Duyong",
      "lots": "180"
    },
    {
      "area": "Jumlah Lot",
      "lots": "245"
    },
    {
      "area": "Jumlah Luas",
      "lots": "80,560 m² (≈20 ekar)"
    }
  ],
  "alerts": [
    {
      "type": "warning",
      "title": "⚠ GP Utiliti PK berkuatkuasa 1 Jan 2026",
      "body": "GP Utiliti RMKe-12 tamat 31 Dis 2025. GP Utiliti PK (RMKe-13) kini berkuatkuasa. Kontraktor Utama layak untuk <strong>Yuran Attendance</strong> bagi setiap kerja utiliti."
    }
  ],
  "contacts": [
    {
      "label": "HOPT — Pengurusan Projek (BPPS)",
      "members": [
        {
          "name": "En. Ir. Ahmad Paridz bin Abdullah",
          "title": "JA Penguasa Kanan",
          "email": "paridz@jkr.gov.my"
        },
        {
          "name": "En. Mohd Imran bin Ismail",
          "title": "JA Kanan",
          "email": "imrani@jkr.gov.my"
        },
        {
          "name": "En. Ir. Ts. Ali Amran bin Kamaruzaman",
          "title": "JA",
          "email": "aliamran@jkr.gov.my"
        },
        {
          "name": "Pn. Nur Farhana binti Muhaiyadin",
          "title": "PJA",
          "email": "nfarhanam@jkr.gov.my"
        }
      ]
    },
    {
      "label": "HODT — Rekabentuk Jalan (BRJZS)",
      "members": [
        {
          "name": "Pn. Hasniah binti Mat Ali",
          "title": "JA Penguasa Kanan",
          "email": "hasniah@jkr.gov.my"
        },
        {
          "name": "En. Mohd Azlan bin Nobiran",
          "title": "JA Kanan",
          "email": "mohdazlann@jkr.gov.my"
        },
        {
          "name": "Ir. Ts. Mohammad Hafizi bin Ghazali",
          "title": "JA",
          "email": "hafizighazali@jkr.gov.my"
        }
      ]
    },
    {
      "label": "HODT — Ukur Bahan (CKUB)",
      "members": [
        {
          "name": "Sr Roslan bin Ahmad",
          "title": "JUBPK J14",
          "email": "roslan@jkr.gov.my"
        },
        {
          "name": "Irma Azreen binti Mazri",
          "title": "JUBK J12",
          "email": "irma@jkr.gov.my"
        },
        {
          "name": "Nur Nadia binti Mazlan",
          "title": "JUB J9",
          "email": "—"
        },
        {
          "name": "Aeisya Syafiqa binti Sanusi",
          "title": "PJUB JA5",
          "email": "syafiqasanusi@jkr.gov.my"
        }
      ]
    },
    {
      "label": "HODT — Geoteknik (CKG)",
      "members": [
        {
          "name": "Ir. Nor Fardzilah binti Abdul Rahman",
          "title": "JA Penguasa Kanan",
          "email": "fardzilah@jkr.gov.my"
        },
        {
          "name": "Ir. Zuraikha binti Samsuddin",
          "title": "JA Kanan",
          "email": "zuraikha@jkr.gov.my"
        },
        {
          "name": "Ir. Nursyuhadah binti Mohd Isa",
          "title": "JA",
          "email": "nursyuhadah@jkr.gov.my"
        }
      ]
    },
    {
      "label": "HODT — Elektrik (CKE)",
      "members": [
        {
          "name": "Ir. Saiful Zuhaimi bin Ahmad",
          "title": "JE Penguasa Kanan",
          "email": "szuhaimi@jkr.gov.my"
        },
        {
          "name": "Ir. Hasrudin bin Md. Fadzali",
          "title": "JE Penguasa",
          "email": "hasrudin@jkr.gov.my"
        },
        {
          "name": "Nadirah binti Mohd Nasir",
          "title": "JE",
          "email": "nadirahnasir@jkr.gov.my"
        },
        {
          "name": "Mohamad Akmal Hafiz bin Suliman",
          "title": "PJE",
          "email": "akmalhafiz@jkr.gov.my"
        }
      ]
    },
    {
      "label": "HODT — Alam Sekitar (CASKT)",
      "members": [
        {
          "name": "Ir. Hj. Mohd Zaini bin Abu Hassan",
          "title": "JE Penguasa Kanan",
          "email": "zainiah@jkr.gov.my"
        },
        {
          "name": "Ir. Lee Jin Ai",
          "title": "JA Kanan",
          "email": "jalee@jkr.gov.my"
        },
        {
          "name": "Nur Izzati binti Abdul Aziz",
          "title": "JE",
          "email": "nurizzati.aziz@jkr.gov.my"
        },
        {
          "name": "Norasma binti Hj Mohd Noor",
          "title": "PJA Kanan",
          "email": "norasma@jkr.gov.my"
        }
      ]
    }
  ],
  "theme": {
    "bg": "#0b0d12",
    "panel": "#13161f",
    "panel2": "#1a1e2b",
    "panel3": "#20253a",
    "border": "rgba(255,255,255,0.07)",
    "border2": "rgba(255,255,255,0.13)",
    "text": "#e4e8f0",
    "muted": "#7a84a0",
    "faint": "#3a4060",
    "accent": "#aaff00",
    "accent2": "rgba(170,255,0,0.12)",
    "accent3": "rgba(170,255,0,0.06)",
    "amber": "#ffaa00",
    "red": "#ff4455",
    "cyan": "#33ccff",
    "magenta": "#ff33cc",
    "orange": "#ff7733"
  },
  "qrPage": {
    "badge": "JABATAN KERJA RAYA MALAYSIA",
    "title": "FT264 Jalan Tun Hamzah Peta Interaktif",
    "subtitle": "Imbas kod QR untuk akses peta projek, gambar tapak, lokasi lawatan CP1–CP4 dan navigasi Waze",
    "chips": [
      "📱 Mobile Friendly"
    ],
    "note": "Selepas imbas → peta projek dibuka secara terus.<br>Klik CP1–CP4 → Navigasi Waze ke lokasi lawatan tapak.",
    "url": ""
  }
};

// Raw geospatial arrays (kept as JS for performance)
APP_CONFIG.POLY = [[2.231017546, 102.29918949], [2.230429658, 102.298805432], [2.229585371, 102.29859515], [2.228690699, 102.298878044], [2.227548969, 102.299599938], [2.226161744, 102.300061748], [2.225671579, 102.30001739], [2.223179258, 102.298844845], [2.222192635, 102.298482004], [2.221516255, 102.298336851], [2.220548919, 102.298251962], [2.2196621, 102.298316321], [2.217708853, 102.298907089], [2.216416717, 102.298568365], [2.215178585, 102.298170428], [2.21245102, 102.297336982], [2.210853116, 102.295989853], [2.209144834, 102.295390872], [2.207048682, 102.294466181], [2.20495304, 102.293712489], [2.203225971, 102.293217572], [2.201115759, 102.29265852], [2.200302968, 102.292365886], [2.199416546, 102.291978295], [2.196603162, 102.290168613], [2.193814046, 102.288262734]];
APP_CONFIG.CH_PTS = [[0, 2.231017546, 102.29918949], [100, 2.230238236396261, 102.29875775565573], [200, 2.2293693559993404, 102.29866345363261], [300, 2.2285321054922287, 102.29897831963584], [400, 2.2277718159050823, 102.29945903617234], [500, 2.2269457454739583, 102.2998007523283], [600, 2.226088960380299, 102.30005516136937], [700, 2.2252369711180964, 102.29981292303972], [800, 2.224423097766029, 102.29943002568037], [900, 2.2236092244139614, 102.29904712832099], [1000, 2.222781079561832, 102.29869841068549], [1100, 2.2219262883377633, 102.298424845277], [1200, 2.2210381232508754, 102.29829489233614], [1300, 2.220141748134435, 102.29828151155829], [1400, 2.2192615785531467, 102.29843746044325], [1500, 2.2184007142703, 102.29869783256754], [1600, 2.2175380624020615, 102.29886231749414], [1700, 2.2166680925512523, 102.29863426126187], [1800, 2.215807880634982, 102.29837268431605], [1900, 2.2149506072593566, 102.29810076618222], [2000, 2.2140904868845808, 102.29783794425649], [2100, 2.2132303665098045, 102.29757512233074], [2200, 2.212386429633136, 102.29728252844315], [2300, 2.211698639212639, 102.29670267982809], [2400, 2.2110108487921414, 102.29612283121304], [2500, 2.210199024778339, 102.29576050666606], [2600, 2.2093502912589575, 102.29546291221024], [2700, 2.2085211249258494, 102.29511573061355], [2800, 2.207698208194514, 102.29475271128327], [2900, 2.2068703588060097, 102.29440204754366], [3000, 2.2060240315345805, 102.29409766822035], [3100, 2.2051777042631513, 102.29379328889704], [3200, 2.2043179745056447, 102.29353050165076], [3300, 2.2034534011920326, 102.29328274546346], [3400, 2.202585290451237, 102.2930478384651], [3500, 2.201715917014955, 102.29281751802417], [3600, 2.2008537127072336, 102.29256417390754], [3700, 2.2000152176654337, 102.29224006619869], [3800, 2.1992096087971205, 102.2918451846492], [3900, 2.1984530878172865, 102.29135855985862], [4000, 2.1976965668374526, 102.29087193506804], [4100, 2.1969400458576187, 102.29038531027746], [4200, 2.196191193715752, 102.28988710384026], [4300, 2.1954484981019453, 102.28937959967989], [4400, 2.1947058024881385, 102.28887209551951], [4500, 2.1939631068743317, 102.28836459135914]];
APP_CONFIG.SPOS = [{"ch": 200, "img": "ch200_simpang_jpj.jpg", "label": "Simpang JPJ Bukit Katil", "note": "CH 0+200", "lat": 2.2293693559993404, "lon": 102.29866345363261}, {"ch": 550, "img": "ch550_sk_demang.jpg", "label": "SK Dato Demang Hussin", "note": "CH 0+550 RHS", "lat": 2.2265190724715374, "lon": 102.29994279263123}, {"ch": 730, "img": "ch730_perkuburan_islam_lama.jpg", "label": "Perkuburan Islam Lama Bukit Katil", "note": "CH 0+730 LHS", "lat": 2.2249928091124764, "lon": 102.29969805383192}, {"ch": 790, "img": "ch790_klinik_desa.jpg", "label": "Klinik Desa Bukit Katil", "note": "CH 0+790 LHS", "lat": 2.2245044851012357, "lon": 102.29946831541629}, {"ch": 900, "img": "ch900_masjid_raudhatul.jpg", "label": "Masjid Raudhatul Jannah Bukit Bayan", "note": "CH 0+900 LHS", "lat": 2.2236092244139614, "lon": 102.29904712832099}, {"ch": 960, "img": "ch960_simpang_demang.jpg", "label": "Simpang Demang Hussin", "note": "CH 0+960", "lat": 2.2231187309955796, "lon": 102.29882258555662}, {"ch": 1550, "img": "ch1550_monsoon_drain.jpg", "label": "Monsoon Drain", "note": "CH 1+550\u20131+750 RHS", "lat": 2.217970282128877, "lon": 102.29882801862968}, {"ch": 1775, "img": "ch1775_roundabout_tebing_tinggi.jpg", "label": "Roundabout Jalan Tebing Tinggi", "note": "CH 1+775", "lat": 2.2160219422913947, "lon": 102.29844148397018}, {"ch": 1815, "img": "ch1815_arch_culvert.jpg", "label": "Arch Culvert", "note": "CH 1+815", "lat": 2.2156794436411347, "lon": 102.29833140452357}, {"ch": 2200, "img": "ch2200_culvert_crossing.jpg", "label": "Culvert Crossing", "note": "CH 2+200", "lat": 2.212386429633136, "lon": 102.29728252844315}, {"ch": 2700, "img": "ch2700_perkuburan_cina.jpg", "label": "Perkuburan Cina", "note": "CH 2+700 LHS", "lat": 2.2085211249258494, "lon": 102.29511573061355}, {"ch": 2775, "img": "ch2775_perkuburan_islam_duyong.jpg", "label": "Perkuburan Islam Bukit Duyong", "note": "CH 2+775 LHS", "lat": 2.2079039373773477, "lon": 102.29484346611584}, {"ch": 3125, "img": "ch3125_overhead_gantry.jpg", "label": "Overhead Gantry Sign Board", "note": "CH 3+125", "lat": 2.204966122445294, "lon": 102.2937171940662}, {"ch": 3330, "img": "ch3330_persimpangan_duyong.jpg", "label": "Persimpangan Duyong", "note": "CH 3+330", "lat": 2.2031938518566343, "lon": 102.29320906277376}, {"ch": 3330, "img": "ch3330_rs_wall_duyong.jpg", "label": "RS Wall Persimpangan Duyong", "note": "CH 3+330 RHS", "lat": 2.2031938518566343, "lon": 102.29320906277376}, {"ch": 3675, "img": "ch3675_simpang_perigi_hang_tuah.jpg", "label": "Persimpangan Perigi Hang Tuah", "note": "CH 3+675", "lat": 2.200221240702286, "lon": 102.29233015046428}, {"ch": 3900, "img": "ch3900_crossing_culvert.jpg", "label": "Crossing Culvert", "note": "CH 3+900", "lat": 2.1984530878172865, "lon": 102.29135855985862}, {"ch": 3600, "img": "ch3330_pokok_warisan.jpg", "label": "Pokok Warisan (Heritage Trees)", "note": "CH 3+330\u20134+300", "lat": 2.2008537127072336, "lon": 102.29256417390754}];
APP_CONFIG.JUNC = [[0, "1", "Persimpangan JPJ Bukit Katil", "Mula projek (CH 0+000). Persimpangan sedia ada — dinaiktaraf.", 102.299182, 2.230963], [960, "2", "Simpang Demang Hussin", "CH 0+960. Persimpangan at-grade Jalan Demang Hussin.", 102.29904, 2.22353], [1775, "3", "Roundabout Jalan Tebing Tinggi", "CH 1+775. Bulatan sedia ada — dinaiktaraf sebagai sebahagian skop projek.", 102.29793, 2.21621], [3330, "4", "Persimpangan Duyong", "CH 3+330. Bersebelahan dengan BR2 Flyover. Persimpangan berbilang hala.", 102.29346, 2.20332], [3675, "5", "Persimpangan Perigi Hang Tuah", "CH 3+675. Persimpangan at-grade — dinaiktaraf.", 102.29128, 2.19849], [4500, "6", "Persimpangan Lebuh Ama / FT019 (TAMAT)", "TAMAT projek (CH 4+500). Persimpangan Semabok Lebuh AMJ (FT019).", 102.288241, 2.19385]];
APP_CONFIG.PROP = [[700, "Jejantas Pejalan Kaki & Motosikal", "Cadangan jejantas pejalan kaki dan motosikal. Bentang 28.5m, U-beam, cerucuk spun 300mm, lebar laluan 3.0m.", "jejantas"], [790, "BR1 — Menggantikan Jambatan Parit Besar Bukit Katil", "BR1: Jambatan integral 15m. Cerucuk bored 700mm. Carriageway 2-lorong. CH 0+790.", "bridge"], [3150, "BR2 — Flyover Persimpangan Kg. Duyong & Kg. Hang Tuah", "BR2: 7 rentang × 40m = 280m jumlah. T-beam 2145mm. Cerucuk bored 600mm. Pemisahan gred (grade separation).", "flyover"]];
APP_CONFIG.CPS = [{"id": "CP1", "name": "Depan Kompleks JAPERUN Bukit Katil", "lat": 2.228647, "lon": 102.298848, "url": "https://maps.app.goo.gl/RQjQa3qka5u9wt1z5"}, {"id": "CP2", "name": "Bulatan Tebing Tinggi", "lat": 2.216538, "lon": 102.298664, "url": "https://maps.app.goo.gl/W9iMssvFyv2BipHG8"}, {"id": "CP3", "name": "Balai Raya Bukit Duyong", "lat": 2.204294, "lon": 102.293617, "url": "https://Maps.App.Goo.Gl/Sdqw4rcgs9uhhaos9"}, {"id": "CP4", "name": "Kampung Tengah", "lat": 2.194338, "lon": 102.288704, "url": "https://maps.app.goo.gl/Xs2vsYaqnG1gxu3Y7"}];
