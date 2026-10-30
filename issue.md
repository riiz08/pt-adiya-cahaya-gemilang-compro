# Implementation Plan: Navbar, Hero, dan Footer (Company Profile PT Adiya Cahaya Gemilang)

## 1. Overview & Objective
Membangun kerangka tampilan utama website company profile PT Adiya Cahaya Gemilang (spesialis GRC / Glass Fibre Reinforced Cement, Cibinong, Bogor) pada project Astro di root repository. Cakupan HANYA: Navbar, Hero, Footer. Dokumen ini panduan tingkat tinggi; ikuti keputusan yang sudah dikunci di bawah dan jangan menambah di luar scope.

## 2. Prasyarat
* Project Astro + Tailwind + TypeScript sudah terpasang dan `npm run dev` berjalan. Jika belum, hentikan dan laporkan, jangan inisialisasi ulang.

## 3. Keputusan yang Sudah Dikunci (jangan diubah)
* Warna: primary `#3D2B7A`, primary gelap `#2A1D57`, aksen `#C9A24B`, background `#FFFFFF` / `#F5F5F8`, teks `#1F1F2E`
* Font: Poppins (heading), Inter (body)
* Gaya: profesional, clean, whitespace lega, mobile-first. Target: kontraktor dan developer.
* Data usaha (sumber tunggal, jangan di-hardcode di komponen):
  * Nama: PT. Adiya Cahaya Gemilang | Tagline: Glass Fibre Reinforced Cement
  * Alamat: Jl. Raya Jakarta Bogor KM 41 RT. 04/04, Kel. Pabuaran, Kec. Cibinong, Kab. Bogor
  * Telepon: 0813 8353 3007 / 0815 1416 5875
  * Email: adiyacahayagemilanggrc@gmail.com
  * WhatsApp: 6281383533007 (dummy, perlu verifikasi)
* Menu navigasi: Beranda, Tentang, Layanan, Proyek, Kontak (anchor: `#beranda`, `#tentang`, `#layanan`, `#proyek`, `#kontak`)
* Copy hero:
  * Headline: "Spesialis GRC untuk Fasad & Elemen Arsitektural Bangunan Anda"
  * Sub-headline: "Cladding dinding, pilar, hingga list plafon. Diproduksi dan dipasang dengan ukuran presisi sesuai kondisi lapangan."
  * CTA utama: "Minta Penawaran" (WhatsApp) | CTA kedua: "Lihat Proyek" (#proyek)
  * Statistik dummy: 50+ Proyek Selesai, 10+ Tahun Pengalaman, 100% Ukuran Sesuai Lapangan

## 4. Struktur File yang Diharapkan
* `src/data/site.ts`: data usaha dan menu
* `src/layouts/BaseLayout.astro`: layout + SEO dasar
* `src/components/Navbar.astro`, `Hero.astro`, `Footer.astro`, `WhatsAppButton.astro`
* `src/pages/index.astro`: perakitan halaman
* Logo ACG di `src/assets/` (pakai placeholder jika belum ada file)

## 5. High-Level Phases
### Phase 1: Fondasi
* Daftarkan design token dan font di konfigurasi Tailwind sesuai bagian 3.
* Buat data usaha terpusat dan layout dasar dengan metadata SEO.
### Phase 2: Navbar
* Logo + nama, menu anchor, tombol "Hubungi Kami" ke WhatsApp, sticky, versi mobile berupa hamburger.
### Phase 3: Hero
* Badge, headline, sub-headline, dua CTA, tiga statistik, placeholder gambar.
### Phase 4: Footer + WhatsApp floating
* Identitas singkat, navigasi cepat, kontak, copyright, tombol WhatsApp floating di semua halaman.
### Phase 5: Perakitan & Verifikasi
* Rakit di `index.astro`, tambahkan anchor kosong (`#tentang`, `#layanan`, `#proyek`, `#kontak`) dengan tinggi minimal agar scroll anchor terlihat.
* Jalankan `npm run dev` dan `npm run build`.

## 6. Di Luar Scope (DILARANG)
* Mengisi section Tentang, Layanan, Proyek, Klien, Kontak
* Menambah halaman baru, library UI, atau dependency di luar yang sudah ada
* Mengubah warna, font, atau copy yang sudah dikunci
* Mengubah konfigurasi inti atau folder `.git`

## 7. Acceptance Criteria (bisa dicek)
* [x] Navbar sticky; klik menu scroll ke anchor yang benar
* [x] Hamburger berfungsi di lebar layar ≤ 768px
* [x] Semua tombol WhatsApp membuka `wa.me/` dengan nomor dari `site.ts`
* [x] Tidak ada nama, alamat, atau kontak yang di-hardcode di komponen
* [x] Tidak ada horizontal scroll di lebar 360px
* [x] `npm run build` sukses tanpa error atau warning TypeScript

## 8. Notes untuk Implementer
* Semua konten dummy ditandai komentar `TODO: ganti` agar mudah dicari.
* Jika ada hal yang ambigu, ambil opsi paling sederhana dan catat di akhir laporan. Jangan menambah fitur.
* Di akhir, laporkan daftar file yang dibuat/diubah.