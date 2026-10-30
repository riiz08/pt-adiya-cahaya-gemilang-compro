# Implementation Plan: Section Keunggulan & Alur Kerja + Peningkatan SEO (PT Adiya Cahaya Gemilang)

## 1. Overview & Objective
Tahap 3 pada project Astro yang sudah memiliki Navbar, Hero, Footer, Tentang Kami, dan Layanan. Cakupan HANYA: (a) section Keunggulan (`#keunggulan`), (b) section Alur Kerja (`#alur`), (c) peningkatan SEO on-page dan teknis pada struktur yang sudah ada, agar saat production tidak perlu membuat SEO dari awal. Dokumen ini panduan tingkat tinggi; ikuti keputusan yang sudah dikunci dan jangan menambah di luar scope.

## 2. Prasyarat
* Tahap 1 dan 2 selesai: `npm run dev` dan `npm run build` berjalan normal.
* Data usaha terpusat di `src/data/site.ts`; layout dasar di `src/layouts/BaseLayout.astro`. Jika tidak terpenuhi, hentikan dan laporkan.

## 3. Keputusan yang Sudah Dikunci (jangan diubah)
* Design token, font, gaya, dan pola section (eyebrow, judul, deskripsi, isi) mengikuti tahap sebelumnya. Background selang-seling dilanjutkan.
* Menu Navbar tidak diubah. Section Keunggulan dan Alur Kerja diakses lewat scroll.

### Konten Keunggulan (dummy, tandai `TODO: ganti`)
* Eyebrow: "Keunggulan" | Judul: "Kenapa Memilih ACG untuk Proyek GRC Anda"
* Enam kartu (urutan dikunci), masing-masing ikon sederhana, judul, deskripsi 1 kalimat:
  1. Ukuran Presisi Sesuai Lapangan
  2. Material Ringan dan Kuat
  3. Tahan Cuaca untuk Eksterior
  4. Desain Custom Sesuai Gambar
  5. Produksi dan Pemasangan Satu Tim
  6. Laporan Perubahan Ukuran Tertulis
* Hindari klaim spesifik yang tidak bisa dibuktikan (sertifikasi, uji api, garansi, angka teknis).

### Konten Alur Kerja (urutan dikunci)
1. Konsultasi 2. Survey Lapangan 3. Penawaran 4. Produksi 5. Pemasangan 6. Serah Terima
* Setiap langkah: nomor, judul, deskripsi 1 kalimat.
* Di bawah alur: blok ajakan "Mulai Konsultasi Proyek Anda" dengan tombol WhatsApp (nomor dari `site.ts`).

### Keputusan SEO (dikunci)
* Keyword utama: "jasa GRC Bogor", "kontraktor GRC Cibinong", "GRC Glass Fibre Reinforced Cement". Keyword pendukung: cladding GRC, pilar pagar GRC, list plafon GRC, ornamen fasad GRC.
* Bahasa halaman: Indonesia (`lang="id"`).
* Title (maks ~60 karakter) dan meta description (maks ~155 karakter) memuat keyword utama dan lokasi, dibuat dari data di `site.ts`.
* Hanya satu `<h1>` di halaman (headline Hero); judul section memakai `<h2>`, judul kartu `<h3>`, tanpa loncat level.
* Structured data JSON-LD jenis LocalBusiness (nama, alamat, telepon, email, area layanan). DILARANG memasukkan rating, review, jumlah proyek, atau tahun berdiri yang masih dummy.
* Domain production diambil dari satu variabel konfigurasi (env), bukan di-hardcode.
* Sampai domain production diisi, halaman otomatis `noindex`; setelah diisi, otomatis `index`. Satu saklar saja.

## 4. Struktur File yang Diharapkan
* `src/components/Advantages.astro`, `Process.astro`
* Data keunggulan dan alur kerja di `src/data/`
* Data SEO (keyword, title, description, area layanan, URL situs) di `src/data/site.ts`
* Komponen SEO (meta, Open Graph, canonical, JSON-LD) di dalam `BaseLayout.astro` atau komponen `Seo.astro`
* `public/robots.txt` dan gambar Open Graph (placeholder 1200x630 bila belum ada)
* Perubahan pada `src/pages/index.astro` dan `astro.config.mjs`

## 5. High-Level Phases
### Phase 1: Section Keunggulan
* Bangun komponen sesuai konten terkunci, tampil di `#keunggulan`, menggantikan placeholder.
### Phase 2: Section Alur Kerja
* Bangun komponen langkah berurutan dan blok ajakan WhatsApp, tampil di `#alur`, menggantikan placeholder.
### Phase 3: SEO Teknis
* Canonical, Open Graph, Twitter card, dan meta robots, semuanya bersumber dari `site.ts`.
* Sitemap otomatis dan `robots.txt` yang menunjuk ke sitemap.
* Favicon lengkap dan theme color.
* JSON-LD LocalBusiness sesuai keputusan terkunci.
### Phase 4: SEO On-Page & Performa
* Rapikan hierarki heading di seluruh halaman.
* Sisipkan keyword utama secara natural di Hero, Tentang, dan Layanan tanpa pengulangan berlebihan.
* Semua gambar punya `alt` deskriptif, ukuran (lebar/tinggi) eksplisit, dan lazy loading kecuali gambar Hero.
* Optimalkan font (preload dan `font-display: swap`) agar tidak menghambat render.
* Link WhatsApp, telepon, dan email memakai format yang benar (`wa.me`, `tel:`, `mailto:`).
### Phase 5: Perakitan & Verifikasi
* Rakit semua section di `index.astro` sesuai urutan: Hero, Tentang, Layanan, Keunggulan, Alur Kerja, lalu placeholder Proyek dan Kontak.
* Jalankan `npm run dev` dan `npm run build`, lalu periksa hasil build: tag meta, JSON-LD, sitemap, robots.

## 6. Di Luar Scope (DILARANG)
* Mengisi section Proyek, Klien, Kontak (placeholder tetap kosong)
* Membuat halaman baru, blog, atau halaman per layanan
* Menambah dependency selain integrasi sitemap resmi Astro
* Mengubah Navbar, Hero, warna, font, atau copy yang sudah dikunci
* Menyembunyikan teks keyword, mengisi keyword berlebihan, atau membuat data review/rating palsu
* Mengubah konfigurasi inti selain yang dibutuhkan untuk SEO, dan menyentuh folder `.git`

## 7. Acceptance Criteria (bisa dicek)
* [x] Enam keunggulan dan enam langkah alur tampil sesuai urutan terkunci
* [x] Grid keunggulan 1 kolom di mobile, 2-3 kolom di desktop; tanpa horizontal scroll di 360px
* [x] Klik anchor `#keunggulan` dan `#alur` tidak tertutup navbar sticky
* [x] Halaman memiliki tepat satu `<h1>`, tanpa loncat level heading
* [x] Hasil build memuat title, meta description, canonical, Open Graph, dan JSON-LD yang valid
* [x] JSON-LD tidak berisi rating, review, atau data dummy
* [x] `sitemap` dan `robots.txt` terbentuk di output build dan menunjuk ke domain dari konfigurasi
* [x] Tanpa domain production, halaman bertanda `noindex`; dengan domain terisi, bertanda `index`
* [x] Semua gambar punya `alt`, dimensi, dan lazy loading (kecuali Hero)
* [x] Skor Lighthouse mobile untuk SEO dan Accessibility minimal 90; Performance minimal 80
* [x] `npm run build` sukses tanpa error atau warning TypeScript

## 8. Notes untuk Implementer
* Semua konten dummy ditandai komentar `TODO: ganti`.
* Jika ada hal ambigu, ambil opsi paling sederhana dan catat di laporan. Jangan menambah fitur.
* Di akhir, laporkan daftar file yang dibuat/diubah dan hasil skor Lighthouse.