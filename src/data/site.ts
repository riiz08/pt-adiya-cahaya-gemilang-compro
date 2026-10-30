// Central business & navigation data
// Data usaha (sumber tunggal, jangan di-hardcode di komponen)

const envSiteUrl = import.meta.env.SITE_URL || (typeof process !== "undefined" ? process.env.SITE_URL : "") || "";
export const isProduction = Boolean(envSiteUrl && envSiteUrl.trim() !== "");
export const siteUrl = isProduction ? envSiteUrl.trim() : "https://adiyacahayagemilang.co.id";

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
  
  // Data SEO Teknis & On-Page
  seo: {
    siteUrl,
    isProduction,
    // Title maksimal ~60 karakter (saat ini 54 karakter)
    title: "PT Adiya Cahaya Gemilang | Jasa & Kontraktor GRC Bogor",
    // Meta description maksimal ~155 karakter (saat ini 148 karakter)
    description: "Jasa GRC Bogor & kontraktor GRC Cibinong terpercaya. Fabrikasi & pasang cladding, pilar, list plafon, serta ornamen fasad presisi sesuai lapangan.",
    keywords: [
      "jasa GRC Bogor",
      "kontraktor GRC Cibinong",
      "GRC Glass Fibre Reinforced Cement",
      "cladding GRC",
      "pilar pagar GRC",
      "list plafon GRC",
      "ornamen fasad GRC"
    ],
    areaServed: ["Bogor", "Cibinong", "Jabodetabek", "Jawa Barat"],
    themeColor: "#3D2B7A",
    ogImage: "/og-image.png",
    // Saklar otomatis index/noindex berdasarkan keberadaan domain production
    robots: isProduction ? "index, follow" : "noindex, nofollow"
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
