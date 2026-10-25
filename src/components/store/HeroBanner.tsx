import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import {
  IconCleanIngredients,
  IconClinicallyTested,
  IconSensitiveSkin,
} from '@/components/common/BeautyIcons'
import { ArrowRight, Sparkles } from 'lucide-react'

export const HeroBanner: React.FC = () => {
  const { navigateToCatalog } = useCosmetics()

  return (
    <section className="relative overflow-hidden bg-[#FBF9F4] dark:bg-[#071713] transition-colors border-b border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Minimalist Promises */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Overline Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Glow Naturally • 100% Botanical
              </span>
            </div>

            {/* Editorial Multi-Line Serif Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#091D18] dark:text-[#F2EBDD] leading-[1.08]">
                Pure Ingredients.
              </h1>
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#091D18] dark:text-[#F2EBDD] leading-[1.08]">
                Visible Results.
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed font-sans">
              Thoughtfully formulated botanical skincare that nourishes, protects and enhances your
              natural glow. Powered by cold-pressed Malachite mineral and organic peptides.
            </p>

            {/* Action Button: Dark Matte with Tactile Grain Effect */}
            <div className="pt-2">
              <button
                onClick={() => navigateToCatalog('Semua')}
                className="group relative inline-flex items-center gap-3 rounded-md bg-[#091D18] hover:bg-[#102F27] dark:bg-[#D4AF37] dark:hover:bg-[#E5C453] text-[#F2EBDD] dark:text-[#091D18] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition shadow-md hover:shadow-lg focus:outline-none overflow-hidden"
              >
                {/* Subtle Grain Overlay on the primary button */}
                <span className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:8px_8px]" />
                <span className="relative z-10 font-bold">Shop Now</span>
                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* 3 Minimalist Promises with Custom Line Icons Matching Reference Image */}
            <div className="pt-6 border-t border-border/80 grid grid-cols-3 gap-3 sm:gap-4 text-[#091D18] dark:text-[#F2EBDD]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-card/90 border border-border text-[#091D18] dark:text-[#D4AF37]">
                  <IconCleanIngredients className="size-4.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-snug">
                  Clean Ingredients
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-card/90 border border-border text-[#091D18] dark:text-[#D4AF37]">
                  <IconClinicallyTested className="size-4.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-snug">
                  Clinically Tested
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-card/90 border border-border text-[#091D18] dark:text-[#D4AF37]">
                  <IconSensitiveSkin className="size-4.5" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider leading-snug">
                  Suitable for Sensitive Skin
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Product Still Life Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-xl aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-[#EFECE6] dark:bg-[#0c221c]">
              <img
                src="https://images.unsplash.com/photo-1608248597359-009772a08343?w=1200&auto=format&fit=crop&q=85"
                alt="Émeraude Botanica Skincare Collection on Travertine Stone Pedestal"
                onError={e => {
                  ;(e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&auto=format&fit=crop&q=85'
                }}
                className="size-full object-cover object-center transform transition duration-700 hover:scale-102"
              />

              {/* Floating Haute Label */}
              <div className="absolute top-4 right-4 rounded-full bg-background/85 backdrop-blur-md border border-border px-3.5 py-1 text-[10px] tracking-widest uppercase font-semibold text-foreground flex items-center gap-1.5 shadow-sm">
                <Sparkles className="size-3 text-[#D4AF37]" />
                <span>Haute Cosmétique Paris</span>
              </div>

              {/* Travertine Pedestal Product Trio Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-card/90 backdrop-blur-md border border-border p-3 flex items-center justify-between text-xs shadow-md">
                <div>
                  <h4 className="font-serif font-bold text-foreground text-sm">
                    L’Élixir Trio d’Émeraude
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    Cream Cleanser • Hydrating Serum • Daily Moisture Silk
                  </p>
                </div>
                <button
                  onClick={() => navigateToCatalog('Serum & Essence')}
                  className="rounded-md bg-[#091D18] dark:bg-[#D4AF37] text-[#F2EBDD] dark:text-[#091D18] px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase hover:opacity-90 transition shrink-0"
                >
                  Lihat Koleksi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
