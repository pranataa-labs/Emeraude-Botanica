import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import { BotanicalCrest } from '@/components/common/BotanicalCrest'
import { CheckCircle2, Package, ArrowRight, Gift, Printer } from 'lucide-react'

export const OrderSuccessView: React.FC = () => {
  const { lastPlacedOrder, setActiveView } = useCosmetics()

  if (!lastPlacedOrder) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center space-y-4">
        <p className="text-sm text-muted-foreground">Belum ada pesanan terbaru.</p>
        <button
          onClick={() => setActiveView('store')}
          className="rounded-md bg-[#C8A96A] px-4 py-2 text-xs font-bold text-[#0F3D34]"
        >
          Kembali ke Koleksi
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
      <div className="rounded-2xl border border-[#C8A96A]/45 bg-card p-6 sm:p-8 shadow-xl space-y-6 text-center">
        <div className="flex flex-col items-center space-y-2">
          <BotanicalCrest size="md" />
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C8A96A]/20 border border-[#C8A96A]/40 px-3 py-1 text-xs font-semibold text-[#C8A96A]">
            <CheckCircle2 className="size-4" />
            <span>Pesanan Diterima oleh Maison Émeraude</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Merci, {lastPlacedOrder.customerName}!
          </h2>
          <p className="text-xs text-muted-foreground max-w-md">
            Pesanan kosmetik mewah Anda sedang disiapkan dalam kotak zamrud berpita sutra emas dan
            akan segera dikirim ke alamat Anda.
          </p>
        </div>

        {/* Order Metadata Box */}
        <div className="rounded-xl border border-border bg-background/70 p-4 text-left space-y-3 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-border pb-3">
            <div>
              <span className="text-[10px] text-muted-foreground block">No. Invoice</span>
              <span className="font-mono font-bold text-[#C8A96A]">{lastPlacedOrder.id}</span>
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground block">Resi Kurir</span>
              <span className="font-mono font-medium text-foreground">
                {lastPlacedOrder.trackingNumber}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground block">Pembayaran</span>
              <span className="font-semibold text-foreground">{lastPlacedOrder.paymentMethod}</span>
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground block">Status</span>
              <span className="font-bold text-[#C8A96A]">{lastPlacedOrder.status}</span>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-1.5">
            {lastPlacedOrder.items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between">
                <span className="text-foreground">
                  {quantity}× {product.name}
                </span>
                <span className="font-medium text-foreground">
                  {formatRupiah((product.discountPrice ?? product.price) * quantity)}
                </span>
              </div>
            ))}
            {lastPlacedOrder.complimentarySample && (
              <div className="flex justify-between text-[#C8A96A] pt-1">
                <span className="flex items-center gap-1">
                  <Gift className="size-3.5" />
                  <span>Bonus: {lastPlacedOrder.complimentarySample}</span>
                </span>
                <span className="font-bold">GRATIS</span>
              </div>
            )}
          </div>

          <div className="border-t border-border pt-2.5 flex justify-between text-sm font-bold">
            <span className="text-foreground">Total Dibayarkan</span>
            <span className="text-[#C8A96A]">{formatRupiah(lastPlacedOrder.total)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 h-10 px-4 rounded-md border border-border bg-background text-xs font-medium text-foreground hover:border-[#C8A96A] transition"
          >
            <Printer className="size-4 text-[#C8A96A]" />
            <span>Cetak E-Invoice</span>
          </button>

          <button
            onClick={() => setActiveView('orders')}
            className="inline-flex items-center gap-1.5 h-10 px-4 rounded-md border border-[#C8A96A] text-xs font-bold text-[#C8A96A] hover:bg-[#C8A96A]/15 transition"
          >
            <Package className="size-4" />
            <span>Lacak Status Pesanan</span>
          </button>

          <button
            onClick={() => setActiveView('store')}
            className="inline-flex items-center gap-1.5 h-10 px-5 rounded-md bg-[#C8A96A] text-[#0F3D34] text-xs font-bold hover:bg-[#d4b87c] transition shadow-sm"
          >
            <span>Lanjut Berbelanja</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
