# Implementation Plan: Inisialisasi Project Company Profile (Astro JS)

## 1. Overview & Objective
Inisialisasi project website company profile untuk **PT Adiya Cahaya Gemilang** menggunakan framework **Astro JS** pada direktori root repository ini. Dokumen ini dirancang sebagai panduan tingkat tinggi (*high-level*) bagi programmer/agent untuk mengeksekusi setup awal project.

---

## 2. Tech Stack Recommendation
- **Framework**: Astro (versi stabil terbaru)
- **Styling**: Tailwind CSS (direkomendasikan via `@astrojs/tailwind` / `@tailwindcss/vite`)
- **Language**: TypeScript (standard/recommended preset)
- **Package Manager**: npm / pnpm / bun

---

## 3. High-Level Phases

### Phase 1: Project Scaffolding & Setup
- Inisialisasi Astro di root folder saat ini (tanpa membuat subdirektori berlebih/nested project).
- Pastikan file konfigurasi inti terbentuk dengan benar (`package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`).
- Pasang dan integrasikan framework styling (Tailwind CSS).
- Verifikasi dev server dan build script berjalan normal.

### Phase 2: Struktur Direktori & Arsitektur Dasar
Siapkan struktur folder modular standar Astro:
- `src/layouts/`: Template layout utama (Header/Navbar, Footer, SEO metadata).
- `src/components/`: Komponen UI reusable (Hero, Navbar, Footer, Cards, CTA).
- `src/pages/`: Routing halaman utama company profile.
- `public/` & `src/assets/`: Direktori penyimpanan static assets (logo, icons, images).

### Phase 3: Setup Halaman Inti Company Profile
Buat kerangka halaman dengan konten placeholder yang relevan:
- **Home (`index.astro`)**: Hero banner, highlight nilai keunggulan, ringkasan layanan, CTA.
- **Tentang Kami (`about.astro`)**: Profil perusahaan, visi, misi, dan nilai-nilai.
- **Layanan/Produk (`services.astro`)**: Katalog atau rincian layanan utama.
- **Kontak (`contact.astro`)**: Informasi alamat, kontak telepon/email, dan tautan komunikasi (misal: WhatsApp).

### Phase 4: Quality & Build Check
- Pastikan layout responsif (mobile & desktop-friendly).
- Pasang metadata SEO dasar (title, description, favicon).
- Uji proses build produksi dan pastikan tidak ada error TypeScript maupun sintaks.

---

## 4. Acceptance Criteria
- [x] Project Astro berhasil terpasang di root folder repo.
- [x] Perintah `bun run dev` berjalan normal di local environment.
- [x] Perintah `bun run build` sukses menghasilkan static output tanpa error.
- [x] Integrasi styling (Tailwind CSS) aktif dan berfungsi.
- [x] Halaman dasar (Home, About, Services, Contact) dan komponen layout utama sudah terstruktur rapi.

---

## 5. Notes for Implementer / Agent
- Jaga agar repositori tetap bersih dan jangan merusak folder `.git`.
- Gunakan pendekatan *component-driven* agar mudah dikembangkan dan dimodifikasi lebih lanjut.
- Fokus pada fondasi arsitektur yang solid, performan, dan mudah dipahami.

