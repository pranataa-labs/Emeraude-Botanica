import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from '@/components/common/BotanicalCrest'
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

          {/* Right Column: Prestigious EHB Gold Monogram Showcase (Replacing Image with Logo) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-xl aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/50 bg-[#061511] flex flex-col items-center justify-between p-6 sm:p-8 text-center">
              {/* Luxury Gold Halo & Subtle Radial Grain */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_75%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px]" />

              {/* Top Haute Label */}
              <div className="relative z-10 w-full flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D4AF37]/80">
                  Haute Parfumerie &amp; Cosmétique
                </span>
                <div className="rounded-full bg-[#091D18]/90 border border-[#D4AF37]/40 px-3 py-1 text-[10px] tracking-widest uppercase font-semibold text-[#D4AF37] flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="size-3 text-[#D4AF37]" />
                  <span>Paris 2026</span>
                </div>
              </div>

              {/* Centerpiece: EHB Gold Monogram Emblem with Radiant Halo */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2 sm:py-3">
                <div className="relative flex items-center justify-center p-3 sm:p-4 rounded-full border border-[#D4AF37]/35 bg-[#091D18]/70 shadow-[0_0_55px_rgba(212,175,55,0.2)]">
                  <BotanicalCrest size="hero" />
                </div>
                <div className="mt-3 space-y-0.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.22em] uppercase text-[#F2EBDD]">
                    Émeraude
                  </h3>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.42em] text-[#D4AF37] font-semibold">
                    Haute Botanique • EHB
                  </p>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="relative z-10 w-full rounded-xl bg-[#091D18]/85 backdrop-blur-md border border-[#D4AF37]/35 p-3 sm:p-3.5 flex items-center justify-between text-xs shadow-md">
                <div className="text-left">
                  <h4 className="font-serif font-bold text-[#F2EBDD] text-xs sm:text-sm">
                    Koleksi Formulasi Botani Murni
                  </h4>
                  <p className="text-[11px] text-[#F2EBDD]/70">
                    120 Produk • 100% Bersertifikasi BPOM &amp; Halal
                  </p>
                </div>
                <button
                  onClick={() => navigateToCatalog('Semua')}
                  className="rounded-md bg-[#D4AF37] hover:bg-[#E5C453] text-[#091D18] px-3.5 py-1.5 text-[11px] font-bold tracking-wider uppercase transition shrink-0 shadow-sm"
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
