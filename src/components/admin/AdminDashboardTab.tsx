import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import {
  CreditCard,
  ShoppingBag,
  Package,
  Users,
  Download,
  Calendar,
  Sparkles,
} from 'lucide-react'

export const AdminDashboardTab: React.FC = () => {
  const { products, orders, users } = useCosmetics()

  const totalRevenue = orders.reduce(
    (sum, o) => (o.status !== 'Dibatalkan' ? sum + o.total : sum),
    0
  )
  const totalUnitsSold = orders.reduce(
    (sum, o) => sum + o.items.reduce((iSum, item) => iSum + item.quantity, 0),
    0
  )
  const lowStockCount = products.filter(p => p.stock < 15).length

  const monthlyData = [
    { month: 'Mei', amount: 3250000 },
    { month: 'Jun', amount: 4100000 },
    { month: 'Jul', amount: 4850000 },
    { month: 'Agu', amount: 5400000 },
    { month: 'Sep', amount: 6120000 },
    { month: 'Okt', amount: Math.max(totalRevenue, 4413000) },
  ]
  const maxAmount = Math.max(...monthlyData.map(d => d.amount))

  return (
    <div className="space-y-6">
      {/* Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Performa Butik Émeraude Botanica
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Metrik pendapatan real-time, distribusi produk skincare, dan aktivitas member VIP.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground">
            <Calendar className="size-3.5 text-[#B08A4F]" />
            <span>Oktober 2026</span>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 h-8 px-3 rounded-md bg-[#B08A4F] text-[#102F27] text-xs font-bold hover:bg-[#9E7B44] transition shadow-xs"
          >
            <Download className="size-3.5" />
            <span>Ekspor Laporan</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Total Pendapatan</span>
            <CreditCard className="size-4 text-[#B08A4F]" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-foreground">
              {formatRupiah(totalRevenue)}
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-[#B08A4F] font-semibold">+24.8%</span>
              <span>dari kuartal lalu</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Total Pesanan &amp; Unit</span>
            <ShoppingBag className="size-4 text-[#B08A4F]" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-foreground">
              {orders.length} Pesanan
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-[#B08A4F] font-semibold">+{totalUnitsSold} flacon</span>
              <span>terkirim ke pelanggan</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Formulasi Aktif (SKU)</span>
            <Package className="size-4 text-[#B08A4F]" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-foreground">
              {products.length} Produk
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              {lowStockCount > 0 ? (
                <span className="text-[#B08A4F] font-medium">
                  {lowStockCount} SKU stok di bawah 15 unit
                </span>
              ) : (
                <span>Seluruh stok aman</span>
              )}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Member VIP Terdaftar</span>
            <Users className="size-4 text-[#B08A4F]" />
          </div>
          <div>
            <div className="text-2xl font-bold tracking-tight text-foreground">
              {users.length} Anggota
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
              <Sparkles className="size-3 text-[#B08A4F]" />
              <span>98.4% tingkat kepuasan kulit</span>
            </p>
          </div>
        </div>
      </div>

      {/* 7-Column Chart & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="lg:col-span-4 rounded-xl border border-border bg-card p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Tren Penjualan Haute Cosmétique (6 Bulan)
            </h3>
            <p className="text-xs text-muted-foreground">
              Pertumbuhan omzet bulanan dalam Rupiah (IDR).
            </p>
          </div>

          <div className="mt-6 pt-4 h-64 flex items-end gap-3 sm:gap-6 border-b border-border pb-2">
            {monthlyData.map(item => {
              const heightPercent = Math.max(18, Math.round((item.amount / maxAmount) * 100))
              return (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-[10px] text-[#B08A4F] font-mono opacity-80 group-hover:opacity-100">
                    {(item.amount / 1000000).toFixed(1)}jt
                  </span>
                  <div className="w-full max-w-[48px] bg-background/60 rounded-t-md h-48 flex items-end overflow-hidden border border-border">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full bg-[#B08A4F] rounded-t-md transition-all duration-500 group-hover:bg-[#9E7B44]"
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{item.month}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-[#B08A4F]" />
              <span>Omzet Kotor Bulanan</span>
            </span>
            <span className="font-semibold text-foreground">
              Rata-rata: {formatRupiah(4688000)} / bulan
            </span>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-3 rounded-xl border border-border bg-card p-5 shadow-xs space-y-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground">Pesanan VIP Terkini</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {orders.length} transaksi tercatat dalam buku besar Maison.
            </p>
          </div>

          <div className="space-y-4">
            {orders.slice(0, 5).map(order => (
              <div key={order.id} className="flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 truncate">
                  <div className="size-9 rounded-full bg-[#B08A4F]/20 border border-[#B08A4F]/40 flex items-center justify-center font-bold text-[#B08A4F] text-xs shrink-0">
                    {order.customerName.charAt(0)}
                  </div>
                  <div className="truncate">
                    <p className="font-semibold text-foreground truncate">{order.customerName}</p>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {order.id} • {order.paymentMethod}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-bold text-foreground">{formatRupiah(order.total)}</p>
                  <span className="inline-block text-[10px] font-semibold text-[#B08A4F]">
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
