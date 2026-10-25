import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from '@/components/common/BotanicalCrest'
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  BarChart3,
  ExternalLink,
  LogOut,
} from 'lucide-react'

export type AdminTab = 'dashboard' | 'products' | 'orders' | 'customers' | 'analytics'

interface AdminSidebarProps {
  currentTab: AdminTab
  setCurrentTab: (tab: AdminTab) => void
  isCollapsed: boolean
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentTab,
  setCurrentTab,
  isCollapsed,
}) => {
  const { products, orders, currentUser, logout, setActiveView } = useCosmetics()

  const pendingOrdersCount = orders.filter(o => o.status === 'Pending').length

  const navItems = [
    {
      group: 'Maison Operations',
      items: [
        {
          id: 'dashboard' as AdminTab,
          label: 'Dashboard Eksekutif',
          icon: LayoutDashboard,
        },
        {
          id: 'products' as AdminTab,
          label: 'Katalog & Formulasi',
          icon: Package,
          badge: products.length,
        },
        {
          id: 'orders' as AdminTab,
          label: 'Pesanan & Pengiriman',
          icon: ShoppingBag,
          badge: pendingOrdersCount > 0 ? `${pendingOrdersCount} baru` : undefined,
          badgeHighlight: true,
        },
        {
          id: 'customers' as AdminTab,
          label: 'Member VIP & Kulit',
          icon: Users,
        },
      ],
    },
    {
      group: 'Laporan & Analitik',
      items: [
        {
          id: 'analytics' as AdminTab,
          label: 'Analitik Penjualan',
          icon: BarChart3,
        },
      ],
    },
  ]

  return (
    <aside
      className={`relative flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300 z-30 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Brand Switcher Header */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-3.5">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="shrink-0">
            <BotanicalCrest size="sm" />
          </div>
          {!isCollapsed && (
            <div className="truncate text-left">
              <span className="font-serif font-bold text-sm tracking-widest uppercase block text-sidebar-foreground">
                Émeraude Maison
              </span>
              <span className="text-[10px] text-[#C8A96A] block truncate">
                Backoffice Suite • v2.5
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Nav Menu Body */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        {navItems.map((group, gIdx) => (
          <div key={gIdx} className="space-y-1">
            {!isCollapsed && (
              <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A]/85">
                {group.group}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map(item => {
                const Icon = item.icon
                const isActive = currentTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentTab(item.id)}
                    title={isCollapsed ? item.label : undefined}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-xs font-medium transition ${
                      isActive
                        ? 'bg-[#C8A96A] text-[#0F3D34] font-bold shadow-xs'
                        : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                    {!isCollapsed && (
                      <span className="flex-1 text-left truncate">{item.label}</span>
                    )}
                    {!isCollapsed && item.badge !== undefined && (
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                          isActive
                            ? 'bg-[#0F3D34] text-[#C8A96A]'
                            : item.badgeHighlight
                            ? 'bg-[#C8A96A]/20 text-[#C8A96A] border border-[#C8A96A]/40'
                            : 'bg-sidebar-accent text-sidebar-foreground'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {/* Shortcut to Public Boutique */}
        <div className="pt-2 border-t border-sidebar-border">
          <button
            onClick={() => setActiveView('store')}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-xs font-medium text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground transition"
            title="Lihat Butik Publik"
          >
            <ExternalLink className="size-4 shrink-0 text-[#C8A96A]" />
            {!isCollapsed && <span className="flex-1 text-left">Lihat Butik Publik</span>}
          </button>
        </div>
      </div>

      {/* Sidebar Footer User Info */}
      <div className="border-t border-sidebar-border p-3">
        {!isCollapsed ? (
          <div className="flex items-center justify-between gap-2 rounded-lg bg-[#134E43]/70 p-2 border border-[#C8A96A]/25">
            <div className="flex items-center gap-2 truncate">
              {currentUser?.avatarUrl ? (
                <img
                  src={currentUser.avatarUrl}
                  alt=""
                  className="size-7 rounded-full object-cover shrink-0 border border-[#C8A96A]/40"
                />
              ) : (
                <div className="size-7 rounded-full bg-[#C8A96A] text-[#0F3D34] flex items-center justify-center text-xs font-bold shrink-0">
                  A
                </div>
              )}
              <div className="truncate text-left text-xs">
                <p className="font-semibold text-sidebar-foreground truncate">
                  {currentUser?.name || 'Director'}
                </p>
                <p className="text-[10px] text-[#E6F0E9]/70 truncate">{currentUser?.email}</p>
              </div>
            </div>

            <button
              onClick={() => {
                logout()
                setActiveView('store')
              }}
              title="Keluar dari Backoffice"
              className="rounded p-1 text-[#E6F0E9]/70 hover:bg-destructive/20 hover:text-destructive transition"
            >
              <LogOut className="size-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              logout()
              setActiveView('store')
            }}
            title="Keluar dari Backoffice"
            className="flex size-9 items-center justify-center rounded-lg hover:bg-destructive/20 hover:text-destructive text-[#E6F0E9]/70 transition"
          >
            <LogOut className="size-4" />
          </button>
        )}
      </div>
    </aside>
  )
}
