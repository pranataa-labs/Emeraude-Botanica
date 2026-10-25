import React, { useState } from 'react'

export const BotanicalCrest: React.FC<{
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}> = ({ className = '', size = 'md' }) => {
  const dimensions =
    size === 'xl'
      ? 'w-24 h-24 sm:w-28 sm:h-28'
      : size === 'lg'
        ? 'w-16 h-16 sm:w-20 sm:h-20'
        : size === 'sm'
          ? 'w-10 h-10 sm:w-11 sm:h-11'
          : 'w-13 h-13 sm:w-14 sm:h-14'

  return (
    <svg
      viewBox="0 0 160 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} ${className} shrink-0 select-none`}
      aria-label="EHB — Émeraude Haute Botanique Gold Monogram"
    >
      <defs>
        <linearGradient id="ehbGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3DC8B" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#C59B27" />
          <stop offset="100%" stopColor="#E6C659" />
        </linearGradient>
      </defs>

      {/* ===================================================================
          1. FRAGRANCE MIST SPRAY DROPLETS & SPARKLE (Upper-Left of Nozzle)
         =================================================================== */}
      {/* Spray trajectory lines / micro-mist */}
      <circle cx="52" cy="19" r="1.4" fill="#D4AF37" opacity="0.9" />
      <circle cx="44" cy="15" r="1.8" fill="#D4AF37" />
      <circle cx="36" cy="11" r="1.3" fill="#D4AF37" opacity="0.85" />
      <circle cx="28" cy="8" r="1.0" fill="#D4AF37" opacity="0.7" />

      <circle cx="48" cy="23" r="1.6" fill="#D4AF37" opacity="0.95" />
      <circle cx="39" cy="21" r="2.1" fill="#D4AF37" />
      <circle cx="30" cy="19" r="1.5" fill="#D4AF37" opacity="0.85" />
      <circle cx="22" cy="17" r="1.1" fill="#D4AF37" opacity="0.65" />

      <circle cx="45" cy="28" r="1.5" fill="#D4AF37" opacity="0.9" />
      <circle cx="35" cy="28" r="1.8" fill="#D4AF37" opacity="0.85" />
      <circle cx="25" cy="29" r="1.2" fill="#D4AF37" opacity="0.75" />
      <circle cx="17" cy="30" r="0.9" fill="#D4AF37" opacity="0.55" />

      <circle cx="49" cy="12" r="1.1" fill="#D4AF37" opacity="0.75" />
      <circle cx="32" cy="24" r="1.3" fill="#D4AF37" opacity="0.8" />
      <circle cx="41" cy="33" r="1.1" fill="#D4AF37" opacity="0.7" />

      {/* 4-Point Luxury Sparkle Star in the Mist */}
      <path
        d="M27 13 L28.2 16.3 L31.5 17.5 L28.2 18.7 L27 22 L25.8 18.7 L22.5 17.5 L25.8 16.3 Z"
        fill="#F3DC8B"
      />

      {/* ===================================================================
          2. PERFUME ATOMIZER NOZZLE CAP (Mounted on Main Vertical Stem)
         =================================================================== */}
      {/* Upper nozzle head */}
      <rect
        x="61"
        y="14"
        width="14"
        height="9"
        rx="1.5"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.2"
        fill="#091D18"
      />
      {/* Tiny spray orifice dot */}
      <circle cx="64.5" cy="18.5" r="1.4" fill="#D4AF37" />
      {/* Nozzle collar / neck ring */}
      <rect
        x="58.5"
        y="23"
        width="19"
        height="4.5"
        rx="1"
        fill="url(#ehbGoldGrad)"
      />

      {/* ===================================================================
          3. UPPER CALLIGRAPHIC RIBBON SWASH (Arching from Nozzle to Right)
         =================================================================== */}
      <path
        d="M75 18 C92 12, 118 14, 134 25 C144 32, 145 43, 136 47 C128 50, 121 44, 125 38 C128 33, 135 35, 134 40"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M76 20 C93 15, 116 17, 131 27"
        stroke="#F3DC8B"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.75"
        fill="none"
      />

      {/* ===================================================================
          4. INTERTWINED HIGH-CONTRAST SERIF MONOGRAM: "E" + "H" + "B"
         =================================================================== */}

      {/* --- LETTER "E" (Left High-Fashion Bodoni Serif Structure) --- */}
      {/* Top serif bar of E */}
      <path
        d="M40 36 H68"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.6"
        strokeLinecap="square"
      />
      {/* Top-left bracket serif of E */}
      <path
        d="M44 36 V45"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Left vertical stem of E (also left pillar of H) */}
      <rect x="52" y="36" width="5.5" height="68" fill="url(#ehbGoldGrad)" />
      {/* Middle horizontal crossbar of E & H */}
      <path
        d="M43 68 H92"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Middle E serif tick */}
      <path
        d="M43 63 V73"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Bottom horizontal arm of E */}
      <path
        d="M40 104 H66"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.6"
        strokeLinecap="square"
      />
      {/* Bottom-left bracket serif of E */}
      <path
        d="M43 95 V104"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* --- LETTER "H" & "B" CENTRAL INTERLOCKING PILLAR --- */}
      {/* Primary thick vertical stem descending directly from Atomizer Nozzle */}
      <rect x="65" y="27.5" width="7" height="84" fill="url(#ehbGoldGrad)" />
      {/* Base serif of central stem */}
      <path
        d="M59 111.5 H78"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Right vertical stem of H / Inner stem of B */}
      <rect x="85" y="38" width="6.5" height="66" fill="url(#ehbGoldGrad)" />
      {/* Top serif of right H/B stem */}
      <path
        d="M79 38 H98"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* --- LETTER "B" UPPER & LOWER HIGH-CONTRAST BOWLS --- */}
      {/* Upper Bowl of B */}
      <path
        d="M91 38 H106 C119 38, 126 44, 126 53 C126 62, 118 68, 105 68 H91"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="5.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner thin hairline accent for Upper Bowl of B */}
      <path
        d="M106 40 C116 40, 121 45, 121 53 C121 61, 116 66, 105 66"
        stroke="#F3DC8B"
        strokeWidth="1.2"
        opacity="0.7"
        fill="none"
      />

      {/* Lower Bowl of B */}
      <path
        d="M91 68 H109 C125 68, 134 76, 134 88 C134 100, 124 108, 106 108 H80"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="5.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ===================================================================
          5. LOWER SWEEPING CALLIGRAPHIC LOOP & TEARDROP TERMINAL
             (Matches the exact sweeping bottom curve in the reference image)
         =================================================================== */}
      <path
        d="M68 104 C56 122, 74 139, 101 135 C124 131, 144 114, 141 92 C139 78, 125 74, 113 81 C104 86, 104 97, 113 99 C119 100, 123 96, 121 91"
        stroke="url(#ehbGoldGrad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Gold Teardrop Finial inside the lower B bowl */}
      <circle cx="119.5" cy="91.5" r="3.4" fill="url(#ehbGoldGrad)" />
    </svg>
  )
}

// Alias export for clarity
export const EmeraudeLogo = BotanicalCrest

interface ProductImageProps {
  src: string
  alt: string
  name: string
  category: string
  volume?: string
  className?: string
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  name,
  category,
  volume,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-between p-4 text-center select-none overflow-hidden bg-[#091D18] border border-[#D4AF37]/35 ${className}`}
      >
        <div className="text-[8px] uppercase tracking-[0.25em] text-[#F2EBDD]/70 font-semibold">
          ÉMERAUDE HAUTE BOTANIQUE
        </div>
        <div className="my-auto flex flex-col items-center gap-2 py-2">
          <BotanicalCrest size="sm" />
          <p className="font-serif text-xs font-semibold text-[#F2EBDD] line-clamp-2 px-1">
            {name}
          </p>
          <span className="text-[9px] text-[#D4AF37] uppercase tracking-widest font-medium">
            {category}
          </span>
        </div>
        {volume && (
          <div className="text-[9px] text-[#78947F] tracking-wider font-mono">
            {volume}
          </div>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  )
}
