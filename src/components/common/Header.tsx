import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from './BotanicalCrest'
import {
  ShoppingBag,
  Search,
  Sun,
  Moon,
  Crown,
  User as UserIcon,
  LogOut,
  ClipboardList,
} from 'lucide-react'

export const Header: React.FC = () => {
  const {
    activeView,
    setActiveView,
    cartItemCount,
    setIsCartOpen,
    theme,
    toggleTheme,
    currentUser,
    logout,
    openAuthModal,
    setIsCmdKOpen,
  } = useCosmetics()

  return (
    <>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Emblem & Navigation */}
          <div className="flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => setActiveView('store')}
              className="flex items-center gap-2.5 text-left transition hover:opacity-90 group"
            >
              <div className="flex items-center justify-center transition-transform group-hover:scale-105">
                <BotanicalCrest size="sm" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-[0.14em] text-foreground block leading-none uppercase">
                  Émeraude
                </span>
                <span className="text-[9px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold block mt-0.5">
                  Botanica • Paris
                </span>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
              <button
                onClick={() => setActiveView('store')}
                className={`px-3 py-1.5 rounded-md transition ${
                  activeView === 'store'
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                Koleksi Kosmetik
              </button>
              <button
                onClick={() => setActiveView('orders')}
                className={`px-3 py-1.5 rounded-md transition ${
                  activeView === 'orders'
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                Pesanan & Ritual Saya
              </button>
              <button
                onClick={() => {
                  if (currentUser?.role === 'admin') {
                    setActiveView('admin')
                  } else {
                    openAuthModal('login')
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition ${
                  activeView === 'admin'
                    ? 'bg-[#D4AF37] text-[#102F27] font-bold'
                    : 'text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/10'
                }`}
              >
                <Crown className="size-3.5" />
                <span>Maison Backoffice</span>
              </button>
            </nav>
          </div>

          {/* Right: Search Cmd+K, Theme Toggle, Shopping Bag, User Account */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Search Trigger (⌘K) */}
            <button
              onClick={() => setIsCmdKOpen(true)}
              className="hidden sm:flex items-center gap-2 h-9 w-44 md:w-60 rounded-md border border-border bg-card/60 px-3 text-xs text-muted-foreground hover:border-[#D4AF37] transition"
            >
              <Search className="size-3.5 text-[#D4AF37]" />
              <span className="flex-1 text-left truncate">Cari serum, lip velvet...</span>
              <kbd className="pointer-events-none rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono font-medium">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => setIsCmdKOpen(true)}
              className="flex sm:hidden size-9 items-center justify-center rounded-md border border-border hover:bg-muted transition text-muted-foreground"
              aria-label="Cari Produk"
            >
              <Search className="size-4 text-[#D4AF37]" />
            </button>

            {/* Theme Switcher (Emerald Silk vs Alabaster Cream) */}
            <button
              onClick={toggleTheme}
              className="flex size-9 items-center justify-center rounded-md border border-border hover:border-[#D4AF37] hover:bg-muted text-muted-foreground hover:text-foreground transition"
              title={
                theme === 'dark'
                  ? 'Beralih ke Mode Alabaster Cream (#F2EBDD)'
                  : 'Beralih ke Mode Deep Emerald Silk (#102F27)'
              }
            >
              {theme === 'dark' ? (
                <Sun className="size-4 text-[#D4AF37]" />
              ) : (
                <Moon className="size-4 text-[#102F27]" />
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex size-9 items-center justify-center rounded-md border border-border hover:border-[#D4AF37] hover:bg-muted text-foreground transition"
              aria-label="Tas Belanja"
            >
              <ShoppingBag className="size-4 text-[#D4AF37]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-[#D4AF37] text-[#102F27] text-[10px] font-bold shadow-xs animate-in zoom-in-75">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Account / Role Menu */}
            {currentUser ? (
              <div className="relative group pl-1">
                <button className="flex items-center gap-2 rounded-md border border-border bg-card/60 px-2.5 py-1.5 text-xs font-medium hover:border-[#D4AF37] transition">
                  {currentUser.avatarUrl ? (
                    <img
                      src={currentUser.avatarUrl}
                      alt={currentUser.name}
                      className="size-5 rounded-full object-cover border border-[#D4AF37]/40"
                    />
                  ) : (
                    <UserIcon className="size-4 text-[#D4AF37]" />
                  )}
                  <span className="hidden lg:inline max-w-[115px] truncate">
                    {currentUser.name}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase ${
                      currentUser.role === 'admin'
                        ? 'bg-[#D4AF37] text-[#102F27]'
                        : 'bg-[#78947F]/20 text-[#D4AF37] border border-[#D4AF37]/30'
                    }`}
                  >
                    {currentUser.role === 'admin' ? 'DIRECTOR' : 'VIP'}
                  </span>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-1.5 hidden group-hover:block w-60 rounded-lg border border-border bg-popover p-1.5 shadow-xl z-50 text-xs">
                  <div className="px-3 py-2 border-b border-border">
                    <p className="font-semibold text-foreground truncate">{currentUser.name}</p>
                    <p className="text-muted-foreground text-[11px] truncate">{currentUser.email}</p>
                    {currentUser.skinProfile && (
                      <p className="text-[10px] text-[#D4AF37] mt-0.5">
                        Profil Kulit: {currentUser.skinProfile}
                      </p>
                    )}
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => setActiveView('orders')}
                      className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 hover:bg-accent text-left"
                    >
                      <ClipboardList className="size-3.5 text-[#D4AF37]" />
                      <span>Riwayat Pesanan Saya</span>
                    </button>

                    {currentUser.role === 'admin' && (
                      <button
                        onClick={() => setActiveView('admin')}
                        className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 hover:bg-accent text-left font-semibold text-[#D4AF37]"
                      >
                        <Crown className="size-3.5" />
                        <span>Buka Maison Backoffice</span>
                      </button>
                    )}
                  </div>

                  <div className="border-t border-border pt-1">
                    <button
                      onClick={logout}
                      className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-destructive hover:bg-destructive/10 text-left"
                    >
                      <LogOut className="size-3.5" />
                      <span>Keluar (Logout)</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => openAuthModal('login')}
                  className="h-9 px-3 rounded-md border border-border text-foreground text-xs font-medium hover:border-[#D4AF37] hover:bg-muted transition"
                >
                  Masuk
                </button>
                <button
                  onClick={() => openAuthModal('register')}
                  className="h-9 px-3 rounded-md bg-[#D4AF37] text-[#102F27] text-xs font-bold hover:bg-[#E5C453] transition shadow-xs"
                >
                  Daftar VIP
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
