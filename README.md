<div align="center">

# 🌿 ÉMERAUDE BOTANICA
### *Haute Cosmétique, Luxury Skincare & Botanical Wellness Platform*

[`react`](https://github.com/topics/react) • [`typescript`](https://github.com/topics/typescript) • [`vite`](https://github.com/topics/vite) • [`tailwind`](https://github.com/topics/tailwind) • [`vitest`](https://github.com/topics/vitest) • [`ecommerce`](https://github.com/topics/ecommerce) • [`skincare`](https://github.com/topics/skincare) • [`cosmetics`](https://github.com/topics/cosmetics) • [`luxury`](https://github.com/topics/luxury)

<br/>

[![React](https://img.shields.io/badge/react-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://github.com/topics/react)
[![TypeScript](https://img.shields.io/badge/typescript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/topics/typescript)
[![Vite](https://img.shields.io/badge/vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://github.com/topics/vite)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-4.0.9-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/topics/tailwind)
[![Vitest](https://img.shields.io/badge/vitest-3.0.7-FCC72B?style=for-the-badge&logo=vitest&logoColor=black)](https://github.com/topics/vitest)
[![Ecommerce](https://img.shields.io/badge/ecommerce-luxury--boutique-10B981?style=for-the-badge)](https://github.com/topics/ecommerce)
[![Skincare](https://img.shields.io/badge/skincare-botanical--actives-D4AF37?style=for-the-badge)](https://github.com/topics/skincare)
[![License](https://img.shields.io/badge/License-MIT-gray.svg?style=for-the-badge)](LICENSE)

<br/>

<img src="./docs/screenshots/emeraude-boutique-hero.png" alt="Émeraude Botanica — Haute Cosmétique & Luxury Wellness" width="100%" style="border-radius: 14px; box-shadow: 0 12px 36px rgba(0,0,0,0.4);" />

<br/>
<br/>

*Platform e-commerce butik kosmetik dan perawatan kulit botani dengan arsitektur dua sisi (**Public Luxury Boutique & Maison Admin Backoffice**), dibangun dengan fondasi teknologi performa tinggi (**React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**), dilengkapi sistem proteksi autentikasi belanja, navigasi multi-halaman mandiri, 120 formulasi bersertifikasi resmi BPOM RI, serta otomasi checkout kode pos Indonesia.*

---

</div>

## 🏷️ Teknologi & Kapabilitas Platform

Arsitektur aplikasi dibangun secara spesifik menggunakan tumpukan teknologi modern berikut:

- **`react` (v19.0.0)**:
  - Menggunakan React 19 dengan arsitektur komponen modular, state management terpusat yang reaktif, dan performa render ultra-cepat.
  - State-driven virtual routing untuk navigasi multi-halaman mulus tanpa reload peramban (*instant transitions*).

- **`typescript` (~v5.7)**:
  - Type-safety end-to-end yang ketat (*strict typing*) pada seluruh siklus model data: Formulasi Produk, Keranjang Belanja, Profil Pengguna, hingga Status Transaksi Pesanan.
  - Validasi kontrak tipe data mencegah *runtime bugs* dan menjaga stabilitas kode.

- **`vite` (v6.2.0)**:
  - Bundler modern dengan *Instant Server Start* dan *Hot Module Replacement (HMR)* secepat kilat untuk efisiensi pengembangan maksimal dan kompilasi produksi yang teroptimasi.

- **`tailwind` (Tailwind CSS v4.0.9)**:
  - Mesin utilitas CSS performa tinggi terkini (`@tailwindcss/vite`) untuk tata letak yang presisi, simetris, responsif di seluruh perangkat, serta animasi micro-interaction yang mulus.

- **`vitest` (v3.0.7)**:
  - Suite pengujian unit otomatis yang terintegrasi langsung dengan ekosistem Vite untuk memverifikasi integritas data katalog, varian flacon, dan kalkulasi pesanan secara akurat.

- **`ecommerce` & `luxury`**:
  - Alur transaksi belanja butik mewah: tas belanja geser (*cart drawer*), pemilihan sampel vial gratis 3ml, voucher potongan eksklusif, hingga deteksi wilayah otomatis berdasarkan kode pos Indonesia.

- **`skincare` & `cosmetics`**:
  - Manajemen katalog 120 formulasi kosmetik berstandar dermatologis terdaftar **BPOM RI**, dilengkapi rincian persentase bahan aktif (*Key Botanical Actives*), serta panduan langkah demi langkah ritual pemakaian (*Ritual Application Guide*).

---

## 🌟 Fitur Lengkap Aplikasi

### 1. Sistem Autentikasi & Proteksi Belanja (Auth Guard)
- **Wajib Masuk untuk Bertransaksi**:
  - Pelanggan diwajibkan melakukan autentikasi (*login*) sebelum dapat menambahkan produk ke tas belanja atau melanjutkan ke proses pembelian (*checkout*).
  - Tombol **Tambah ke Tas Belanja** dan **Beli Sekarang** akan menampilkan prompt otentikasi ramah pengguna serta memunculkan modal login jika pengguna belum masuk.
- **Ikon Keranjang Dinamis**:
  - Ikon tas belanja pada bilah navigasi utama (*Header*) hanya muncul ketika pengguna telah terotentikasi, menjaga tampilan antarmuka butik tetap bersih bagi pengunjung umum.
- **Proteksi Akses Maison Admin**:
  - Rute dan panel kontrol backoffice diamankan secara ketat khusus untuk akun yang memiliki hak akses administrator.

### 2. Arsitektur Multi-Halaman Mandiri
- **Halaman Beranda Butik (`activeView === 'store'`)**:
  - **Floating Gold Lotus Crest**: Lambang Dewi Lotus emas beresolusi tinggi yang melayang bebas tanpa bingkai kotak (*card-free*), didukung pencahayaan lembut (*ambient glow*).
  - **Strip Kategori Akses Instan**: Tombol cepat untuk melompat langsung ke kategori produk pada katalog.
  - **Kurasi Formulasi Terlaris (Best Sellers)**: Menampilkan 10 formulasi unggulan di beranda lengkap dengan rating bintang, volume flacon, dan harga.
  - **Dual Editorial Banners Simetris**: Bagian *The Ritual* dan *Our Promise* dengan tata letak proporsional dan kartu gambar yang seimbang presisi.
  - **Liputan Media Eksklusif & VIP Newsletter**: Bagian pengakuan pers (*Vogue*, *Bazaar*, *Allure*, *Elle*) dan formulir langganan buletin diskon.

- **Halaman Katalog Lengkap (`activeView === 'catalog'`)**:
  - Halaman mandiri terpisah untuk menjelajahi **seluruh 120 produk** (20 formulasi unik per kategori).
  - Filter kategori instan: *Semua*, *Serum & Essence*, *Moisturizer & Cream*, *Cleanser & Toner*, *Lip & Cheek Couture*, *Eye & Night Ritual*, dan *Body & Wellness*.
  - Filter kebutuhan jenis kulit: *Kulit Kering*, *Berminyak & Acne*, *Sensitif*, serta *Anti-Aging*.
  - Pengurutan cerdas (*Paling Banyak Dibeli*, *Rating Tertinggi*, *Harga Terendah/Tertinggi*), pencarian teks instan, dan penanda produk favorit (*Wishlist*).

- **Halaman Detail Produk Mandiri (`activeView === 'product'`)**:
  - Halaman penuh yang berdedikasi (bukan sekadar modal popup).
  - Navigasi rekam jejak (*Breadcrumb*) interaktif: `Beranda > Katalog Koleksi > [Kategori] > [Nama Produk]`.
  - Galeri flacon produk beresolusi tinggi dengan lencana resmi **Nomor Registrasi BPOM RI**, jaminan **100% Vegan & Halal Certified**, dan volume flacon.
  - Rincian mendalam *Key Botanical Actives*, instruksi bertahap *Ritual Pemakaian*, pemilih jumlah flacon, serta tombol aksi beli.
  - Rekomendasi 5 formulasi terkait dalam kategori yang sama di bagian bawah halaman.

### 3. Tas Belanja & Checkout Cerdas
- **Drawer Tas Belanja Butik**:
  - Hadiah sampel flacon mewah cuma-cuma (*Complimentary Luxury Vial Gift* 3ml) pada setiap pesanan.
  - Indikator otomatis gratis biaya kirim untuk pembelanjaan di atas ambang batas.
  - Dukungan voucher diskon (`EMERALD15` hemat 15%, `ROYALGOLD` potongan Rp 120.000).
- **Checkout Otomatis Kode Pos Indonesia**:
  - Deteksi dan pengisian otomatis Provinsi, Kota, dan Kecamatan secara instan ketika pelanggan memasukkan 5 digit kode pos.
  - Pilihan ekspedisi kurir aman (*JNE YES Luxury*, *White-Glove Same Day Delivery*, *SiCepat BEST*).
  - Berbagai metode pembayaran: QRIS instan, Transfer Bank BCA/Mandiri Virtual Account, Kartu Kredit, dan COD.
  - Penerbitan tanda terima resmi (E-Invoice) dan pelacakan status pesanan.

### 4. Maison Admin Backoffice
- **Dashboard Ringkasan Eksekutif**: 4 kartu KPI utama (*Total Pendapatan*, *Unit Flacon Terdistribusi*, *Formulasi Aktif*, *Member VIP*) serta grafik riwayat penjualan berkala.
- **Manajemen Formulasi (CRUD Lengkap)**: Tambah formulasi baru dengan *drawer sheet*, ubah harga, sesuaikan stok, perbarui nomor BPOM, dan kelola SKU aktif.
- **Manajemen & Siklus Pesanan**: Pembaruan status pesanan real-time (*Pending → Dibayar → Dikemas → Dikirim → Selesai*).
- **Database Member VIP & Profil Kulit**: Pemetaan preferensi jenis kulit member untuk analisis personalisasi layanan.

---

## 🧪 Verifikasi & Pengujian Otomatis

Seluruh logika bisnis, integritas data katalog, dan perhitungan transaksi diverifikasi menggunakan Vitest:

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
