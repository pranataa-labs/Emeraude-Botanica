import React, { useState } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah, calculateDiscountPercentage } from '@/lib/utils'
import { ProductImage } from '@/components/common/BotanicalCrest'
import {
  X,
  Star,
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  Droplets,
  ShieldCheck,
  Heart,
} from 'lucide-react'

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart, wishlistIds, toggleWishlist } =
    useCosmetics()
  const [qty, setQty] = useState(1)

  if (!selectedProduct) return null

  const effectivePrice = selectedProduct.discountPrice ?? selectedProduct.price
  const discountPercent = calculateDiscountPercentage(
    selectedProduct.price,
    selectedProduct.discountPrice
  )
  const isWishlisted = wishlistIds.includes(selectedProduct.id)

  const handleAddToCart = () => {
    addToCart(selectedProduct, qty)
    setSelectedProduct(null)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in-0 duration-150"
      onClick={() => setSelectedProduct(null)}
    >
      <div
        className="relative w-full max-w-3xl rounded-xl border border-[#B08A4F]/40 bg-background p-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition z-10"
        >
          <X className="size-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left: Product Flacon Image & Assurance */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-[#B08A4F]/35 w-full aspect-[4/5] bg-[#102F27]">
              <ProductImage
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                name={selectedProduct.name}
                category={selectedProduct.category}
                volume={selectedProduct.volume}
                className="w-full h-full object-cover"
              />
              {selectedProduct.badge && (
                <span className="absolute top-3 left-3 rounded bg-[#B08A4F] text-[#102F27] text-[10px] font-bold px-2.5 py-0.5 tracking-wider uppercase shadow-xs">
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            <div className="mt-4 w-full rounded-lg border border-border bg-card/70 p-3 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Nomor Registrasi BPOM:</span>
                <span className="font-mono font-semibold text-[#B08A4F]">
                  {selectedProduct.bpomNumber}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Volume Bersih:</span>
                <span className="font-semibold text-foreground">{selectedProduct.volume}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Sertifikasi Formula:</span>
                <span className="font-semibold text-foreground flex items-center gap-1">
                  <ShieldCheck className="size-3.5 text-[#B08A4F]" />
                  <span>100% Vegan &amp; Halal</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Botanical Details, Active Ingredients & Purchase */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded bg-[#B08A4F]/20 border border-[#B08A4F]/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#B08A4F]">
                  {selectedProduct.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-[#B08A4F] font-semibold">
                  <Star className="size-3.5 fill-[#B08A4F] text-[#B08A4F]" />
                  <span>{selectedProduct.rating}</span>
                  <span className="text-muted-foreground font-normal">
                    ({selectedProduct.reviewCount} ulasan terverifikasi)
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {selectedProduct.name}
              </h2>
              <p className="text-xs font-medium text-[#B08A4F] mt-0.5">
                {selectedProduct.subtitle}
              </p>

              {/* Price Row */}
              <div className="mt-3 flex items-baseline gap-2.5">
                <span className="text-2xl font-bold text-foreground">
                  {formatRupiah(effectivePrice)}
                </span>
                {discountPercent > 0 && (
                  <>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatRupiah(selectedProduct.price)}
                    </span>
                    <span className="rounded bg-[#B08A4F]/20 text-[#B08A4F] border border-[#B08A4F]/40 text-xs font-semibold px-1.5 py-0.5">
                      Hemat {discountPercent}%
                    </span>
                  </>
                )}
              </div>

              {selectedProduct.luxuryQuote && (
                <div className="mt-3 border-l-2 border-[#B08A4F] pl-3 italic text-xs text-muted-foreground font-serif">
                  &ldquo;{selectedProduct.luxuryQuote}&rdquo;
                </div>
              )}

              {/* Description */}
              <div className="mt-3.5">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#B08A4F] mb-1">
                  Deskripsi Formulasi
                </h4>
                <p className="text-xs text-foreground/90 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Key Active Ingredients */}
              <div className="mt-3.5">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#B08A4F] mb-1.5 flex items-center gap-1">
                  <Sparkles className="size-3" />
                  <span>Kandungan Aktif Utama (Key Actives)</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.keyIngredients.map(ing => (
                    <span
                      key={ing}
                      className="rounded-md border border-[#B08A4F]/35 bg-card px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ritual Usage */}
              <div className="mt-3.5 rounded-lg border border-border bg-card/60 p-3">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#B08A4F] mb-1 flex items-center gap-1">
                  <Droplets className="size-3" />
                  <span>Ritual Pemakaian</span>
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {selectedProduct.ritualUsage}
                </p>
              </div>

              {/* Skin Suitability & Stock */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-muted-foreground">Cocok untuk:</span>
                  {selectedProduct.skinTypes.map(st => (
                    <span
                      key={st}
                      className="rounded bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                    >
                      {st}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-[#B08A4F]">
                  <CheckCircle2 className="size-3.5" />
                  <span>Stok: {selectedProduct.stock} unit</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-border flex items-center gap-2.5">
              <div className="flex items-center rounded-md border border-border bg-card">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 text-xs text-muted-foreground hover:bg-muted"
                >
                  -
                </button>
                <span className="w-9 text-center text-xs font-bold text-foreground">{qty}</span>
                <button
                  onClick={() => setQty(Math.min(selectedProduct.stock, qty + 1))}
                  className="px-3 py-2 text-xs text-muted-foreground hover:bg-muted"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={selectedProduct.stock <= 0}
                className="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-[#B08A4F] text-[#102F27] text-xs font-bold hover:bg-[#9E7B44] transition shadow-xs disabled:opacity-50"
              >
                <ShoppingBag className="size-4 stroke-[2.2]" />
                <span>Tambah ke Tas Belanja</span>
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(selectedProduct.id)}
                className="flex size-10 items-center justify-center rounded-md border border-border bg-card hover:border-[#B08A4F] transition"
                title="Simpan ke Favorit"
              >
                <Heart
                  className={`size-4 ${
                    isWishlisted ? 'fill-[#B08A4F] text-[#B08A4F]' : 'text-muted-foreground'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
