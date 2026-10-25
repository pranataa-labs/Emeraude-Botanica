<div align="center">

# 🌿 ÉMERAUDE BOTANICA
### *Haute Cosmétique, Luxury Skincare & Botanical Wellness Store*

[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2.7-FCC72B?style=for-the-badge&logo=vitest)](https://vitest.dev/)
[![Design System](https://img.shields.io/badge/Palette-Ivory_%7C_Sage_%7C_Emerald_%7C_Forest_%7C_24K_Royal_Gold-185844?style=for-the-badge)](https://github.com/pranataa-labs)
[![License](https://img.shields.io/badge/License-MIT-D4AF37.svg?style=for-the-badge)](LICENSE)

<br/>

*Aplikasi e-commerce kosmetik botani dan perawatan kulit mewah dengan arsitektur dua sisi (**Public Luxury Boutique & Maison Admin Backoffice**) yang dirancang menggunakan palet eksklusif **Ivory, Sage, Emerald, Forest & 24K Royal Gold** terinspirasi dari keanggunan kelopak bunga zamrud botani dan emas 24K berkilau.*

---

</div>

## 🎨 Palet Identitas Desain — Sesuai Gambar Referensi

| Swatch | Kode Hex | Label Warna | Peran Visual dalam Aplikasi |
| :---: | :---: | :--- | :--- |
| <img src="https://via.placeholder.com/20/F2EBDD/F2EBDD.png" width="20" height="20" /> | **`#F2EBDD`** | **IVORY** | Latar utama Mode Terang (*Alabaster/Warm Ivory*) & Tipografi Gading Kontras Tinggi (Mode Gelap) |
| <img src="https://via.placeholder.com/20/78947F/78947F.png" width="20" height="20" /> | **`#78947F`** | **SAGE** | Aksen mist botani, badge formulasi, chip kebutuhan kulit, dan teks sekunder |
| <img src="https://via.placeholder.com/20/185844/185844.png" width="20" height="20" /> | **`#185844`** | **EMERALD** | Permukaan kartu produk, panel velvet zamrud, dan tombol aksi Mode Terang |
| <img src="https://via.placeholder.com/20/102F27/102F27.png" width="20" height="20" /> | **`#102F27`** | **FOREST** | Latar belakang sutra utama (Dark Mode Default) & Tipografi Gelap (Mode Terang) |
| <img src="https://via.placeholder.com/20/D4AF37/D4AF37.png" width="20" height="20" /> | **`#D4AF37`** | **24K ROYAL GOLD** | Emblem daun botani, tombol CTA utama, garis tepi emas 24K, dan rating bintang |

---

## 🌟 Fitur Utama

### 1. Sisi Pelanggan (Public Luxury Boutique)
- **Hero Silk Floral & Interactive Swatch Bar**:
  - Menampilkan emblem daun botani emas di dalam bingkai berlekuk klasik (*scalloped vintage crest*).
  - Bar pencarian interaktif dan filter cepat (*Malachite*, *Ceramide*, *24K Gold*, *Lip Velvet*, *Bakuchiol*, *Matcha*).
  - Bar 5 kotak warna interaktif (`#F2EBDD`, `#78947F`, `#185844`, `#102F27`, `#D4AF37`) yang dapat diklik untuk menyalin kode hex secara instan.
- **Katalog 120 Produk Kosmetik & Skincare Mewah (20 Formulasi per Kategori)**:
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
