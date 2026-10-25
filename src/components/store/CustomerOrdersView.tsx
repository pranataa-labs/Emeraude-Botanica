import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import { OrderStatus } from '@/types'
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  Gift,
  ShoppingBag,
  MapPin,
} from 'lucide-react'

const TIMELINE_STEPS: OrderStatus[] = ['Pending', 'Dibayar', 'Dikemas', 'Dikirim', 'Selesai']

export const CustomerOrdersView: React.FC = () => {
  const { orders, setActiveView } = useCosmetics()

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
            Maison Concierge Tracking
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            Riwayat Pesanan &amp; Pelacakan Paket
          </h2>
        </div>

        <button
          onClick={() => setActiveView('store')}
          className="inline-flex items-center gap-2 self-start rounded-md bg-[#D4AF37] px-4 py-2 text-xs font-bold text-[#102F27] hover:bg-[#E5C453] transition"
        >
          <ShoppingBag className="size-3.5" />
          <span>Belanja Produk Baru</span>
        </button>
      </div>

      {orders.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border py-16 text-center space-y-3">
          <Package className="mx-auto size-10 text-[#D4AF37]" />
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Belum Ada Riwayat Pesanan
          </h3>
          <p className="text-xs text-muted-foreground">
            Pesanan yang Anda buat akan tercatat secara otomatis di halaman ini.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map(order => {
            const currentStepIdx = TIMELINE_STEPS.indexOf(order.status)

            return (
              <div
                key={order.id}
                className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-4"
              >
                {/* Top Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-sm text-[#D4AF37]">{order.id}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {new Date(order.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-md border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#D4AF37]">
                      {order.status}
                    </span>
                    {order.trackingNumber && (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        Resi: {order.trackingNumber}
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Timeline */}
                {order.status !== 'Dibatalkan' && (
                  <div className="grid grid-cols-5 gap-2 pt-1">
                    {TIMELINE_STEPS.map((step, idx) => {
                      const isDone = currentStepIdx >= idx
                      return (
                        <div key={step} className="flex flex-col items-center text-center gap-1">
                          <div
                            className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold border transition ${
                              isDone
                                ? 'bg-[#D4AF37] text-[#102F27] border-[#D4AF37]'
                                : 'bg-background text-muted-foreground border-border'
                            }`}
                          >
                            {isDone ? <CheckCircle2 className="size-3.5" /> : <Clock className="size-3" />}
                          </div>
                          <span
                            className={`text-[10px] font-medium ${
                              isDone ? 'text-[#D4AF37]' : 'text-muted-foreground'
                            }`}
                          >
                            {step}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Order Items & Address */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 text-xs">
                  <div className="md:col-span-7 space-y-2">
                    {order.items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex items-center justify-between">
                        <span className="font-medium text-foreground">
                          {quantity}× {product.name}{' '}
                          <span className="text-muted-foreground">({product.volume})</span>
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatRupiah((product.discountPrice ?? product.price) * quantity)}
                        </span>
                      </div>
                    ))}
                    {order.complimentarySample && (
                      <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37]">
                        <Gift className="size-3.5" />
                        <span>Complimentary Gift: {order.complimentarySample}</span>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-5 rounded-lg border border-border bg-background/60 p-3 space-y-1 text-[11px]">
                    <div className="flex items-center gap-1.5 font-semibold text-foreground">
                      <MapPin className="size-3.5 text-[#D4AF37]" />
                      <span>{order.customerName}</span>
                    </div>
                    <p className="text-muted-foreground">
                      {order.shippingAddress}, {order.district}, {order.city} ({order.postalCode})
                    </p>
                    <div className="pt-1 flex items-center justify-between border-t border-border mt-2">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Truck className="size-3 text-[#D4AF37]" />
                        <span>{order.paymentMethod}</span>
                      </span>
                      <span className="text-sm font-bold text-[#D4AF37]">
                        Total: {formatRupiah(order.total)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
