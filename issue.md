# Implementation Plan: Perbaikan Footer + Section Tentang Kami & Layanan (PT Adiya Cahaya Gemilang)

## 1. Overview & Objective
Tahap 2 pada project Astro yang sudah memiliki Navbar, Hero, dan Footer. Cakupan HANYA: (a) perbaikan footer, (b) section Tentang Kami (`#tentang`), (c) section Layanan (`#layanan`). Dokumen ini panduan tingkat tinggi; ikuti keputusan yang sudah dikunci dan jangan menambah di luar scope.

## 2. Prasyarat
* Tahap 1 selesai: `npm run dev` dan `npm run build` berjalan normal.
* Data usaha tersentralisasi di `src/data/site.ts`. Jika kondisi ini tidak terpenuhi, hentikan dan laporkan.

## 3. Keputusan yang Sudah Dikunci (jangan diubah)
* Design token, font, dan gaya mengikuti tahap 1 (primary `#3D2B7A`, gelap `#2A1D57`, aksen `#C9A24B`, background selang-seling `#FFFFFF` / `#F5F5F8`, teks `#1F1F2E`; Poppins untuk heading, Inter untuk body).
* Pola section: label kecil (eyebrow) di atas, judul, deskripsi singkat, lalu isi. Semua section memakai pola yang sama.
* Logo footer: gunakan file logo ACG asli (yang sama dengan navbar) di dalam wadah putih bersudut membulat. JANGAN memakai versi logo yang diubah menjadi putih polos.

### Konten Tentang Kami (dummy, tandai `TODO: ganti`)
* Eyebrow: "Tentang Kami"
* Judul: "Mitra Pekerjaan GRC untuk Proyek Bangunan Anda"
* Paragraf profil: PT Adiya Cahaya Gemilang adalah perusahaan di Cibinong, Bogor yang bergerak di bidang Glass Fibre Reinforced Cement (GRC): memproduksi dan memasang elemen arsitektural dengan ukuran yang disesuaikan kondisi lapangan.
* Visi (1 kalimat) dan Misi (3 poin) dummy yang masuk akal
* Nilai-nilai (3 kartu): Presisi Ukuran, Ketepatan Waktu, Komunikasi Terbuka
* Fakta singkat: Lokasi workshop Cibinong, Bogor | Direktur: Siti Kokom Safitri (dari surat resmi)

### Konten Layanan (urutan dikunci)
1. Cladding Tempel Dinding (tebal 2 cm)
2. Pilar & Pagar GRC
3. Bawah Plafon & List Plafon
4. Sudut & Ornamen Fasad
5. Custom Sesuai Gambar Proyek
* Setiap layanan: ikon sederhana, judul, deskripsi 1-2 kalimat. Satuan pekerjaan disebut "meter lari (M)" bila perlu.
* Di bawah daftar layanan: satu blok ajakan "Konsultasikan Kebutuhan Proyek Anda" dengan tombol WhatsApp (nomor dari `site.ts`).

## 4. Struktur File yang Diharapkan
* `src/components/About.astro`, `Services.astro`, `ServiceCard.astro`
* Data layanan dan nilai-nilai ditaruh di `src/data/` (bukan di dalam komponen)
* Perubahan pada `Footer.astro` dan `src/pages/index.astro`

## 5. High-Level Phases
### Phase 1: Perbaikan Footer
* Ganti logo footer sesuai keputusan yang dikunci.
* Beri ruang bawah pada footer agar tombol WhatsApp floating tidak menimpa teks apa pun.
* Perbaiki spasi pada copyright dan naikkan kontras teks kecil agar terbaca di background ungu gelap.
* Hapus teks bawah footer yang duplikat dengan deskripsi di kolom kiri.
### Phase 2: Section Tentang Kami
* Bangun komponen sesuai konten terkunci, tampil di `#tentang`, menggantikan placeholder kosong.
### Phase 3: Section Layanan
* Bangun komponen daftar layanan berbentuk kartu dan blok ajakan WhatsApp, tampil di `#layanan`, menggantikan placeholder kosong.
### Phase 4: Perakitan & Verifikasi
* Rakit di `index.astro` setelah Hero dengan background selang-seling.
* Jalankan `bun run dev` dan `npm run build`.

## 6. Di Luar Scope (DILARANG)
* Mengisi section Proyek, Klien, Kontak, Keunggulan, Alur Kerja (placeholder tetap kosong)
* Menambah halaman, library UI, atau dependency baru
* Mengubah Navbar, Hero, warna, font, atau copy tahap 1
* Mengubah konfigurasi inti atau folder `.git`

## 7. Acceptance Criteria (bisa dicek)
* [x] Logo footer menampilkan huruf "ACG" dengan jelas, tidak berupa bentuk polos
* [x] Tombol WhatsApp floating tidak menutupi teks di footer pada lebar 360px maupun desktop
* [x] Copyright terbaca benar ("© 2026 PT. Adiya Cahaya Gemilang...") dengan kontras jelas
* [x] Klik menu "Tentang" dan "Layanan" scroll ke section yang benar tanpa tertutup navbar sticky
* [x] Lima layanan tampil dengan urutan yang dikunci
* [x] Grid layanan: 1 kolom di mobile, 2-3 kolom di desktop, tanpa horizontal scroll di 360px
* [x] Semua tombol WhatsApp memakai nomor dari `site.ts`
* [x] `npm run build` sukses tanpa error atau warning TypeScript

## 8. Notes untuk Implementer
* Semua konten dummy ditandai komentar `TODO: ganti`.
* Jika ada hal ambigu, ambil opsi paling sederhana dan catat di laporan. Jangan menambah fitur.
* Di akhir, laporkan daftar file yang dibuat/diubah.