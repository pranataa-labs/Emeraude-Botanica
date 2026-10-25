import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import { COMPLIMENTARY_SAMPLES } from '@/data/seedData'
import { ProductImage } from '@/components/common/BotanicalCrest'
import {
  X,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Gift,
  Truck,
  Gem,
} from 'lucide-react'

const FREE_SHIPPING_THRESHOLD = 500000

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartSubtotal,
    selectedSample,
    setSelectedSample,
    setActiveView,
  } = useCosmetics()

  if (!isCartOpen) return null

  const progress = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100))
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal)

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs animate-in fade-in-0 duration-200"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="flex h-full w-full max-w-md flex-col border-l border-[#D4AF37]/35 bg-background shadow-2xl animate-in slide-in-from-right duration-250"
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="size-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                Tas Belanja Maison
              </h3>
              <p className="text-[11px] text-muted-foreground">
                {cart.length} formulasi terpilih dalam tas Anda
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="border-b border-border bg-card/70 px-5 py-3 space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <Truck className="size-3.5 text-[#D4AF37]" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-[#D4AF37] font-semibold">
                  Selamat! Anda mendapatkan Gratis Pengiriman Eksklusif
                </span>
              ) : (
                <span>
                  Tambah <strong>{formatRupiah(remainingForFreeShipping)}</strong> untuk Gratis Ongkir
                </span>
              )}
            </span>
            <span className="font-mono text-[10px] text-[#D4AF37] font-bold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-[#D4AF37] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center space-y-3 py-12">
              <div className="flex size-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-card text-[#D4AF37]">
                <ShoppingBag className="size-6 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Tas Belanja Anda Masih Kosong
              </h4>
              <p className="text-xs text-muted-foreground max-w-xs">
                Jelajahi koleksi serum zamrud, barrier cream, dan lipstik beludru kami untuk memulai ritual Anda.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 rounded-md bg-[#D4AF37] px-4 py-2 text-xs font-bold text-[#102F27] hover:bg-[#E5C453] transition"
              >
                Jelajahi Koleksi
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {cart.map(({ product, quantity }) => {
                  const unitPrice = product.discountPrice ?? product.price
                  return (
                    <div
                      key={product.id}
                      className="flex gap-3 rounded-xl border border-border bg-card p-3 shadow-2xs"
                    >
                      <div className="size-18 shrink-0 overflow-hidden rounded-lg border border-[#D4AF37]/20 bg-[#102F27]">
                        <ProductImage
                          src={product.imageUrl}
                          alt={product.name}
                          name={product.name}
                          category={product.category}
                          className="size-full object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="truncate">
                            <h4 className="font-serif text-sm font-bold text-foreground truncate">
                              {product.name}
                            </h4>
                            <p className="text-[10px] text-muted-foreground">
                              {product.volume} • {formatRupiah(unitPrice)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-muted-foreground hover:text-destructive transition p-0.5"
                            title="Hapus item"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center rounded-md border border-border bg-background">
                            <button
                              onClick={() => updateCartQuantity(product.id, quantity - 1)}
                              className="px-2 py-0.5 text-xs text-muted-foreground hover:bg-muted"
                            >
                              -
                            </button>
                            <span className="w-7 text-center text-xs font-semibold text-foreground">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(product.id, quantity + 1)}
                              className="px-2 py-0.5 text-xs text-muted-foreground hover:bg-muted"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-xs font-bold text-[#D4AF37]">
                            {formatRupiah(unitPrice * quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Complimentary Luxury Sample Selector */}
              <div className="rounded-xl border border-[#D4AF37]/35 bg-card/80 p-3.5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
                  <Gift className="size-4" />
                  <span>Complimentary Luxury Sample (Gratis):</span>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Pilih 1 vial sample gratis untuk disertakan dalam kotak zamrud Anda:
                </p>
                <div className="space-y-1.5 pt-1">
                  {COMPLIMENTARY_SAMPLES.map(sample => (
                    <label
                      key={sample}
                      className={`flex items-center gap-2 rounded-lg border p-2 text-xs cursor-pointer transition ${
                        selectedSample === sample
                          ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-foreground font-semibold'
                          : 'border-border bg-background/50 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <input
                        type="radio"
                        name="luxury-sample"
                        checked={selectedSample === sample}
                        onChange={() => setSelectedSample(sample)}
                        className="accent-[#D4AF37]"
                      />
                      <Gem className="size-3 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{sample}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="border-t border-border bg-card p-5 space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Complimentary Sample</span>
                <span className="text-[#D4AF37] font-medium">GRATIS</span>
              </div>
              <div className="flex items-center justify-between text-sm font-bold text-foreground pt-1">
                <span>Subtotal Pesanan</span>
                <span className="text-base text-[#D4AF37]">{formatRupiah(cartSubtotal)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearCart}
                className="h-10 px-3 rounded-md border border-border text-xs text-muted-foreground hover:text-destructive hover:border-destructive/40 transition"
              >
                Kosongkan
              </button>
              <button
                onClick={() => {
                  setIsCartOpen(false)
                  setActiveView('checkout')
                }}
                className="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-[#D4AF37] text-[#102F27] text-xs font-bold hover:bg-[#E5C453] transition shadow-sm"
              >
                <span>Lanjut ke Checkout</span>
                <ArrowRight className="size-4 stroke-[2.2]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
