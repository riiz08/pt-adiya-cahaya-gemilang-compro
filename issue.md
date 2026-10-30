# Implementation Plan: Pembuatan README.md (PT Adiya Cahaya Gemilang)

## 1. Overview & Objective
Membuat `README.md` di root repository agar siapa pun (pemilik, developer baru, atau agent lain) langsung paham: project ini apa, isinya apa, cara menjalankannya, dan cara mengubah kontennya. Cakupan HANYA membuat atau memperbarui `README.md`. Dokumen ini panduan tingkat tinggi; ikuti keputusan yang sudah dikunci dan jangan menambah di luar scope.

## 2. Prasyarat
* Tahap 1-4 selesai; `bun run dev` dan `bun run build` berjalan normal.
* Jika sudah ada `README.md` (mis. bawaan template Astro), timpa isinya dengan struktur di bagian 3, bukan ditambahkan di bawahnya.

## 3. Keputusan yang Sudah Dikunci (jangan diubah)

### Aturan Dasar
* Bahasa: Indonesia, ringkas, mudah dipindai (heading jelas, daftar pendek, blok kode untuk perintah).
* Sumber kebenaran: kondisi repo saat ini. Agent WAJIB membaca `package.json`, struktur `src/`, dan `src/data/site.ts` sebelum menulis. Jangan menulis hal yang tidak ada di repo.
* Package manager: hanya **Bun**. Semua perintah di README memakai `bun`, `bun run`, `bun install`, `bunx`. DILARANG menulis `npm`, `npx`, `yarn`, `pnpm`.
* DILARANG: badge palsu, skor Lighthouse yang belum diukur, screenshot karangan, klaim fitur yang belum ada, data kontak atau kredensial yang tidak ada di `site.ts`.

### Struktur Isi README (urutan dikunci)
1. **Judul & deskripsi singkat**: nama project, satu paragraf tentang apa project ini (website company profile PT Adiya Cahaya Gemilang, spesialis GRC / Glass Fibre Reinforced Cement, Cibinong, Bogor) dan untuk siapa (kontraktor dan developer).
2. **Status project**: tahap pengembangan saat ini (prototype / siap production), dan catatan bahwa sebagian konten masih dummy bila memang begitu.
3. **Fitur & isi halaman**: daftar section sesuai urutan di halaman (Hero, Tentang, Layanan, Keunggulan, Alur Kerja, Proyek, Klien, Kontak, Footer), masing-masing satu baris penjelasan. Tambahkan fitur lintas halaman (tombol WhatsApp floating, form konsultasi via WhatsApp, SEO).
4. **Tech stack**: framework, styling, bahasa, package manager, dengan alasan singkat pemilihannya (statis, cepat, SEO-friendly).
5. **Prasyarat & cara menjalankan**: instalasi Bun, `bun install`, `bun run dev`, `bun run build`, `bun run preview`, dengan penjelasan fungsi tiap perintah.
6. **Struktur folder**: pohon folder utama (`src/components`, `src/data`, `src/layouts`, `src/pages`, `src/assets`, `public`) dengan satu baris fungsi tiap folder atau file penting.
7. **Cara mengubah konten**: letak data usaha (`src/data/site.ts`), data layanan, proyek, klien, dan keunggulan; cara mengganti gambar; cara mencari item `TODO: ganti`.
8. **SEO & performa**: ringkasan fondasi SEO yang ada (meta, Open Graph, sitemap, robots, JSON-LD), penjelasan saklar `noindex`/`index` berdasarkan domain, dan prinsip performa. Skor Lighthouse hanya ditulis jika sudah pernah diukur, lengkap dengan tanggal dan mode pengukurannya.
9. **Deploy**: ringkasan singkat build statis, build command berbasis Bun, dan hosting yang dipilih. Jika belum dipilih, tulis "belum ditentukan".
10. **Catatan kepemilikan**: hak cipta dan kontak pemilik project, hanya dari data di `site.ts`. Jangan menambahkan lisensi open source kecuali diminta pemilik.

### Gaya Penulisan
* Maksimal sekitar 150 baris; tidak bertele-tele.
* Tidak ada emoji berlebihan; heading konsisten.
* Setiap perintah dalam blok kode dan sudah diverifikasi berjalan.

## 4. Struktur File yang Diharapkan
* `README.md` di root (satu-satunya file yang dibuat atau diubah)

## 5. High-Level Phases
### Phase 1: Audit Repo
* Baca `package.json`, daftar script, struktur `src/`, isi `src/data/`, dan komponen yang ada.
* Catat section yang benar-benar sudah ada dan status konten (dummy atau asli).
### Phase 2: Penulisan README
* Tulis README sesuai struktur terkunci, hanya memakai informasi hasil audit.
### Phase 3: Verifikasi
* Jalankan setiap perintah yang tertulis di README (`bun install`, `bun run dev`, `bun run build`, `bun run preview`) dan pastikan sesuai.
* Cocokkan pohon folder dan daftar section dengan kondisi repo.

## 6. Di Luar Scope (DILARANG)
* Mengubah kode, komponen, konten website, konfigurasi, atau dependency
* Membuat file dokumentasi lain (CONTRIBUTING, CHANGELOG, docs/), kecuali diminta
* Menjalankan `npm`, `npx`, `yarn`, `pnpm`; membuat lockfile selain `bun.lock`
* Menulis klaim yang tidak terverifikasi (skor, jumlah proyek, tahun berdiri, nama klien)
* Menyimpan rahasia atau kredensial, dan menyentuh folder `.git`

## 7. Acceptance Criteria (bisa dicek)
* [ ] `README.md` ada di root dan mengikuti 10 bagian dengan urutan terkunci
* [ ] Pembaca baru bisa menjawab "ini project apa" dari paragraf pertama
* [ ] Semua perintah memakai Bun; tidak ada kata `npm`, `npx`, `yarn`, `pnpm`
* [ ] Setiap perintah di README sudah dijalankan dan berhasil
* [ ] Pohon folder dan daftar section cocok dengan isi repo
* [ ] Tidak ada badge, skor, screenshot, atau klaim yang tidak terverifikasi
* [ ] Letak data yang bisa diubah (`site.ts`, data layanan/proyek/klien) tertulis jelas
* [ ] Tidak ada file lain yang berubah selain `README.md`

## 8. Notes untuk Implementer
* Jika ada hal yang tidak bisa diverifikasi dari repo, tulis "belum ditentukan" atau lewati; jangan menebak.
* Jika ada hal ambigu, ambil opsi paling sederhana dan catat di laporan.
* Di akhir, laporkan: isi garis besar README, perintah yang sudah diverifikasi, dan bagian yang ditandai "belum ditentukan".