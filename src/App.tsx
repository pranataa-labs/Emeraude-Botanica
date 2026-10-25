import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { HeroBanner } from '@/components/store/HeroBanner'
import { CatalogView } from '@/components/store/CatalogView'
import { ProductsPageView } from '@/components/store/ProductsPageView'
import { ProductPageView } from '@/components/store/ProductPageView'
import { CheckoutView } from '@/components/store/CheckoutView'
import { OrderSuccessView } from '@/components/store/OrderSuccessView'
import { CustomerOrdersView } from '@/components/store/CustomerOrdersView'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { CommandPalette } from '@/components/common/CommandPalette'
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
        <AuthModal />
        <AdminLayout />
      </>
    )
  }

  // Public Luxury Cosmetics Boutique (Multi-Page Views: Home, Catalog Page, Dedicated Product Page, Checkout, Orders)
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
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
        {activeView === 'catalog' && <ProductsPageView />}
        {activeView === 'product' && <ProductPageView />}
        {activeView === 'checkout' && <CheckoutView />}
        {activeView === 'success' && <OrderSuccessView />}
        {activeView === 'orders' && <CustomerOrdersView />}
      </main>

      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <CommandPalette />
      <AuthModal />
    </div>
  )
}

export default App
