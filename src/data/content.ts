export interface ServiceItem {
  id: string;
  title: string;
  category: 'baby' | 'mom' | 'medical';
  categoryLabel: string;
  tagline: string;
  duration: string;
  mode: string;
  price?: string;
  badge?: string;
  benefits: string[];
  description: string;
  image: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  period: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  target: string;
}

export interface PainPointItem {
  icon: string;
  fear: string;
  fearDesc: string;
  solution: string;
  solutionDesc: string;
}

export interface BirthStory {
  id: string;
  motherName: string;
  fatherName?: string;
  babyName: string;
  birthType?: string;
  birthLocation?: string;
  location?: string;
  serviceTaken?: string;
  quote: string;
  story: string;
  rating: number;
  image: string;
  highlight: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: 'Baby Care' | 'Mom Care' | 'Laktasi' | 'Parenting';
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
  subTagline: 'Pelayanan Kesehatan Ibu dan Anak Ditangani oleh Tim Bidan Berkompeten & Berpengalaman',
  phone: '+62 811-2037-714',
  whatsappUrl: 'https://wa.me/628112037714',
  instagram: '@miiandmaa.dailyhomecare',
  instagramUrl: 'https://www.instagram.com/miiandmaa.dailyhomecare/',
  email: 'halo@miiandmaa.id',
  address: 'Jl. Asri Harmoni No. 18, Bandung & Jabodetabek',
  coverageAreas: 'Bandung, Cimahi, KBB (Kabupaten Bandung Barat), & Jabodetabek',
  operatingHours: 'Senin - Minggu: 08.00 - 18.00 WIB (Reservasi H-1 via WA)',
  emergencyNote: 'Layanan Home Visit Homecare Bidan Datang Langsung ke Rumah Anda',
  stats: [
    { value: '56.4K+', label: 'Komunitas Mama di IG', sub: '@miiandmaa.dailyhomecare' },
    { value: '1.690+', label: 'Postingan Edukasi & Asuhan', sub: 'Terbukti Bermanfaat untuk Ribuan Klien' },
    { value: '4 Wilayah', label: 'Jangkauan Homecare', sub: 'Bandung, Cimahi, KBB & Jabodetabek' },
    { value: '100%', label: 'Tenaga Bidan Ahli', sub: 'Bersertifikasi Resmi Mom & Baby Spa' }
  ]
};

export const PRACTITIONER_DATA = {
  name: 'Bidan Sulastria TM',
  shortName: 'Bidan Sulastria TM',
  role: 'Founder mii and maa Daily Homecare & Praktisi Senior Mom-Baby Care',
  title: 'Dipimpin langsung oleh Bidan Sulastria TM bersama tim bidan bersertifikasi khusus kesehatan ibu dan anak.',
  bio: 'Mii and maa Daily Homecare dipimpin oleh Bidan Sulastria TM dan didukung oleh tim bidan yang berkompeten, berpengalaman, serta memiliki sertifikasi profesional di bidang Mom & Baby Spa, asuhan laktasi, dan perawatan nifas ke rumah.',
  philosophy: 'Perawatan mama dan si kecil kapan saja dan di mana saja tanpa harus repot keluar rumah. Kami hadir dengan sentuhan penuh kasih, higienis, dan standar medis kebidanan terbaik.',
  licenseSTR: 'STR Bidan Kemenkes Aktif',
  licenseSIPB: 'SIPB Praktik Bidan Resmi',
  certifications: [
    'Sertifikasi Resmi Mom & Baby Spa Specialist',
    'Sertifikasi Pijat Pediatric & Penanganan Kolik/Kembung Bayi',
    'Certified Lactation & Breast Care Specialist (Pijat Oksitosin)',
    'Pelayanan Kebidanan Profesional Berlisensi Resmi (STR Bidan Aktif)',
    'Tersedia Tim Bidan Siaga di Bandung Raya & Jabodetabek'
  ],
  books: [
    {
      title: 'Panduan Asuhan Ibu & Bayi di Rumah',
      publisher: 'Pustaka mii and maa',
      year: '2025',
      badge: 'Buku Pegangan Mama'
    }
  ],
  mediaFeatures: [
    'Instagram: @miiandmaa.dailyhomecare (56.4K Followers)',
    'Komunitas Ibu & Bayi Bandung Raya & Jabodetabek'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'breast-care-laktasi',
    title: 'Breast Care (Pijat Laktasi & Pijat Oksitosin)',
    category: 'mom',
    categoryLabel: 'Perawatan Ibu Menyusui',
    tagline: 'Perawatan payudara lembut untuk melancarkan ASI, atasi payudara bengkak/sumbatan, dan cegah mastitis.',
    duration: '60 - 90 Menit / Kunjungan',
    mode: 'Layanan ke Rumah (Homecare)',
    price: 'Konsultasi via WA',
    badge: 'Best Seller Mom 🌸',
    benefits: [
      'Pijat laktasi lembut untuk membuka sumbatan saluran ASI',
      'Pijat stimulasi hormon oksitosin di tulang belakang untuk memicu aliran ASI deras',
      'Kompres terapeutik & evaluasi pelekatan mulut bayi (latch-on)',
      'Relaksasi otot bahu, leher, dan punggung atas ibu menyusui',
      'Konseling manajemen ASI perah & nutrisi pelancar ASI'
    ],
    description: 'Sangat direkomendasikan untuk ibu baru pasca melahirkan yang mengalami ASI seret, payudara mengeras, atau puting lecet. Bidan kami hadir membantu langsung di rumah Anda.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'baby-kids-massage',
    title: 'Baby & Kids Massage (Pijat Bayi & Balita)',
    category: 'baby',
    categoryLabel: 'Perawatan Bayi & Anak',
    tagline: 'Merilekskan otot, merangsang stimulasi tumbuh kembang, dan meningkatkan kualitas tidur si kecil.',
    duration: '45 - 60 Menit',
    mode: 'Layanan ke Rumah (Homecare)',
    price: 'Konsultasi via WA',
    badge: 'Favorit Si Kecil 👶',
    benefits: [
      'Pijat tubuh lembut dengan minyak alami organik aman untuk kulit sensitif',
      'Membantu bayi tidur lebih lelap dan tidak mudah rewel di malam hari',
      'Stimulasi sensori-motorik & kelenturan otot fase tengkurap/merangkak',
      'Meningkatkan nafsu makan dan memperlancar sirkulasi darah',
      'Ditangani langsung oleh bidan ahli tersertifikasi baby spa'
    ],
    description: 'Pijat relaksasi yang disesuaikan dengan usia bayi (newborn hingga balita). Membantu menjaga kebugaran tubuh si kecil agar tumbuh kembangnya optimal.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pijat-pediatric-kolik',
    title: 'Pijat Pediatric Khusus Bayi Rewel / Kembung & Kolik',
    category: 'baby',
    categoryLabel: 'Perawatan Bayi Khusus',
    tagline: 'Penanganan khusus untuk mengeluarkan gas terjebak di perut, redakan perut kembung & atasi kolik.',
    duration: '45 - 60 Menit',
    mode: 'Layanan ke Rumah (Homecare)',
    price: 'Konsultasi via WA',
    badge: 'Solusi Bayi Rewel 🩺',
    benefits: [
      'Teknik pijat perut khusus I Love You (ILU) & gerakan kayuh sepeda',
      'Membantu mengeluarkan gas penyebab kembung dan begah pada bayi',
      'Menenangkan tangisan kolik yang berkepanjangan di sore/malam hari',
      'Membantu mengatasi bayi susah BAB atau sembelit',
      'Edukasi cara sendawakan bayi yang benar untuk orang tua'
    ],
    description: 'Teknik pijat pediatric klinis yang terbukti ampuh meredakan ketidaknyamanan saluran cerna bayi sehingga bayi kembali tenang dan ceria.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'postnatal-massage-nifas',
    title: 'Pijat Nifas (Postnatal Massage & Pemulihan Ibu)',
    category: 'mom',
    categoryLabel: 'Perawatan Ibu Pasca Melahirkan',
    tagline: 'Memulihkan stamina tubuh, mengurangi pegal pascapersalinan, dan mempercepat pemulihan rahim.',
    duration: '90 - 120 Menit',
    mode: 'Layanan ke Rumah (Homecare)',
    price: 'Konsultasi via WA',
    badge: 'Pemulihan Cepat ✨',
    benefits: [
      'Pijat seluruh tubuh relaksasi untuk meredakan nyeri otot paska bersalin',
      'Bantu mempercepat involusi rahim (pengembalian ukuran rahim ke semula)',
      'Pemasangan bengkung/stagen modern untuk merapatkan perut',
      'Perawatan rempah herbal tapel/pilis penenang kepala dan mata lelah',
      'Mencegah stres dan kelelahan mental (postpartum blues)'
    ],
    description: 'Asuhan nifas paripurna di rumah tanpa Anda harus keluar kamar. Mengembalikan kesegaran dan kebugaran ibu agar siap merawat buah hati tercinta.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pregnancy-massage-hamil',
    title: 'Pijat Hamil (Pregnancy Massage Relaksasi)',
    category: 'mom',
    categoryLabel: 'Perawatan Ibu Hamil',
    tagline: 'Meringankan pegal pinggang, ketegangan otot panggul, dan memberikan ketenangan bumil.',
    duration: '60 - 90 Menit',
    mode: 'Layanan ke Rumah (Homecare)',
    price: 'Konsultasi via WA',
    badge: 'Aman untuk Trimester 2 & 3 🤰',
    benefits: [
      'Posisi pijat miring (side-lying) yang sangat aman dan nyaman untuk janin',
      'Meredakan kram betis, pegal punggung bawah, dan pembengkakan kaki',
      'Mengurangi hormon stres dan meningkatkan kualitas tidur ibu hamil',
      'Membantu merilekskan otot-otot panggul menjelang hari persalinan',
      'Dilakukan dengan teknik lembut khusus kebidanan'
    ],
    description: 'Terapi relaksasi khusus bagi ibu hamil mulai usia kehamilan 16 minggu ke atas untuk menjaga tubuh tetap bugar dan pikiran tetap rileks.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tindik-cukur-newborn',
    title: 'Tindik Telinga Bayi & Potong Rambut (Gunting Rambut Newborn)',
    category: 'baby',
    categoryLabel: 'Perawatan Estetika & Kebersihan Bayi',
    tagline: 'Tindik telinga steril minim rasa sakit dan potong rambut bayi higienis di rumah.',
    duration: '30 - 45 Menit',
    mode: 'Layanan ke Rumah (Homecare)',
    price: 'Konsultasi via WA',
    badge: 'Higienis & Steril 🎀',
    benefits: [
      'Tindik telinga menggunakan jarum medis steril sekali pakai anti-infeksi',
      'Proses cepat, tepat titik anatomis, dan minim trauma pada bayi perempuan',
      'Potong rambut/cukur gundul newborn higienis dengan pisau steril baru',
      'Edukasi perawatan daun telinga pasca tindik agar cepat kering',
      'Dikerjakan langsung oleh bidan berpengalaman dengan tangan terampil'
    ],
    description: 'Layanan kebersihan dan estetika bayi yang praktis di rumah Anda, menjaga bayi tetap tenang tanpa rasa cemas ke klinik ramai.',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jasa-infus-medis',
    title: 'Jasa Infus Medis & Penunjang Kesehatan ke Rumah',
    category: 'medical',
    categoryLabel: 'Layanan Medis ke Rumah',
    tagline: 'Layanan pemasangan infus vitamin / hidrasi medis langsung di rumah oleh tenaga kesehatan.',
    duration: 'Sesuai Kebutuhan',
    mode: 'Layanan Medis Home Visit',
    price: 'Konsultasi via WA',
    badge: 'Tenaga Medis Siaga 💉',
    benefits: [
      'Pemasangan infus dengan standar SOP medis rumah sakit & alat steril',
      'Terapi cairan hidrasi untuk pemulihan pasca sakit / kelelahan ekstrem',
      'Pemberian vitamin booster sesuai anjuran medis',
      'Pemantauan tanda-tanda vital (tensi, nadi, saturasi oksigen) oleh bidan/perawat',
      'Sangat nyaman tanpa harus antre di fasilitas kesehatan'
    ],
    description: 'Layanan penunjang kesehatan terpercaya bagi keluarga yang membutuhkan asuhan medis di rumah dengan pantauan tenaga kesehatan berkompeten.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kelas-parenting-edukasi',
    title: 'Kelas Edukasi Parenting & Perawatan Bayi Baru Lahir',
    category: 'medical',
    categoryLabel: 'Edukasi Orang Tua Baru',
    tagline: 'Sesi privat edukasi tumbuh kembang anak, praktik memandikan bayi, dan perawatan tali pusat.',
    duration: '60 - 90 Menit',
    mode: 'Offline Home Visit / Online',
    price: 'Konsultasi via WA',
    badge: 'Wajib untuk New Mom & Dad 📚',
    benefits: [
      'Panduan praktik memandikan bayi baru lahir tanpa rasa takut licin',
      'Teknik perawatan tali pusat kering & bersih anti-infeksi',
      'Edukasi tanda bahaya bayi baru lahir & milestone tumbuh kembang',
      'Manajemen jadwal tidur bayi & stimulasi sensori sejak dini',
      'Sesi tanya jawab terbuka dan leluasa bersama bidan'
    ],
    description: 'Mempersiapkan ayah dan ibu baru agar percaya diri dan kompak merawat si kecil di hari-hari pertama kelahiran.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'bundling-3-hari',
    name: 'Paket Bundling 3 Hari (Newborn & Mom Care)',
    tagline: 'Perawatan intensif pasca pulang dari RS untuk kenyamanan mama dan si kecil.',
    price: 'Paket Hemat 3 Hari',
    period: '/ 3x Kunjungan Homecare',
    badge: 'Paling Diminati ⭐',
    popular: true,
    target: 'Sangat cocok untuk ibu baru pada minggu pertama pasca melahirkan.',
    features: [
      '3x Kunjungan Homecare Bidan Langsung ke Rumah',
      'Kombinasi Breast Care (Pijat Laktasi & Oksitosin) di Tiap Kunjungan',
      'Pijat Nifas (Postnatal Massage) Relaksasi Tubuh Mama',
      'Pijat Bayi Lembut (Baby Massage) & Stimulasi Tumbuh Kembang',
      'Perawatan Tali Pusat Steril & Praktik Memandikan Bayi',
      'FREE Konsultasi via WhatsApp Selama Masa Perawatan'
    ]
  },
  {
    id: 'bundling-5-hari',
    name: 'Paket Bundling 5 Hari (Golden Recovery)',
    tagline: 'Pendampingan komprehensif hingga ASI lancar dan luka nifas membaik.',
    price: 'Paket Hemat 5 Hari',
    period: '/ 5x Kunjungan Homecare',
    badge: 'Hemat & Lengkap ✨',
    target: 'Direkomendasikan untuk pemulihan optimal persalinan normal maupun SC.',
    features: [
      '5x Kunjungan Homecare Bidan Terjadwal di Rumah',
      'Full Breast Care Treatment (Atasi Payudara Bengkak & Lancarkan ASI)',
      'Pijat Nifas + Pemasangan Bengkung Modern & Tapel Herbal',
      'Pijat Pediatric Bayi (Pencegahan Kolik & Perut Kembung)',
      'Tindik Telinga Bayi / Potong Rambut Newborn (Opsional Termasuk)',
      'Bonus Pijat Relaksasi Wajah & Kepala untuk Mama'
    ]
  },
  {
    id: 'bundling-7-hari',
    name: 'Paket Bundling 7 Hari (Paripurna Mama & Si Kecil)',
    tagline: 'Asuhan lengkap harian di rumah tanpa repot keluar kamar sama sekali.',
    price: 'Paket Super Hemat 7 Hari',
    period: '/ 7x Kunjungan Homecare',
    badge: 'Perawatan Paripurna 👑',
    target: 'Pilihan terbaik untuk mama yang ingin didampingi penuh selama 1-2 minggu pertama.',
    features: [
      '7x Kunjungan Homecare Lengkap Mama & Bayi',
      'Pendampingan ASI Eksklusif Tuntas & Terapi Oksitosin Harian',
      'Pijat Postnatal + Bengkung + Perawatan Luka Pemulihan',
      'Baby Spa & Pijat Stimulasi Sensori Motorik Si Kecil',
      'Sesi Privat Kelas Parenting & Perawatan Bayi untuk Ayah-Bunda',
      'Prioritas Booking Jadwal & Fast Response Konsultasi WA'
    ]
  },
  {
    id: 'single-visit-treatment',
    name: 'Paket Single Visit (Perawatan Satuan)',
    tagline: 'Pilihan perawatan satuan sesuai keluhan mama atau si kecil kapan saja dibutuhkan.',
    price: 'Kunjungan Satuan',
    period: '/ 1x Kunjungan (60-90 Menit)',
    badge: 'Fleksibel 🌿',
    target: 'Cocok untuk penanganan darurat payudara bengkak, bayi kembung rewel, atau pijat hamil.',
    features: [
      '1x Kunjungan Bidan Profesional ke Rumah',
      'Bebas Pilih: Breast Care / Pijat Hamil / Pijat Nifas / Baby Massage',
      'Menggunakan Bahan & Minyak Alami Berkualitas Steril',
      'Evaluasi Kondisi Kesehatan Mama & Si Kecil',
      'Daftar via WhatsApp H-1'
    ]
  }
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    icon: 'HeartHandshake',
    fear: 'Kelelahan & Pegal Luar Biasa Pasca Melahirkan',
    fearDesc: 'Tubuh terasa lelah dan nyeri setelah bersalin sementara harus merawat bayi baru lahir setiap 2 jam.',
    solution: 'Pijat Nifas & Perawatan Pemulihan di Rumah',
    solutionDesc: 'Bidan kami hadir memberikan pijatan relaksasi nifas, bengkung, dan asuhan tubuh tanpa mama harus keluar rumah.'
  },
  {
    icon: 'Milk',
    fear: 'Payudara Bengkak, Keras & ASI Macet',
    fearDesc: 'Cemas saat ASI belum lancar dan payudara terasa nyeri atau meradang.',
    solution: 'Breast Care Terpadu & Pijat Oksitosin',
    solutionDesc: 'Kombinasi pijat laktasi lembut dan stimulasi oksitosin punggung untuk melancarkan aliran ASI seketika tanpa rasa sakit.'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'buku-lahir-senyuman',
    name: 'Buku Panduan Ibu & Bayi mii and maa',
    category: 'Edukasi',
    price: 125000,
    priceFormatted: 'Rp 125.000',
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Best Seller 📚',
    description: 'Buku panduan praktis perawatan bayi baru lahir, manajemen laktasi, dan pemulihan nifas karya Bidan Sulastria TM.',
    features: [
      'Panduan langkah demi langkah memandikan bayi & pijat ILU',
      'Tips pelekatan menyusui bebas puting lecet',
      'Jadwal imunisasi & stimulasi tumbuh kembang'
    ],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
  }
];

export const BIRTH_STORIES: BirthStory[] = [
  {
    id: 'story-1',
    motherName: 'Mama Gisella',
    fatherName: 'Papa Dimas',
    babyName: 'Baby Arka (1 Bulan)',
    location: 'Bandung - Homecare Visit',
    birthLocation: 'Bandung (Homecare Visit)',
    serviceTaken: 'Paket Bundling 5 Hari & Breast Care',
    quote: 'ASI saya yang sempat macet di hari ke-3 langsung lancar deras setelah dipijat laktasi oleh Bidan mii and maa.',
    story: 'Pelayanan bidannya luar biasa sabar, telaten, dan ramah banget. Bidan Sulastria dan tim benar-benar membantu saya melewati masa-masa awal new mom yang penuh cemas. Baby Arka juga tidurnya jadi pules banget setelah baby massage!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80',
    highlight: 'ASI Lancar & Bayi Tidur Nyenyak'
  },
  {
    id: 'story-2',
    motherName: 'Mama Fathia',
    fatherName: 'Papa Reza',
    babyName: 'Baby Zayn (2 Minggu)',
    location: 'Cimahi - Homecare Visit',
    birthLocation: 'Cimahi (Homecare Visit)',
    serviceTaken: 'Pijat Pediatric Kolik & Pijat Nifas',
    quote: 'Baby Zayn sering nangis kencang tiap jam 7 malam karena kolik. Setelah dipijat pediatric oleh bidan, kembungnya hilang total!',
    story: 'Gak perlu repot macet-macetan bawa bayi baru lahir ke klinik. Bidan mii and maa datang tepat waktu dengan perlengkapan steril dan minyak wangi yang menenangkan. Sangat recommended untuk para mama di Bandung & Cimahi!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    highlight: 'Kolik Mereda Tanpa Obat'
  },
  {
    id: 'story-3',
    motherName: 'Mama Brenda',
    fatherName: 'Papa Bagas',
    babyName: 'Baby Chloe (Newborn)',
    location: 'Jabodetabek - Homecare Visit',
    birthLocation: 'Jabodetabek (Homecare Visit)',
    serviceTaken: 'Tindik Telinga & Potong Rambut Newborn',
    quote: 'Tindik telinga baby Chloe cepat banget dan higienis. Chloe cuma nangis 2 detik trus tenang lagi.',
    story: 'Puas banget sama layanan mii and maa Daily Homecare. Bidan sangat profesional dalam menentukan titik tindik yang simetris dan jarumnya steril sekali pakai. Hasilnya rapi dan cepat sembuh!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    highlight: 'Tindik Rapi & Minim Tangisan'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'cara-atasi-bayi-kembung-kolik',
    title: 'Cara Mengatasi Bayi Kembung & Rewel di Malam Hari dengan Pijat ILU di Rumah',
    category: 'Baby Care',
    readTime: '4 Menit Baca',
    date: '10 Mei 2025',
    author: 'Tim Bidan mii and maa',
    summary: 'Mengenali tanda gas terjebak di perut bayi dan langkah mudah melakukan pijatan I Love You (ILU) yang aman dan menenangkan.',
    content: [
      'Perut kembung pada bayi baru lahir terjadi karena sistem pencernaan yang masih dalam tahap pematangan. Bayi seringkali menelan udara saat menyusu atau menangis.',
      'Tanda-tanda bayi kembung: Perut teraba agak keras seperti balon, bayi sering menarik kedua kakinya ke arah dada, dan menangis rewel terutama di sore hingga malam hari (kolik).',
      'Langkah Pijatan ILU Mandiri di Rumah:',
      '1. Huruf I: Usap lembut sisi kiri perut bayi dari atas ke bawah menggunakan minyak almond/telon.',
      '2. Huruf L Terbalik: Usap dari kanan atas perut bayi mendatar ke kiri, lalu turun ke bawah.',
      '3. Huruf U Terbalik: Usap melengkung dari kanan bawah naik ke atas, mendatar ke kiri, dan turun ke kiri bawah mengikuti alur usus besar.',
      'Lakukan gerakan kayuh sepeda secara perlahan selama 1-2 menit untuk membantu gas keluar secara alami.'
    ],
    takeaways: [
      'Pijat ILU efektif membantu pelepasan gas tanpa obat-obatan kimia.',
      'Pastikan bayi disendawakan tegak setiap selesai menyusu.',
      'Panggil bidan homecare mii and maa jika kembung disertai muntah atau demam.'
    ],
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rahasia-asi-deras-pijat-oksitosin',
    title: 'Rahasia ASI Deras Tanpa Nyeri: Manfaat Kombinasi Pijat Laktasi & Pijat Oksitosin',
    category: 'Laktasi',
    readTime: '5 Menit Baca',
    date: '25 April 2025',
    author: 'Bidan Sulastria TM',
    summary: 'Mengapa produksi ASI sangat dipengaruhi oleh rasa rileks dan hormon cinta? Simak cara kerja Breast Care terpadu.',
    content: [
      'Banyak ibu baru mengira bahwa kunci ASI banyak adalah makanan dan suplemen saja. Padahal, hormon oksitosin (hormon let-down refleks) hanya keluar optimal saat mama merasa tenang, nyaman, dan bahagia.',
      'Pijat Laktasi berfokus pada kelenjar payudara untuk melembutkan jaringan dan membuka sumbatan ductus ASI.',
      'Sedangkan Pijat Oksitosin dilakukan di sepanjang tulang belakang (titik meridian punggung). Sentuhan lembut di punggung ini memicu otak melepaskan hormon oksitosin dalam hitungan menit, membuat ASI memancar deras tanpa rasa sakit memeras payudara.'
    ],
    takeaways: [
      'Pijat oksitosin di punggung sangat ampuh meredakan stres dan melancarkan ASI.',
      'Jangan memencet paksa payudara yang mengeras; gunakan kompres hangat lembut.',
      'Layanan Breast Care mii and maa siap membantu langsung di rumah mama.'
    ],
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'manfaat-pijat-hamil-trimester-3',
    title: 'Manfaat Pijat Hamil di Trimester 3 untuk Mempersiapkan Panggul & Relaksasi',
    category: 'Mom Care',
    readTime: '4 Menit Baca',
    date: '15 April 2025',
    author: 'Tim Bidan mii and maa',
    summary: 'Bagaimana Pregnancy Massage yang aman dapat meredakan nyeri punggung bawah dan membantu tidur lebih nyenyak menjelang persalinan.',
    content: [
      'Memasuki usia kehamilan 28 minggu ke atas, beban rahim yang membesar menarik titik tumpu tubuh ke depan (*lordosis fisiologis*), menyebabkan otot pinggang bawah dan panggul bekerja ekstra keras.',
      'Pijat hamil profesional oleh bidan mii and maa menggunakan posisi berbaring miring yang ditopang bantal empuk (*side-lying position*).',
      'Sentuhan lembut membantu melenturkan ligamen panggul, meredakan pembengkakan kaki akibat retensi cairan, serta menurunkan hormon kortisol (stres) sehingga bumil siap menyambut persalinan dengan tenang.'
    ],
    takeaways: [
      'Pijat hamil hanya boleh dilakukan oleh tenaga terlatih kebidanan.',
      'Hindari penekanan pada titik akupresur tertentu yang memicu kontraksi dini.',
      'Jadwalkan sesi pijat hamil 1-2 minggu sekali untuk kenyamanan maksimal.'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'panduan-memandikan-bayi-newborn',
    title: 'Panduan Memandikan Bayi Baru Lahir & Merawat Tali Pusat Tanpa Panik',
    category: 'Parenting',
    readTime: '5 Menit Baca',
    date: '02 April 2025',
    author: 'Bidan Sulastria TM',
    summary: 'Langkah praktis bagi new mom & dad memandikan si kecil dengan air hangat steril dan menjaga tali pusat tetap kering.',
    content: [
      'Memandikan bayi pertama kali di rumah sering membuat orang tua baru gemetar karena takut bayi licin atau air masuk ke telinga.',
      'Tips Aman dari Tim Bidan mii and maa:',
      '1. Siapkan suhu air hangat suam-suam kuku (sekitar 37°C, uji dengan siku tangan Anda).',
      '2. Gunakan teknik cengkeraman bola (satu tangan menopang leher dan bahu bayi dengan mantap).',
      '3. Untuk tali pusat: Jangan dibubuhi alkohol, antiseptik, atau rempah apapun. Cukup keringkan dengan kassa steril setelah mandi agar puput alami dalam 7-14 hari.'
    ],
    takeaways: [
      'Jaga ruangan tetap hangat dan bebas hembusan angin AC langsung saat memandikan.',
      'Tali pusat cukup dirawat kering dan terbuka bersih sesuai standar WHO.',
      'Ikuti sesi Kelas Parenting mii and maa untuk bimbingan praktik langsung di rumah.'
    ],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'
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
      { id: 'doc-5', text: 'Hasil USG & Pemeriksaan Lab Trimester 3 Terakhir', done: false }
    ]
  },
  {
    category: 'Perlengkapan Ibu Melahirkan',
    items: [
      { id: 'mom-1', text: 'Baju Tidur Kancing Depan / Busui Friendly (3-4 Pasang)', done: false },
      { id: 'mom-2', text: 'Pembalut Nifas Ekstra Panjang (Ukuran 35-45 cm, minimal 2 pack)', done: false },
      { id: 'mom-3', text: 'Celana Dalam Katun Longgar / Disposable Underwear (6-8 Pcs)', done: false },
      { id: 'mom-4', text: 'Bra Menyusui Tanpa Kawat (3 Pcs) & Nipple Cream Organik', done: false },
      { id: 'mom-5', text: 'Minyak Pijat Relaksasi / Minyak Telon & Korset Nifas', done: false },
      { id: 'mom-6', text: 'Perlengkapan Mandi Pribadi & Sandal Karet Nyaman Anti-Slip', done: false }
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
      { id: 'dad-3', text: 'Kudapan Penambah Energi & Air Mineral', done: false },
      { id: 'dad-4', text: 'Uang Tunai Secukupnya untuk Keperluan Darurat', done: false }
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Layanan & Wilayah',
    question: 'Wilayah mana saja yang dijangkau oleh layanan Daily Homecare mii and maa?',
    answer: 'Layanan Daily Homecare kami melayani kunjungan ke rumah di wilayah BANDUNG, CIMAHI, KBB (Kabupaten Bandung Barat), hingga JABODETABEK. Tim bidan kami siap datang langsung ke kediaman Anda dengan membawa seluruh peralatan steril dan minyak alami.'
  },
  {
    category: 'Layanan & Pemesanan',
    question: 'Bagaimana cara reservasi jadwal kunjungan bidan ke rumah?',
    answer: 'Sangat mudah! Anda dapat mengklik tombol "Konsultasi Sekarang" pada website ini atau chat WhatsApp ke nomor resmi kami 0811-2037-714. Kami menyarankan untuk melakukan pendaftaran H-1 agar slot waktu bidan dapat disesuaikan dengan kenyamanan mama dan si kecil.'
  },
  {
    category: 'Perawatan Bayi',
    question: 'Apakah pijat bayi & pediatric aman untuk bayi newborn yang baru berusia beberapa hari?',
    answer: 'Sangat aman. Seluruh tindakan pijat bayi dilakukan oleh bidan berlisensi resmi yang telah tersertifikasi khusus Mom & Baby Spa serta Pediatric Care. Gerakan dilakukan dengan tekanan sangat lembut sesuai usia bayi untuk melancarkan peredaran darah, meredakan perut kembung, dan membantu bayi tidur lebih nyenyak.'
  },
  {
    category: 'Perawatan Ibu',
    question: 'Kapan waktu terbaik untuk melakukan Breast Care (Pijat Laktasi & Oksitosin)?',
    answer: 'Breast care dapat dimulai sejak hari ke-2 atau ke-3 pascapersalinan, terutama saat payudara mulai terasa mengeras, bengkak, atau ASI belum keluar lancar. Pijat oksitosin di punggung sangat efektif merangsang hormon prolaktin dan oksitosin agar ASI memancar deras tanpa rasa sakit.'
  },
  {
    category: 'Paket & Pembayaran',
    question: 'Apa keuntungan memilih Paket Bundling Perawatan (3 Hari, 5 Hari, 7 Hari)?',
    answer: 'Dengan Paket Bundling, mama mendapatkan harga yang jauh lebih hemat dibandingkan kunjungan satuan, pendampingan pemulihan yang berkesinambungan, serta bonus perawatan tambahan (seperti free treatment relaksasi atau konsultasi prioritas) selama masa nifas.'
  }
];
