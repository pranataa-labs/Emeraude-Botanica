import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from '@/components/common/BotanicalCrest'
import {
  IconCleanIngredients,
  IconClinicallyTested,
  IconSensitiveSkin,
} from '@/components/common/BeautyIcons'
import { ArrowRight } from 'lucide-react'

export const HeroBanner: React.FC = () => {
  const { navigateToCatalog } = useCosmetics()

  return (
    <section className="relative overflow-hidden bg-[#FBF9F4] dark:bg-[#071713] transition-colors border-b border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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

            {/* Action Buttons: Dark Matte with Tactile Grain Effect */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateToCatalog('Semua')}
                className="group relative inline-flex items-center gap-3 rounded-md bg-[#091D18] hover:bg-[#102F27] dark:bg-[#D4AF37] dark:hover:bg-[#E5C453] text-[#F2EBDD] dark:text-[#091D18] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase transition shadow-md hover:shadow-lg focus:outline-none overflow-hidden"
              >
                {/* Subtle Grain Overlay on the primary button */}
                <span className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:8px_8px]" />
                <span className="relative z-10 font-bold">Shop Now</span>
                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigateToCatalog('Semua')}
                className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/50 bg-transparent px-5 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D4AF37] hover:bg-[#D4AF37]/10 transition"
              >
                <span>Lihat 120 Formulasi</span>
              </button>
            </div>

            {/* 3 Minimalist Promises with Custom Line Icons */}
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

          {/* Right Column: Pure Floating Gold Lotus & Goddess Emblem (No Card around logo) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center text-center py-6 lg:py-0">
            {/* Subtle Ambient Gold Radial Glow behind the emblem */}
            <div className="pointer-events-none absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,transparent_70%)] blur-2xl" />

            <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
              {/* Floating Pure Logo (SVG from Downloads) */}
              <BotanicalCrest
                size="hero"
                className="hover:scale-105 transition-transform duration-500 cursor-pointer"
              />

              {/* Refined Brand Wordmark */}
              <div className="space-y-1 pt-1">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.26em] text-[#091D18] dark:text-[#F2EBDD] block uppercase">
                  Émeraude
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-[0.45em] text-[#D4AF37] font-semibold block">
                  Haute Botanique
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground block pt-0.5">
                  Paris • 100% Pure Botanical Formulations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
