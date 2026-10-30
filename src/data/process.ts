// Data Section Alur Kerja (#alur)
// Urutan dikunci: 1. Konsultasi, 2. Survey Lapangan, 3. Penawaran, 4. Produksi, 5. Pemasangan, 6. Serah Terima

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processData = {
  eyebrow: "Alur Kerja",
  title: "6 Tahap Pengerjaan Proyek GRC yang Terstruktur",
  description: "Alur kerja transparan dan sistematis dari tahap diskusi konsep hingga pemasangan akhir di lokasi proyek Anda.",

  // TODO: ganti jika alur standar operasional disesuaikan
  steps: [
    {
      step: 1,
      title: "Konsultasi",
      description: "Diskusi awal mengenai kebutuhan desain arsitektural, spesifikasi panel GRC, dan estimasi lingkup pekerjaan."
    },
    {
      step: 2,
      title: "Survey Lapangan",
      description: "Pengukuran langsung kondisi fisik bangunan di lapangan untuk memastikan akurasi data sebelum pembuatan cetakan."
    },
    {
      step: 3,
      title: "Penawaran",
      description: "Penyusunan rincian penawaran harga, volume material, dan jadwal pengerjaan secara transparan dan tertulis."
    },
    {
      step: 4,
      title: "Produksi",
      description: "Pembuatan cetakan presisi dan fabrikasi modul GRC di workshop kami di Cibinong sesuai spesifikasi yang disepakati."
    },
    {
      step: 5,
      title: "Pemasangan",
      description: "Pengiriman modul ke lokasi dan perakitan oleh tim pemasang berpengalaman dengan pengawasan berkala."
    },
    {
      step: 6,
      title: "Serah Terima",
      description: "Pemeriksaan akhir hasil pengerjaan bersama pihak kontraktor atau pemilik proyek untuk menjamin kerapian."
    }
  ] as ProcessStep[],

  ctaBlock: {
    title: "Mulai Konsultasi Proyek Anda",
    description: "Hubungi tim teknis kami sekarang untuk menjadwalkan konsultasi awal dan survey pengukuran lapangan proyek GRC Anda.",
    buttonLabel: "Konsultasi via WhatsApp"
  }
};

