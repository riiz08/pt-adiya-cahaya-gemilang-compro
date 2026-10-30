// Data Section Klien & Mitra (#klien)
// DILARANG membuat testimoni, kutipan, rating, atau review palsu
// Nama ditampilkan sebagai teks

export interface ClientItem {
  name: string;
  category: string;
  isVerified: boolean;
  note?: string;
}

export const clientsData = {
  eyebrow: "Klien & Mitra",
  title: "Dipercaya oleh Kontraktor dan Developer",
  description: "Menjadi mitra andalan dalam menyuplai dan mengaplikasikan produk GRC berkualitas untuk berbagai entitas pembangunan.",

  // TODO: konfirmasi izin resmi sebelum mempublikasikan nama klien
  items: [
    {
      name: "PT. Saka Propertindo Perkasa",
      category: "Developer & Kontraktor Properti",
      isVerified: true,
      note: "Data dari surat resmi kemitraan"
    },
    {
      name: "Mitra Kontraktor Komersial Jabodetabek",
      category: "Konstruksi & Gedung Komersial",
      isVerified: false,
      note: "Placeholder mitra konstruksi"
    },
    {
      name: "Pengembang Perumahan Residensial Bogor",
      category: "Pengembang Kawasan Hunian",
      isVerified: false,
      note: "Placeholder pengembang residensial"
    },
    {
      name: "Kontraktor Fasilitas Pendidikan & Ibadah",
      category: "Bangunan Fasilitas Publik",
      isVerified: false,
      note: "Placeholder kontraktor fasilitas publik"
    }
  ] as ClientItem[]
};

