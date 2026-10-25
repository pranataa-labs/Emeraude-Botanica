import React from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from './BotanicalCrest'
import { BRAND_SWATCHES } from '@/data/seedData'
import { ShieldCheck, Sparkles, Award, HeartHandshake } from 'lucide-react'

export const Footer: React.FC = () => {
  const { setSelectedCategory, setActiveView, openAuthModal } = useCosmetics()

  return (
    <footer className="border-t border-[#C8A96A]/25 bg-[#092822] text-[#F7F6F1]">
      {/* Luxury Assurance Pillars */}
      <div className="border-b border-[#C8A96A]/15 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#134E43] border border-[#C8A96A]/30 text-[#C8A96A]">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#F7F6F1]">
                100% Botanical Actives
              </h4>
              <p className="text-xs text-[#E6F0E9]/75 mt-0.5 leading-relaxed">
                Ekstrak dingin organik murni dengan bioteknologi peptida & emas koloid 24K.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#134E43] border border-[#C8A96A]/30 text-[#C8A96A]">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#F7F6F1]">
                BPOM RI & Dermatologist Tested
              </h4>
              <p className="text-xs text-[#E6F0E9]/75 mt-0.5 leading-relaxed">
                Teruji klinis hipoalergenik, bebas paraben, sulfat, dan ramah kulit sensitif.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#134E43] border border-[#C8A96A]/30 text-[#C8A96A]">
              <Award className="size-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#F7F6F1]">
                Kemasan Zamrud Berkelanjutan
              </h4>
              <p className="text-xs text-[#E6F0E9]/75 mt-0.5 leading-relaxed">
                Botol kaca emerald UV-protective yang menjaga kemurnian bahan aktif.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#134E43] border border-[#C8A96A]/30 text-[#C8A96A]">
              <HeartHandshake className="size-5" />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-[#F7F6F1]">
                Cruelty-Free & Halal Certified
              </h4>
              <p className="text-xs text-[#E6F0E9]/75 mt-0.5 leading-relaxed">
                100% Vegan formulation tanpa pengujian hewan dan tersertifikasi resmi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Col 1: Brand Story + Swatches */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BotanicalCrest size="sm" />
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.15em] text-[#F7F6F1] uppercase block leading-none">
                  Émeraude Botanica
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C8A96A] font-medium">
                  Emerald & Cream Luxury Wellness
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E6F0E9]/80 leading-relaxed max-w-md">
              Maison kosmetik dan perawatan kulit botani mewah yang memadukan ilmu dermatologi modern
              dengan keanggunan palet <strong>Emerald & Cream</strong>. Setiap formula dirancang sebagai
              ritual keanggunan abadi.
            </p>

            {/* Exact 5-Color Swatch Reference Bar */}
            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] mb-2 font-semibold">
                Signature Color Identity — Emerald & Cream
              </p>
              <div className="flex items-center gap-2">
                {BRAND_SWATCHES.map(swatch => (
                  <div
                    key={swatch.code}
                    className="group relative flex flex-col items-center"
                    title={`${swatch.name} (${swatch.hex})`}
                  >
                    <div
                      className="w-10 h-10 rounded-md border border-[#F7F6F1]/30 shadow-sm transition-transform group-hover:scale-105"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="mt-1 font-mono text-[9px] text-[#E6F0E9]/80">
                      {swatch.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Koleksi */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <h4 className="font-serif text-sm font-bold uppercase tracking-[0.18em] text-[#C8A96A]">
              Koleksi Haute
            </h4>
            <ul className="space-y-2 text-[#E6F0E9]/80">
              {(
                [
                  'Serum & Essence',
                  'Moisturizer & Cream',
                  'Cleanser & Toner',
                  'Lip & Cheek Couture',
                  'Eye & Night Ritual',
                  'Body & Wellness',
                ] as const
              ).map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat)
                      setActiveView('store')
                      window.scrollTo({ top: 400, behavior: 'smooth' })
                    }}
                    className="hover:text-[#C8A96A] transition"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Layanan Pelanggan & Demo */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold uppercase tracking-[0.18em] text-[#C8A96A]">
              Maison Concierge & Akses Demo
            </h4>
            <p className="text-[#E6F0E9]/80 leading-relaxed">
              Butik Flagship: Plaza Senayan Level 1 — Suite Émeraude 108, Jakarta Selatan.
              Layanan Konsultasi Kulit Privat tersedia setiap hari (10.00 – 22.00 WIB).
            </p>
            <div className="rounded-lg border border-[#C8A96A]/25 bg-[#134E43]/70 p-3 space-y-1.5">
              <p className="text-[11px] font-semibold text-[#C8A96A]">
                Akun Demo Siap Pakai (Klik Masuk):
              </p>
              <p className="text-[11px] text-[#F7F6F1]">
                • <strong>Admin Backoffice:</strong>{' '}
                <code className="text-[#C8A96A]">admin@example.com</code> /{' '}
                <code>password123</code>
              </p>
              <p className="text-[11px] text-[#F7F6F1]">
                • <strong>Member VIP:</strong>{' '}
                <code className="text-[#C8A96A]">user@example.com</code> /{' '}
                <code>password123</code>
              </p>
              <button
                onClick={() => openAuthModal('login')}
                className="mt-1 inline-block text-[11px] font-semibold text-[#C8A96A] underline hover:text-[#F7F6F1]"
              >
                Buka Modal Login Cepat →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C8A96A]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E6F0E9]/60">
          <p>© 2026 Émeraude Botanica Haute Cosmétique. Seluruh hak cipta dilindungi.</p>
          <p>Palette: #0F3D34 • #134E43 • #E6F0E9 • #F7F6F1 • #C8A96A</p>
        </div>
      </div>
    </footer>
  )
}
