import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from './BotanicalCrest'
import {
  IconShippingTruck,
  IconReturnsClock,
  IconSecureLock,
} from '@/components/common/BeautyIcons'
import { Sparkles } from 'lucide-react'

const IconInstagram: React.FC<{ className?: string }> = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const IconYoutube: React.FC<{ className?: string }> = ({ className = 'size-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
)

export const Footer: React.FC = () => {
  const { setSelectedCategory, setActiveView, openAuthModal } = useCosmetics()

  const navigateCategory = (cat: string) => {
    setActiveView('store')
    setSelectedCategory(cat as never)
    const el = document.getElementById('catalog-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border/80 bg-grain-primary text-[#F2EBDD] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand Info & Socials (Matching Reference Image) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <BotanicalCrest size="sm" />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F2EBDD] block leading-none uppercase">
                  Émeraude
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold block mt-1">
                  Haute Botanique
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F2EBDD]/70 max-w-xs leading-relaxed font-sans">
              Elevated skincare made with clean botanical ingredients and backed by dermatological science. Diciptakan untuk menyempurnakan kilau alami kulit Anda.
            </p>

            {/* Social Media Minimalist Icons */}
            <div className="flex items-center gap-3 pt-2 text-[#D4AF37]">
              <a
                href="#instagram"
                className="flex size-8 items-center justify-center rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition"
                aria-label="Instagram"
              >
                <IconInstagram className="size-4" />
              </a>
              <a
                href="#youtube"
                className="flex size-8 items-center justify-center rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition"
                aria-label="YouTube"
              >
                <IconYoutube className="size-4" />
              </a>
              <button
                onClick={() => openAuthModal('login')}
                className="flex size-8 items-center justify-center rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition"
                title="VIP Member Club"
                aria-label="VIP Member Club"
              >
                <Sparkles className="size-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Columns (SHOP, COLLECTIONS, ABOUT, HELP) */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-left">
            {/* SHOP */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[#F2EBDD] text-[11px]">
                Shop
              </h4>
              <ul className="space-y-2 text-[#F2EBDD]/75">
                <li>
                  <button
                    onClick={() => navigateCategory('Semua')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    All Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateCategory('Serum & Essence')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Bestsellers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateCategory('Semua')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    New Arrivals
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateCategory('Body & Wellness')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Sets &amp; Kits
                  </button>
                </li>
              </ul>
            </div>

            {/* COLLECTIONS */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[#F2EBDD] text-[11px]">
                Collections
              </h4>
              <ul className="space-y-2 text-[#F2EBDD]/75">
                <li>
                  <button
                    onClick={() => navigateCategory('Moisturizer & Cream')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Hydration
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateCategory('Serum & Essence')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Brightening
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateCategory('Eye & Night Ritual')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Anti-Aging
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateCategory('Cleanser & Toner')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Sensitive Skin
                  </button>
                </li>
              </ul>
            </div>

            {/* ABOUT & HELP */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[#F2EBDD] text-[11px]">
                Maison
              </h4>
              <ul className="space-y-2 text-[#F2EBDD]/75">
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById('our-promise-section')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById('the-ritual-section')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="hover:text-[#D4AF37] transition"
                  >
                    The Ritual
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveView('orders')}
                    className="hover:text-[#D4AF37] transition"
                  >
                    Track Order
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveView('admin')}
                    className="text-[#D4AF37] font-semibold hover:underline"
                  >
                    Backoffice
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: 3 Trust Badges (Right side matching Reference Image) */}
          <div className="md:col-span-3 space-y-5 border-t md:border-t-0 md:border-l border-[#D4AF37]/20 pt-6 md:pt-0 md:pl-6 text-left">
            {/* Badge 1 */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-[#D4AF37]">
                <IconShippingTruck className="size-5" />
              </div>
              <div>
                <h5 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#F2EBDD]">
                  Free Shipping
                </h5>
                <p className="text-[11px] text-[#F2EBDD]/65 mt-0.5">
                  On orders over Rp 500.000
                </p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-[#D4AF37]">
                <IconReturnsClock className="size-5" />
              </div>
              <div>
                <h5 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#F2EBDD]">
                  30 Day Returns
                </h5>
                <p className="text-[11px] text-[#F2EBDD]/65 mt-0.5">
                  Hassle free returns guarantee
                </p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-[#D4AF37]">
                <IconSecureLock className="size-5" />
              </div>
              <div>
                <h5 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#F2EBDD]">
                  Secure Payment
                </h5>
                <p className="text-[11px] text-[#F2EBDD]/65 mt-0.5">
                  100% secure checkout with SSL
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#F2EBDD]/60 font-sans">
          <p>© 2026 Émeraud Botanica. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-[#D4AF37] transition">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-[#D4AF37] transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
