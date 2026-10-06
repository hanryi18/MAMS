# MAMS — Demo Website

Prototype interaktif Merchant Acquiring Management System untuk presentasi.

## Menjalankan di laptop

1. Install Node.js versi 22.13.0 atau lebih baru dan pnpm versi 11.25.0.
2. Buka terminal di folder project.
3. Jalankan `pnpm install --frozen-lockfile`.
4. Jalankan `pnpm dev`.
5. Buka http://localhost:5173.

Project menggunakan React, TypeScript, Vinext/Vite, Tailwind, dan Recharts.
Tidak membutuhkan database atau API key untuk alur demo MAMS.
Folder `.openai` harus ikut disalin karena konfigurasi build mengimpornya.

## Demo

Gunakan email yang valid dan password untuk membuka dashboard demo.
Login dan reset password merupakan simulasi, bukan autentikasi produksi.
Data tabel dan grafik adalah data contoh. Sebagian state disimpan di browser.

## Struktur

- `app/page.tsx`: perpindahan halaman berbasis hash dan authentication demo.
- `app/*.css`: tampilan tiap modul serta motion, glass dan landing page.
- `components/`: dashboard, registrasi, merchant, terminal, approval, dan operasional.
- `lib/`: fixtures dan helper data demo.
- `public/assets/`: logo, ikon, font, gambar, dan video yang digunakan.
- `docs/MAMS-UI-CONVENTIONS.md`: aturan konsistensi UI.

## Kolaborasi

Repository tujuan: https://github.com/hanryi18/MAMS

Undang teman melalui Settings > Collaborators. Setelah menerima undangan,
teman bisa clone repository, install dependencies, lalu menjalankan demo lokal.
Sebaiknya kerjakan perubahan di branch terpisah dan kirim pull request.

Website demo saat ini: https://mams-authentication.haaanri.chatgpt.site
Upload atau perubahan di GitHub tidak otomatis memperbarui website tersebut.
Penerbitan dari GitHub perlu dihubungkan sebagai langkah terpisah.

## Build

Jalankan `pnpm build` untuk membuat hasil build.
`pnpm start` menjalankan preview lokal hasil build menggunakan Wrangler.
Build/output, node_modules, cache lokal, dan file .env tidak disertakan dalam paket.

## Versi sumber

8855a082a987b906109b6dd2cb7020beb0fb1538
