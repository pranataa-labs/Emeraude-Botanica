import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { HeroBanner } from '@/components/store/HeroBanner'
import { CatalogView } from '@/components/store/CatalogView'
import { CheckoutView } from '@/components/store/CheckoutView'
import { OrderSuccessView } from '@/components/store/OrderSuccessView'
import { CustomerOrdersView } from '@/components/store/CustomerOrdersView'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { CommandPalette } from '@/components/common/CommandPalette'
import { ProductDetailModal } from '@/components/store/ProductDetailModal'
import { AuthModal } from '@/components/common/AuthModal'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { Toaster } from 'sonner'

export const App: React.FC = () => {
  const { activeView, theme } = useCosmetics()

  // Admin Backoffice View
  if (activeView === 'admin') {
    return (
      <>
        <Toaster
          position="bottom-right"
          theme={theme}
          toastOptions={{
            style: {
              borderRadius: '0.625rem',
              fontSize: '12px',
            },
          }}
        />
        <CommandPalette />
        <ProductDetailModal />
        <AuthModal />
        <AdminLayout />
      </>
    )
  }

  // Public Luxury Cosmetics Boutique
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-[#C8A96A]/30 selection:text-[#C8A96A]">
      <Toaster
        position="bottom-right"
        theme={theme}
        toastOptions={{
          style: {
            borderRadius: '0.625rem',
            fontSize: '12px',
          },
        }}
      />

      <Header />

      <main className="flex-1">
        {activeView === 'store' && (
          <>
            <HeroBanner />
            <CatalogView />
          </>
        )}
        {activeView === 'checkout' && <CheckoutView />}
        {activeView === 'success' && <OrderSuccessView />}
        {activeView === 'orders' && <CustomerOrdersView />}
      </main>

      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <CommandPalette />
      <ProductDetailModal />
      <AuthModal />
    </div>
  )
}
