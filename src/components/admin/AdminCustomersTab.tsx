import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { formatRupiah } from '@/lib/utils'
import { Sparkles, Mail, Phone, ShieldCheck } from 'lucide-react'

export const AdminCustomersTab: React.FC = () => {
  const { users, orders } = useCosmetics()

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Database Member VIP &amp; Profil Kulit
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Data keanggotaan Maison Émeraude beserta preferensi jenis kulit dan riwayat transaksi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => {
          const userOrders = orders.filter(
            o => o.customerEmail.toLowerCase() === user.email.toLowerCase()
          )
          const totalSpent = userOrders.reduce((sum, o) => sum + o.total, 0)

          return (
            <div
              key={user.id}
              className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-4"
            >
              <div className="flex items-center gap-3">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="size-12 rounded-full object-cover border border-[#C8A96A]/40"
                  />
                ) : (
                  <div className="size-12 rounded-full bg-[#C8A96A] text-[#0F3D34] flex items-center justify-center font-bold text-sm">
                    {user.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-base font-bold text-foreground truncate">
                      {user.name}
                    </h3>
                    {user.role === 'admin' && (
                      <ShieldCheck className="size-4 text-[#C8A96A] shrink-0" />
                    )}
                  </div>
                  <span className="inline-block rounded bg-[#C8A96A]/15 border border-[#C8A96A]/35 px-2 py-0.5 text-[10px] font-bold uppercase text-[#C8A96A] mt-0.5">
                    {user.role === 'admin' ? 'Maison Director' : 'VIP Emerald Member'}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs border-t border-border pt-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="size-3.5 text-[#C8A96A]" />
                  <span className="truncate">{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="size-3.5 text-[#C8A96A]" />
                    <span>{user.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-foreground">
                  <Sparkles className="size-3.5 text-[#C8A96A]" />
                  <span>Profil Kulit: {user.skinProfile || 'Normal — Combination'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-3 text-xs">
                <div>
                  <span className="text-[10px] text-muted-foreground block">Total Pesanan</span>
                  <span className="font-bold text-foreground">{userOrders.length} Transaksi</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-muted-foreground block">Total Belanja VIP</span>
                  <span className="font-bold text-[#C8A96A]">{formatRupiah(totalSpent)}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
