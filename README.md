<div align="center">

# 🌿 ÉMERAUDE BOTANICA
### *Haute Cosmétique, Luxury Skincare & Botanical Wellness Store*

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2.7-FCC72B?style=for-the-badge&logo=vitest)](https://vitest.dev/)
[![Design System](https://img.shields.io/badge/Palette-Emerald_%26_Cream-0F3D34?style=for-the-badge)](https://github.com/pranataa-labs)
[![License](https://img.shields.io/badge/License-MIT-C8A96A.svg?style=for-the-badge)](LICENSE)

<br/>

*Aplikasi e-commerce kosmetik botani dan perawatan kulit mewah dengan arsitektur dua sisi (**Public Luxury Boutique & Maison Admin Backoffice**) yang dirancang menggunakan palet eksklusif **Emerald & Cream** terinspirasi dari keanggunan sutra zamrud kerajaan dan aksen emas 24K.*

---

</div>

## 🎨 Palet Identitas Desain — Emerald & Cream

| Nama Warna | Kode Hex | Peran Visual dalam Aplikasi |
| :--- | :--- | :--- |
| **Imperial Deep Emerald** | `#0F3D34` | Latar belakang sutra utama (Dark Mode) & tipografi utama (Light Mode) |
| **Botanical Forest Silk** | `#134E43` | Permukaan kartu produk, panel velvet zamrud, dan aksen sekunder |
| **Soft Sage Dew** | `#E6F0E9` | Aksen mist botani, badge formulasi, dan teks sekunder |
| **Warm Alabaster Cream** | `#F7F6F1` | Latar belakang utama (Light Mode) & tipografi gading kontras tinggi |
| **Champagne Botanical Gold** | `#C8A96A` | Emblem daun botani, tombol CTA utama, garis tepi emas, dan bintang rating |

---

## 🌟 Fitur Utama

### 1. Sisi Pelanggan (Public Luxury Boutique)
- **Hero Emerald Silk & Interactive Swatch Bar**:
  - Menampilkan emblem daun botani emas di dalam bingkai berlekuk klasik (*scalloped vintage crest*).
  - Bar pencarian interaktif dan filter cepat (*Malachite*, *Ceramide*, *24K Gold*, *Lip Velvet*, *Bakuchiol*, *Matcha*).
  - Bar 5 kotak warna interaktif (`#0F3D34`, `#134E43`, `#E6F0E9`, `#F7F6F1`, `#C8A96A`) yang dapat diklik untuk menyalin kode hex secara instan.
- **Katalog 12 Produk Kosmetik & Skincare Mewah**:
  - Filter kebutuhan kulit (*Kulit Kering*, *Kulit Berminyak & Acne*, *Kulit Sensitif*, *Anti-Aging & Kusam*).
  - 6 kategori kosmetik (*Serum & Essence*, *Moisturizer & Cream*, *Cleanser & Toner*, *Lip & Cheek Couture*, *Eye & Night Ritual*, *Body & Wellness*).
  - Fitur simpan ke **Favorit (Wishlist)** dan sortir harga/rating.
- **Modal Detail Formulasi & BPOM**:
  - Nomor Registrasi BPOM RI resmi per produk.
  - Bahan Aktif Utama (*Key Actives*), Panduan Ritual Pemakaian, dan Volume Bersih.
- **Tas Belanja & Complimentary Sample Gratis**:
  - Progress bar **Gratis Pengiriman Eksklusif** (pembelian di atas Rp 500.000).
  - Pemilih **Complimentary Luxury Vial Gift** gratis (misal: *Émeraude Cellular Elixir 3ml*, *24K Gold Peptide Eye Nectar*).
  - Dukungan kode voucher diskon (`EMERALD15` diskon 15%, `ROYALGOLD` potongan Rp 120.000, `WELCOME50`).
- **Alur Checkout Cerdas (Deteksi Kode Pos Indonesia)**:
  - Input Kode Pos otomatis mengisi Provinsi, Kota, dan Kecamatan secara akurat.
  - Pilihan kurir berpendingin (*JNE YES Luxury*, *White-Glove Same Day*, *SiCepat BEST*).
  - Metode pembayaran QRIS, Transfer BCA/Mandiri, Kartu Kredit, dan COD.
  - E-Invoice cetak dan pelacakan status pesanan 5 tahap.
- **Command Palette (`⌘K` / `Ctrl+K`)**:
  - Pencarian kilat seluruh formulasi, bahan aktif, dan navigasi cepat.

### 2. Sisi Pengelola (Maison Admin Backoffice)
- **Desain Khusus satnaing/shadcn-admin**: Sidebar 16rem yang dapat diciutkan (*collapsible icon mode*), header lengket (*sticky blurred*), dan kartu KPI dengan tren omzet.
- **Dashboard Eksekutif**: 4 Kartu KPI (Total Pendapatan, Pesanan & Unit Flacon Terdistribusi, Formulasi Aktif, Member VIP Terdaftar) serta grafik omzet 6 bulan.
- **Manajemen Formulasi (CRUD)**: Tambah produk baru melalui *Slide-out Sheet Drawer*, ubah harga/promo/stok/BPOM/bahan aktif, dan hapus SKU.
- **Manajemen Pesanan & Resi**: Pembaruan status pesanan (*Pending → Dibayar → Dikemas → Dikirim → Selesai → Dibatalkan*).
- **Database Member VIP & Analitik**: Analisis preferensi jenis kulit dan daftar 5 produk terlaris.

---

## 🔑 Akun Demo Siap Pakai

Tersedia tombol login instan 1-klik di dalam modal Masuk:

| Peran | Email | Kata Sandi | Akses Utama |
| :--- | :--- | :--- | :--- |
| **Maison Director (Admin)** | `admin@example.com` | `password123` | Backoffice Dashboard, CRUD Kosmetik, Pesanan VIP, Analitik |
| **VIP Emerald Member** | `user@example.com` | `password123` | Butik Kosmetik, Tas Belanja, Checkout Multi-kurir, Pelacakan |

---

## 🛠️ Menjalankan Proyek Secara Lokal

### Prasyarat
- Node.js (v18 ke atas, disarankan v20+)
- pnpm atau npm

### Langkah Instalasi
```bash
# 1. Masuk ke direktori proyek
cd emeraude-cosmetics

# 2. Pasang dependensi
pnpm install

# 3. Jalankan server pengembangan
pnpm dev --port 5174
```

Buka peramban di **[http://localhost:5174/](http://localhost:5174/)**.

### Menjalankan Pengujian (Testing)
```bash
pnpm test
```

### Build Produksi
```bash
pnpm run build
```

---

## 📄 Lisensi
Dilisensikan di bawah [MIT License](LICENSE).

<div align="center">
  <sub>Engineered with dedication by <a href="https://github.com/pranataa-labs">Pranataa Labs</a></sub>
</div>
