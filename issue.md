# Implementation Plan: Section Proyek, Klien, Kontak + Optimasi Lighthouse (PT Adiya Cahaya Gemilang)

## 1. Overview & Objective
Tahap 4 pada project Astro yang sudah memiliki Navbar, Hero, Footer, Tentang Kami, Layanan, Keunggulan, Alur Kerja, dan fondasi SEO. Cakupan HANYA: (a) migrasi package manager ke Bun, (b) section Proyek (`#proyek`), (c) section Klien (`#klien`), (d) section Kontak (`#kontak`), (e) optimasi teknis agar skor Lighthouse seluruh halaman setinggi mungkin TANPA mengurangi konten atau informasi. Dokumen ini panduan tingkat tinggi; ikuti keputusan yang sudah dikunci dan jangan menambah di luar scope.

## 2. Prasyarat
* Tahap 1-3 selesai dan berjalan normal.
* Bun sudah terpasang di environment. Jika belum, hentikan dan laporkan.
* Data usaha dan SEO terpusat di `src/data/site.ts`. Jika tidak terpenuhi, hentikan dan laporkan.

## 3. Keputusan yang Sudah Dikunci (jangan diubah)

### Package Manager (dikunci)
* Package manager resmi project ini adalah **Bun**. Semua perintah memakai `bun`, `bun run`, `bun install`, `bunx`.
* DILARANG menjalankan `npm`, `npx`, `yarn`, atau `pnpm` dalam bentuk apa pun.
* Lockfile yang sah hanya `bun.lock`. File `package-lock.json`, `yarn.lock`, dan `pnpm-lock.yaml` tidak boleh ada.
* Tool sekali pakai (mis. Lighthouse) dijalankan lewat `bunx` dan tidak ditambahkan ke dependency project.

### Desain dan Struktur
* Design token, font, gaya, pola section (eyebrow, judul, deskripsi, isi), dan background selang-seling mengikuti tahap sebelumnya.
* Urutan akhir halaman: Hero, Tentang, Layanan, Keunggulan, Alur Kerja, Proyek, Klien, Kontak, Footer. Menu Navbar tidak diubah.

### Konten Proyek (dummy, tandai `TODO: ganti`)
* Eyebrow: "Proyek" | Judul: "Proyek GRC yang Telah Kami Kerjakan"
* Enam kartu proyek, tiap kartu: gambar placeholder, jenis pekerjaan (mis. Cladding Tempel Dinding), lokasi (kota/kawasan dummy), dan satu kalimat deskripsi.
* Struktur data siap diisi proyek asli (judul, jenis pekerjaan, lokasi, deskripsi, gambar, alt) di `src/data/`.
* DILARANG menyebut nilai kontrak, nama klien, atau angka volume yang belum terverifikasi.

### Konten Klien
* Eyebrow: "Klien" | Judul: "Dipercaya oleh Kontraktor dan Developer"
* Tampilkan nama klien sebagai teks (bukan gambar logo). Satu-satunya nama dari dokumen resmi: PT. Saka Propertindo Perkasa, ditandai `TODO: konfirmasi izin menyebut nama klien`. Sisanya placeholder jelas.
* DILARANG membuat testimoni, kutipan, rating, atau review palsu.

### Konten Kontak
* Eyebrow: "Kontak" | Judul: "Konsultasikan Proyek GRC Anda"
* Kartu informasi: alamat workshop, dua nomor telepon (`tel:`), email (`mailto:`), jam operasional dummy, semuanya dari `site.ts`.
* Peta: jangan memakai iframe yang langsung dimuat. Tampilkan kartu lokasi dengan tombol "Buka di Google Maps". Jika ingin tampilan peta, muat hanya setelah pengunjung mengklik, sehingga informasi lokasi tetap lengkap.
* Form konsultasi: nama, jenis pekerjaan (pilihan dari daftar layanan), lokasi proyek, pesan singkat. Saat dikirim, membuka WhatsApp (`wa.me`) dengan pesan terisi otomatis. Tanpa backend, layanan form, atau CAPTCHA pihak ketiga.
* Label terhubung benar dengan input, dengan pesan validasi yang jelas.

### Keputusan Lighthouse (dikunci)
* PRINSIP UTAMA: informasi dan konten TIDAK boleh dikurangi demi skor. Dilarang menghapus section, teks, gambar, atau fitur yang sudah ada. Skor dikejar lewat optimasi teknis saja.
* Target: setinggi mungkin, idealnya 100, di Performance, Accessibility, Best Practices, SEO. Diukur pada profil mobile dan desktop, di build production (`bun run build` lalu `bun run preview`), bukan dev server.
* Pengukuran SEO dilakukan dengan domain/flag production aktif, karena mode `noindex` dari tahap 3 menurunkan skor SEO. Saklar `noindex` tetap dipertahankan.
* Tidak ada script pihak ketiga (analytics, chat widget, embed) pada tahap ini.
* Gambar: pipeline gambar bawaan Astro, format modern (WebP/AVIF), ukuran responsif (`srcset`/`sizes`), dimensi eksplisit, lazy loading kecuali gambar Hero (diprioritaskan memuat).
* Font: self-host hanya bobot yang dipakai, preload font kritis, `font-display: swap`.
* Minim JavaScript: interaksi (hamburger, form WhatsApp) memakai script ringan; tanpa framework JS.
* Kontras warna dan ukuran target sentuh memenuhi standar aksesibilitas. Jika perbaikan kontras butuh penyesuaian warna, lakukan sehalus mungkin dan catat di laporan.

## 4. Struktur File yang Diharapkan
* `src/components/Projects.astro`, `ProjectCard.astro`, `Clients.astro`, `Contact.astro`, `ContactForm.astro`
* Data proyek dan klien di `src/data/`
* Gambar placeholder proyek di `src/assets/` (diproses pipeline gambar Astro)
* `bun.lock` di root (menggantikan `package-lock.json`)
* Perubahan pada `src/pages/index.astro`, `package.json` (hanya bila perlu untuk Bun), dan komponen lama hanya bila dibutuhkan untuk perbaikan skor

## 5. High-Level Phases
### Phase 0: Migrasi ke Bun
* Hapus `package-lock.json` dan `node_modules` lama, lalu pasang dependency dengan `bun install` hingga `bun.lock` terbentuk.
* Pastikan semua script di `package.json` berjalan lewat `bun run`, dan tidak ada referensi `npm` di script atau dokumentasi project (mis. README).
* Verifikasi `bun run dev` dan `bun run build` berjalan normal sebelum lanjut. Jika gagal karena Bun, laporkan penyebabnya dan jangan kembali ke npm.
### Phase 1: Section Proyek
* Bangun komponen sesuai konten terkunci, tampil di `#proyek`, menggantikan placeholder.
### Phase 2: Section Klien
* Bangun komponen sesuai konten terkunci, tampil di `#klien`.
### Phase 3: Section Kontak
* Bangun kartu informasi, kartu lokasi, dan form berbasis WhatsApp, tampil di `#kontak`, menggantikan placeholder.
### Phase 4: Audit & Optimasi Lighthouse (tanpa mengurangi informasi)
* Jalankan Lighthouse (lewat `bunx`) pada build production untuk mobile dan desktop, catat skor awal.
* Perbaiki temuan pada seluruh halaman lewat cara teknis: kompresi dan format gambar, font, ukuran bundel, layout shift (CLS), hierarki heading, `alt`, kontras, nama tautan deskriptif, ukuran target sentuh.
* Untuk setiap temuan yang hanya bisa diselesaikan dengan mengurangi konten, JANGAN dikerjakan. Catat sebagai "dikecualikan demi informasi" beserta dampak skornya.
* Ukur ulang dan catat skor akhir.
### Phase 5: Perakitan & Verifikasi Akhir
* Pastikan urutan section sesuai keputusan terkunci dan semua anchor navbar berfungsi.
* Verifikasi hasil build: meta, JSON-LD, sitemap, robots tetap valid.
* Jalankan `bun run dev` dan `bun run build`.

## 6. Di Luar Scope (DILARANG)
* Menjalankan `npm`, `npx`, `yarn`, atau `pnpm`; membuat atau meninggalkan lockfile selain `bun.lock`
* Menambah halaman baru, blog, atau halaman detail proyek
* Menambah dependency baru ke project, termasuk library form, peta, slider, atau animasi (tool audit sekali pakai lewat `bunx` dikecualikan)
* Menambah script pihak ketiga (analytics, chat, embed, iklan)
* Membuat testimoni, rating, review, atau klaim angka palsu
* Menghapus, memperpendek, atau menyembunyikan konten, section, atau fitur demi menaikkan skor
* Mematikan fitur SEO
* Mengubah warna, font, atau copy yang sudah dikunci (kecuali penyesuaian kontras minimal sesuai keputusan Lighthouse), dan menyentuh folder `.git`

## 7. Acceptance Criteria (bisa dicek)
* [ ] `bun.lock` ada; `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml` tidak ada
* [ ] Tidak ada referensi `npm` atau `npx` di `package.json` maupun dokumentasi project
* [ ] `bun run dev` berjalan normal dan `bun run build` sukses tanpa error atau warning TypeScript
* [ ] Enam kartu proyek, bagian klien, dan bagian kontak tampil sesuai urutan terkunci
* [ ] Seluruh konten tahap 1-3 tetap utuh (tidak ada teks, section, atau fitur yang hilang)
* [ ] Form menghasilkan link `wa.me` dengan pesan terisi dari input, memakai nomor dari `site.ts`
* [ ] Tidak ada iframe atau request ke domain pihak ketiga saat halaman dimuat pertama kali
* [ ] Tautan telepon, email, dan peta memakai format yang benar (`tel:`, `mailto:`, link Maps)
* [ ] Klik anchor `#proyek`, `#klien`, `#kontak` tidak tertutup navbar sticky
* [ ] Tidak ada horizontal scroll di lebar 360px
* [ ] Lighthouse build production, mobile dan desktop: Accessibility, Best Practices, SEO bernilai 100; Performance minimal 95 (target 100)
* [ ] Setiap kategori di bawah 100 disertai penjelasan penyebab di laporan
* [ ] CLS 0 dan LCP di bawah 2,5 detik
* [ ] Halaman tetap memiliki satu `<h1>`, JSON-LD valid, sitemap dan robots terbentuk

## 8. Notes untuk Implementer
* Semua perintah memakai Bun. Jika ada instruksi atau error yang menyarankan `npm`, tetap pakai padanan Bun dan catat di laporan.
* Semua konten dummy ditandai komentar `TODO: ganti`.
* Prioritas saat konflik: informasi lengkap lebih penting daripada skor. Jangan pernah mengurangi konten untuk menaikkan skor; laporkan saja.
* Jika ada hal ambigu, ambil opsi paling sederhana dan catat di laporan. Jangan menambah fitur.
* Di akhir, laporkan daftar file yang dibuat/diubah, hasil migrasi Bun, skor Lighthouse sebelum dan sesudah, daftar item "dikecualikan demi informasi", dan daftar item `TODO: ganti`.