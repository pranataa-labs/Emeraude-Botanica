import React, { useState, useMemo } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { CosmeticCategory } from '@/types'
import { formatRupiah } from '@/lib/utils'
import { ProductImage } from '@/components/common/BotanicalCrest'
import {
  IconPumpCleanser,
  IconDropperSerum,
  IconMoisturizerJar,
  IconSunTube,
  IconFaceMask,
  IconGiftSet,
  IconTagNew,
  IconCleanSafe,
  IconSustainable,
  IconCrueltyFree,
  IconCirclePlus,
} from '@/components/common/BeautyIcons'
import { ArrowRight, Heart, Star } from 'lucide-react'
import { toast } from 'sonner'

interface CategoryItem {
  id: string
  label: string
  targetCategory: CosmeticCategory
  icon: React.FC<{ className?: string }>
}

const CATEGORY_STRIP_ITEMS: CategoryItem[] = [
  { id: 'cleansers', label: 'CLEANSERS', targetCategory: 'Cleanser & Toner', icon: IconPumpCleanser },
  { id: 'serums', label: 'SERUMS', targetCategory: 'Serum & Essence', icon: IconDropperSerum },
  { id: 'moisturizers', label: 'MOISTURIZERS', targetCategory: 'Moisturizer & Cream', icon: IconMoisturizerJar },
  { id: 'lipcheek', label: 'LIP & CHEEK', targetCategory: 'Lip & Cheek Couture', icon: IconSunTube },
  { id: 'masks', label: 'MASKS & NIGHT', targetCategory: 'Eye & Night Ritual', icon: IconFaceMask },
  { id: 'body', label: 'BODY & WELLNESS', targetCategory: 'Body & Wellness', icon: IconGiftSet },
  { id: 'all', label: 'ALL (120)', targetCategory: 'Semua', icon: IconTagNew },
]

export const CatalogView: React.FC = () => {
  const {
    products,
    openProductPage,
    navigateToCatalog,
    addToCart,
    wishlistIds,
    toggleWishlist,
  } = useCosmetics()

  const [newsletterEmail, setNewsletterEmail] = useState('')

  // Home Page ONLY shows the Most Purchased / Best-Selling Products ("Produk Paling Banyak Dibeli")
  const bestSellerProducts = useMemo(() => {
    const flaggedBestSellers = products.filter(p => p.badge === 'Best Seller')
    const pool = flaggedBestSellers.length >= 5 ? flaggedBestSellers : products
    return [...pool].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 10)
  }, [products])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast.error('Silakan masukkan alamat email yang valid')
      return
    }
    toast.success(`Terima kasih! Kode diskon 15% (EMERALD15) telah dikirim ke ${newsletterEmail}`)
    setNewsletterEmail('')
  }

  return (
    <div className="w-full">
      {/* 1. HORIZONTAL CATEGORY ICON STRIP — Clicking navigates to the Dedicated Catalog Page */}
      <section className="border-b border-border/80 bg-background py-6 sm:py-8 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-4 text-center">
            {CATEGORY_STRIP_ITEMS.map(item => {
              const Icon = item.icon

              return (
                <button
                  key={item.id}
                  onClick={() => navigateToCatalog(item.targetCategory)}
                  className="group flex flex-col items-center justify-center p-3 rounded-xl transition duration-200 focus:outline-none text-muted-foreground hover:text-[#D4AF37] hover:bg-card/60 border border-transparent hover:border-[#D4AF37]/30"
                >
                  <div className="flex size-12 sm:size-14 items-center justify-center rounded-lg transition-transform group-hover:scale-105 text-foreground/85 group-hover:text-[#D4AF37]">
                    <Icon className="size-6 sm:size-7" />
                  </div>
                  <span className="mt-2 font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase transition text-muted-foreground group-hover:text-[#D4AF37]">
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. BEST SELLERS ONLY ("PRODUK PALING BANYAK DIBELI") ON HOME PAGE */}
      <section
        id="best-sellers-section"
        className="py-12 sm:py-16 bg-[#FBF9F4] dark:bg-[#071713] transition-colors"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section Header: BEST SELLERS on Left, VIEW ALL PAGE on Right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] block mb-1">
                Best Sellers • Kurasi Terpopuler
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase text-[#091D18] dark:text-[#F2EBDD]">
                Produk Paling Banyak Dibeli
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Menampilkan 10 formulasi terlaris pilihan pelanggan. Klik produk untuk membuka halaman detailnya.
              </p>
            </div>

            <button
              onClick={() => navigateToCatalog('Semua')}
              className="group inline-flex items-center gap-2 rounded-lg border border-[#D4AF37]/50 bg-[#091D18] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#091D18] transition self-start sm:self-auto"
            >
              <span>Lihat Semua Koleksi (120 Produk)</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Best Sellers Product Cards Grid (Clicking any card opens its dedicated page) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {bestSellerProducts.map(product => {
              const effectivePrice = product.discountPrice ?? product.price
              const isWishlisted = wishlistIds.includes(product.id)

              return (
                <div
                  key={product.id}
                  onClick={() => openProductPage(product)}
                  className="group flex flex-col justify-between rounded-xl bg-card border border-border/70 p-3 sm:p-4 shadow-xs transition duration-300 hover:shadow-xl hover:border-[#D4AF37]/60 cursor-pointer"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#EFECE6] dark:bg-[#0c221c] mb-3.5">
                      <ProductImage
                        src={product.imageUrl}
                        alt={product.name}
                        name={product.name}
                        category={product.category}
                        volume={product.volume}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <span className="absolute top-2.5 left-2.5 rounded bg-[#D4AF37] text-[#091D18] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-xs">
                        {product.badge || 'Best Seller'}
                      </span>

                      {/* Wishlist Button */}
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation()
                          toggleWishlist(product.id)
                        }}
                        aria-label="Simpan ke Favorit"
                        className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-background/80 text-foreground shadow-xs hover:scale-110 transition z-10"
                      >
                        <Heart
                          className={`size-3.5 ${
                            isWishlisted ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Category & Verified Buyer Count */}
                    <div className="flex items-center justify-between gap-1 text-[10px] text-[#D4AF37] mb-1">
                      <span className="truncate font-semibold uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="flex items-center gap-0.5 shrink-0 font-bold">
                        <Star className="size-2.5 fill-[#D4AF37] text-[#D4AF37]" />
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3
                      className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground line-clamp-1 group-hover:text-[#D4AF37] transition leading-snug"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Benefit / Subtitle Line */}
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Price and Circle Plus Add Button */}
                  <div className="mt-4 pt-2.5 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-foreground block">
                        {formatRupiah(effectivePrice)}
                      </span>
                      <span className="text-[10px] text-[#D4AF37] font-medium">
                        Buka Halaman →
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={e => {
                        e.stopPropagation()
                        addToCart(product, 1)
                      }}
                      className="text-[#091D18] dark:text-[#D4AF37] hover:scale-110 transition active:scale-95 focus:outline-none"
                      title="Tambah ke Tas Belanja"
                      aria-label={`Tambah ${product.name} ke tas`}
                    >
                      <IconCirclePlus className="size-7 sm:size-8" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. DUAL EDITORIAL FEATURE BANNERS ("THE RITUAL" & "OUR PROMISE") */}
      <section className="py-10 sm:py-14 bg-background transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left Banner: THE RITUAL */}
            <div
              id="the-ritual-section"
              className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-border/70 p-6 sm:p-10 flex flex-col justify-between min-h-[380px] bg-[#EBE7DF] dark:bg-[#0c221c]"
            >
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&auto=format&fit=crop&q=80)',
                }}
              />

              <div className="relative z-10 space-y-3 max-w-xs">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  The Ritual
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#091D18] dark:text-[#F2EBDD] leading-tight">
                  Skincare that becomes a ritual.
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  Simple steps. Powerful results. Made to fit effortlessly into your everyday
                  self-care.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigateToCatalog('Eye & Night Ritual')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#091D18] dark:text-[#D4AF37] hover:underline"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>

              <div className="relative z-10 self-end mt-4 sm:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80"
                  alt="Émeraude Botanica Ritual Bottles"
                  onError={e => {
                    ;(e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?w=800&auto=format&fit=crop&q=85'
                  }}
                  className="w-48 sm:w-56 h-auto rounded-xl object-cover shadow-lg border border-border/40"
                />
              </div>
            </div>

            {/* Right Banner: OUR PROMISE */}
            <div
              id="our-promise-section"
              className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-border/70 bg-[#F4F0E8] dark:bg-[#0a1e18] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="space-y-6 max-w-xs text-left w-full sm:w-1/2">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  Our Promise
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#091D18] dark:text-[#D4AF37]">
                      <IconCleanSafe className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Clean &amp; Safe
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        No harmful chemicals, 100% paraben free
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#091D18] dark:text-[#D4AF37]">
                      <IconSustainable className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Sustainable
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Eco-friendly recyclable packaging
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-[#091D18] dark:text-[#D4AF37]">
                      <IconCrueltyFree className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Cruelty Free
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Never tested on animals, certified vegan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                <div className="relative aspect-[3/4] w-48 sm:w-52 rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80"
                    alt="Radiant Dewy Skincare Model"
                    onError={e => {
                      ;(e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'
                    }}
                    className="size-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "AS SEEN IN" EDITORIAL PRESS BAR & VIP NEWSLETTER STRIP */}
      <section className="border-t border-b border-border/80 bg-[#FBF9F4] dark:bg-[#061410] py-12 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Press Mastheads */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 border-b lg:border-b-0 lg:border-r border-border/70 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground shrink-0">
                As Seen In
              </span>
              <div className="flex items-center justify-between w-full gap-6 text-[#091D18]/80 dark:text-[#F2EBDD]/80">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest uppercase">
                  Vogue
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-widest uppercase italic">
                  Bazaar
                </span>
                <span className="font-sans text-lg sm:text-xl font-semibold tracking-wide lowercase">
                  allure
                </span>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest uppercase">
                  Elle
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-6 space-y-2">
              <div className="text-left">
                <h4 className="font-serif text-base sm:text-lg font-bold tracking-wide text-foreground">
                  Let’s Glow Together
                </h4>
                <p className="text-xs text-muted-foreground">
                  Subscribe to get 15% off your first order &amp; VIP product access.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 pt-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="flex-1 h-10 rounded-md border border-border bg-card px-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#091D18] dark:focus:ring-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="relative h-10 px-5 rounded-md bg-[#091D18] dark:bg-[#D4AF37] text-[#F2EBDD] dark:text-[#091D18] text-xs font-bold tracking-wider uppercase hover:opacity-90 transition overflow-hidden shrink-0"
                >
                  <span className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:6px_6px]" />
                  <span className="relative z-10">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
