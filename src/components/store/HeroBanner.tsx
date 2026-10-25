import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from '@/components/common/BotanicalCrest'
import { BRAND_SWATCHES } from '@/data/seedData'
import { Search, Sparkles, ShieldCheck, Droplets, Award } from 'lucide-react'
import { toast } from 'sonner'

export const HeroBanner: React.FC = () => {
  const { searchQuery, setSearchQuery } = useCosmetics()

  const copyHex = (hex: string, name: string) => {
    try {
      navigator.clipboard.writeText(hex)
      toast.success(`Kode warna ${hex} (${name}) disalin!`)
    } catch {
      // Ignore
    }
  }

  return (
    <section className="relative overflow-hidden border-b border-[#B08A4F]/30 emerald-silk-bg py-12 sm:py-16 lg:py-20 text-[#F2EBDD]">
      {/* Silk folds & gold ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(176,138,79,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-[#185844]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-[#B08A4F]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-7">
        {/* Iconic Gold Botanical Crest */}
        <div className="flex flex-col items-center space-y-3">
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <BotanicalCrest size="lg" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#B08A4F]/40 bg-[#102F27]/85 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-[#F2EBDD] shadow-sm backdrop-blur-xs">
            <Sparkles className="size-3 text-[#B08A4F]" />
            <span>Haute Cosmétique &amp; Botanical Wellness</span>
          </div>
        </div>

        {/* Luxury Serif Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[0.12em] uppercase leading-[1.08] gold-gradient-text">
            Émeraude Botanica
          </h1>

          {/* Delicate Antique Gold Divider Line */}
          <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-[#B08A4F] to-transparent" />

          <p className="font-serif italic text-lg sm:text-2xl text-[#F2EBDD] tracking-wide">
            Ivory, Sage, Emerald, Forest &amp; Antique Gold Palette
          </p>

          <p className="text-xs sm:text-sm text-[#F2EBDD]/85 max-w-2xl mx-auto font-sans leading-relaxed">
            Diciptakan di laboratorium botani dengan perpaduan mineral zamrud <strong>Malachite</strong>,{' '}
            ekstrak <strong>Sage</strong> murni, dan sentuhan <strong>Antique Gold 24K</strong>.
            Hadirkan kemewahan perawatan kulit kelas haute di setiap sentuhan.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-xl mx-auto pt-1">
          <div className="relative flex items-center shadow-lg rounded-lg overflow-hidden border border-[#B08A4F]/45 bg-[#102F27]/90 focus-within:border-[#B08A4F] focus-within:ring-2 focus-within:ring-[#B08A4F]/30 transition">
            <Search className="size-4 text-[#B08A4F] ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Cari serum zamrud, lip velvet, bakuchiol, ceramide, atau manfaat..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full h-11 bg-transparent px-3 text-xs sm:text-sm text-[#F2EBDD] placeholder:text-[#F2EBDD]/60 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mr-3 text-xs text-[#B08A4F] hover:text-[#F2EBDD] font-medium"
              >
                Reset
              </button>
            )}
          </div>

          {/* Quick Popular Active Tags */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs">
            <span className="text-[11px] text-[#F2EBDD]/70">Pencarian Populer:</span>
            {['Malachite', 'Ceramide', '24K Gold', 'Lip Velvet', 'Bakuchiol', 'Matcha'].map(tag => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="rounded-md border border-[#B08A4F]/30 bg-[#185844]/70 px-2.5 py-0.5 text-[11px] text-[#F2EBDD] hover:border-[#B08A4F] hover:bg-[#B08A4F] hover:text-[#102F27] transition font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive 5-Swatch Luxury Palette Showcase matching the Uploaded Image */}
        <div className="pt-4 max-w-2xl mx-auto">
          <div className="grid grid-cols-5 gap-2.5 sm:gap-4">
            {BRAND_SWATCHES.map(swatch => (
              <button
                key={swatch.code}
                type="button"
                onClick={() => copyHex(swatch.hex, swatch.name)}
                className="group flex flex-col items-center focus:outline-none"
                title={`Klik untuk menyalin ${swatch.hex} — ${swatch.name}`}
              >
                <div
                  className="w-full aspect-square max-w-[76px] rounded-md border border-[#F2EBDD]/80 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-[#B08A4F]"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className="mt-2 font-mono text-[10px] sm:text-xs tracking-wider text-[#F2EBDD] font-bold group-hover:text-[#B08A4F] transition">
                  {swatch.hex}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B08A4F] font-semibold truncate max-w-full">
                  {swatch.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Key Luxury Promises */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-[#B08A4F]/25 text-xs text-[#F2EBDD]/90">
          <div className="flex items-center justify-center gap-2">
            <Droplets className="size-4 text-[#B08A4F] shrink-0" />
            <span>Cold-Pressed Botanical &amp; Peptide</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="size-4 text-[#B08A4F] shrink-0" />
            <span>BPOM RI &amp; Halal Certified</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="size-4 text-[#B08A4F] shrink-0" />
            <span>Kemasan Eksklusif Emerald &amp; Antique Gold</span>
          </div>
        </div>
      </div>
    </section>
  )
}
