import React, { useState, useEffect } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import {
  Search,
  X,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Sun,
  Moon,
  Package,
} from 'lucide-react'

export const CommandPalette: React.FC = () => {
  const {
    isCmdKOpen,
    setIsCmdKOpen,
    products,
    setSelectedProduct,
    setActiveView,
    setIsCartOpen,
    toggleTheme,
    theme,
  } = useCosmetics()

  const [query, setQuery] = useState('')

  useEffect(() => {
    if (isCmdKOpen) {
      setQuery('')
    }
  }, [isCmdKOpen])

  if (!isCmdKOpen) return null

  const filteredProducts = products
    .filter(
      p =>
        !query.trim() ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.keyIngredients.some(ing => ing.toLowerCase().includes(query.toLowerCase()))
    )
    .slice(0, 6)

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-xs animate-in fade-in-0 duration-150"
      onClick={() => setIsCmdKOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-[#C8A96A]/40 bg-card shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-border px-4">
          <Search className="size-4 text-[#C8A96A] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Cari serum, pelembap, kandungan aktif (Malachite, Bakuchiol, Ceramide)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="h-12 w-full bg-transparent px-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            onClick={() => setIsCmdKOpen(false)}
            className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-4 text-xs">
          <div>
            <p className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C8A96A]">
              Koleksi Kosmetik & Skincare ({filteredProducts.length})
            </p>
            {filteredProducts.length === 0 ? (
              <p className="px-3 py-6 text-center text-muted-foreground">
                Tidak ditemukan produk dengan kata kunci "{query}".
              </p>
            ) : (
              <div className="space-y-1 mt-1">
                {filteredProducts.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product)
                      setIsCmdKOpen(false)
                    }}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 hover:bg-accent text-left transition"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Sparkles className="size-3.5 text-[#C8A96A] shrink-0" />
                      <div className="truncate">
                        <p className="font-semibold text-foreground truncate">{product.name}</p>
                        <p className="text-[11px] text-muted-foreground truncate">
                          {product.category} • {product.keyIngredients.slice(0, 2).join(', ')}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-[#C8A96A] shrink-0">
                      {formatRupiah(product.discountPrice ?? product.price)}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Navigation */}
          <div className="border-t border-border pt-2">
            <p className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C8A96A]">
              Pintasan Cepat Maison
            </p>
            <div className="grid grid-cols-2 gap-1 mt-1">
              <button
                onClick={() => {
                  setIsCartOpen(true)
                  setIsCmdKOpen(false)
                }}
                className="flex items-center gap-2 rounded-md px-2.5 py-2 hover:bg-accent text-left"
              >
                <ShoppingBag className="size-3.5 text-[#C8A96A]" />
                <span>Buka Tas Belanja</span>
              </button>
              <button
                onClick={() => {
                  setActiveView('orders')
                  setIsCmdKOpen(false)
                }}
                className="flex items-center gap-2 rounded-md px-2.5 py-2 hover:bg-accent text-left"
              >
                <Package className="size-3.5 text-[#C8A96A]" />
                <span>Lacak Pesanan Saya</span>
              </button>
              <button
                onClick={() => {
                  setActiveView('admin')
                  setIsCmdKOpen(false)
                }}
                className="flex items-center gap-2 rounded-md px-2.5 py-2 hover:bg-accent text-left"
              >
                <ShieldCheck className="size-3.5 text-[#C8A96A]" />
                <span>Maison Admin Backoffice</span>
              </button>
              <button
                onClick={() => {
                  toggleTheme()
                  setIsCmdKOpen(false)
                }}
                className="flex items-center gap-2 rounded-md px-2.5 py-2 hover:bg-accent text-left"
              >
                {theme === 'dark' ? (
                  <Sun className="size-3.5 text-[#C8A96A]" />
                ) : (
                  <Moon className="size-3.5 text-[#C8A96A]" />
                )}
                <span>
                  Mode {theme === 'dark' ? 'Alabaster Cream' : 'Deep Emerald Silk'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
