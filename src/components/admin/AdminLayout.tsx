import React, { useState } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { AdminSidebar, AdminTab } from './AdminSidebar'
import { AdminHeader } from './AdminHeader'
import { AdminDashboardTab } from './AdminDashboardTab'
import { AdminProductsTab } from './AdminProductsTab'
import { AdminOrdersTab } from './AdminOrdersTab'
import { AdminCustomersTab } from './AdminCustomersTab'
import { AdminAnalyticsTab } from './AdminAnalyticsTab'
import { ShieldAlert, ArrowLeft, LogIn } from 'lucide-react'

export const AdminLayout: React.FC = () => {
  const { currentUser, openAuthModal, setActiveView } = useCosmetics()
  const [currentTab, setCurrentTab] = useState<AdminTab>('dashboard')
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Role Guard
  if (currentUser?.role !== 'admin') {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center space-y-4">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-destructive/15 text-destructive border border-destructive/30">
          <ShieldAlert className="size-8" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Area Terproteksi Maison Director
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Portal Backoffice Émeraude Botanica hanya dapat diakses oleh pengguna dengan otorisasi{' '}
          <strong>Administrator</strong>.
        </p>

        <div className="pt-2 flex flex-col gap-2.5">
          <button
            onClick={() => openAuthModal('login')}
            className="flex items-center justify-center gap-2 h-10 rounded-md bg-[#D4AF37] text-[#102F27] font-bold text-xs hover:bg-[#E5C453] transition shadow-xs"
          >
            <LogIn className="size-4" />
            <span>Masuk dengan Akun Administrator</span>
          </button>

          <button
            onClick={() => setActiveView('store')}
            className="flex items-center justify-center gap-2 h-10 rounded-md border border-border bg-card text-foreground font-medium text-xs hover:bg-muted transition"
          >
            <ArrowLeft className="size-4" />
            <span>Kembali ke Butik Publik</span>
          </button>
        </div>
      </div>
    )
  }

  const tabTitles: Record<AdminTab, string> = {
    dashboard: 'Ringkasan Eksekutif Maison',
    products: 'Manajemen Katalog & Formulasi Kosmetik',
    orders: 'Manajemen Pesanan & Pengiriman VIP',
    customers: 'Database Member VIP & Profil Kulit',
    analytics: 'Analitik Penjualan & Performa Koleksi',
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isCollapsed={isCollapsed}
      />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <AdminHeader
          currentTabTitle={tabTitles[currentTab]}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-in fade-in-0 duration-200">
          {currentTab === 'dashboard' && <AdminDashboardTab />}
          {currentTab === 'products' && <AdminProductsTab />}
          {currentTab === 'orders' && <AdminOrdersTab />}
          {currentTab === 'customers' && <AdminCustomersTab />}
          {currentTab === 'analytics' && <AdminAnalyticsTab />}
        </main>
      </div>
    </div>
  )
}
