import React, { useMemo, useState } from 'react'
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
  IconCirclePlus,
} from '@/components/common/BeautyIcons'
import {
  Search,
  SlidersHorizontal,
  Heart,
  Star,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Compass,
} from 'lucide-react'

interface CategoryTabItem {
  id: string
  label: string
  targetCategory: CosmeticCategory
  icon: React.FC<{ className?: string }>
}

const CATEGORY_TABS: CategoryTabItem[] = [
  { id: 'all', label: 'Semua Koleksi (120)', targetCategory: 'Semua', icon: IconTagNew },
  { id: 'serums', label: 'Serum & Essence (20)', targetCategory: 'Serum & Essence', icon: IconDropperSerum },
  { id: 'moisturizers', label: 'Moisturizer & Cream (20)', targetCategory: 'Moisturizer & Cream', icon: IconMoisturizerJar },
  { id: 'cleansers', label: 'Cleanser & Toner (20)', targetCategory: 'Cleanser & Toner', icon: IconPumpCleanser },
  { id: 'lipcheek', label: 'Lip & Cheek Couture (20)', targetCategory: 'Lip & Cheek Couture', icon: IconSunTube },
  { id: 'masks', label: 'Eye & Night Ritual (20)', targetCategory: 'Eye & Night Ritual', icon: IconFaceMask },
  { id: 'body', label: 'Body & Wellness (20)', targetCategory: 'Body & Wellness', icon: IconGiftSet },
]

const SKIN_TYPES: SkinTypeFilter[] = [
  'Semua Kulit',
  'Kulit Kering',
  'Kulit Berminyak & Acne',
  'Kulit Sensitif',
  'Anti-Aging & Kusam',
]

export const ProductsPageView: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    selectedSkinType,
    setSelectedSkinType,
    searchQuery,
    setSearchQuery,
    openProductPage,
    addToCart,
    wishlistIds,
    toggleWishlist,
    setActiveView,
  } = useCosmetics()

  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular')
  const [onlyWishlist, setOnlyWishlist] = useState(false)

  const filteredProducts = useMemo(() => {
    const list = products.filter(product => {
      const matchesCategory =
        selectedCategory === 'Semua' || product.category === selectedCategory
      const matchesSkin =
        selectedSkinType === 'Semua Kulit' ||
        product.skinTypes.includes(selectedSkinType as Exclude<SkinTypeFilter, 'Semua Kulit'>)
      const matchesWishlist = !onlyWishlist || wishlistIds.includes(product.id)
      const q = searchQuery.trim().toLowerCase()
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.subtitle.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.keyIngredients.some(ing => ing.toLowerCase().includes(q))

      return matchesCategory && matchesSkin && matchesWishlist && matchesQuery
    })

    return [...list].sort((a, b) => {
      const priceA = a.discountPrice ?? a.price
      const priceB = b.discountPrice ?? b.price
      if (sortBy === 'price-asc') return priceA - priceB
      if (sortBy === 'price-desc') return priceB - priceA
      if (sortBy === 'rating') return b.rating - a.rating
      return b.reviewCount - a.reviewCount
    })
  }, [products, selectedCategory, selectedSkinType, searchQuery, sortBy, onlyWishlist, wishlistIds])

  return (
    <div className="min-h-screen bg-[#071713] text-[#F2EBDD] pb-20">
      {/* Top Luxury Banner & Breadcrumb */}
      <section className="border-b border-border/80 bg-grain-primary py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-xs text-[#F2EBDD]/70">
              <button
                onClick={() => setActiveView('store')}
                className="hover:text-[#D4AF37] transition flex items-center gap-1.5 font-medium"
              >
                <ArrowLeft className="size-3.5 text-[#D4AF37]" />
                <span>Beranda</span>
              </button>
              <ChevronRight className="size-3.5 text-[#F2EBDD]/40" />
              <span className="text-[#D4AF37] font-semibold">Koleksi Lengkap</span>
              {selectedCategory !== 'Semua' && (
                <>
                  <ChevronRight className="size-3.5 text-[#F2EBDD]/40" />
                  <span className="text-[#F2EBDD] font-semibold">{selectedCategory}</span>
                </>
              )}
            </nav>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/40 bg-[#091D18]/80 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37]">
              <Sparkles className="size-3" />
              <span>Haute Botanique Paris • 120 Formulasi</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-2 pt-2">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wider uppercase text-[#F2EBDD]">
              {selectedCategory === 'Semua' ? 'Katalog Koleksi Émeraude' : selectedCategory}
            </h1>
            <p className="text-xs sm:text-sm text-[#F2EBDD]/75 leading-relaxed">
              Jelajahi seluruh rangkaian perawatan kulit dan kosmetik botani mewah kami. Klik pada
              produk mana pun untuk membuka halaman detail lengkap beserta kandungan aktif dan
              ritual pemakaiannya.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Strip */}
      <section className="border-b border-border/80 bg-[#091D18]/90 sticky top-20 z-30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORY_TABS.map(item => {
              const Icon = item.icon
              const isSelected = selectedCategory === item.targetCategory
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCategory(item.targetCategory)}
                  className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold tracking-wider uppercase whitespace-nowrap transition shrink-0 ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#091D18] shadow-md'
                      : 'bg-card/70 text-[#F2EBDD]/80 hover:text-[#D4AF37] border border-border/60'
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar + Product Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#D4AF37]" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari nama produk, kategori, atau bahan aktif..."
              className="w-full h-10 rounded-lg border border-border bg-background pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Right Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Skin Type */}
            <div className="flex items-center gap-1.5 text-xs">
              <SlidersHorizontal className="size-3.5 text-[#D4AF37]" />
              <span className="text-[11px] text-muted-foreground">Tipe Kulit:</span>
              <select
                value={selectedSkinType}
                onChange={e => setSelectedSkinType(e.target.value as SkinTypeFilter)}
                className="h-9 rounded-lg border border-border bg-background px-2.5 text-xs text-foreground focus:outline-none focus:border-[#D4AF37]"
              >
                {SKIN_TYPES.map(st => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[11px] text-muted-foreground">Urutkan:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="h-9 rounded-lg border border-border bg-background px-2.5 text-xs text-foreground focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="popular">Paling Banyak Dibeli</option>
                <option value="rating">Rating Tertinggi</option>
                <option value="price-asc">Harga: Rendah ke Tinggi</option>
                <option value="price-desc">Harga: Tinggi ke Rendah</option>
              </select>
            </div>

            {/* Wishlist Filter Toggle */}
            <button
              onClick={() => setOnlyWishlist(prev => !prev)}
              className={`inline-flex items-center gap-1.5 h-9 rounded-lg px-3 text-xs font-semibold border transition ${
                onlyWishlist
                  ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]'
                  : 'border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              <Heart className={`size-3.5 ${onlyWishlist ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}`} />
              <span>Favorit ({wishlistIds.length})</span>
            </button>
          </div>
        </div>

        {/* Count Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <p>
            Menampilkan <strong className="text-[#D4AF37]">{filteredProducts.length}</strong> produk
            {selectedCategory !== 'Semua' ? ` dalam kategori ${selectedCategory}` : ' dari total 120 koleksi'}
          </p>
          {(selectedCategory !== 'Semua' ||
            selectedSkinType !== 'Semua Kulit' ||
            searchQuery ||
            onlyWishlist) && (
            <button
              onClick={() => {
                setSelectedCategory('Semua')
                setSelectedSkinType('Semua Kulit')
                setSearchQuery('')
                setOnlyWishlist(false)
              }}
              className="text-[#D4AF37] hover:underline font-semibold"
            >
              Reset Semua Filter
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 py-16 text-center space-y-3">
            <Compass className="size-10 text-[#D4AF37] stroke-1" />
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Tidak ada produk yang cocok dengan pencarian Anda
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              Silakan ubah kata kunci pencarian atau pilih kategori perawatan lainnya.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua')
                setSelectedSkinType('Semua Kulit')
                setSearchQuery('')
                setOnlyWishlist(false)
              }}
              className="rounded-md bg-[#D4AF37] px-4 py-2 text-xs font-bold text-[#091D18]"
            >
              Tampilkan Seluruh 120 Produk
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredProducts.map(product => {
              const effectivePrice = product.discountPrice ?? product.price
              const isWishlisted = wishlistIds.includes(product.id)

              return (
                <div
                  key={product.id}
                  onClick={() => openProductPage(product)}
                  className="group flex flex-col justify-between rounded-xl bg-card border border-border/70 p-3 sm:p-4 shadow-xs transition duration-300 hover:shadow-xl hover:border-[#D4AF37]/60 cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#0c221c] mb-3.5">
                      <ProductImage
                        src={product.imageUrl}
                        alt={product.name}
                        name={product.name}
                        category={product.category}
                        volume={product.volume}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {product.badge && (
                        <span className="absolute top-2.5 left-2.5 rounded bg-[#D4AF37] text-[#091D18] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-xs">
                          {product.badge}
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation()
                          toggleWishlist(product.id)
                        }}
                        aria-label="Simpan ke Favorit"
                        className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-background/85 text-foreground shadow-xs hover:scale-110 transition z-10"
                      >
                        <Heart
                          className={`size-3.5 ${
                            isWishlisted ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-1 text-[10px] text-[#D4AF37] mb-1">
                      <span className="truncate font-semibold uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="flex items-center gap-0.5 shrink-0 font-bold">
                        <Star className="size-2.5 fill-[#D4AF37] text-[#D4AF37]" />
                        {product.rating}
                      </span>
                    </div>

                    <h3
                      className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground line-clamp-1 group-hover:text-[#D4AF37] transition leading-snug"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-foreground block">
                        {formatRupiah(effectivePrice)}
                      </span>
                      <span className="text-[10px] text-[#D4AF37] font-medium">
                        Lihat Halaman Produk →
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={e => {
                        e.stopPropagation()
                        addToCart(product, 1)
                      }}
                      className="text-[#D4AF37] hover:scale-110 transition active:scale-95 focus:outline-none"
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
      </section>
    </div>
  )
}
