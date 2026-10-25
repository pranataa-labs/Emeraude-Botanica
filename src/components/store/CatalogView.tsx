import React, { useState, useMemo } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { CosmeticCategory, SkinTypeFilter } from '@/types'
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
import {
  ArrowRight,
  Heart,
  SlidersHorizontal,
  Compass,
} from 'lucide-react'
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
  { id: 'suncare', label: 'SUN CARE', targetCategory: 'Moisturizer & Cream', icon: IconSunTube },
  { id: 'masks', label: 'MASKS', targetCategory: 'Eye & Night Ritual', icon: IconFaceMask },
  { id: 'sets', label: 'SETS & KITS', targetCategory: 'Body & Wellness', icon: IconGiftSet },
  { id: 'new', label: 'NEW ARRIVALS', targetCategory: 'Semua', icon: IconTagNew },
]

const SKIN_TYPES: SkinTypeFilter[] = [
  'Semua Kulit',
  'Kulit Kering',
  'Kulit Berminyak & Acne',
  'Kulit Sensitif',
  'Anti-Aging & Kusam',
]

export const CatalogView: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    selectedSkinType,
    setSelectedSkinType,
    searchQuery,
    setSelectedProduct,
    addToCart,
    wishlistIds,
    toggleWishlist,
  } = useCosmetics()

  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all')
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleCategorySelect = (item: CategoryItem) => {
    if (activeCategoryTab === item.id) {
      setActiveCategoryTab('all')
      setSelectedCategory('Semua')
    } else {
      setActiveCategoryTab(item.id)
      setSelectedCategory(item.targetCategory)
    }
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast.error('Silakan masukkan alamat email yang valid')
      return
    }
    toast.success(`Terima kasih! Kode diskon 15% (EMERALD15) telah dikirim ke ${newsletterEmail}`)
    setNewsletterEmail('')
  }

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory =
        selectedCategory === 'Semua' || product.category === selectedCategory
      const matchesSkin =
        selectedSkinType === 'Semua Kulit' ||
        product.skinTypes.includes(selectedSkinType as Exclude<SkinTypeFilter, 'Semua Kulit'>)
      const q = searchQuery.trim().toLowerCase()
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.subtitle.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.keyIngredients.some(ing => ing.toLowerCase().includes(q))

      return matchesCategory && matchesSkin && matchesQuery
    })
  }, [products, selectedCategory, selectedSkinType, searchQuery])

  return (
    <div className="w-full">
      {/* 1. HORIZONTAL CATEGORY ICON STRIP (Matching the Reference Image exactly) */}
      <section className="border-b border-border/80 bg-background py-6 sm:py-8 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-4 text-center">
            {CATEGORY_STRIP_ITEMS.map(item => {
              const Icon = item.icon
              const isSelected =
                activeCategoryTab === item.id ||
                (selectedCategory !== 'Semua' && selectedCategory === item.targetCategory)

              return (
                <button
                  key={item.id}
                  onClick={() => handleCategorySelect(item)}
                  className={`group flex flex-col items-center justify-center p-3 rounded-xl transition duration-200 focus:outline-none ${
                    isSelected
                      ? 'bg-card text-[#091D18] dark:text-[#D4AF37] shadow-sm ring-1 ring-border'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                  }`}
                >
                  <div
                    className={`flex size-12 sm:size-14 items-center justify-center rounded-lg transition-transform group-hover:scale-105 ${
                      isSelected
                        ? 'text-[#091D18] dark:text-[#D4AF37]'
                        : 'text-foreground/75'
                    }`}
                  >
                    <Icon className="size-6 sm:size-7" />
                  </div>
                  <span
                    className={`mt-2 font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase transition ${
                      isSelected
                        ? 'text-[#091D18] dark:text-[#D4AF37]'
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. BEST SELLERS SECTION (Matching the Reference Image Card Layout) */}
      <section id="catalog-section" className="py-12 sm:py-16 bg-[#FBF9F4] dark:bg-[#071713] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Section Header: BEST SELLERS on Left, VIEW ALL on Right */}
          <div className="flex items-center justify-between border-b border-border/70 pb-4">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase text-[#091D18] dark:text-[#F2EBDD]">
                Best Sellers
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Optional Skin Type Filter */}
              <div className="hidden md:flex items-center gap-1.5 text-xs">
                <SlidersHorizontal className="size-3.5 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground">Skin:</span>
                <select
                  value={selectedSkinType}
                  onChange={e => setSelectedSkinType(e.target.value as SkinTypeFilter)}
                  className="rounded-md border border-border bg-card px-2 py-1 text-xs text-foreground focus:outline-none"
                >
                  {SKIN_TYPES.map(st => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory('Semua')
                  setActiveCategoryTab('all')
                }}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition"
              >
                <span>View All</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Product Cards Row / Grid (5 Columns like Reference Image) */}
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 py-16 text-center space-y-3">
              <Compass className="size-10 text-muted-foreground stroke-1" />
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Tidak ada produk yang sesuai filter
              </h3>
              <p className="text-xs text-muted-foreground max-w-sm">
                Silakan ubah kata kunci atau pilih kategori perawatan lainnya.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Semua')
                  setActiveCategoryTab('all')
                  setSelectedSkinType('Semua Kulit')
                }}
                className="rounded-md bg-[#091D18] dark:bg-[#D4AF37] px-4 py-2 text-xs font-bold text-[#F2EBDD] dark:text-[#091D18]"
              >
                Tampilkan Seluruh Koleksi
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {filteredProducts.slice(0, 10).map(product => {
                const effectivePrice = product.discountPrice ?? product.price
                const isWishlisted = wishlistIds.includes(product.id)

                return (
                  <div
                    key={product.id}
                    className="group flex flex-col justify-between rounded-xl bg-card border border-border/70 p-3 sm:p-4 shadow-xs transition duration-300 hover:shadow-md hover:border-border"
                  >
                    <div>
                      {/* Product Image on Clean Soft Background */}
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#EFECE6] dark:bg-[#0c221c] cursor-pointer mb-3.5"
                      >
                        <ProductImage
                          src={product.imageUrl}
                          alt={product.name}
                          name={product.name}
                          category={product.category}
                          volume={product.volume}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

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

                      {/* Product Title (Clean Bold Uppercase like Reference Image) */}
                      <h3
                        onClick={() => setSelectedProduct(product)}
                        className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground line-clamp-1 cursor-pointer hover:text-[#D4AF37] transition leading-snug"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      {/* Benefit / Subtitle Line */}
                      <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Price and Circle Plus Add Button (Exact Reference Match) */}
                    <div className="mt-4 pt-2.5 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-foreground">
                        {formatRupiah(effectivePrice)}
                      </span>

                      <button
                        onClick={() => addToCart(product, 1)}
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
          )}
        </div>
      </section>

      {/* 3. DUAL EDITORIAL FEATURE BANNERS ("THE RITUAL" & "OUR PROMISE") */}
      <section className="py-10 sm:py-14 bg-background transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left Banner: THE RITUAL (Liquid water ripple background & product trio) */}
            <div
              id="the-ritual-section"
              className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-border/70 p-6 sm:p-10 flex flex-col justify-between min-h-[380px] bg-[#EBE7DF] dark:bg-[#0c221c]"
            >
              {/* Ripple water texture backdrop */}
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
                    onClick={() => {
                      setSelectedCategory('Eye & Night Ritual')
                      const el = document.getElementById('catalog-section')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#091D18] dark:text-[#D4AF37] hover:underline"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* Product Trio on Stone Pedestal Image */}
              <div className="relative z-10 self-end mt-4 sm:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80"
                  alt="Émeraude Botanica Ritual Bottles"
                  className="w-48 sm:w-56 h-auto rounded-xl object-cover shadow-lg border border-border/40"
                />
              </div>
            </div>

            {/* Right Banner: OUR PROMISE (3 Line Icons on Left, Dewy Skin Portrait on Right) */}
            <div
              id="our-promise-section"
              className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-border/70 bg-[#F4F0E8] dark:bg-[#0a1e18] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              {/* Left Side: 3 Promises with Minimalist Line Icons */}
              <div className="space-y-6 max-w-xs text-left w-full sm:w-1/2">
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  Our Promise
                </span>

                <div className="space-y-4">
                  {/* Promise 1 */}
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

                  {/* Promise 2 */}
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

                  {/* Promise 3 */}
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

              {/* Right Side: Editorial Close-Up Portrait of Radiant Glowing Skin */}
              <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                <div className="relative aspect-[3/4] w-48 sm:w-52 rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80"
                    alt="Radiant Dewy Skincare Model"
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

            {/* Newsletter: "LET'S GLOW TOGETHER" (With tactile grain button) */}
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
