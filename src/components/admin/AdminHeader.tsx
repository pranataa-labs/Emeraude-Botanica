import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { PanelLeft, Search, Sun, Moon, ExternalLink } from 'lucide-react'

interface AdminHeaderProps {
  currentTabTitle: string
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  currentTabTitle,
  isCollapsed,
  setIsCollapsed,
}) => {
  const { theme, toggleTheme, setIsCmdKOpen, setActiveView } = useCosmetics()

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/85 px-4 sm:px-6 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:border-[#D4AF37] hover:text-foreground transition"
          title="Toggle Sidebar (⌘B)"
        >
          <PanelLeft className="size-4" />
        </button>
        <div className="h-5 w-px bg-border" />
        <h1 className="font-serif text-lg sm:text-xl font-bold text-foreground truncate">
          {currentTabTitle}
        </h1>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setIsCmdKOpen(true)}
          className="hidden sm:flex items-center gap-2 h-9 w-52 rounded-md border border-border bg-card/70 px-3 text-xs text-muted-foreground hover:border-[#D4AF37] transition"
        >
          <Search className="size-3.5 text-[#D4AF37]" />
          <span className="flex-1 text-left">Cari SKU, pesanan...</span>
          <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono">
            ⌘K
          </kbd>
        </button>

        <button
          onClick={toggleTheme}
          className="flex size-9 items-center justify-center rounded-md border border-border bg-card hover:border-[#D4AF37] transition"
          title="Ganti Tema Emerald / Cream"
        >
          {theme === 'dark' ? (
            <Sun className="size-4 text-[#D4AF37]" />
          ) : (
            <Moon className="size-4 text-[#102F27]" />
          )}
        </button>

        <button
          onClick={() => setActiveView('store')}
          className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-[#D4AF37]/50 bg-[#D4AF37]/15 text-xs font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#102F27] transition"
        >
          <ExternalLink className="size-3.5" />
          <span className="hidden sm:inline">Butik Publik</span>
        </button>
      </div>
    </header>
  )
}
