import React, { useState, useEffect } from 'react'
import { CosmeticProduct, CosmeticCategory, SkinTypeFilter } from '@/types'
import { X, Save, Sparkles } from 'lucide-react'

interface ProductFormSheetProps {
  isOpen: boolean
  onClose: () => void
  editingProduct: CosmeticProduct | null
  onSave: (data: Omit<CosmeticProduct, 'id'>, editId?: string) => void
}

const CATEGORIES: Exclude<CosmeticCategory, 'Semua'>[] = [
  'Serum & Essence',
  'Moisturizer & Cream',
  'Cleanser & Toner',
  'Lip & Cheek Couture',
  'Eye & Night Ritual',
  'Body & Wellness',
]

const SKIN_OPTIONS: Exclude<SkinTypeFilter, 'Semua Kulit'>[] = [
  'Kulit Kering',
  'Kulit Berminyak & Acne',
  'Kulit Sensitif',
  'Anti-Aging & Kusam',
]

export const ProductFormSheet: React.FC<ProductFormSheetProps> = ({
  isOpen,
  onClose,
  editingProduct,
  onSave,
}) => {
  const [name, setName] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState<Exclude<CosmeticCategory, 'Semua'>>('Serum & Essence')
  const [skinTypes, setSkinTypes] = useState<Exclude<SkinTypeFilter, 'Semua Kulit'>[]>([
    'Kulit Kering',
    'Anti-Aging & Kusam',
  ])
  const [price, setPrice] = useState('750000')
  const [discountPrice, setDiscountPrice] = useState('')
  const [stock, setStock] = useState('25')
  const [volume, setVolume] = useState('30 ml / 1.0 fl. oz.')
  const [bpomNumber, setBpomNumber] = useState('NA18260108899')
  const [ingredientsText, setIngredientsText] = useState(
    'Malachite Extract, 24K Colloidal Gold, Ceramide NP'
  )
  const [ritualUsage, setRitualUsage] = useState(
    'Aplikasikan 3 tetes pada wajah bersih pagi dan malam.'
  )
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState(
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85'
  )
  const [badge, setBadge] = useState<CosmeticProduct['badge'] | ''>('New Haute')

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name)
      setSubtitle(editingProduct.subtitle)
      setCategory(editingProduct.category)
      setSkinTypes(editingProduct.skinTypes)
      setPrice(String(editingProduct.price))
      setDiscountPrice(editingProduct.discountPrice ? String(editingProduct.discountPrice) : '')
      setStock(String(editingProduct.stock))
      setVolume(editingProduct.volume)
      setBpomNumber(editingProduct.bpomNumber)
      setIngredientsText(editingProduct.keyIngredients.join(', '))
      setRitualUsage(editingProduct.ritualUsage)
      setDescription(editingProduct.description)
      setImageUrl(editingProduct.imageUrl)
      setBadge(editingProduct.badge || '')
    } else {
      setName('')
      setSubtitle('')
      setCategory('Serum & Essence')
      setSkinTypes(['Kulit Kering', 'Anti-Aging & Kusam'])
      setPrice('750000')
      setDiscountPrice('')
      setStock('25')
      setVolume('30 ml / 1.0 fl. oz.')
      setBpomNumber('NA18260108899')
      setIngredientsText('Malachite Extract, 24K Colloidal Gold, Ceramide NP')
      setRitualUsage('Aplikasikan 3 tetes pada wajah bersih pagi dan malam.')
      setDescription('')
      setImageUrl(
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85'
      )
      setBadge('New Haute')
    }
  }, [editingProduct, isOpen])

  if (!isOpen) return null

  const toggleSkinOption = (opt: Exclude<SkinTypeFilter, 'Semua Kulit'>) => {
    setSkinTypes(prev =>
      prev.includes(opt) ? prev.filter(s => s !== opt) : [...prev, opt]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const parsedPrice = Math.max(0, Number(price) || 0)
    const parsedDiscount = discountPrice ? Number(discountPrice) : undefined
    const parsedStock = Math.max(0, Number(stock) || 0)
    const keyIngredients = ingredientsText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)

    onSave(
      {
        name: name.trim(),
        subtitle: subtitle.trim(),
        category,
        skinTypes: skinTypes.length > 0 ? skinTypes : ['Kulit Kering'],
        price: parsedPrice,
        discountPrice: parsedDiscount,
        stock: parsedStock,
        rating: editingProduct?.rating ?? 4.9,
        reviewCount: editingProduct?.reviewCount ?? 48,
        volume: volume.trim(),
        bpomNumber: bpomNumber.trim(),
        keyIngredients: keyIngredients.length > 0 ? keyIngredients : ['Botanical Extract'],
        ritualUsage: ritualUsage.trim(),
        description: description.trim() || 'Formulasi mewah Émeraude Botanica.',
        imageUrl: imageUrl.trim(),
        badge: badge ? (badge as CosmeticProduct['badge']) : undefined,
        isVegan: true,
      },
      editingProduct?.id
    )
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs animate-in fade-in-0 duration-150"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-lg flex-col border-l border-[#C8A96A]/40 bg-background shadow-2xl animate-in slide-in-from-right duration-200"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#C8A96A]" />
            <h3 className="font-serif text-xl font-bold text-foreground">
              {editingProduct ? 'Edit Formulasi Kosmetik' : 'Tambah Produk Haute Baru'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
          <div className="space-y-1">
            <label className="font-semibold text-foreground">Nama Produk Kosmetik *</label>
            <input
              type="text"
              required
              placeholder="Contoh: L’Élixir d’Émeraude Youth Serum"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-foreground">Sub-judul / Klaim Aktif *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Concentrated Malachite Peptide & 24K Gold"
              value={subtitle}
              onChange={e => setSubtitle(e.target.value)}
              className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-foreground">Kategori *</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as Exclude<CosmeticCategory, 'Semua'>)}
                className="w-full h-9 rounded-md border border-input bg-card px-2.5 text-xs focus:border-[#C8A96A] focus:outline-none"
              >
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-foreground">Label Badge</label>
              <select
                value={badge}
                onChange={e => setBadge(e.target.value as CosmeticProduct['badge'] | '')}
                className="w-full h-9 rounded-md border border-input bg-card px-2.5 text-xs focus:border-[#C8A96A] focus:outline-none"
              >
                <option value="">Tanpa Badge</option>
                <option value="Best Seller">Best Seller</option>
                <option value="New Haute">New Haute</option>
                <option value="Award Winner">Award Winner</option>
                <option value="Limited Edition">Limited Edition</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-foreground">Harga Normal (Rp) *</label>
              <input
                type="number"
                required
                value={price}
                onChange={e => setPrice(e.target.value)}
                className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-foreground">Harga Promo (Rp)</label>
              <input
                type="number"
                placeholder="Opsional"
                value={discountPrice}
                onChange={e => setDiscountPrice(e.target.value)}
                className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-foreground">Stok Unit *</label>
              <input
                type="number"
                required
                value={stock}
                onChange={e => setStock(e.target.value)}
                className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-semibold text-foreground">Volume / Berat Bersih *</label>
              <input
                type="text"
                required
                value={volume}
                onChange={e => setVolume(e.target.value)}
                className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-foreground">Nomor Registrasi BPOM *</label>
              <input
                type="text"
                required
                value={bpomNumber}
                onChange={e => setBpomNumber(e.target.value)}
                className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs font-mono focus:border-[#C8A96A] focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-foreground">Kesesuaian Jenis Kulit</label>
            <div className="flex flex-wrap gap-1.5">
              {SKIN_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleSkinOption(opt)}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-medium border transition ${
                    skinTypes.includes(opt)
                      ? 'border-[#C8A96A] bg-[#C8A96A]/20 text-[#C8A96A]'
                      : 'border-border bg-card text-muted-foreground'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-foreground">
              Bahan Aktif Utama (Pisahkan dengan koma) *
            </label>
            <input
              type="text"
              required
              value={ingredientsText}
              onChange={e => setIngredientsText(e.target.value)}
              className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-foreground">Deskripsi Lengkap Formulasi *</label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full rounded-md border border-input bg-card p-3 text-xs focus:border-[#C8A96A] focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-foreground">Panduan Ritual Pemakaian *</label>
            <textarea
              rows={2}
              required
              value={ritualUsage}
              onChange={e => setRitualUsage(e.target.value)}
              className="w-full rounded-md border border-input bg-card p-3 text-xs focus:border-[#C8A96A] focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold text-foreground">URL Foto Produk</label>
            <input
              type="url"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              className="w-full h-9 rounded-md border border-input bg-card px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
            />
          </div>

          <div className="pt-3 border-t border-border flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="h-9 px-4 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 h-9 px-4 rounded-md bg-[#C8A96A] text-[#0F3D34] text-xs font-bold hover:bg-[#d4b87c] transition shadow-xs"
            >
              <Save className="size-3.5" />
              <span>Simpan Formulasi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
