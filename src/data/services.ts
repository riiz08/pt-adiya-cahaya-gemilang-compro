// Data Layanan PT Adiya Cahaya Gemilang (#layanan)
// Urutan dikunci dan sumber data tersentralisasi

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  badge?: string;
  icon: string;
}

export const servicesData = {
  eyebrow: "Layanan & Produk",
  title: "Solusi Fabrikasi & Pemasangan Elemen GRC Presisi",
  description: "Menyediakan aneka elemen arsitektural GRC cetak berkualitas prima dengan ukuran presisi yang dirancang khusus menyesuaikan kebutuhan lapangan proyek Anda.",
  
  // Urutan dikunci:
  // 1. Cladding Tempel Dinding (tebal 2 cm)
  // 2. Pilar & Pagar GRC
  // 3. Bawah Plafon & List Plafon
  // 4. Sudut & Ornamen Fasad
  // 5. Custom Sesuai Gambar Proyek
  items: [
    {
      id: 1,
      title: "Cladding Tempel Dinding (tebal 2 cm)",
      description: "Panel cladding dinding GRC berbobot ringan dengan ketebalan standar 2 cm, berdaya tahan tinggi terhadap cuaca ekstrem serta dirancang untuk kemudahan pemasangan.",
      badge: "Tebal 2 cm",
      icon: "cladding"
    },
    {
      id: 2,
      title: "Pilar & Pagar GRC",
      description: "Pembuatan pilar bulat atau kotak bertekstur serta pagar GRC orisinal yang kokoh, berestetika tinggi, dan awet untuk mempercantik area eksterior bangunan.",
      badge: "Struktural & Fasad",
      icon: "pillar"
    },
    {
      id: 3,
      title: "Bawah Plafon & List Plafon",
      description: "Pemasangan lis profil plafon dan penutup bawah plafon dengan sambungan rapi per meter lari (M) untuk interior maupun area transisi semi-outdoor.",
      badge: "Per Meter Lari (M)",
      icon: "ceiling"
    },
    {
      id: 4,
      title: "Sudut & Ornamen Fasad",
      description: "Elemen dekoratif sudut, mahkota, kubah, roster motif, dan ornamen fasad artistik yang memberikan aksen arsitektural berkarakter khas pada bangunan.",
      badge: "Elemen Ornamen",
      icon: "ornament"
    },
    {
      id: 5,
      title: "Custom Sesuai Gambar Proyek",
      description: "Layanan fabrikasi elemen GRC khusus berdasarkan gambar kerja arsitek (CAD/3D) dengan pembuatan cetakan mold presisi sesuai kondisi nyata di lapangan.",
      badge: "Kustomisasi Penuh",
      icon: "custom"
    }
  ] as ServiceItem[],

  ctaBlock: {
    title: "Konsultasikan Kebutuhan Proyek Anda",
    description: "Diskusikan gambar kerja, estimasi volume, dan spesifikasi GRC yang dibutuhkan bersama tim teknis PT Adiya Cahaya Gemilang.",
    buttonLabel: "Konsultasi via WhatsApp"
  }
};
