# PT Adiya Cahaya Gemilang - Company Profile

Website company profile untuk PT Adiya Cahaya Gemilang, penyedia jasa dan kontraktor spesialis GRC (Glass Fibre Reinforced Cement) yang berlokasi di Cibinong, Bogor. Website ini dirancang khusus untuk memfasilitasi kontraktor dan developer dalam mempelajari kapabilitas produksi fabrikasi, melihat portofolio elemen arsitektural GRC, dan berkonsultasi mengenai kebutuhan proyek bangunan.

## Status Project

Tahap pengembangan saat ini: **Tahap 4 selesai (siap menuju finalisasi production)**. Seluruh struktur halaman dan komponen utama telah terpasang, namun beberapa data (seperti angka statistik, foto proyek riil, izin nama klien, dan jam operasional) masih menggunakan data placeholder berlabel `TODO: ganti`.

## Fitur & Isi Halaman

Urutan section pada halaman utama:
- **Hero**: Penjelasan utama spesialisasi GRC, slogan, statistik ringkas, dan tombol ajakan konsultasi.
- **Tentang**: Profil perusahaan, visi, misi, dan nilai standar fabrikasi GRC.
- **Layanan**: Daftar 6 lingkup pekerjaan elemen arsitektural GRC (cladding, pilar, lis plafon, ornamen, roster, custom).
- **Keunggulan**: 4 nilai pembeda utama (pencetakan presisi, bahan tahan cuaca, tenaga ahli berpengalaman, garansi kesesuaian).
- **Alur Kerja**: 4 tahapan sistematis proyek mulai dari konsultasi, survei & mal lapangan, fabrikasi cetakan, hingga instalasi.
- **Proyek**: Galeri 6 kartu portofolio proyek GRC dengan label kategori dan lokasi pengerjaan.
- **Klien**: Daftar kemitraan kontraktor dan pengembang properti dalam bentuk teks.
- **Kontak**: Kartu informasi workshop, telepon, email, jam operasional, tautan Google Maps, serta formulir konsultasi.
- **Footer**: Identitas legal perusahaan, ringkasan kontak, tautan navigasi, dan hak cipta.

Fitur lintas halaman:
- **WhatsApp Floating Button**: Tombol melayang di pojok kanan bawah untuk kontak instan via WhatsApp.
- **Formulir Konsultasi**: Formulir validasi lokal tanpa backend yang mengarahkan pesan rapi ke WhatsApp resmi.
- **Fondasi SEO Lengkap**: Meta tags teroptimasi, Open Graph, JSON-LD Schema LocalBusiness, sitemap otomatis, dan robots.txt.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (v7.4) – Menghasilkan HTML statis murni tanpa overhead JavaScript bawaan untuk performa tinggi dan ramah mesin pencari.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.3) via `@tailwindcss/vite` – Utilitas styling modern, responsif, dan ukuran bundel CSS minimal.
- **Bahasa**: TypeScript / JavaScript & Astro Components – Type safety untuk pengelolaan data usaha.
- **Package Manager**: [Bun](https://bun.sh/) – Pengelolaan dependensi cepat, konsisten, dan efisien dengan lockfile `bun.lock`.

## Prasyarat & Cara Menjalankan

Pastikan Bun sudah terpasang di komputer Anda ([Panduan Instalasi Bun](https://bun.sh/)).

1. **Instalasi Dependensi**
   Memasang semua dependensi project sesuai lockfile `bun.lock`:
   ```bash
   bun install
   ```

2. **Menjalankan Server Pengembangan (Lokal)**
   Menjalankan server dev Astro lokal di `http://localhost:4321`:
   ```bash
   bun run dev
   ```

3. **Membangun Versi Production**
   Mengompilasi dan mengoptimasi halaman statis, aset gambar, dan sitemap ke dalam folder `./dist`:
   ```bash
   bun run build
   ```

4. **Pratinjau Hasil Build (Preview)**
   Menjalankan server pratinjau lokal untuk menguji build production:
   ```bash
   bun run preview
   ```

## Struktur Folder

```text
├── public/                 # Aset statis publik (favicon, og-image, robots.txt)
├── src/
│   ├── assets/             # Aset gambar yang diproses kompresi Astro (logo, foto proyek)
│   ├── components/         # Komponen Astro (Navbar, Hero, Layanan, Proyek, Kontak, dll.)
│   ├── data/               # Sumber data teks (site.ts, services.ts, projects.ts, clients.ts)
│   ├── layouts/            # Template layout utama (BaseLayout.astro)
│   ├── pages/              # Routing halaman statis (index.astro)
│   └── styles/             # Pengaturan stylesheet global Tailwind (global.css)
├── astro.config.mjs        # Konfigurasi Astro dan integrasi (@astrojs/sitemap)
├── bun.lock                # Lockfile dependensi Bun
└── package.json            # Metadata project, script, dan daftar dependensi
```

## Cara Mengubah Konten

Seluruh teks dan informasi terpusat di folder `src/data/` agar mudah diperbarui tanpa mengubah kode komponen:
- **Data Usaha & SEO**: Edit `src/data/site.ts` untuk nama perusahaan, alamat workshop, nomor telepon, email, nomor WhatsApp, serta meta deskripsi SEO.
- **Layanan**: Edit `src/data/services.ts`.
- **Portofolio Proyek**: Edit `src/data/projects.ts` (judul, lokasi, kategori, gambar, deskripsi).
- **Daftar Klien**: Edit `src/data/clients.ts`.
- **Keunggulan & Alur Kerja**: Edit `src/data/advantages.ts` dan `src/data/process.ts`.
- **Mengganti Gambar**: Letakkan file gambar baru di `src/assets/` atau `src/assets/projects/` dan impor ke dalam file data terkait.
- **Mencari Item Placeholder**: Cari komentar `TODO: ganti` pada file-file di dalam folder `src/` untuk menemukan semua data yang membutuhkan verifikasi atau materi asli.

## SEO & Performa

- **Meta & Open Graph**: Dilengkapi judul optimal, deskripsi ringkas, tag Open Graph, dan kartu Twitter untuk pratinjau media sosial.
- **Schema JSON-LD**: Format terstruktur LocalBusiness untuk pengenalan profil bisnis lokal di Google Search.
- **Sitemap & Robots**: Sitemap XML dibuat otomatis pada setiap build produksi; `robots.txt` mengontrol indexing mesin pencari.
- **Saklar Indexing**: Nilai robots dikontrol secara otomatis lewat variabel konfigurasi `SITE_URL`. Jika domain belum diisi atau masih mode lokal, meta robots terset `noindex, nofollow` untuk mencegah konten draf terindeks. Saat variabel domain production terisi, meta robots beralih ke `index, follow`.
- **Prinsip Performa**: Semua gambar dioptimasi ke format WebP modern dengan dimensi eksplisit dan lazy loading (kecuali logo/hero), font preconnect, dan tanpa script pihak ketiga pada initial load.
- **Skor Lighthouse**: Belum ditentukan (pengukuran resmi dilakukan pada mode production saat seluruh aset final terpasang).

## Deploy

- **Tipe Build**: Situs statis (Static Site Generation / SSG). Folder output adalah `./dist/`.
- **Build Command**: `bun install --frozen-lockfile && bun run build`
- **Output Directory**: `dist`
- **Penyedia Hosting**: Belum ditentukan.

## Catatan Kepemilikan

Hak Cipta © PT. Adiya Cahaya Gemilang. Seluruh hak cipta dilindungi undang-undang.
Informasi kontak resmi:
- **Alamat Workshop**: Jl. Raya Jakarta Bogor KM 41 RT. 04/04, Kel. Pabuaran, Kec. Cibinong, Kab. Bogor
- **Telepon**: 0813 8353 3007 / 0815 1416 5875
- **Email**: adiyacahayagemilanggrc@gmail.com
