import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import { Award, Sparkles, TrendingUp } from 'lucide-react'

export const AdminAnalyticsTab: React.FC = () => {
  const { products, orders } = useCosmetics()

  // Group products by category
  const categoryStats = [
    'Serum & Essence',
    'Moisturizer & Cream',
    'Cleanser & Toner',
    'Lip & Cheek Couture',
    'Eye & Night Ritual',
    'Body & Wellness',
  ].map(cat => {
    const items = products.filter(p => p.category === cat)
    const avgPrice =
      items.length > 0
        ? Math.round(
            items.reduce((s, p) => s + (p.discountPrice ?? p.price), 0) / items.length
          )
        : 0
    const totalReviews = items.reduce((s, p) => s + p.reviewCount, 0)
    return { category: cat, count: items.length, avgPrice, totalReviews }
  })

  // Top rated / reviewed products
  const topProducts = [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 5)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Analitik Koleksi &amp; Permintaan Pasar
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Evaluasi performa lini produk kosmetik berdasarkan kategori dan minat pelanggan VIP.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-xs">
          <div className="flex items-center gap-2">
            <TrendingUp className="size-4 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-foreground">
              Distribusi Kategori &amp; Harga Rata-Rata
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            {categoryStats.map(stat => (
              <div key={stat.category} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{stat.category}</span>
                  <span className="text-muted-foreground">
                    {stat.count} SKU • Rata-rata{' '}
                    <strong className="text-[#D4AF37]">{formatRupiah(stat.avgPrice)}</strong>
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-background overflow-hidden border border-border">
                  <div
                    className="h-full bg-[#D4AF37]"
                    style={{ width: `${Math.min(100, stat.totalReviews / 4)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Products */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-xs">
          <div className="flex items-center gap-2">
            <Award className="size-4 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-foreground">
              5 Produk Kosmetik Paling Diminati
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            {topProducts.map((product, idx) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background/60 p-3"
              >
                <div className="flex items-center gap-3 truncate">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-[#102F27] font-bold text-[11px]">
                    #{idx + 1}
                  </span>
                  <div className="truncate">
                    <p className="font-serif font-bold text-sm text-foreground truncate">
                      {product.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {product.category} • ★ {product.rating} ({product.reviewCount} ulasan)
                    </p>
                  </div>
                </div>
                <span className="font-bold text-[#D4AF37] shrink-0">
                  {formatRupiah(product.discountPrice ?? product.price)}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-3 flex items-center gap-2 text-xs text-foreground">
            <Sparkles className="size-4 text-[#D4AF37] shrink-0" />
            <span>
              Total <strong>{orders.length}</strong> transaksi berhasil dengan tingkat konversi
              voucher <strong>EMERALD15</strong> tertinggi pada kategori Serum &amp; Lip Couture.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
