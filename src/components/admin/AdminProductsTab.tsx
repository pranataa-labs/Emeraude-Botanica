import React, { useState } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { CosmeticProduct } from '@/types'
import { formatRupiah } from '@/lib/utils'
import { ProductFormSheet } from './ProductFormSheet'
import { Plus, Search, Pencil, Trash2, ShieldCheck } from 'lucide-react'

export const AdminProductsTab: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useCosmetics()
  const [search, setSearch] = useState('')
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<CosmeticProduct | null>(null)

  const filtered = products.filter(
    p =>
      !search.trim() ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.bpomNumber.toLowerCase().includes(search.toLowerCase())
  )

  const handleSave = (data: Omit<CosmeticProduct, 'id'>, editId?: string) => {
    if (editId) {
      updateProduct(editId, data)
    } else {
      addProduct(data)
    }
  }

  return (
    <div className="space-y-5">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Inventaris Katalog &amp; Formulasi
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Kelola produk kosmetik, nomor registrasi BPOM, harga, dan stok gudang berpendingin.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingProduct(null)
            setIsSheetOpen(true)
          }}
          className="inline-flex items-center gap-1.5 h-9 px-4 rounded-md bg-[#D4AF37] text-[#102F27] text-xs font-bold hover:bg-[#E5C453] transition shadow-xs self-start sm:self-auto"
        >
          <Plus className="size-4 stroke-[2.2]" />
          <span>Tambah Produk Baru</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Cari nama produk, kategori, atau No. BPOM..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-9 rounded-md border border-border bg-card pl-9 pr-3 text-xs focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
        <span className="text-xs text-muted-foreground">
          Total: <strong>{filtered.length}</strong> SKU
        </span>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-border bg-background/60 text-[11px] uppercase tracking-wider text-[#D4AF37]">
            <tr>
              <th className="py-3 px-4">Produk &amp; Bahan Aktif</th>
              <th className="py-3 px-4">Kategori</th>
              <th className="py-3 px-4">No. BPOM &amp; Volume</th>
              <th className="py-3 px-4">Harga Jual</th>
              <th className="py-3 px-4">Stok</th>
              <th className="py-3 px-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map(product => (
              <tr key={product.id} className="hover:bg-accent/40 transition">
                <td className="py-3 px-4 max-w-xs">
                  <div className="font-serif font-bold text-sm text-foreground truncate">
                    {product.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground truncate">
                    {product.keyIngredients.join(' • ')}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="rounded-md border border-[#D4AF37]/30 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-foreground">
                    {product.category}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#D4AF37]">
                    <ShieldCheck className="size-3" />
                    <span>{product.bpomNumber}</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground">{product.volume}</div>
                </td>
                <td className="py-3 px-4">
                  <div className="font-bold text-foreground">
                    {formatRupiah(product.discountPrice ?? product.price)}
                  </div>
                  {product.discountPrice && (
                    <div className="text-[10px] text-muted-foreground line-through">
                      {formatRupiah(product.price)}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                      product.stock < 15
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30'
                    }`}
                  >
                    {product.stock} unit
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="inline-flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        setEditingProduct(product)
                        setIsSheetOpen(true)
                      }}
                      className="rounded-md border border-border p-1.5 text-muted-foreground hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                      title="Edit Produk"
                    >
                      <Pencil className="size-3.5" />
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="rounded-md border border-border p-1.5 text-muted-foreground hover:border-destructive hover:text-destructive transition"
                      title="Hapus Produk"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ProductFormSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        editingProduct={editingProduct}
        onSave={handleSave}
      />
    </div>
  )
}
