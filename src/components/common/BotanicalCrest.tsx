import React, { useState } from 'react'

export const BotanicalCrest: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions =
    size === 'lg' ? 'w-16 h-16 sm:w-20 sm:h-20' : size === 'sm' ? 'w-8 h-8' : 'w-12 h-12'

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} ${className} shrink-0`}
      aria-label="Émeraude Botanica Haute Hallmark"
    >
      {/* 1. Outer Faceted Octagon / Emerald-Cut Cartouche */}
      <polygon
        points="28,4 72,4 96,28 96,72 72,96 28,96 4,72 4,28"
        stroke="#D4AF37"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* 2. Inner Concentric Bevel Framing */}
      <polygon
        points="31,10 69,10 90,31 90,69 69,90 31,90 10,69 10,31"
        stroke="#D4AF37"
        strokeWidth="0.8"
        strokeOpacity="0.55"
        strokeLinejoin="round"
      />

      {/* 3. Corner Facet Accent Lines */}
      <line x1="4" y1="28" x2="10" y2="31" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="28" y1="4" x2="31" y2="10" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="72" y1="4" x2="69" y2="10" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="96" y1="28" x2="90" y2="31" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="96" y1="72" x2="90" y2="69" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="72" y1="96" x2="69" y2="90" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="28" y1="96" x2="31" y2="90" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="4" y1="72" x2="10" y2="69" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.7" />

      {/* 4. Top Diamond Star Floret */}
      <polygon
        points="50,14 53,20 59,20 54,24 56,30 50,26 44,30 46,24 41,20 47,20"
        fill="#D4AF37"
      />

      {/* 5. Center Stylized Interlocking Monogram "É" & Botanical Leaf Curves */}
      {/* Central Stem */}
      <line x1="50" y1="32" x2="50" y2="80" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />

      {/* Upper Symmetrical Botanical Wings / Curves */}
      <path
        d="M50 38C38 38 28 46 28 56C36 56 46 50 50 42"
        stroke="#D4AF37"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 38C62 38 72 46 72 56C64 56 54 50 50 42"
        stroke="#D4AF37"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lower Botanical Curves Forming Architectural "É" Monogram Base */}
      <path
        d="M50 52C40 52 32 60 32 70C40 70 48 64 50 56"
        stroke="#D4AF37"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 52C60 52 68 60 68 70C60 70 52 64 50 56"
        stroke="#D4AF37"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom Architectural Base Bar */}
      <line x1="38" y1="80" x2="62" y2="80" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="42" y1="84" x2="58" y2="84" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.7" />
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
          ÉMERAUDE BOTANICA
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
