import React, { useState, useMemo } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { CosmeticCategory, SkinTypeFilter } from '@/types'
import { formatRupiah, calculateDiscountPercentage } from '@/lib/utils'
import { ProductImage } from '@/components/common/BotanicalCrest'
import {
  Star,
  ShoppingBag,
  ArrowUpDown,
  Filter,
  Eye,
  Heart,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const CATEGORIES: CosmeticCategory[] = [
  'Semua',
  'Serum & Essence',
  'Moisturizer & Cream',
  'Cleanser & Toner',
  'Lip & Cheek Couture',
  'Eye & Night Ritual',
  'Body & Wellness',
]

const SKIN_TYPES: SkinTypeFilter[] = [
  'Semua Kulit',
  'Kulit Kering',
  'Kulit Berminyak & Acne',
  'Kulit Sensitif',
  'Anti-Aging & Kusam',
]

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc'

export const CatalogView: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    selectedSkinType,
    setSelectedSkinType,
    searchQuery,
    setSearchQuery,
    setSelectedProduct,
    addToCart,
    wishlistIds,
    toggleWishlist,
  } = useCosmetics()

  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [onlyWishlist, setOnlyWishlist] = useState(false)

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
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
          product.description.toLowerCase().includes(q) ||
          product.keyIngredients.some(ing => ing.toLowerCase().includes(q))

        return matchesCategory && matchesSkin && matchesWishlist && matchesQuery
      })
      .sort((a, b) => {
        const priceA = a.discountPrice ?? a.price
        const priceB = b.discountPrice ?? b.price
        if (sortBy === 'price-asc') return priceA - priceB
        if (sortBy === 'price-desc') return priceB - priceA
        if (sortBy === 'rating-desc') return b.rating - a.rating
        return 0
      })
  }, [products, selectedCategory, selectedSkinType, onlyWishlist, wishlistIds, searchQuery, sortBy])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08A4F] font-semibold">
            La Collection Botanique
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-foreground mt-1">
            Kurasi Kosmetik &amp; Skincare Mewah
          </h2>
        </div>

        {/* Skin Type Filter Bar (Interactive Skin Concern Selector) */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-muted-foreground mr-1 flex items-center gap-1">
            <Sparkles className="size-3 text-[#B08A4F]" />
            <span>Kebutuhan Kulit:</span>
          </span>
          {SKIN_TYPES.map(skin => (
            <button
              key={skin}
              onClick={() => setSelectedSkinType(skin)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
                selectedSkinType === skin
                  ? 'bg-[#B08A4F] text-[#102F27] font-bold shadow-2xs'
                  : 'border border-border bg-card/60 text-muted-foreground hover:border-[#B08A4F]/50 hover:text-foreground'
              }`}
            >
              {skin}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs & Sort Toolbar */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-4">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition ${
                  selectedCategory === category
                    ? 'bg-[#B08A4F] text-[#102F27] font-bold shadow-xs'
                    : 'bg-card/70 border border-border text-muted-foreground hover:border-[#B08A4F]/40 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Wishlist Filter + Sort Dropdown */}
          <div className="flex items-center gap-2.5 shrink-0 self-end lg:self-auto">
            <button
              onClick={() => setOnlyWishlist(!onlyWishlist)}
              className={`flex items-center gap-1.5 h-8 px-3 rounded-md border text-xs font-medium transition ${
                onlyWishlist
                  ? 'border-[#B08A4F] bg-[#B08A4F]/20 text-[#B08A4F]'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              <Heart className={`size-3.5 ${onlyWishlist ? 'fill-[#B08A4F] text-[#B08A4F]' : ''}`} />
              <span>Favorit ({wishlistIds.length})</span>
            </button>

            <div className="flex items-center gap-1.5">
              <ArrowUpDown className="size-3.5 text-[#B08A4F]" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortOption)}
                className="h-8 rounded-md border border-border bg-card px-2.5 text-xs text-foreground focus:border-[#B08A4F] focus:outline-none"
              >
                <option value="default">Urutan: Kurasi Maison</option>
                <option value="price-asc">Harga: Terendah ke Tertinggi</option>
                <option value="price-desc">Harga: Tertinggi ke Terendah</option>
                <option value="rating-desc">Rating Tertinggi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Status */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <p>
            Menampilkan <strong className="text-foreground">{filteredProducts.length}</strong>{' '}
            formulasi mewah
            {selectedCategory !== 'Semua' && ` dalam "${selectedCategory}"`}
            {selectedSkinType !== 'Semua Kulit' && ` untuk "${selectedSkinType}"`}
            {searchQuery && ` dengan kata kunci "${searchQuery}"`}
          </p>

          {(selectedCategory !== 'Semua' ||
            selectedSkinType !== 'Semua Kulit' ||
            onlyWishlist ||
            searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('Semua')
                setSelectedSkinType('Semua Kulit')
                setOnlyWishlist(false)
                setSearchQuery('')
              }}
              className="text-[#B08A4F] font-semibold hover:underline"
            >
              Reset Semua Filter
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#B08A4F]/40 bg-card/40 py-16 text-center space-y-3">
          <Filter className="size-10 text-[#B08A4F] stroke-1" />
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Tidak ada produk yang sesuai filter
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm">
            Silakan ubah kata kunci pencarian atau pilih kategori perawatan kulit lainnya.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Semua')
              setSelectedSkinType('Semua Kulit')
              setOnlyWishlist(false)
              setSearchQuery('')
            }}
            className="rounded-md bg-[#B08A4F] px-4 py-2 text-xs font-bold text-[#102F27] hover:bg-[#9E7B44] transition"
          >
            Tampilkan Seluruh Koleksi
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map(product => {
            const effectivePrice = product.discountPrice ?? product.price
            const discountPercent = calculateDiscountPercentage(
              product.price,
              product.discountPrice
            )
            const isWishlisted = wishlistIds.includes(product.id)

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#B08A4F]/60"
              >
                <div>
                  {/* Product Visual Container */}
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#102F27] cursor-pointer mb-3.5 border border-[#B08A4F]/20"
                  >
                    <ProductImage
                      src={product.imageUrl}
                      alt={product.name}
                      name={product.name}
                      category={product.category}
                      volume={product.volume}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top Left Luxury Badge */}
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 rounded bg-[#B08A4F] text-[#102F27] text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase shadow-sm z-10">
                        {product.badge}
                      </span>
                    )}

                    {/* Discount Ribbon */}
                    {discountPercent > 0 && (
                      <span className="absolute bottom-2.5 left-2.5 rounded bg-[#102F27]/90 border border-[#B08A4F]/50 text-[#F2EBDD] text-[10px] font-semibold px-2 py-0.5 z-10">
                        Hemat {discountPercent}%
                      </span>
                    )}

                    {/* Wishlist Heart Button */}
                    <button
                      type="button"
                      onClick={e => {
                        e.stopPropagation()
                        toggleWishlist(product.id)
                      }}
                      aria-label="Simpan ke Favorit"
                      className="absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-full bg-[#102F27]/80 text-[#F2EBDD] border border-[#B08A4F]/30 hover:border-[#B08A4F] transition z-20"
                    >
                      <Heart
                        className={`size-4 ${
                          isWishlisted ? 'fill-[#B08A4F] text-[#B08A4F]' : 'text-[#F2EBDD]'
                        }`}
                      />
                    </button>

                    {/* Hover Quick View Overlay */}
                    <div className="absolute inset-0 bg-[#102F27]/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F2EBDD] px-3.5 py-1.5 text-xs font-semibold text-[#102F27] shadow-md">
                        <Eye className="size-3.5 text-[#102F27]" />
                        <span>Detail &amp; Bahan Aktif</span>
                      </span>
                    </div>
                  </div>

                  {/* Category, Volume & Rating */}
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-[#B08A4F] font-medium truncate">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#B08A4F] font-semibold">
                      <Star className="size-3 fill-[#B08A4F] text-[#B08A4F]" />
                      <span>{product.rating}</span>
                      <span className="text-muted-foreground font-normal text-[10px]">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Product Title & Subtitle */}
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="font-serif text-base sm:text-lg font-bold text-foreground line-clamp-2 leading-snug cursor-pointer hover:text-[#B08A4F] transition"
                  >
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                    {product.subtitle}
                  </p>

                  {/* Active Ingredients Chips */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {product.keyIngredients.slice(0, 2).map(ing => (
                      <span
                        key={ing}
                        className="rounded bg-secondary/70 px-1.5 py-0.5 text-[10px] text-secondary-foreground border border-border"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Add to Bag */}
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between gap-2">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold text-foreground">
                        {formatRupiah(effectivePrice)}
                      </span>
                      {discountPercent > 0 && (
                        <span className="text-[10px] text-muted-foreground line-through">
                          {formatRupiah(product.price)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-0.5">
                      <CheckCircle2 className="size-2.5 text-[#B08A4F]" />
                      <span>{product.volume}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product, 1)}
                    disabled={product.stock <= 0}
                    className="flex items-center gap-1.5 h-9 px-3 rounded-lg bg-[#B08A4F] text-[#102F27] text-xs font-bold hover:bg-[#9E7B44] transition shadow-xs disabled:opacity-50"
                    title={product.stock <= 0 ? 'Stok Habis' : 'Tambah ke Tas Belanja'}
                  >
                    <ShoppingBag className="size-3.5 stroke-[2.2]" />
                    <span>+ Tas</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
