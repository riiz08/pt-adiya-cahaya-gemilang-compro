// Data untuk Section Tentang Kami (#tentang)
// Sumber tunggal, jangan di-hardcode di komponen
import { siteConfig } from './site';

export const aboutData = {
  eyebrow: "Tentang Kami",
  title: "Mitra Pekerjaan GRC untuk Proyek Bangunan Anda",
  profileParagraph: `${siteConfig.name} adalah perusahaan di Cibinong, Bogor yang bergerak di bidang Glass Fibre Reinforced Cement (GRC): memproduksi dan memasang elemen arsitektural dengan ukuran yang disesuaikan kondisi lapangan.`,
  
  // Fakta singkat perusahaan
  facts: [
    { label: "Lokasi Workshop", value: "Cibinong, Bogor" },
    { label: "Direktur", value: "Siti Kokom Safitri" }, // Dari surat resmi
    { label: "Spesialisasi", value: "Glass Fibre Reinforced Cement (GRC)" }
  ],

  // TODO: ganti visi & misi jika ada revisi redaksional resmi dari manajemen
  vision: "Menjadi produsen dan aplikator GRC terdepan di Indonesia yang dipercaya atas presisi, ketahanan produk, dan keindahan estetika arsitektur bangunan.",
  missions: [
    "Menghasilkan produk elemen GRC berkualitas tinggi dengan formulasi bahan terstandar dan presisi ukuran tinggi.",
    "Memberikan layanan fabrikasi dan pemasangan tepat waktu sesuai dinamika kondisi riil lapangan proyek.",
    "Menjalin kemitraan profesional jangka panjang bersama kontraktor dan developer melalui komunikasi transparan."
  ],

  // TODO: ganti detail nilai-nilai perusahaan bila diperlukan
  values: [
    {
      title: "Presisi Ukuran",
      description: "Setiap cetakan dan panel GRC diproduksi presisi menyesuaikan pengukuran lapangan secara akurat guna menjamin hasil pemasangan yang rapi.",
      icon: "ruler"
    },
    {
      title: "Ketepatan Waktu",
      description: "Komitmen jadwal produksi dan pengiriman terencana untuk memastikan tahapan proyek konstruksi berjalan lancar tanpa kendala.",
      icon: "clock"
    },
    {
      title: "Komunikasi Terbuka",
      description: "Konsultasi teknis responsif, pendampingan spesifikasi, serta pelaporan progres fabrikasi secara transparan dan solutif.",
      icon: "chat"
    }
  ]
};
