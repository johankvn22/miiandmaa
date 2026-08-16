export interface ServiceItem {
  id: string;
  title: string;
  category: 'class' | 'clinic' | 'doula';
  categoryLabel: string;
  tagline: string;
  duration: string;
  mode: 'Offline & Online' | 'Klinik Fisik' | 'Homecare / RS' | 'Online Zoom';
  price: string;
  originalPrice?: string;
  badge?: string;
  benefits: string[];
  description: string;
  schedule?: string;
  image: string;
}

export interface BirthStory {
  id: string;
  motherName: string;
  fatherName: string;
  babyName: string;
  birthType: string;
  birthLocation: string;
  quote: string;
  story: string;
  rating: number;
  image: string;
  highlight: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: 'Kehamilan' | 'Persalinan Alami' | 'Laktasi' | 'Nutrisi' | 'Pasca Salin';
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  takeaways: string[];
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Edukasi' | 'Persiapan Lahir' | 'Perawatan Nifas' | 'Aromaterapi';
  price: number;
  priceFormatted: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  description: string;
  features: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const CLINIC_INFO = {
  brandName: 'mii and maa',
  tagline: 'DAILY HOMECARE',
  subTagline: 'Daily Homecare & Holistic Gentle Birth Midwifery',
  phone: '+62 812-8899-2345',
  whatsappUrl: 'https://wa.me/6281288992345',
  email: 'halo@miiandmaa.id',
  address: 'Jl. Asri Harmoni No. 18, Kemang, Jakarta Selatan, 12560',
  operatingHours: 'Senin - Sabtu: 08.00 - 20.00 WIB',
  emergencyNote: 'Layanan Homecare, Pendampingan Persalinan & Darurat Buka 24/7',
  stats: [
    { value: '1.450+', label: 'Ibu & Bayi Terlayani', sub: 'Homecare & Gentle Birth' },
    { value: '14+', label: 'Tahun Pengalaman', sub: 'Lisensi Medis STR & SIPB Resmi' },
    { value: '4.800+', label: 'Alumni Kelas Edukasi', sub: 'Online & Workshop Tatap Muka' },
    { value: '99.4%', label: 'Tingkat Kepuasan', sub: 'Ulasan Kasih Ibu & Keluarga' }
  ]
};

export const PRACTITIONER_DATA = {
  name: 'Bidan Annisa Larasati, S.Tr.Keb, Bdn, C.Ht, CPM',
  shortName: 'Bidan Annisa',
  role: 'Founder mii and maa & Senior Holistic Midwife',
  licenseSTR: 'STR.32.01.2.2.1.2023.004189',
  licenseSIPB: '503/014/SIPB-DS/DINKES/2023',
  experienceYears: 14,
  bio: 'Berpengalaman lebih dari 14 tahun sebagai bidan klinis dan praktisi homecare kebidanan holistik. Melalui mii and maa Daily Homecare, Bidan Annisa mendedikasikan hidupnya untuk menghadirkan perawatan ibu dan bayi yang penuh kasih, menenangkan, aman secara medis, serta memberdayakan keluarga di rumah.',
  philosophy: 'Melahirkan dan merawat bayi baru lahir adalah momen sakral keluarga. Bersama mii and maa Daily Homecare, kami hadir mendampingi ibu dan si kecil dengan asuhan yang lembut, memeluk dengan empati, dan menjaga keselamatan medis dengan standar tertinggi.',
  certifications: [
    'Certified Hypnobirthing Practitioner (HypnoBirthing Institute USA)',
    'Spinning Babies® & Pelvic Balance Certified Specialist (Australia)',
    'Certified Lactation Counselor (CLC Indonesia)',
    'Certified Infant Massage & Baby Spa Instructor (IAIM)',
    'Akupresur Kebidanan & Terapi Moksibusi untuk Janin Sungsang',
    'Anggota Aktif Ikatan Bidan Indonesia (IBI) & Indonesian Doula Association'
  ],
  books: [
    {
      title: 'Lahir dengan Senyuman: Seni Melahirkan Tanpa Rasa Takut',
      publisher: 'Gramedia Pustaka Utama (Cetakan ke-7)',
      year: '2024',
      badge: 'National Bestseller'
    },
    {
      title: 'Buku Saku Ayah Siaga: Panduan Lengkap Menemani Hamil & Melahirkan',
      publisher: 'Pustaka Sehati',
      year: '2025',
      badge: 'Favorit Komunitas'
    }
  ],
  mediaFeatures: [
    'Kompas TV - Inspirasi Indonesia: "Revolusi Homecare & Persalinan Nyaman"',
    'DetikHealth: "Mengenal Layanan Gentle Birth & Homecare mii and maa"',
    'Mother & Beyond Magazine: "Pakar Laktasi & Pendampingan Nifas Terbaik"',
    'Liputan6: "Tips Perawatan Bayi Baru Lahir & Nifas di Rumah"'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'postpartum-homecare',
    title: 'Mom & Baby Postpartum Care & Pijat Laktasi (Daily Homecare)',
    category: 'clinic',
    categoryLabel: 'Daily Homecare Layanan Utama',
    tagline: 'Perawatan nifas terpadu di rumah Anda: atasi ASI tersumbat, rawat tali pusat, dan pulihkan stamina ibu.',
    duration: '90 Menit / Kunjungan',
    mode: 'Homecare / RS',
    price: 'Rp 450.000',
    badge: 'Paling Diminati 🐘',
    benefits: [
      'Pijat payudara laktasi lembut untuk mengatasi payudara bengkak / mastitis',
      'Edukasi pelekatan mulut bayi (latch on) yang benar anti lecet',
      'Perawatan tali pusat steril & evaluasi luka jahitan perineum/SC',
      'Mandi rempah herbal nifas & bengkung/stagen modern',
      'Skrining depresi pasca salin (postpartum blues)'
    ],
    description: 'Bidan profesional mii and maa hadir langsung ke rumah Anda memberikan perawatan fisik dan emosional pasca melahirkan. Ibu dapat beristirahat nyaman sementara kami membantu transisi menyusui dan perawatan si kecil.',
    schedule: 'Setiap Hari: 08.00 - 17.00 WIB (Area Jabodetabek)',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gentle-birth-class',
    title: 'Kelas Persiapan Gentle Birth & Birth Partner',
    category: 'class',
    categoryLabel: 'Kelas & Workshop Edukasi',
    tagline: 'Bekali diri dan pasangan untuk persalinan yang terencana, tenang, dan memberdayakan.',
    duration: '2 Hari (Total 6 Jam)',
    mode: 'Offline & Online',
    price: 'Rp 650.000',
    originalPrice: 'Rp 850.000',
    badge: 'Workshop Terfavorit ⭐',
    benefits: [
      'Pemahaman fisiologi kontraksi & gelombang rahim tanpa panik',
      'Pelatihan teknik counter-pressure & pijat endorfin untuk suami',
      'Penyusunan Lembar Rencana Persalinan (Birth Plan) resmi',
      'Simulasi posisi persalinan tegak & optimalisasi panggul',
      'Modul fisik eksklusif mii and maa & akses grup konsultasi privat'
    ],
    description: 'Workshop komprehensif yang dirancang untuk calon ibu dan pasangannya. Mengupas tuntas cara kerja hormon persalinan, manajemen rasa tidak nyaman alami, serta teknik komunikasi asertif dengan dokter atau rumah sakit.',
    schedule: 'Setiap Sabtu & Minggu (Tersedia batch tatap muka di klinik & sesi Zoom privat)',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hypnobirthing-yoga',
    title: 'Hypnobirthing & Prenatal Gentle Yoga',
    category: 'class',
    categoryLabel: 'Kelas & Workshop Edukasi',
    tagline: 'Pelepasan ketakutan batin, pemulihan fleksibilitas panggul, dan koneksi batin ibu-janin.',
    duration: '75 Menit / Sesi',
    mode: 'Offline & Online',
    price: 'Rp 175.000',
    originalPrice: 'Rp 225.000',
    badge: 'Rutin Setiap Pekan',
    benefits: [
      'Afirmasi positif bawah sadar untuk melenyapkan rasa takut',
      'Gerakan yoga aman trimester 2 & 3 untuk membuka pintu panggul',
      'Teknik napas tiup-tiup (up-breathing & down-breathing)',
      'Optimalisasi posisi janin (mengatasi kepala belum masuk panggul)',
      'Free audio relaksasi mandiri format MP3 berdurasi 30 menit'
    ],
    description: 'Kombinasi latihan fisik ringan yang disesuaikan dengan anatomi ibu hamil bersama sugesti relaksasi hipnosis medis. Membantu menyeimbangkan ligamen rahim dan memicu pelepasan hormon cinta (oksitosin).',
    schedule: 'Selasa & Kamis: 16.00 WIB | Sabtu: 09.00 WIB',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'anc-holistic-clinic',
    title: 'Pemeriksaan ANC Holistik & Konsultasi USG Bidan',
    category: 'clinic',
    categoryLabel: 'Layanan Klinik & Home Visit',
    tagline: 'Pemeriksaan kehamilan humanis 45-60 menit tanpa terburu-buru, penuh ruang diskusi.',
    duration: '45 - 60 Menit',
    mode: 'Klinik Fisik',
    price: 'Rp 250.000',
    badge: 'Pemeriksaan Humanis',
    benefits: [
      'Pemeriksaan Leopold lengkap, tinggi fundus, dan detak jantung janin (Doppler)',
      'Konsultasi USG 2D/3D untuk konfirmasi posisi plasenta & cairan ketuban',
      'Pemeriksaan laboratorium sederhana (Hb, urin reduksi & protein)',
      'Konseling nutrisi berbasis pangan lokal & rempah alami ramah hamil',
      'Ruang periksa estetik, privat, dengan aromaterapi menenangkan'
    ],
    description: 'Sesi pemeriksaan antenatal care (ANC) yang hangat. Kami meluangkan waktu mendengarkan seluruh keluh kesah Anda, mengecek kondisi fisik secara menyeluruh, dan memberikan edukasi personal.',
    schedule: 'Senin - Sabtu: 09.00 - 18.00 WIB (Dengan Janji Temu)',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'doula-support',
    title: 'Doula & Pendampingan Persalinan Privat 24/7',
    category: 'doula',
    categoryLabel: 'Pendampingan Privat / Doula',
    tagline: 'Pendampingan berkelanjutan sejak masa aktif kontraksi hingga inisiasi menyusu dini.',
    duration: 'On-Call 24 Jam sejak UK 37 Minggu',
    mode: 'Homecare / RS',
    price: 'Rp 3.500.000',
    badge: 'Slot Terbatas (3 Pasien/Bulan)',
    benefits: [
      'Kesiagaan on-call 24 jam mulai usia kehamilan 37 minggu',
      '2x kunjungan persiapan prenatal di rumah sebelum HPL',
      'Pendampingan fisik langsung di RS/Klinik pilihan (pijat, Rebozo, hydrotherapy)',
      'Menjaga suasana ruang bersalin tetap tenang dan damai',
      '1x kunjungan nifas evaluasi laktasi pasca pulang ke rumah'
    ],
    description: 'Layanan doula profesional yang berfokus pada kenyamanan ibu dan memberdayakan ayah. Kami menjadi jembatan komunikasi dan pendamping fisik tanpa menggantikan wewenang medis dokter/bidan utama.',
    schedule: 'Booking minimal 2 bulan sebelum HPL',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'baby-spa-massage',
    title: 'Spa & Pijat Stimulasi Tumbuh Kembang Bayi (Home Visit / Klinik)',
    category: 'clinic',
    categoryLabel: 'Daily Homecare & Klinik',
    tagline: 'Stimulasi sensori-motorik, redakan kolik perut, dan tingkatkan kualitas tidur bayi.',
    duration: '60 Menit',
    mode: 'Homecare / RS',
    price: 'Rp 185.000',
    originalPrice: 'Rp 230.000',
    benefits: [
      'Pijat tubuh bayi lembut dengan minyak alami organik (food grade)',
      'Terapi senam bayi (baby gym) untuk koordinasi motorik kasar',
      'Hydrotherapy / renang air hangat steril dengan pelampung leher aman',
      'Teknik pijat khusus I Love U (ILU) untuk mengatasi kembung & susah BAB',
      'Ruang higienis bertema alam ramah anak'
    ],
    description: 'Terapi relaksasi khusus bayi usia 1 bulan hingga 2 tahun yang ditangani langsung oleh bidan terlatih bersertifikasi International Association of Infant Massage (IAIM).',
    schedule: 'Senin - Minggu: 09.00 - 17.00 WIB',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80'
  }
];

export const PAIN_POINTS = [
  {
    icon: 'BrainCircuit',
    fear: 'Ketakutan & Cemas Berlebih terhadap Rasa Sakit',
    fearDesc: 'Banyak calon ibu merasa ngeri mendengar cerita kontraksi yang digambarkan begitu menyiksa dan tanpa kendali.',
    solution: 'Filosofi Hypnobirthing & Relaksasi Gelombang',
    solutionDesc: 'Kami mengajarkan bahwa rasa mulas adalah gelombang alami rahim yang membuka jalan lahir. Dengan teknik napas dan sugesti tenang, tubuh melepas endorfin yang meredakan sensasi tersebut secara alami.'
  },
  {
    icon: 'FileText',
    fear: 'Minim Pengetahuan Seputar Intervensi Medis',
    fearDesc: 'Bingung saat dihadapkan pada opsi induksi, suntik oksitosin, atau episiotomi (pengguntingan perineum) tanpa tahu opsi alternatifnya.',
    solution: 'Penyusunan Birth Plan Berbasis Bukti Medis',
    solutionDesc: 'Kami membantu Anda menyusun Rencana Persalinan (Birth Plan) yang jelas, memahami indikasi medis yang sesungguhnya, serta melatih komunikasi asertif dan penuh rasa hormat dengan dokter kandungan.'
  },
  {
    icon: 'HeartHandshake',
    fear: 'Ayah / Pasangan Bingung Harus Berbuat Apa',
    fearDesc: 'Seringkali suami hanya menjadi penonton yang cemas di ruang bersalin karena tidak dibekali keterampilan praktis mendampingi istri.',
    solution: 'Pelatihan Praktis Peran "Birth Partner"',
    solutionDesc: 'Di mii and maa, suami dilatih teknik counter-pressure pinggang, pijat panggul, penggunaan kain Rebozo, dan kata-kata afirmasi agar menjadi pelindung terbaik istri saat melahirkan.'
  },
  {
    icon: 'Milk',
    fear: 'Stres ASI Seret & Nifas yang Melelahkan',
    fearDesc: 'Bingung mengatasi payudara bengkak, puting lecet berdarah, dan kelelahan mental merawat bayi baru lahir sendirian.',
    solution: 'Pendampingan Laktasi Intensif & Daily Homecare',
    solutionDesc: 'Bidan bersertifikasi konselor menyusui mendampingi Anda langsung di rumah, memastikan perlekatan yang nyaman, serta memulihkan stamina ibu melalui asuhan nifas holistik.'
  }
];

export const BIRTH_STORIES: BirthStory[] = [
  {
    id: 'story-1',
    motherName: 'dr. Pratiwi Rahmadani',
    fatherName: 'Dimas Wicaksono',
    babyName: 'Kalandra Bumi (3.4 kg, 50 cm)',
    birthType: 'Persalinan Alami Tanpa Jahitan (Intact Perineum)',
    birthLocation: 'RS Permata Bunda & Pendampingan mii and maa',
    quote: 'Saya sempat trauma karena riwayat keguguran sebelumnya. Bersama mii and maa dan Bidan Annisa, saya belajar melepaskan rasa takut dan percaya pada tubuh saya sendiri.',
    story: 'Saat pembukaan 6 hingga 10, saya tidak panik sama sekali. Teknik napas tiup-tiup yang diajarkan di kelas prenatal yoga benar-benar bekerja ajaib. Suami sigap memijat panggul saya dengan teknik counter-pressure. Alhamdulillah, Bumi lahir dengan tenang tanpa robekan perineum!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    highlight: 'Lahir Alami Tanpa Episiotomi'
  },
  {
    id: 'story-2',
    motherName: 'Nadia Salsabila',
    fatherName: 'Reza Pratama',
    babyName: 'Ayana Kirana (3.1 kg, 49 cm)',
    birthType: 'VBAC Sukses (Vaginal Birth After Cesarean)',
    birthLocation: 'Klinik Bersalin Kolaborasi Dokter-Bidan',
    quote: 'Anak pertama saya dioperasi caesar karena panik. Untuk anak kedua, saya bertekad mencari pendamping yang mau mendukung VBAC secara aman bersama tim mii and maa.',
    story: 'Bidan Annisa membantu saya mengevaluasi riwayat medis, mengoptimalkan posisi panggul dengan teknik Spinning Babies, dan menyusun birth plan yang matang. Persalinan kedua saya berjalan 7 jam saja dan saya bisa langsung IMD sambil memeluk Ayana.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    highlight: 'Sukses VBAC Minim Trauma'
  },
  {
    id: 'story-3',
    motherName: 'Citra Kirana Wardhana',
    fatherName: 'Bagas Aditya',
    babyName: 'Malik Danendra (3.2 kg, 48 cm)',
    birthType: 'Gentle Home Visit & Water Birth',
    birthLocation: 'Pendampingan Bidan mii and maa',
    quote: 'Layanan homecare mii and maa paska salin membuat hari-hari pertama saya sebagai new mom begitu tenang dan bebas dari baby blues.',
    story: 'Pijat laktasi di rumah membantu ASI saya mengalir lancar sejak hari ke-2. Bidan dengan sangat telaten merawat tali pusat Malik dan memandu saya cara menyusui yang benar tanpa rasa nyeri lecet.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    highlight: 'Daily Homecare Penuh Cinta'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'posisi-panggul-pembukaan-cepat',
    title: '5 Posisi Panggul Aktif untuk Mempercepat Pembukaan Alami Tanpa Induksi',
    category: 'Persalinan Alami',
    readTime: '5 Menit Baca',
    date: '12 Mei 2025',
    author: 'Bidan Annisa Larasati (mii and maa)',
    summary: 'Posisi tidur terlentang (lithotomy) seringkali memperlambat penurunan kepala bayi. Ketahui posisi tegak asimetris yang membuka ruang panggul hingga 30% lebih lebar.',
    content: [
      'Banyak ibu diinstruksikan untuk berbaring di tempat tidur saat kontraksi datang. Padahal menurut fisiologi kebidanan modern, gravitasi dan gerakan aktif adalah sahabat terbaik persalinan.',
      '1. Side-Lying dengan Peanut Ball: Sangat cocok saat ibu lelah namun ingin menjaga panggul tetap terbuka lebar.',
      '2. Asymmetric Lunges (Gerakan Terjang Satu Sisi): Membantu memutar kepala bayi yang masih berada di posisi posterior (menghadap ke depan).',
      '3. Pelvic Rocking di atas Birth Ball: Melenturkan otot dasar panggul dan meredakan tekanan saraf di tulang ekor.',
      '4. Standing Supported Squat: Menggunakan bantuan pasangan atau selendang Rebozo untuk memanfaatkan gravitasi bumi 100%.',
      '5. Hands and Knees (Posisi Merangkak): Posisi paling aman untuk mengurangi nyeri punggung luar biasa (back labor).'
    ],
    takeaways: [
      'Gerakan panggul aktif mempercepat fase aktif rata-rata 1-2 jam lebih cepat.',
      'Gunakan bantuan Birth Ball untuk mengurangi ketegangan pinggang bawah.',
      'Libatkan pasangan untuk memandu pergantian posisi setiap 30 menit.'
    ],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kontraksi-asli-vs-palsu',
    title: 'Tanda Kontraksi Asli vs Kontraksi Palsu (Braxton Hicks): Kapan Harus Hubungi Bidan?',
    category: 'Kehamilan',
    readTime: '4 Menit Baca',
    date: '28 April 2025',
    author: 'Bidan Annisa Larasati (mii and maa)',
    summary: 'Jangan buru-buru panik ke klinik di tengah malam jika kontraksi belum teratur. Pelajari aturan 5-1-1 dan ciri khas gelombang rahim sesungguhnya.',
    content: [
      'Memasuki usia kehamilan 36 minggu ke atas, rahim mulai melakukan "gladi resik" melalui kontraksi Braxton Hicks. Seringkali calon orang tua tergesa-gesa ke rumah sakit hanya untuk diberitahu pembukaan belum ada.',
      'Perbedaan Utama:',
      '• Kontraksi Palsu (Braxton Hicks): Polanya tidak teratur, durasinya singkat (15-30 detik), rasa kencang hanya di bagian depan perut, dan mereda saat ibu minum air putih hangat atau berganti posisi.',
      '• Kontraksi Asli (True Labor): Memiliki interval yang makin rapat (misal tiap 5 menit), durasinya makin panjang (45-60 detik), sensasinya menyebar dari pinggang belakang melingkar ke bawah perut, dan TIDAK hilang saat ibu istirahat.',
      'Kapan Harus Berangkat? Terapkan rumus 5-1-1: Kontraksi datang setiap 5 menit sekali, berlangsung selama minimal 1 menit, dan telah konsisten terjadi selama 1 jam berturut-turut.'
    ],
    takeaways: [
      'Gunakan aplikasi penghitung kontraksi untuk merekam jeda waktu dengan akurat.',
      'Tetaplah tenang di rumah pada fase laten (pembukaan 1-3) untuk menghemat energi fisik.',
      'Segera hubungi tim homecare mii and maa jika ada cairan ketuban merembes atau flek lendir darah tebal.'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'perineum-utuh-tanpa-jahitan',
    title: 'Rahasia Perineum Utuh: Panduan Pijat Perineum & Teknik Nafas Tiup-Tiup',
    category: 'Persalinan Alami',
    readTime: '6 Menit Baca',
    date: '15 April 2025',
    author: 'Bidan Annisa Larasati (mii and maa)',
    summary: 'Mitos bahwa semua kelahiran anak pertama harus digunting (episiotomi) adalah keliru. Simak cara menjaga elastisitas jaringan jalan lahir secara ilmiah.',
    content: [
      'Kekhawatiran terbesar banyak ibu adalah rasa sakit saat dijahit paska melahirkan. Padahal robekan perineum derajat berat dapat dicegah dengan persiapan yang terencana sejak trimester ketiga.',
      '1. Rutin Pijat Perineum (Mulai UK 34 Minggu): Gunakan minyak almond murni organik. Lakukan gerakan U lembut di bibir bawah vagina selama 5-10 menit, 3-4 kali seminggu untuk meningkatkan elastisitas serat otot.',
      '2. Hindari Mengedan Seperti BAB Keras (Valsalva Maneuver): Mengedan sambil menahan napas dan mata terpejam meningkatkan tekanan mendadak yang memicu robekan.',
      '3. Terapkan Teknik "Napas Tiup-Tiup" (Breathing the Baby Down): Saat kepala bayi sudah di jalan lahir (crowning), tiup napas perlahan seperti meniup lilin ulang tahun agar jaringan meregang bertahap mengikuti irama alami.'
    ],
    takeaways: [
      'Pijat perineum terbukti mengurangi risiko robekan tingkat 3 & 4 hingga 64%.',
      'Kompres hangat pada area perineum saat pembukaan lengkap sangat membantu relaksasi.',
      'Komunikasikan dengan penolong persalinan agar tidak melakukan episiotomi rutin.'
    ],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'manajemen-laktasi-hari-pertama',
    title: 'Manajemen Kolostrum & Tips Mengatasi Payudara Bengkak di Hari ke-3',
    category: 'Laktasi',
    readTime: '5 Menit Baca',
    date: '02 April 2025',
    author: 'Bidan Annisa Larasati (mii and maa)',
    summary: 'Mengapa ASI tampak belum keluar di hari pertama? Kenali ukuran lambung bayi baru lahir dan cara menstimulasi refleks let-down tanpa stres.',
    content: [
      'Banyak ibu baru merasa gagal menyusui karena ASI belum memancar deras di hari pertama. Ketahuilah bahwa lambung bayi usia 1 hari hanya berukuran sebesar kelereng (5-7 ml)!',
      'Cairan kuning kental bernama kolostrum yang keluar sedikit demi sedikit justru adalah vaksin alami pertama yang kaya imunoglobulin A (IgA).',
      'Saat hari ke-3 atau ke-4, lonjakan hormon prolaktin menyebabkan "milk coming in" yang kerap memicu payudara mengeras dan bengkak (engorgement). Atasi dengan teknik kompres hangat sebelum menyusu, pijat oksitosin di tulang belakang oleh suami, dan layanan kunjungan homecare laktasi mii and maa.'
    ],
    takeaways: [
      'Jangan buru-buru memberi susu formula tanpa indikasi medis; kolostrum cukup untuk 3 hari pertama.',
      'Pelekatan (latch on) yang dalam adalah kunci utama menyusui tanpa rasa nyeri.',
      'Pijat punggung suami secara signifikan memicu hormon oksitosin.'
    ],
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'buku-lahir-senyuman',
    name: 'Buku "Lahir dengan Senyuman" (Signed Edition + Jurnal Kehamilan)',
    category: 'Edukasi',
    price: 135000,
    priceFormatted: 'Rp 135.000',
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Best Seller 📚',
    description: 'Buku pegangan wajib calon orang tua karya Bidan Annisa Larasati. Dilengkapi panduan afirmasi harian, barcode audio relaksasi, dan lembar kerja birth plan.',
    features: [
      '240 halaman full color dengan ilustrasi anatomi yang ramah & mudah dipahami',
      'Free Audio Guide Hypnobirthing MP3 via QR code',
      'Bonus Planner Kehamilan 40 Minggu & Template Catatan Gerakan Janin',
      'Tanda tangan langsung & pesan doa khusus dari Bidan Annisa'
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mamacalm-perineal-oil',
    name: 'mii and maa™ Organic Perineal & Labor Massage Oil (100ml)',
    category: 'Persiapan Lahir',
    price: 110000,
    priceFormatted: 'Rp 110.000',
    rating: 4.9,
    reviewsCount: 218,
    badge: 'Bidan Approved 🌿',
    description: 'Minyak formulasi khusus 100% cold-pressed organic sweet almond, jojoba, vitamin E, dan ekstrak chamomile untuk elastisitas jalan lahir.',
    features: [
      'Aman untuk area mukosa sensitif tanpa pewangi sintetis atau paraben',
      'Meningkatkan fleksibilitas jaringan perineum sebelum persalinan',
      'Dapat digunakan sebagai minyak pijat pinggang suami saat fase kontraksi',
      'Tekstur licin tahan lama tanpa rasa lengket'
    ],
    image: 'https://images.unsplash.com/photo-1608248597359-52e69a9b6c00?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'birth-ball-anti-burst',
    name: 'Anti-Burst Maternity Birth Ball 65cm + Pompa & Poster Gerakan',
    category: 'Persiapan Lahir',
    price: 185000,
    priceFormatted: 'Rp 185.000',
    rating: 4.8,
    reviewsCount: 184,
    badge: 'Perlengkapan Wajib 🤰',
    description: 'Bola persalinan berbahan PVC tebal anti-pecah (anti-burst up to 300kg) bertekstur matte anti-slip untuk latihan panggul di rumah.',
    features: [
      'Ukuran 65cm ideal untuk tinggi badan ibu hamil 150 - 170 cm',
      'Termasuk pompa angin cepat (quick foot pump) & alat pengukur diameter',
      'Bonus Poster 12 Gerakan Optimalisasi Panggul Trimester 3 & Ruang Bersalin',
      'Material ramah lingkungan BPA-free'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'korset-nifas-bambu',
    name: 'Korset Nifas Medis 3-in-1 Serat Bambu Antibakteri',
    category: 'Perawatan Nifas',
    price: 245000,
    priceFormatted: 'Rp 245.000',
    rating: 4.9,
    reviewsCount: 156,
    badge: 'Pemulihan Cepat ✨',
    description: 'Penyangga perut dan panggul pasca salin yang lembut, elastis, dan menyerap keringat. Aman untuk ibu bersalin normal maupun pasca operasi Caesar.',
    features: [
      'Bahan serat bambu alami yang sejuk dan tidak menimbulkan gatal/ruam',
      '3 sabuk terpisah: Sabuk Perut, Sabuk Pinggang, dan Sabuk Tulang Panggul',
      'Membantu merapatkan kembali otot rektus abdominis (diastasis recti)',
      'Pengait velcro medis ekstra kuat dengan tekanan yang dapat diatur'
    ],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  }
];

export const HOSPITAL_BAG_CHECKLIST = [
  {
    category: 'Dokumen & Administrasi',
    items: [
      { id: 'doc-1', text: 'KTP Asli Suami & Istri + 3 Lembar Fotokopi', done: false },
      { id: 'doc-2', text: 'Kartu Keluarga (KK) & Buku Nikah Asli + Fotokopi', done: false },
      { id: 'doc-3', text: 'Buku Kesehatan Ibu dan Anak (Buku KIA / Pink)', done: true },
      { id: 'doc-4', text: 'Kartu Asuransi / BPJS Kesehatan Aktif', done: false },
      { id: 'doc-5', text: 'Lembar Rencana Persalinan (Birth Plan) yang Sudah Ditandatangani', done: true },
      { id: 'doc-6', text: 'Hasil USG & Pemeriksaan Lab Trimester 3 Terakhir', done: false }
    ]
  },
  {
    category: 'Perlengkapan Ibu Melahirkan',
    items: [
      { id: 'mom-1', text: 'Baju Tidur Kancing Depan / Busui Friendly (3-4 Pasang)', done: false },
      { id: 'mom-2', text: 'Pembalut Nifas Ekstra Panjang (Ukuran 35-45 cm, minimal 2 pack)', done: false },
      { id: 'mom-3', text: 'Celana Dalam Katun Longgar / Disposable Underwear (6-8 Pcs)', done: false },
      { id: 'mom-4', text: 'Bra Menyusui Tanpa Kawat (3 Pcs) & Nipple Cream Organik', done: false },
      { id: 'mom-5', text: 'Minyak Pijat Perineum / Minyak Telon & Essential Oil Diffuser', done: false },
      { id: 'mom-6', text: 'Korset Nifas Medis Serat Bambu', done: false },
      { id: 'mom-7', text: 'Perlengkapan Mandi Pribadi & Sandal Karet Nyaman Anti-Slip', done: false }
    ]
  },
  {
    category: 'Perlengkapan Bayi Baru Lahir',
    items: [
      { id: 'baby-1', text: 'Baju Bayi Katun Lembut SNI (4-5 Pasang)', done: false },
      { id: 'baby-2', text: 'Bedong Bayi Katun / Muslin (4-5 Helai)', done: false },
      { id: 'baby-3', text: 'Topi, Sarung Tangan & Sarung Kaki Bayi (3 Pasang)', done: false },
      { id: 'baby-4', text: 'Popok Bayi Newborn (Cloth Diaper / Disposable Size NB, 1 pack)', done: false },
      { id: 'baby-5', text: 'Kassa Steril & Minyak Kelapa Murni (VCO) untuk Meconium', done: false },
      { id: 'baby-6', text: 'Selimut Bertopi untuk Kepulangan Bayi ke Rumah', done: false }
    ]
  },
  {
    category: 'Kebutuhan Ayah & Pendamping',
    items: [
      { id: 'dad-1', text: 'Pakaian Ganti Suami (2-3 Pasang) & Jaket Hangat', done: false },
      { id: 'dad-2', text: 'Powerbank Kapasitas Besar & Kabel Charger Ekstra Panjang', done: false },
      { id: 'dad-3', text: 'Kudapan Penambah Energi (Kurma, Madu, Kacang Almond, Air Kelapa)', done: false },
      { id: 'dad-4', text: 'Kain Rebozo untuk Pijat & Bantal Leher', done: false },
      { id: 'dad-5', text: 'Uang Tunai Secukupnya untuk Keperluan Darurat', done: false }
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Layanan & Kelas',
    question: 'Bagaimana cara memesan layanan Daily Homecare mii and maa?',
    answer: 'Anda dapat langsung mengklik tombol "Konsultasi Sekarang" atau menghubungi admin WhatsApp kami. Tim bidan kami akan menjadwalkan kunjungan homecare sesuai waktu yang paling nyaman untuk Anda dan si kecil.'
  },
  {
    category: 'Layanan & Kelas',
    question: 'Kapan waktu yang paling ideal untuk mulai mengikuti Kelas Gentle Birth & Yoga?',
    answer: 'Waktu terbaik untuk memulai prenatal yoga adalah saat kehamilan menginjak usia 16-20 minggu (Trimester 2) saat morning sickness sudah mereda. Untuk Kelas Workshop Gentle Birth & Pelatihan Suami (Birth Partner), kami sarankan diikuti pada usia kehamilan 24-34 minggu.'
  },
  {
    category: 'Layanan & Kelas',
    question: 'Apakah suami / pasangan wajib ikut mendampingi di sesi kelas?',
    answer: 'Sangat disarankan! Di mii and maa, peran suami dipandang krusial sebagai "Birth Partner". Kami membekali suami keterampilan praktis memijat pinggang, mengarahkan napas saat kontraksi, serta memberikan perlindungan emosional agar ibu merasa aman 100% saat bersalin.'
  },
  {
    category: 'Klinik & Medis',
    question: 'Apakah layanan mii and maa menerima rujukan ke Rumah Sakit jika terjadi komplikasi?',
    answer: 'Tentu saja. Sebagai tenaga kesehatan berlisensi resmi (STR & SIPB aktif), kami memiliki jejaring rujukan resmi dengan berbagai Rumah Sakit rujukan dan Dokter Spesialis Obgyn (Sp.OG). Keselamatan ibu dan bayi adalah prioritas utama kami di atas segalanya.'
  },
  {
    category: 'Homecare & Doula',
    question: 'Berapa luas jangkauan wilayah untuk layanan Daily Homecare & Kunjungan Nifas?',
    answer: 'Layanan kunjungan rumah (Daily Homecare nifas, pijat laktasi, dan baby spa) saat ini melayani seluruh area Jakarta, Tangerang Selatan, Depok, Bekasi, dan Bogor. Tim bidan kami membawa seluruh peralatan higienis dan bahan alami langsung ke kediaman Anda.'
  }
];
