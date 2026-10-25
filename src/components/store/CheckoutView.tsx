import React, { useState, useEffect } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import { lookupPostalCode, INDONESIAN_POSTAL_CODES } from '@/data/postalCodes'
import { Order } from '@/types'
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  CreditCard,
  Gift,
  Tag,
  CheckCircle2,
  MapPin,
} from 'lucide-react'
import { toast } from 'sonner'

const VOUCHERS: Record<string, { discountPercent?: number; flatDiscount?: number; label: string }> = {
  EMERALD15: { discountPercent: 15, label: 'Diskon 15% Signature Emerald' },
  ROYALGOLD: { flatDiscount: 120000, label: 'Potongan Rp 120.000 VIP Gold' },
  WELCOME50: { flatDiscount: 50000, label: 'Potongan Rp 50.000 Member Baru' },
}

export const CheckoutView: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    currentUser,
    selectedSample,
    createOrder,
    setActiveView,
  } = useCosmetics()

  const [customerName, setCustomerName] = useState(currentUser?.name || '')
  const [customerEmail, setCustomerEmail] = useState(currentUser?.email || '')
  const [customerPhone, setCustomerPhone] = useState(currentUser?.phone || '')
  const [postalCode, setPostalCode] = useState('12190')
  const [province, setProvince] = useState('DKI Jakarta')
  const [city, setCity] = useState('Jakarta Selatan')
  const [district, setDistrict] = useState('Kebayoran Baru (SCBD / Senopati)')
  const [shippingAddress, setShippingAddress] = useState('')
  const [courier, setCourier] = useState<'luxury-same-day' | 'jne-yes' | 'sicepat-best'>('jne-yes')
  const [paymentMethod, setPaymentMethod] = useState<Order['paymentMethod']>('QRIS')
  const [voucherInput, setVoucherInput] = useState('EMERALD15')
  const [appliedVoucher, setAppliedVoucher] = useState<string | null>('EMERALD15')

  useEffect(() => {
    if (currentUser) {
      setCustomerName(currentUser.name)
      setCustomerEmail(currentUser.email)
      if (currentUser.phone) setCustomerPhone(currentUser.phone)
    }
  }, [currentUser])

  const handlePostalCodeChange = (val: string) => {
    setPostalCode(val)
    const found = lookupPostalCode(val)
    if (found) {
      setProvince(found.province)
      setCity(found.city)
      setDistrict(found.district)
      toast.success(`Kode Pos ${val}: ${found.district}, ${found.city}`)
    }
  }

  const baseShippingCost =
    cartSubtotal >= 500000
      ? 0
      : courier === 'luxury-same-day'
      ? 45000
      : courier === 'jne-yes'
      ? 28000
      : 22000

  const discountAmount = (() => {
    if (!appliedVoucher || !VOUCHERS[appliedVoucher]) return 0
    const v = VOUCHERS[appliedVoucher]
    if (v.discountPercent) {
      return Math.round((cartSubtotal * v.discountPercent) / 100)
    }
    return v.flatDiscount || 0
  })()

  const finalTotal = Math.max(0, cartSubtotal - discountAmount + baseShippingCost)

  const handleApplyVoucher = () => {
    const clean = voucherInput.trim().toUpperCase()
    if (VOUCHERS[clean]) {
      setAppliedVoucher(clean)
      toast.success(`Voucher ${clean} berhasil diterapkan: ${VOUCHERS[clean].label}`)
    } else {
      toast.error('Kode voucher tidak ditemukan. Gunakan EMERALD15 atau ROYALGOLD.')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) {
      toast.error('Tas belanja Anda kosong.')
      return
    }
    createOrder({
      customerName,
      customerEmail,
      customerPhone,
      postalCode,
      province,
      city,
      district,
      shippingAddress,
      paymentMethod,
      shippingCost: baseShippingCost,
      discount: discountAmount,
    })
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Tas Belanja Anda Kosong
        </h2>
        <p className="text-xs text-muted-foreground">
          Silakan pilih produk perawatan kulit atau kosmetik terlebih dahulu sebelum melanjutkan checkout.
        </p>
        <button
          onClick={() => setActiveView('store')}
          className="inline-flex items-center gap-2 rounded-md bg-[#C8A96A] px-4 py-2 text-xs font-bold text-[#0F3D34]"
        >
          <ArrowLeft className="size-4" />
          <span>Kembali ke Koleksi</span>
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <button
        onClick={() => setActiveView('store')}
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-[#C8A96A] hover:underline"
      >
        <ArrowLeft className="size-3.5" />
        <span>Kembali ke Katalog Kosmetik</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Shipping & Payment Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
          {/* 1. Penerima */}
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-4 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2.5">
              1. Informasi Penerima &amp; Kontak VIP
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Nama Lengkap Penerima *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Nadia Pramesti"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">Nomor WhatsApp Aktif *</label>
                <input
                  type="tel"
                  required
                  placeholder="0812xxxxxxxx"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="font-semibold text-foreground">
                  Alamat Email (untuk E-Invoice &amp; Resi) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 2. Alamat Pengiriman & Kode Pos */}
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <h3 className="font-serif text-xl font-bold text-foreground flex items-center gap-2">
                <MapPin className="size-4 text-[#C8A96A]" />
                <span>2. Alamat Pengiriman &amp; Kemasan Zamrud</span>
              </h3>
              <span className="text-[11px] text-[#C8A96A]">Otomatis Deteksi Kode Pos</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Kode Pos Indonesia *</label>
                <input
                  type="text"
                  required
                  list="postal-codes-list"
                  placeholder="Ketik 12190, 10310, 60213..."
                  value={postalCode}
                  onChange={e => handlePostalCodeChange(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
                <datalist id="postal-codes-list">
                  {INDONESIAN_POSTAL_CODES.map(p => (
                    <option key={p.code} value={p.code}>
                      {p.district} — {p.city}
                    </option>
                  ))}
                </datalist>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">Provinsi *</label>
                <input
                  type="text"
                  required
                  value={province}
                  onChange={e => setProvince(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">Kota / Kabupaten *</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">Kecamatan / Area *</label>
                <input
                  type="text"
                  required
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="font-semibold text-foreground">
                  Detail Jalan, Nomor Rumah / Apartemen *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Contoh: Residence 8 Senopati Tower Emerald Lt. 21, Jl. Senopati Raya No. 8B"
                  value={shippingAddress}
                  onChange={e => setShippingAddress(e.target.value)}
                  className="w-full rounded-md border border-input bg-background p-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>
            </div>

            {/* Courier Selection */}
            <div className="pt-2 space-y-2">
              <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Truck className="size-3.5 text-[#C8A96A]" />
                <span>Layanan Kurir Berpendingin (Temperature-Controlled):</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  {
                    id: 'jne-yes' as const,
                    name: 'JNE YES Luxury',
                    eta: '1 Hari Sampai',
                    cost: cartSubtotal >= 500000 ? 0 : 28000,
                  },
                  {
                    id: 'luxury-same-day' as const,
                    name: 'White-Glove Same Day',
                    eta: '3–6 Jam Sampai',
                    cost: cartSubtotal >= 500000 ? 0 : 45000,
                  },
                  {
                    id: 'sicepat-best' as const,
                    name: 'SiCepat BEST',
                    eta: '1–2 Hari Sampai',
                    cost: cartSubtotal >= 500000 ? 0 : 22000,
                  },
                ].map(c => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCourier(c.id)}
                    className={`rounded-lg border p-3 text-left transition ${
                      courier === c.id
                        ? 'border-[#C8A96A] bg-[#C8A96A]/15'
                        : 'border-border bg-background/60 hover:border-[#C8A96A]/40'
                    }`}
                  >
                    <p className="font-semibold text-foreground">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.eta}</p>
                    <p className="mt-1 font-bold text-[#C8A96A]">
                      {c.cost === 0 ? 'GRATIS' : formatRupiah(c.cost)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Metode Pembayaran */}
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-4 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2.5 flex items-center gap-2">
              <CreditCard className="size-4 text-[#C8A96A]" />
              <span>3. Metode Pembayaran</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              {(
                ['QRIS', 'Transfer BCA', 'Transfer Mandiri', 'Kartu Kredit', 'COD'] as const
              ).map(method => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`rounded-lg border p-3 text-left transition ${
                    paymentMethod === method
                      ? 'border-[#C8A96A] bg-[#C8A96A]/15 font-bold text-foreground'
                      : 'border-border bg-background/60 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{method}</span>
                    {paymentMethod === method && (
                      <CheckCircle2 className="size-3.5 text-[#C8A96A]" />
                    )}
                  </div>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">
                    {method === 'QRIS'
                      ? 'Verifikasi Instan'
                      : method === 'Kartu Kredit'
                      ? 'Cicilan 0% VIP'
                      : 'Konfirmasi Otomatis'}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-[#C8A96A] text-[#0F3D34] text-sm font-bold hover:bg-[#d4b87c] transition shadow-md mt-4"
            >
              <ShieldCheck className="size-4 stroke-[2.2]" />
              <span>Konfirmasi &amp; Selesaikan Pesanan ({formatRupiah(finalTotal)})</span>
            </button>
          </div>
        </form>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-xl border border-[#C8A96A]/35 bg-card p-5 sm:p-6 space-y-5 shadow-md sticky top-24">
            <h3 className="font-serif text-xl font-bold text-foreground border-b border-border pb-2.5">
              Ringkasan Pesanan Maison
            </h3>

            {/* Items */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {cart.map(({ product, quantity }) => {
                const price = product.discountPrice ?? product.price
                return (
                  <div key={product.id} className="flex items-center justify-between gap-3 text-xs">
                    <div className="truncate">
                      <p className="font-semibold text-foreground truncate">{product.name}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {quantity} × {formatRupiah(price)}
                      </p>
                    </div>
                    <span className="font-bold text-foreground shrink-0">
                      {formatRupiah(price * quantity)}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Complimentary Sample */}
            <div className="rounded-lg border border-[#C8A96A]/30 bg-background/60 p-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 truncate">
                <Gift className="size-4 text-[#C8A96A] shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A96A] block font-semibold">
                    Complimentary Vial Gift
                  </span>
                  <span className="text-foreground font-medium truncate block">
                    {selectedSample}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#C8A96A] shrink-0 ml-2">GRATIS</span>
            </div>

            {/* Voucher Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
                <Tag className="size-3 text-[#C8A96A]" />
                <span>Kode Promo Eksklusif (EMERALD15 / ROYALGOLD)</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={voucherInput}
                  onChange={e => setVoucherInput(e.target.value.toUpperCase())}
                  placeholder="EMERALD15"
                  className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-xs font-mono uppercase focus:border-[#C8A96A] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleApplyVoucher}
                  className="h-9 px-3 rounded-md border border-[#C8A96A] text-[#C8A96A] text-xs font-bold hover:bg-[#C8A96A] hover:text-[#0F3D34] transition"
                >
                  Pakai
                </button>
              </div>
            </div>

            {/* Totals Breakdown */}
            <div className="border-t border-border pt-3 space-y-2 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal Produk</span>
                <span>{formatRupiah(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#C8A96A] font-medium">
                  <span>Diskon Voucher ({appliedVoucher})</span>
                  <span>-{formatRupiah(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-muted-foreground">
                <span>Biaya Pengiriman Berpendingin</span>
                <span>
                  {baseShippingCost === 0 ? (
                    <strong className="text-[#C8A96A]">GRATIS</strong>
                  ) : (
                    formatRupiah(baseShippingCost)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-foreground border-t border-border pt-2.5">
                <span>Total Pembayaran</span>
                <span className="text-[#C8A96A]">{formatRupiah(finalTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
