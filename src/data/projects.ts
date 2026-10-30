// Data Section Portofolio Proyek (#proyek)
// Struktur data siap diisi foto proyek riil
// DILARANG menyebut nilai kontrak, nama klien, atau angka volume yang belum terverifikasi

import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
import project3 from '../assets/projects/project-3.png';
import project4 from '../assets/projects/project-4.png';
import project5 from '../assets/projects/project-5.png';
import project6 from '../assets/projects/project-6.png';

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: ImageMetadata;
  alt: string;
}

export const projectsData = {
  eyebrow: "Proyek",
  title: "Proyek GRC yang Telah Kami Kerjakan",
  description: "Dokumentasi pengerjaan elemen arsitektural GRC dengan presisi tinggi dan pemasangan rapi di berbagai lokasi proyek.",

  // TODO: ganti dengan dokumentasi proyek riil jika foto asli dan data lapangan sudah tersedia
  items: [
    {
      id: 1,
      title: "Fasad Cladding Gedung Komersial",
      category: "Cladding Tempel Dinding",
      location: "Cibinong, Bogor",
      description: "Pemasangan panel cladding GRC tebal 2 cm dengan modul presisi untuk fasad eksterior bangunan bertingkat.",
      image: project1,
      alt: "Pemasangan fasad cladding GRC pada dinding eksterior gedung di Cibinong"
    },
    {
      id: 2,
      title: "Pilar Kolom Klasik & Pagar Perimeter",
      category: "Pilar & Pagar GRC",
      location: "Sentul, Bogor",
      description: "Fabrikasi pilar bulat profil bertulang serat kaca dan ornamen pagar kokoh bergaya arsitektur klasik.",
      image: project2,
      alt: "Pilar kolom arsitektural dan pagar GRC kokoh di kawasan Sentul Bogor"
    },
    {
      id: 3,
      title: "Lis Profil & Plafon Kanopi Utama",
      category: "Bawah Plafon & List Plafon",
      location: "Depok, Jawa Barat",
      description: "Instalasi lis plafon profil rapi per meter lari pada area drop-off dan kanopi pintu masuk gedung.",
      image: project3,
      alt: "Lis profil plafon GRC presisi pada kanopi drop-off gedung di Depok"
    },
    {
      id: 4,
      title: "Ornamen Relief & Sudut Mahkota Fasad",
      category: "Sudut & Ornamen Fasad",
      location: "Bogor Selatan",
      description: "Pencetakan detail ornamen sudut dan mahkota fasad bernilai seni tinggi yang tahan cuaca tropis.",
      image: project4,
      alt: "Ornamen relief dan mahkota fasad GRC pada tampak depan bangunan di Bogor"
    },
    {
      id: 5,
      title: "Panel Roster & Kisi-kisi Fasad Custom",
      category: "Custom Sesuai Gambar Proyek",
      location: "Jakarta Selatan",
      description: "Pembuatan modul roster ventilasi arsitektural GRC kustom sesuai gambar denah kerja arsitek.",
      image: project5,
      alt: "Panel roster ventilasi custom GRC sesuai gambar kerja di Jakarta Selatan"
    },
    {
      id: 6,
      title: "Kubah Ornamen & Lis Keliling Bangunan",
      category: "Custom Sesuai Gambar Proyek",
      location: "Bogor Barat",
      description: "Pengerjaan kubah modular dan lis profil dinding luar dengan ketahanan tinggi terhadap paparan cuaca.",
      image: project6,
      alt: "Kubah ornamen arsitektural dan lis keliling GRC di Bogor Barat"
    }
  ] as ProjectItem[]
};

