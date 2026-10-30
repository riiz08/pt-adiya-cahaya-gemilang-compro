// Data Section Keunggulan (#keunggulan)
// Urutan dikunci dan tidak memuat klaim tanpa bukti

export interface AdvantageItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const advantagesData = {
  eyebrow: "Keunggulan",
  title: "Kenapa Memilih ACG untuk Proyek GRC Anda",
  description: "Standar pengerjaan profesional yang mengutamakan ketepatan ukuran, mutu material, dan kelancaran koordinasi proyek.",

  // TODO: ganti jika ada revisi narasi keunggulan dari manajemen
  // Urutan dikunci:
  // 1. Ukuran Presisi Sesuai Lapangan
  // 2. Material Ringan dan Kuat
  // 3. Tahan Cuaca untuk Eksterior
  // 4. Desain Custom Sesuai Gambar
  // 5. Produksi dan Pemasangan Satu Tim
  // 6. Laporan Perubahan Ukuran Tertulis
  items: [
    {
      id: 1,
      title: "Ukuran Presisi Sesuai Lapangan",
      description: "Setiap modul dicetak berdasarkan hasil pengukuran langsung di lokasi untuk meminimalkan penyesuaian saat instalasi.",
      icon: "ruler"
    },
    {
      id: 2,
      title: "Material Ringan dan Kuat",
      description: "Komposit semen bertulang serat kaca menghasilkan panel yang kokoh namun tidak membebani struktur bangunan.",
      icon: "shield"
    },
    {
      id: 3,
      title: "Tahan Cuaca untuk Eksterior",
      description: "Formulasi bahan dirancang khusus agar tahan terhadap terik matahari dan kelembapan iklim tropis.",
      icon: "sun-cloud"
    },
    {
      id: 4,
      title: "Desain Custom Sesuai Gambar",
      description: "Mampu memproduksi profil, ornamen, dan lis fasad sesuai detail gambar kerja arsitektur proyek Anda.",
      icon: "pen-tool"
    },
    {
      id: 5,
      title: "Produksi dan Pemasangan Satu Tim",
      description: "Koordinasi dari proses pencetakan di workshop hingga instalasi di lapangan berada dalam satu kendali tim internal.",
      icon: "users"
    },
    {
      id: 6,
      title: "Laporan Perubahan Ukuran Tertulis",
      description: "Segala bentuk penyesuaian dimensi di lokasi selalu dicatat dan dikonfirmasikan tertulis demi transparansi.",
      icon: "document"
    }
  ] as AdvantageItem[]
};

