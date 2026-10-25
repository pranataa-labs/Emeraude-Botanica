import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from './BotanicalCrest'
import {
  ShoppingBag,
  Search,
  Crown,
  User as UserIcon,
  LogOut,
  ClipboardList,
} from 'lucide-react'

export const Header: React.FC = () => {
  const {
    activeView,
    setActiveView,
    navigateToCatalog,
    cartItemCount,
    setIsCartOpen,
    currentUser,
    logout,
    openAuthModal,
    setIsCmdKOpen,
  } = useCosmetics()

  const scrollToHomeSection = (id: string) => {
    setActiveView('store')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors shadow-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand EHB Gold Monogram Logo & Editorial Typography */}
        <button
          onClick={() => {
            setActiveView('store')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3 text-left transition hover:opacity-90 group focus:outline-none"
        >
          <div className="flex items-center justify-center transition-transform group-hover:scale-105">
            <BotanicalCrest size="md" />
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.22em] text-[#091D18] dark:text-[#F2EBDD] block leading-none uppercase">
              Émeraude
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-[#D4AF37] font-semibold block mt-1">
              Haute Botanique
            </span>
          </div>
        </button>

        {/* Center Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs tracking-wider uppercase font-medium text-foreground/80">
          <button
            onClick={() => {
              setActiveView('store')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className={`hover:text-[#D4AF37] transition focus:outline-none ${
              activeView === 'store' ? 'text-[#D4AF37] font-bold' : ''
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => navigateToCatalog('Semua')}
            className={`hover:text-[#D4AF37] transition focus:outline-none ${
              activeView === 'catalog' || activeView === 'product'
                ? 'text-[#D4AF37] font-bold'
                : 'font-semibold'
            }`}
          >
            Katalog Produk
          </button>
          <button
            onClick={() => scrollToHomeSection('best-sellers-section')}
            className="hover:text-[#D4AF37] transition focus:outline-none"
          >
            Best Sellers
          </button>
          <button
            onClick={() => scrollToHomeSection('the-ritual-section')}
            className="hover:text-[#D4AF37] transition focus:outline-none"
          >
            The Ritual
          </button>
          <button
            onClick={() => scrollToHomeSection('our-promise-section')}
            className="hover:text-[#D4AF37] transition focus:outline-none"
          >
            Our Promise
          </button>
          <button
            onClick={() => {
              if (currentUser?.role === 'admin') {
                setActiveView('admin')
              } else {
                openAuthModal('login')
              }
            }}
            className="hover:text-[#D4AF37] transition flex items-center gap-1.5 text-[#D4AF37] font-semibold focus:outline-none"
          >
            <Crown className="size-3.5" />
            <span>Backoffice</span>
          </button>
        </nav>

        {/* Right Action Icons (Search, Account, Cart) */}
        <div className="flex items-center gap-3 sm:gap-4 text-[#091D18] dark:text-[#F2EBDD]">
          {/* Search Trigger (⌘K) */}
          <button
            onClick={() => setIsCmdKOpen(true)}
            className="flex items-center justify-center p-2 rounded-full hover:bg-muted/80 transition text-foreground"
            aria-label="Cari Produk (⌘K)"
            title="Cari Produk (⌘K)"
          >
            <Search className="size-4 sm:size-5 stroke-[1.7]" />
          </button>

          {/* User Account Dropdown */}
          {currentUser ? (
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 p-1 rounded-full hover:bg-muted/80 transition focus:outline-none"
                aria-label="Akun Pengguna"
              >
                {currentUser.avatarUrl ? (
                  <img
                    src={currentUser.avatarUrl}
                    alt={currentUser.name}
                    className="size-7 rounded-full object-cover border border-[#D4AF37]/50"
                  />
                ) : (
                  <UserIcon className="size-5 stroke-[1.7]" />
                )}
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-56 rounded-xl border border-border bg-popover p-2 shadow-2xl z-50 text-xs">
                <div className="px-3 py-2 border-b border-border">
                  <p className="font-semibold text-foreground truncate">{currentUser.name}</p>
                  <p className="text-muted-foreground text-[10px] truncate">{currentUser.email}</p>
                </div>
                <div className="py-1 space-y-0.5">
                  <button
                    onClick={() => setActiveView('orders')}
                    className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 hover:bg-accent text-left"
                  >
                    <ClipboardList className="size-3.5 text-[#D4AF37]" />
                    <span>Riwayat Pesanan</span>
                  </button>
                  {currentUser.role === 'admin' && (
                    <button
                      onClick={() => setActiveView('admin')}
                      className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 hover:bg-accent text-left font-semibold text-[#D4AF37]"
                    >
                      <Crown className="size-3.5" />
                      <span>Maison Backoffice</span>
                    </button>
                  )}
                </div>
                <div className="border-t border-border pt-1">
                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-destructive hover:bg-destructive/10 text-left"
                  >
                    <LogOut className="size-3.5" />
                    <span>Keluar (Logout)</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => openAuthModal('login')}
              className="flex items-center justify-center p-2 rounded-full hover:bg-muted/80 transition text-foreground"
              aria-label="Masuk Akun"
              title="Masuk ke Akun VIP"
            >
              <UserIcon className="size-4 sm:size-5 stroke-[1.7]" />
            </button>
          )}

          {/* Shopping Bag with Count Indicator */}
          {currentUser && (
            <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center p-2 rounded-full hover:bg-muted/80 transition text-foreground"
            aria-label="Tas Belanja"
          >
            <ShoppingBag className="size-4 sm:size-5 stroke-[1.7]" />
            <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-[#091D18] dark:bg-[#D4AF37] text-[#F2EBDD] dark:text-[#091D18] text-[9px] font-bold">
              {cartItemCount}
            </span>
          </button>
          )}
        </div>
      </div>
    </header>
  )
}
