import React, { useState, useEffect, useMemo } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah, calculateDiscountPercentage } from '@/lib/utils'
import { ProductImage } from '@/components/common/BotanicalCrest'
import {
  IconCleanIngredients,
  IconClinicallyTested,
  IconSensitiveSkin,
  IconCirclePlus,
} from '@/components/common/BeautyIcons'
import {
  ArrowLeft,
  ChevronRight,
  Star,
  ShoppingBag,
  Heart,
  BadgeCheck,
  Sparkles,
  Leaf,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export const ProductPageView: React.FC = () => {
  const {
    selectedProduct,
    products,
    openProductPage,
    navigateToCatalog,
    setActiveView,
    addToCart,
    setIsCartOpen,
    wishlistIds,
    toggleWishlist,
  } = useCosmetics()

  const [qty, setQty] = useState(1)

  // Reset quantity when switching between products
  useEffect(() => {
    setQty(1)
  }, [selectedProduct?.id])

  const activeProduct = selectedProduct || products[0]

  const relatedProducts = useMemo(() => {
    if (!activeProduct) return []
    return products
      .filter(p => p.category === activeProduct.category && p.id !== activeProduct.id)
      .slice(0, 5)
  }, [products, activeProduct])

  if (!activeProduct) {
    return null
  }

  const effectivePrice = activeProduct.discountPrice ?? activeProduct.price
  const discountPercent = calculateDiscountPercentage(
    activeProduct.price,
    activeProduct.discountPrice
  )
  const isWishlisted = wishlistIds.includes(activeProduct.id)

  const handleBuyNow = () => {
    addToCart(activeProduct, qty)
    setActiveView('checkout')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#071713] text-[#F2EBDD] pb-20">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-border/80 bg-[#091D18]/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-[#F2EBDD]/70">
            <button
              onClick={() => setActiveView('store')}
              className="hover:text-[#D4AF37] transition font-medium"
            >
              Beranda
            </button>
            <ChevronRight className="size-3.5 text-[#F2EBDD]/40" />
            <button
              onClick={() => navigateToCatalog('Semua')}
              className="hover:text-[#D4AF37] transition font-medium"
            >
              Katalog Koleksi
            </button>
            <ChevronRight className="size-3.5 text-[#F2EBDD]/40" />
            <button
              onClick={() => navigateToCatalog(activeProduct.category)}
              className="hover:text-[#D4AF37] transition font-medium text-[#D4AF37]"
            >
              {activeProduct.category}
            </button>
            <ChevronRight className="size-3.5 text-[#F2EBDD]/40" />
            <span className="text-[#F2EBDD] font-semibold truncate max-w-[220px] sm:max-w-xs">
              {activeProduct.name}
            </span>
          </nav>

          <button
            onClick={() => navigateToCatalog(activeProduct.category)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#D4AF37]/40 bg-card/80 px-3 py-1.5 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#091D18] transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>Kembali ke {activeProduct.category}</span>
          </button>
        </div>
      </div>

      {/* Main Dedicated Product Detail Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Flacon Gallery & Official BPOM / Formulation Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-[#091D18] shadow-2xl">
              <ProductImage
                src={activeProduct.imageUrl}
                alt={activeProduct.name}
                name={activeProduct.name}
                category={activeProduct.category}
                volume={activeProduct.volume}
                className="size-full object-cover"
              />

              {activeProduct.badge && (
                <span className="absolute top-4 left-4 rounded-md bg-[#D4AF37] text-[#091D18] px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-md">
                  {activeProduct.badge}
                </span>
              )}

              <button
                type="button"
                onClick={() => toggleWishlist(activeProduct.id)}
                className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-[#091D18]/85 border border-[#D4AF37]/40 text-[#F2EBDD] hover:scale-110 transition shadow-md"
                aria-label="Simpan ke Favorit"
              >
                <Heart
                  className={`size-5 ${
                    isWishlisted ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#F2EBDD]'
                  }`}
                />
              </button>
            </div>

            {/* Official Laboratory & BPOM Certificate Card */}
            <div className="rounded-xl border border-[#D4AF37]/30 bg-grain-primary p-5 space-y-3 text-xs shadow-lg">
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-wider text-[11px] border-b border-[#D4AF37]/20 pb-2.5">
                <ShieldCheck className="size-4" />
                <span>Sertifikasi Resmi &amp; Jaminan Keaslian</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[11px]">Nomor Registrasi BPOM</span>
                  <span className="font-mono font-bold text-[#D4AF37] text-xs mt-0.5 block">
                    {activeProduct.bpomNumber}
                  </span>
                </div>
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[11px]">Volume Bersih Flacon</span>
                  <span className="font-bold text-[#F2EBDD] text-xs mt-0.5 block">
                    {activeProduct.volume}
                  </span>
                </div>
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[11px]">Status Formulasi</span>
                  <span className="font-semibold text-[#F2EBDD] text-xs mt-0.5 flex items-center gap-1">
                    <BadgeCheck className="size-3.5 text-[#D4AF37]" />
                    <span>100% Vegan &amp; Halal</span>
                  </span>
                </div>
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[11px]">Ketersediaan Stok</span>
                  <span className="font-semibold text-[#D4AF37] text-xs mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="size-3.5" />
                    <span>Tersedia ({activeProduct.stock} unit)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Product Information, Actives, Ritual & Purchase Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category & Rating Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => navigateToCatalog(activeProduct.category)}
                className="rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/45 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#091D18] transition"
              >
                {activeProduct.category}
              </button>

              <div className="flex items-center gap-1.5 text-xs">
                <div className="flex items-center text-[#D4AF37]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="font-bold text-[#F2EBDD]">{activeProduct.rating}</span>
                <span className="text-muted-foreground">
                  ({activeProduct.reviewCount} ulasan terverifikasi)
                </span>
              </div>
            </div>

            {/* Product Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#F2EBDD] leading-tight">
                {activeProduct.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-[#D4AF37]">
                {activeProduct.subtitle}
              </p>
            </div>

            {/* Price & Discount Block */}
            <div className="flex flex-wrap items-baseline gap-3 pb-4 border-b border-border/80">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F2EBDD]">
                {formatRupiah(effectivePrice)}
              </span>
              {discountPercent > 0 && (
                <>
                  <span className="text-base text-muted-foreground line-through">
                    {formatRupiah(activeProduct.price)}
                  </span>
                  <span className="rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/50 px-2.5 py-0.5 text-xs font-bold text-[#D4AF37]">
                    Hemat {discountPercent}%
                  </span>
                </>
              )}
            </div>

            {/* Editorial Luxury Quote */}
            {activeProduct.luxuryQuote && (
              <blockquote className="rounded-xl border-l-4 border-[#D4AF37] bg-card/70 p-4 italic font-serif text-sm text-[#F2EBDD]/90">
                &ldquo;{activeProduct.luxuryQuote}&rdquo;
              </blockquote>
            )}

            {/* Detailed Formulation Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Deskripsi &amp; Manfaat Utama
              </h3>
              <p className="text-sm text-[#F2EBDD]/85 leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            {/* Key Active Ingredients */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-1.5">
                <Sparkles className="size-3.5" />
                <span>Kandungan Aktif Utama (Key Botanical Actives)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeProduct.keyIngredients.map(ing => (
                  <div
                    key={ing}
                    className="rounded-xl border border-[#D4AF37]/35 bg-card p-3 flex items-center gap-2.5 shadow-xs"
                  >
                    <div className="size-2 rounded-full bg-[#D4AF37] shrink-0" />
                    <span className="text-xs font-semibold text-[#F2EBDD]">{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ritual Pemakaian */}
            <div className="rounded-xl border border-border bg-card/80 p-4 sm:p-5 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-1.5">
                <Leaf className="size-3.5" />
                <span>Ritual Pemakaian (Application Ritual)</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed">
                {activeProduct.ritualUsage}
              </p>
            </div>

            {/* Skin Types Suitability */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-muted-foreground font-medium">
                Direkomendasikan untuk:
              </span>
              {activeProduct.skinTypes.map(st => (
                <span
                  key={st}
                  className="rounded-full border border-[#D4AF37]/30 bg-[#091D18] px-3 py-1 text-xs font-semibold text-[#F2EBDD]"
                >
                  {st}
                </span>
              ))}
            </div>

            {/* Quantity & Add to Bag / Buy Now Actions */}
            <div className="pt-4 border-t border-border/80 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Quantity Selector */}
                <div className="flex items-center rounded-xl border border-[#D4AF37]/40 bg-card h-12">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 h-full text-sm font-bold text-[#F2EBDD] hover:text-[#D4AF37] transition"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-[#F2EBDD]">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(Math.min(activeProduct.stock, qty + 1))}
                    className="px-4 h-full text-sm font-bold text-[#F2EBDD] hover:text-[#D4AF37] transition"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={() => {
                    addToCart(activeProduct, qty)
                    setIsCartOpen(true)
                  }}
                  disabled={activeProduct.stock <= 0}
                  className="flex-1 min-w-[200px] h-12 rounded-xl bg-[#D4AF37] hover:bg-[#E5C453] text-[#091D18] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition disabled:opacity-50"
                >
                  <ShoppingBag className="size-4 stroke-[2.2]" />
                  <span>Tambah ke Tas Belanja</span>
                </button>

                {/* Direct Checkout Button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  disabled={activeProduct.stock <= 0}
                  className="h-12 px-6 rounded-xl border border-[#D4AF37] bg-[#091D18] hover:bg-[#102F27] text-[#D4AF37] font-bold text-xs sm:text-sm uppercase tracking-wider transition"
                >
                  Beli Sekarang
                </button>
              </div>

              {/* 3 Dermatological Assurance Badges */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/50 p-2.5">
                  <IconCleanIngredients className="size-4 text-[#D4AF37] shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2EBDD]/85">
                    Clean Botanicals
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/50 p-2.5">
                  <IconClinicallyTested className="size-4 text-[#D4AF37] shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2EBDD]/85">
                    Clinically Tested
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/50 p-2.5">
                  <IconSensitiveSkin className="size-4 text-[#D4AF37] shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2EBDD]/85">
                    Sensitive Safe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products in the Same Category */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 border-t border-border/80 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Rekomendasi Kurasi
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#F2EBDD] mt-0.5">
              Produk Serupa dalam {activeProduct.category}
            </h2>
          </div>

          <button
            onClick={() => navigateToCatalog(activeProduct.category)}
            className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline self-start sm:self-auto"
          >
            Lihat Semua 20 Produk {activeProduct.category} →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {relatedProducts.map(item => {
            const itemPrice = item.discountPrice ?? item.price
            return (
              <div
                key={item.id}
                onClick={() => openProductPage(item)}
                className="group flex flex-col justify-between rounded-xl bg-card border border-border/70 p-3 sm:p-4 shadow-xs transition duration-300 hover:shadow-xl hover:border-[#D4AF37]/60 cursor-pointer"
              >
                <div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#0c221c] mb-3">
                    <ProductImage
                      src={item.imageUrl}
                      alt={item.name}
                      name={item.name}
                      category={item.category}
                      volume={item.volume}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground line-clamp-1 group-hover:text-[#D4AF37] transition">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-foreground">
                    {formatRupiah(itemPrice)}
                  </span>
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation()
                      addToCart(item, 1)
                    }}
                    className="text-[#D4AF37] hover:scale-110 transition"
                    title="Tambah ke Tas Belanja"
                  >
                    <IconCirclePlus className="size-7" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
