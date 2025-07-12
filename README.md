# 🎓 Tugas JDA 2 - Portfolio Website (Next.js)

Ini merupakan tugas untuk **JDA 2 (JavaScript Dasar & Aplikasi)**  
Proyek ini telah diusahakan memenuhi seluruh kriteria tugas yang diberikan, yaitu:

## ✅ Kriteria yang Dipenuhi

1. **Menggunakan Project Next.js**  
   Project ini dibangun menggunakan Next.js dan dikembangkan dari awal untuk tugas JDA 2.

2. **Minimal 2 Halaman Statis**  
   - `/about` → Halaman Tentang  
   - `/contact` → Halaman Kontak  
   (Tambahan: homepage sebagai landing page)

3. **Halaman Not Found (404)**  
   - Terdapat halaman khusus dengan desain unik yang akan muncul saat route tidak ditemukan (`/404.tsx`).

4. **Minimal 1 Halaman Dynamic Route**  
   - Contoh: `/projects/[slug]` untuk melihat detail proyek.  
     Misal: `/projects/healingku`, `/projects/blog-app`, dll.

5. **Navigasi Antar Halaman (Tanpa Reload)**  
   - Menggunakan `<Link>` dari Next.js  
   - Navigasi tersedia di bagian header dan footer, serta tombol-tombol lainnya di halaman.

6. **Pengumpulan**  
   - Proyek ini telah dipush ke GitHub sesuai instruksi.

---

## 🌟 Reni Kartika Suwandi - Portfolio Website

Website ini dibangun sebagai media untuk memperkenalkan diri, menampilkan proyek-proyek yang pernah saya kerjakan, serta menyediakan informasi kontak profesional.

---



---

## 🧩 Konten Utama

- 🎯 Tentang Saya – Penjelasan singkat mengenai latar belakang, keahlian, dan ketertarikan di bidang teknologi
- 💼 Proyek – Showcase beberapa proyek unggulan yang pernah saya buat
- 📫 Kontak – Informasi dan tautan media sosial untuk terhubung
- 🌐 Navigasi responsif dan smooth scrolling antar bagian halaman

---

## ✨ Proyek Unggulan

| Gambar              | Judul                         | Deskripsi                                                                                                          | Tautan                                                                 |
|---------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| ![Healingku](./public/porto%20(1).jpg) | Healingku.ai                   | Platform AI untuk perencanaan wisata otomatis berbasis preferensi, budget, dan durasi                             | [🔗 GitHub](https://github.com/Reswn/HEALINGKU.AI_UAS_Digital-Startup) |
| ![Blog App](./public/porto%20(2).jpg) | Blog App                       | Aplikasi blog berbasis Next.js dengan autentikasi, dashboard admin, dan database MongoDB                          | [🔗 GitHub](https://github.com/Reswn/Blog-App_)                        |
| ![Car Price](./public/porto%20(3).jpg)| Car Price Predictive Analysis | Web interaktif prediksi harga mobil menggunakan machine learning, input fitur mobil, dan output estimasi harga    | [🔗 GitHub](https://github.com/Reswn/Car-Price-Prediction-Application) |

---

## 🛠️ Teknologi yang Digunakan

- **Next.js** – Framework React untuk SSR dan routing
- **TypeScript** – Supaya penulisan kode lebih terstruktur dan aman
- **Tailwind CSS** – Framework styling utility-first yang modern
- **Font Awesome** – Untuk ikon media sosial dan navigasi
- **React Icons** – Ikon-ikon tambahan
- **HTML5 & CSS3** – Untuk bagian statis

---

## 📁 Struktur Proyek (Singkat)

```bash
.
├── app/
│   ├── page.tsx              # Halaman utama
│   ├── components/           # Komponen seperti Navbar, Footer, ProjectCard, dll
│   └── styles/               # Custom CSS / Tailwind setup
├── public/
│   └── porto (1-7).jpg       # Gambar untuk proyek-proyek
├── README.md
└── tsconfig.json, tailwind.config.js, dll
