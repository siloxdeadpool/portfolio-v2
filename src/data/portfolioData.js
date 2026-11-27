export const personalData = {
  name: "Andriyan",
  fullName: "Andriyan, A.Md.Kom.",
  nim: "3202302018",
  roleTitles: [
    "Junior Web Developer",
    "Tech Enthusiast",
    "Information Management Graduate",
    "Fullstack Explorer",
    "GIS & System Builder"
  ],
  bio: "Lulusan D3 Manajemen Informatika Politeknik Negeri Sambas dengan predikat memuaskan (IPK 3.82). Berpengalaman dalam merancang & membangun sistem informasi berbasis web, digitalisasi alur administrasi instansi, pengolahan data terstruktur MySQL, integrasi Leaflet Geolocation GIS, dan pengujian sistem Black Box.",
  status: "Tersedia untuk Pekerjaan & Proyek",
  email: "silo.andriyan@gmail.com",
  phone: "0838-3883-9865",
  whatsapp: "6283838839865",
  whatsappAlt: "6283866217576",
  address: "Dusun Pimpinan Parit, RT.003/RW.010, Desa Pipiteja, Kec. Teluk Keramat, Kab. Sambas, Kalimantan Barat",
  locationShort: "Sambas / Pontianak, Kalimantan Barat",
  degree: "Ahli Madya Komputer (A.Md.Kom.)",
  campus: "Politeknik Negeri Sambas (POLTESA)",
  gpa: "3.82",
  graduationYear: "2026",
  links: {
    github: "https://github.com/andriyan-dev",
    linkedin: "https://linkedin.com/in/andriyan-it",
    instagram: "https://instagram.com/andriyan_official",
    email: "mailto:silo.andriyan@gmail.com",
    whatsapp: "https://wa.me/6283838839865"
  },
  stats: [
    { value: "3.82", label: "IPK Kelulusan", unit: "/ 4.00", icon: "GraduationCap" },
    { value: "100%", label: "Black-Box Test Pass", unit: "All Scenarios", icon: "CheckCircle2" },
    { value: "12+", label: "Modul Sistem TA", unit: "Terintegrasi", icon: "Layers" },
    { value: "3+", label: "Role Multi-Aktor", unit: "Workflow Realtime", icon: "Users" }
  ],
  education: [
    {
      period: "2023 - 2026",
      school: "Politeknik Negeri Sambas (POLTESA)",
      degree: "Diploma III (D3) - Manajemen Informatika",
      score: "IPK 3.82 (Ahli Madya Komputer / A.Md.Kom.)",
      description: "Fokus pada Rekayasa Perangkat Lunak Web, Perancangan Basis Data Relasional, Sistem Informasi Manajemen, UML Modeling, dan Pengembangan Aplikasi Fullstack.",
      honors: "Predikat Dengan Pujian (Cum Laude)"
    },
    {
      period: "2020 - 2023",
      school: "SMAN 2 Teluk Keramat",
      degree: "Sekolah Menengah Atas",
      description: "Fokus bidang IPA & Logika Matematika, aktif dalam kegiatan teknologi dan kepemimpinan."
    },
    {
      period: "2017 - 2020",
      school: "SMPN 3 Teluk Keramat",
      degree: "Sekolah Menengah Pertama",
      description: "Pendidikan dasar menengah pertama di Teluk Keramat, Kabupaten Sambas."
    },
    {
      period: "2011 - 2017",
      school: "SDN 17 Pimpinan Parit",
      degree: "Sekolah Dasar",
      description: "Pendidikan dasar di Dusun Pimpinan Parit, Desa Pipiteja, Sambas."
    }
  ],
  experience: [
    {
      period: "Agustus 2025 - Desember 2025",
      role: "Staf Magang RHL (Rehabilitasi Hutan & Lahan)",
      company: "Balai Pengelolaan Daerah Aliran Sungai (BPDAS) Kapuas",
      location: "Kota Pontianak, Kalimantan Barat",
      description: "Mengembangkan aplikasi website BPDAS Kapuas sebagai bagian dari transformasi digital administrasi penyaluran bibit gratis bagi masyarakat dan kelompok tani di Kalimantan Barat.",
      keyTasks: [
        "Merancang dan mengimplementasikan aplikasi berbasis web untuk digitalisasi permohonan bibit tanaman dari manual kertas ke sistem online terpusat.",
        "Mengintegrasikan alur multi-aktor: Pemohon (Masyarakat/Kelompok Tani/Instansi), Pihak Kantor (Admin Persuratan, PPK, Kepala Balai), dan Staf Persemaian Lapangan (Kelaik Nanga Pinoh & Sungai Selamat).",
        "Membangun fitur pemetaan koordinat GIS penanaman secara interaktif menggunakan Leaflet Geolocation Maps.",
        "Menerapkan sistem pelaporan otomatis dan cetak Berita Acara Serah Terima (BAST) bibit siap tanda tangan resmi.",
        "Melakukan pengujian komprehensif menggunakan metode Black Box Testing pada seluruh use case dan skenario alur."
      ],
      tags: ["CodeIgniter 4", "PHP", "MySQL", "Leaflet GIS", "Laragon", "Black Box Testing"]
    }
  ],
  projects: [
    {
      id: "ta-bpdas",
      featured: true,
      title: "Aplikasi Pengajuan Bibit Persemaian Permanen BPDAS Kapuas",
      subtitle: "Tugas Akhir D3 Manajemen Informatika Poltesa (2026)",
      category: "Fullstack Web & GIS",
      tech: ["PHP", "CodeIgniter 4", "MySQL", "Tailwind CSS", "Leaflet Maps API", "UML Waterfall"],
      summary: "Sistem informasi berbasis web yang mendigitalkan seluruh siklus pengajuan, verifikasi dokumen, pengecekan stok bulanan, pemetaan spasial lokasi tanam, hingga penerbitan Berita Acara Serah Terima (BAST) bibit tanaman gratis.",
      description: "Aplikasi ini memecahkan kendala administrasi manual di Persemaian Permanen BPDAS Kapuas (Sungai Selamat & Kelaik Nanga Pinoh). Menggantikan berkas fisik dengan alur digital multi-role, validasi kuota bibit otomatis, dan visualisasi pemetaan penanaman.",
      highlights: [
        "Multi-Role System: Pemohon, Admin Persuratan, PPK Balai, Kepala Balai, dan Petugas Lapangan Persemaian",
        "Interactive GIS Coordinates: Penentuan titik koordinat Lintang/Bujur lokasi tanam dengan Leaflet Map selector",
        "Realtime Stock Management: Monitoring kuota produksi bulanan (Jan-Des) untuk 11+ jenis bibit unggul",
        "Document Generator: Ekspor & cetak instan bukti permohonan dan Berita Acara Serah Terima berstandar KLHK",
        "100% Black Box Tested: Pengujian 10 modul utama berhasil lolos tanpa anomali fungsi"
      ],
      actors: [
        { name: "Pemohon", duties: "Mengajukan bibit online, memilih persemaian, input pin koordinat maps, cetak form" },
        { name: "Pihak Kantor (Admin, PPK, Kepala Balai)", duties: "Verifikasi berkas KTP/surat, disposisi persetujuan, statistik bulanan" },
        { name: "Staf Persemaian (Sungai Selamat & Nanga Pinoh)", duties: "Kelola kuota bibit masuk/keluar, pemenuhan fisik bibit, generate Berita Acara" }
      ],
      bibitTypes: ["Petai", "Pucuk Merah", "Langsat", "Ketapang Kencana", "Tabebuya", "Trembesi", "Mahoni", "Cempedak", "Jengkol", "Karet", "Matoa"],
      image: "bpdas-preview"
    },
    {
      id: "gis-seedling-tracker",
      featured: false,
      title: "Interactive Geolocation & Land Mapping System",
      subtitle: "Modul Spasial Penanaman Bibit Kalimantan Barat",
      category: "GIS & Frontend",
      tech: ["JavaScript", "Leaflet.js", "OpenStreetMap", "HTML5 Geolocation", "Tailwind CSS"],
      summary: "Sistem peta interaktif untuk pemetaan titik tanam bibit dengan konversi koordinat presisi tinggi dan deteksi batas wilayah kecamatan/desa.",
      highlights: [
        "Pinpoint marker interaktif dengan auto-fill Lintang (Latitude) & Bujur (Longitude)",
        "Dukungan polygon luas lahan tanam (Hektar)",
        "Pencarian nama jalan / desa di wilayah Kalimantan Barat"
      ],
      image: "gis-preview"
    },
    {
      id: "inventory-nursery",
      featured: false,
      title: "Realtime Nursery Stock & Seed Production Engine",
      subtitle: "Manajemen Inventaris Multi-Gudang Persemaian",
      category: "Backend & Database",
      tech: ["CodeIgniter 4", "MySQL", "PHP 8", "Database Normalization"],
      summary: "Modul pelacakan siklus stok bibit tahunan dengan breakdown produksi bulanan dari Januari hingga Desember per stasiun persemaian.",
      highlights: [
        "Pencatatan mutasi stok awal, produksi bulanan, dan alokasi penyaluran",
        "Peringatan otomatis saat stok bibit di bawah batas minimum pemenuhan",
        "Database relasional 7 tabel dengan foreign key integrity"
      ],
      image: "inventory-preview"
    },
    {
      id: "space-portfolio",
      featured: false,
      title: "Personal Cosmic Space Portfolio v2",
      subtitle: "Showcase Portofolio Interaktif Tema Luar Angkasa",
      category: "Frontend UI/UX",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Canvas Starfield API"],
      summary: "Website personal bergaya kosmik dengan partikel bintang dinamis, navbar melayang dengan glow biru, typewriter effect, dan performa tinggi.",
      highlights: [
        "Interactive 3D-like Starfield Canvas & shooting meteor animation",
        "Floating Glassmorphism Navbar with neon electric glow #2c67ed",
        "Responsive tabs with Framer Motion layout animations"
      ],
      image: "space-preview"
    }
  ],
  certificates: [
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      validity: "April 2025 - April 2027",
      credentialId: "DICODING-WEB-2025",
      description: "Mempelajari fundamental arsitektur web modern, standar HTML5 semantik, CSS3 Flexbox/Grid, responsivitas layout, dan aksesibilitas.",
      badge: "Web Development",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      validity: "Juni 2024 - Juni 2027",
      credentialId: "DICODING-JS-2024",
      description: "Menguasai dasar logika JavaScript ES6+, manipulasi DOM, penanganan Asynchronous (Promises & Async/Await), dan penulisan kode modular.",
      badge: "JavaScript Core",
      color: "from-amber-500 to-yellow-600"
    },
    {
      title: "Junior Web Developer (TIK)",
      issuer: "Politeknik Negeri Sambas",
      validity: "Agustus 2026 - Agustus 2026",
      credentialId: "POLTESA-JWD-2026",
      description: "Pelatihan intensif pengembangan aplikasi web berbasis industri meliputi analisis kebutuhan, perancangan basis data, implementasi backend/frontend, dan security.",
      badge: "Junior Developer",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Juara 2 Piala Bupati Sambas Tournament (Mobile Legends)",
      issuer: "Pemerintah Daerah & E-Sport Sambas",
      validity: "Tahun 2024",
      credentialId: "BUPATI-MLBB-2024",
      description: "Meraih Juara 2 dalam kejuaraan esports bergengsi tingkat kabupaten. Mengasah kepemimpinan tim, komunikasi cepat di bawah tekanan, serta eksekusi strategi kompetitif.",
      badge: "Pencapaian & Leadership",
      color: "from-purple-500 to-pink-600"
    }
  ],
  skills: [
    {
      category: "Backend & Framework",
      icon: "Server",
      items: [
        { name: "PHP (Server-Side)", level: 90, desc: "Pemrograman backend web MVC & logika bisnis" },
        { name: "CodeIgniter 4 (CI4)", level: 88, desc: "Routing, Controller, Models, Migrations & Services" },
        { name: "RESTful API", level: 80, desc: "JSON responses, endpoints & data consumption" },
        { name: "Laragon / Apache", level: 85, desc: "Local server configuration & virtual hosts" }
      ]
    },
    {
      category: "Frontend & UI Design",
      icon: "Layout",
      items: [
        { name: "JavaScript (ES6+)", level: 85, desc: "DOM manipulation, asynchronous, dynamic UI" },
        { name: "React.js", level: 78, desc: "Component architecture, hooks, state management" },
        { name: "Tailwind CSS", level: 88, desc: "Modern utility-first responsive styling & dark mode" },
        { name: "HTML5 & Modern CSS3", level: 92, desc: "Semantic markup, CSS Grid, Flexbox, Keyframes" },
        { name: "Leaflet.js (GIS)", level: 85, desc: "Geographic coordinate pickers & map layers" }
      ]
    },
    {
      category: "Database & Modeling",
      icon: "Database",
      items: [
        { name: "MySQL", level: 88, desc: "Relational schema, foreign keys, indexing & queries" },
        { name: "Database Design", level: 85, desc: "Normalisasi tabel, ERD & data integrity" },
        { name: "UML Modeling", level: 90, desc: "Use Case, Class, Activity, & Sequence Diagrams" }
      ]
    },
    {
      category: "Tools, Testing & Soft Skills",
      icon: "Wrench",
      items: [
        { name: "Black Box Testing", level: 92, desc: "Scenario testing, input/output validation" },
        { name: "Visual Studio Code", level: 90, desc: "Primary IDE, extensions, debugging" },
        { name: "Figma & Draw.io", level: 84, desc: "UI wireframing, mockup prototyping & system diagrams" },
        { name: "Kerja Sama Tim & Problem Solving", level: 92, desc: "Komunikasi adaptif, analitis, & tanggung jawab" }
      ]
    }
  ]
};
