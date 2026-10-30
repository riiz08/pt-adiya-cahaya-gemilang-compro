// Central business & navigation data
// Data usaha (sumber tunggal, jangan di-hardcode di komponen)

export const siteConfig = {
  name: "PT. Adiya Cahaya Gemilang",
  tagline: "Glass Fibre Reinforced Cement",
  description: "Spesialis GRC untuk Fasad & Elemen Arsitektural Bangunan Anda di Cibinong, Bogor. Cladding dinding, pilar, hingga list plafon dengan presisi tinggi.",
  address: "Jl. Raya Jakarta Bogor KM 41 RT. 04/04, Kel. Pabuaran, Kec. Cibinong, Kab. Bogor",
  phones: ["0813 8353 3007", "0815 1416 5875"],
  email: "adiyacahayagemilanggrc@gmail.com",
  // TODO: ganti jika nomor WhatsApp resmi sudah diverifikasi
  whatsappNumber: "6281383533007",
  whatsappDefaultMessage: "Halo PT Adiya Cahaya Gemilang, saya ingin berkonsultasi mengenai kebutuhan GRC untuk proyek saya.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
  },
  navLinks: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proyek", href: "#proyek" },
    { label: "Kontak", href: "#kontak" }
  ],
  hero: {
    badge: "Spesialis GRC Terpercaya",
    headline: "Spesialis GRC untuk Fasad & Elemen Arsitektural Bangunan Anda",
    subheadline: "Cladding dinding, pilar, hingga list plafon. Diproduksi dan dipasang dengan ukuran presisi sesuai kondisi lapangan.",
    ctaPrimary: {
      label: "Minta Penawaran",
      // Mengarah ke WhatsApp
    },
    ctaSecondary: {
      label: "Lihat Proyek",
      href: "#proyek"
    },
    // TODO: ganti statistik dummy jika data riil telah tersedia
    stats: [
      { value: "50+", label: "Proyek Selesai" },
      { value: "10+", label: "Tahun Pengalaman" },
      { value: "100%", label: "Ukuran Sesuai Lapangan" }
    ]
  }
};

