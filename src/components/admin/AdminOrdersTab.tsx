import React, { useState } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { OrderStatus } from '@/types'
import { formatRupiah } from '@/lib/utils'
import { Search, Gift, Truck } from 'lucide-react'

const ORDER_STATUSES: OrderStatus[] = [
  'Pending',
  'Dibayar',
  'Dikemas',
  'Dikirim',
  'Selesai',
  'Dibatalkan',
]

export const AdminOrdersTab: React.FC = () => {
  const { orders, updateOrderStatus } = useCosmetics()
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'Semua'>('Semua')

  const filtered = orders.filter(order => {
    const matchesStatus = statusFilter === 'Semua' || order.status === statusFilter
    const q = search.trim().toLowerCase()
    const matchesQuery =
      !q ||
      order.id.toLowerCase().includes(q) ||
      order.customerName.toLowerCase().includes(q) ||
      order.customerEmail.toLowerCase().includes(q) ||
      (order.trackingNumber && order.trackingNumber.toLowerCase().includes(q))
    return matchesStatus && matchesQuery
  })

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Manajemen Pesanan &amp; Logistik VIP
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Perbarui status pesanan dari Pending hingga Dikirim dan Selesai secara real-time.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Cari No. Invoice, pelanggan, atau resi..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-9 rounded-md border border-border bg-card pl-9 pr-3 text-xs focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {(['Semua', ...ORDER_STATUSES] as const).map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-medium transition ${
                statusFilter === st
                  ? 'bg-[#D4AF37] text-[#102F27] font-bold'
                  : 'border border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-border bg-background/60 text-[11px] uppercase tracking-wider text-[#D4AF37]">
            <tr>
              <th className="py-3 px-4">Invoice &amp; Tanggal</th>
              <th className="py-3 px-4">Pelanggan &amp; Kota</th>
              <th className="py-3 px-4">Item &amp; Bonus Sample</th>
              <th className="py-3 px-4">Total &amp; Metode</th>
              <th className="py-3 px-4">Update Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map(order => (
              <tr key={order.id} className="hover:bg-accent/40 transition">
                <td className="py-3.5 px-4">
                  <div className="font-mono font-bold text-[#D4AF37]">{order.id}</div>
                  <div className="text-[10px] text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString('id-ID')}
                  </div>
                  {order.trackingNumber && (
                    <div className="mt-0.5 flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                      <Truck className="size-3 text-[#D4AF37]" />
                      <span>{order.trackingNumber}</span>
                    </div>
                  )}
                </td>

                <td className="py-3.5 px-4">
                  <div className="font-semibold text-foreground">{order.customerName}</div>
                  <div className="text-[11px] text-muted-foreground">{order.customerEmail}</div>
                  <div className="text-[10px] text-muted-foreground">
                    {order.city} ({order.postalCode})
                  </div>
                </td>

                <td className="py-3.5 px-4 max-w-xs">
                  <div className="space-y-0.5">
                    {order.items.map(({ product, quantity }) => (
                      <div key={product.id} className="truncate text-foreground">
                        {quantity}× {product.name}
                      </div>
                    ))}
                  </div>
                  {order.complimentarySample && (
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-[#D4AF37]">
                      <Gift className="size-3" />
                      <span className="truncate">{order.complimentarySample}</span>
                    </div>
                  )}
                </td>

                <td className="py-3.5 px-4">
                  <div className="font-bold text-foreground">{formatRupiah(order.total)}</div>
                  <div className="text-[10px] text-muted-foreground">{order.paymentMethod}</div>
                </td>

                <td className="py-3.5 px-4">
                  <select
                    value={order.status}
                    onChange={e => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                    className="h-8 rounded-md border border-[#D4AF37]/40 bg-background px-2.5 text-xs font-semibold text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
                  >
                    {ORDER_STATUSES.map(st => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
