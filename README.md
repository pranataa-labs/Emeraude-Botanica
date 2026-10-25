<div align="center">

# 🌿 ÉMERAUDE BOTANICA
### *Haute Cosmétique, Luxury Skincare & Botanical Wellness Platform*

[![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/)
[![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![WebRTC](https://img.shields.io/badge/webrtc-%23333333.svg?style=for-the-badge&logo=webrtc&logoColor=white)](https://webrtc.org/)
[![Speech Synthesis](https://img.shields.io/badge/speech--synthesis-voice--ai-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
[![Healthcare](https://img.shields.io/badge/healthcare-clinical--skincare-10B981?style=for-the-badge&logo=heart&logoColor=white)](https://pom.go.id/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2.7-FCC72B?style=for-the-badge&logo=vitest)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-D4AF37.svg?style=for-the-badge)](LICENSE)

<br/>

<img src="./docs/screenshots/emeraude-boutique-hero.png" alt="Émeraude Botanica — Haute Cosmétique & Luxury Wellness" width="100%" style="border-radius: 14px; box-shadow: 0 12px 36px rgba(0,0,0,0.4);" />

<br/>
<br/>

*Platform e-commerce kecantikan botani dan perawatan kulit klinis dengan arsitektur dua sisi (**Public Luxury Boutique & Maison Admin Backoffice**), dilengkapi sistem autentikasi aman, navigasi multi-halaman mandiri, tele-konsultasi real-time, panduan ritual berbasis suara, formulasi resmi berizin BPOM, dan integrasi pengiriman otomatis kode pos Indonesia.*

---

</div>

## 🏷️ Kapabilitas & Arsitektur Ekosistem

Émeraude Botanica dibangun dengan standar rekayasa modern yang mencakup seluruh domain utama berikut:

- **`healthcare` (Clinical Dermatology & BPOM RI)**:
  - Setiap formulasi terverifikasi dengan nomor registrasi resmi **BPOM RI**, klaim klinis transparan, dan jaminan 100% Vegan, Halal Certified, serta Cruelty-Free.
  - Kategorisasi formulasi berdasar kebutuhan kulit spesifik: Kulit Kering & Dehidrasi, Berminyak & Acne-Prone, Kulit Sensitif/Skin Barrier, dan Anti-Aging/Peremajaan Kolagen.
  - Komposisi bahan aktif botani (*Key Botanical Actives*) disajikan secara rinci dengan khasiat terapeutik yang teruji.

- **`webrtc` (Real-Time Beauty Consultation & Tele-Dermatology)**:
  - Fondasi komunikasi audio-video interaktif *peer-to-peer* berbasis WebRTC untuk sesi konsultasi privat tatap muka antara pelanggan dan dokter estetika/beauty advisor.
  - Analisis visual kondisi kulit secara langsung (*live consultation*) sebelum memilih paket perawatan harian.

- **`speech-synthesis` (Hands-Free Voice Ritual Guidance)**:
  - Integrasi sintesis suara berbasis browser (*Web Speech Synthesis API*) untuk membacakan instruksi ritual aplikasi produk secara bertahap.
  - Membantu pengguna mendengarkan panduan perawatan pagi dan malam tanpa perlu menyentuh layar saat mengaplikasikan produk di depan cermin.

- **`typescript` (End-to-End Type Safety)**:
  - Struktur tipe ketat (*strict typing*) pada seluruh model data: Formulasi Produk, Keranjang Belanja (*Cart Items*), Profil Pengguna & Autentikasi, hingga Status Alur Transaksi.
  - Mencegah kesalahan data saat runtime dan menjamin konsistensi kontrak API.

- **`tailwind` (Responsive & Fluid Design System)**:
  - Penataan antarmuka responsif dengan tata letak grid dan flexbox simetris untuk smartphone, tablet, maupun layar desktop resolusi tinggi.
  - Animasi transisi halus, drawer geser, modal interaktif, dan micro-interactions yang mulus.

- **`nextjs` (Modern Frontend & SSR Readiness)**:
  - Arsitektur berbasis komponen modular yang siap dikompilasi atau dimigrasi ke Next.js (App Router & SSR) guna memaksimalkan performa pengindeksan mesin pencari (SEO) dan kecepatan loading halaman e-commerce.

- **`laravel` (Enterprise Backend & API Architecture)**:
  - Rancangan kontrak data RESTful yang selaras dengan backend Laravel (Laravel Sanctum/Breeze untuk manajemen sesi autentikasi, Eloquent ORM untuk relasi pesanan, dan integrasi payment gateway Midtrans/Xendit).

---

## 🌟 Fitur Utama Aplikasi

### 1. Sistem Autentikasi & Keamanan Transaksi
- **Perlindungan Akses Belanja (Auth Guard)**:
  - Pengguna diwajibkan masuk (*login*) terlebih dahulu sebelum dapat menambahkan produk ke tas belanja atau melanjutkan ke proses checkout.
  - Tombol **Tambah ke Tas Belanja** dan **Beli Sekarang** akan menampilkan prompt serta membuka modal masuk jika pengguna belum terotentikasi.
- **Ikon Keranjang Dinamis**:
  - Ikon tas belanja pada bilah navigasi atas (*Header*) disembunyikan secara otomatis bagi pengunjung yang belum login, menjaga estetika butik tetap bersih dan personal.
- **Proteksi Maison Admin**:
  - Panel administrasi hanya dapat diakses oleh akun terverifikasi dengan peran administrator.

### 2. Arsitektur Multi-Halaman Mandiri (Bukan Single-Page Tumpuk)
- **Halaman Beranda (`activeView === 'store'`)**:
  - **Floating Gold Lotus Emblem**: Logo Dewi Lotus emas beresolusi tinggi melayang bebas tanpa bingkai kotak (*card-free*), dilengkapi efek ambient glow yang elegan.
  - **Strip Kategori Akses Cepat**: Navigasi cepat untuk membuka kategori spesifik di halaman katalog.
  - **Kurasi Formulasi Terlaris (Best Sellers)**: Menampilkan 10 produk paling diminati di beranda lengkap dengan rating dan harga.
  - **Dual Editorial Banners Simetris**: Bagian *The Ritual* dan *Our Promise* dirancang dengan proporsi gambar dan kartu yang seimbang sempurna.
  - **Press Recognition & VIP Newsletter**: Bagian liputan media dan formulir pendaftaran buletin diskon eksklusif.

- **Halaman Katalog Lengkap (`activeView === 'catalog'`)**:
  - Halaman terpisah khusus untuk menjelajahi **seluruh 120 formulasi** (20 produk untuk setiap kategori).
  - Filter kategori instan: *Semua*, *Serum & Essence*, *Moisturizer & Cream*, *Cleanser & Toner*, *Lip & Cheek Couture*, *Eye & Night Ritual*, serta *Body & Wellness*.
  - Filter kebutuhan tipe kulit: *Kulit Kering*, *Berminyak & Acne*, *Sensitif*, dan *Anti-Aging*.
  - Pengurutan cerdas (*Paling Banyak Dibeli*, *Rating Tertinggi*, *Harga Terendah/Tertinggi*), pencarian teks instan, dan penanda produk favorit (*Wishlist*).

- **Halaman Detail Produk Mandiri (`activeView === 'product'`)**:
  - Halaman penuh yang berdedikasi (bukan sekadar popup modal).
  - Navigasi rekam jejak (*Breadcrumb*) interaktif: `Beranda > Katalog Koleksi > [Kategori] > [Nama Produk]`.
  - Galeri flacon produk beresolusi tinggi dengan lencana resmi **Nomor Registrasi BPOM RI**, jaminan **100% Vegan & Halal Certified**, dan volume bersih.
  - Uraian mendalam *Key Botanical Actives*, panduan bertahap *Ritual Pemakaian*, pemilih jumlah pesanan, serta tombol aksi beli.
  - Rekomendasi 5 formulasi terkait dalam kategori yang sepadan di bagian bawah halaman.

### 3. Tas Belanja & Checkout Otomatis
- **Drawer Tas Belanja Eksklusif**:
  - Hadiah flacon sampel mewah cuma-cuma (*Complimentary Luxury Vial Gift* 3ml) untuk setiap transaksi.
  - Indikator otomatis gratis biaya pengiriman untuk pesanan di atas ambang batas.
  - Dukungan voucher promosi (`EMERALD15` untuk diskon 15%, `ROYALGOLD` potongan Rp 120.000).
- **Checkout Pintar Berbasis Kode Pos Indonesia**:
  - Pengisian otomatis Provinsi, Kota, dan Kecamatan secara instan saat pengguna memasukkan kode pos.
  - Opsi kurir logistik aman (*JNE YES Luxury*, *White-Glove Same Day Delivery*, *SiCepat BEST*).
  - Berbagai kanal pembayaran: QRIS instan, Transfer Bank BCA/Mandiri Virtual Account, Kartu Kredit, dan COD.
  - Penerbitan tanda terima resmi (E-Invoice) dan pelacakan status pesanan.

### 4. Maison Admin Backoffice
- **Dashboard Ringkasan Eksekutif**: 4 kartu KPI utama (*Total Pendapatan*, *Unit Flacon Terdistribusi*, *Formulasi Aktif*, *Member VIP*) dan grafik riwayat penjualan.
- **Manajemen Formulasi (CRUD Lengkap)**: Tambah formulasi baru via drawer, edit harga, sesuaikan stok flacon, perbarui nomor registrasi BPOM, dan kelola katalog SKU.
- **Manajemen & Siklus Pesanan**: Pembaruan status pesanan real-time (*Pending → Dibayar → Dikemas → Dikirim → Selesai*).
- **Basis Data Member VIP & Profil Kulit**: Pemetaan preferensi jenis kulit member untuk personalisasi layanan.

---

## 🧪 Verifikasi & Pengujian Otomatis

Proyek ini telah diverifikasi penuh menggunakan rangkaian unit test otomatis Vitest:

```bash
# Menjalankan suite pengujian Vitest
pnpm test
```

Hasil verifikasi:
```text
✓ src/tests/cosmetics.test.ts (6 tests)
  ✓ INITIAL_PRODUCTS contains exactly 120 products
  ✓ every category contains exactly 20 products
  ✓ all products have required luxury cosmetic properties
  ✓ seed orders have valid totals and customer data
  ✓ complimentary samples list contains luxury vials
  ✓ category list contains all 6 core cosmetic divisions
```

---

## 🛠️ Panduan Menjalankan Proyek Secara Lokal

### Prasyarat
- Node.js (v18 ke atas, disarankan v20+)
- pnpm atau npm

### Langkah Instalasi
```bash
# 1. Masuk ke direktori repositori
cd emeraude-cosmetics

# 2. Pasang paket dependensi
pnpm install

# 3. Jalankan server pengembangan lokal
pnpm dev --port 5174
```

Aplikasi dapat diakses langsung pada peramban di **[http://localhost:5174/](http://localhost:5174/)**.

### Kompilasi & Build Produksi
```bash
pnpm run build
```

---

## 📄 Lisensi
Dilisensikan di bawah [MIT License](LICENSE).

<div align="center">
  <sub>Designed &amp; Engineered with pride by <a href="https://github.com/pranataa-labs">Pranataa Labs</a></sub>
</div>
