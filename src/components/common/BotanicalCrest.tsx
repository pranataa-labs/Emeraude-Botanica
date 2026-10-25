import React, { useState } from 'react'

export const BotanicalCrest: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md',
}) => {
  const dimensions =
    size === 'lg' ? 'w-16 h-20' : size === 'sm' ? 'w-8 h-10' : 'w-11 h-14'

  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions} ${className}`}
      aria-hidden="true"
    >
      {/* Outer scalloped luxury frame matching the reference image */}
      <path
        d="M40 4C46 4 50 7 55 9C60 11 66 12 69 17C72 22 72 29 73 35C74 41 76 46 75 53C74 60 72 66 69 72C66 78 61 82 55 86C49 90 45 95 40 95C35 95 31 90 25 86C19 82 14 78 11 72C8 66 6 60 5 53C4 46 6 41 7 35C8 29 8 22 11 17C14 12 20 11 25 9C30 7 34 4 40 4Z"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeOpacity="0.85"
      />
      {/* Inner delicate frame */}
      <path
        d="M40 8C45 8 49 10.5 53.5 12.5C58 14.5 63 15.5 65.5 20C68 24.5 68 30.5 69 36C70 41.5 71.5 46 70.5 52.5C69.5 59 68 64 65.5 69.5C63 75 58.5 78.5 53.5 82C48.5 85.5 44.5 90 40 90C35.5 90 31.5 85.5 26.5 82C21.5 78.5 17 75 14.5 69.5C12 64 10.5 59 9.5 52.5C8.5 46 10 41.5 11 36C12 30.5 12 24.5 14.5 20C17 15.5 22 14.5 26.5 12.5C31 10.5 35 8 40 8Z"
        stroke="#D4AF37"
        strokeWidth="0.8"
        strokeOpacity="0.45"
      />
      {/* Central stem */}
      <path
        d="M40 76V26"
        stroke="#D4AF37"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Top apical leaf */}
      <path
        d="M40 20C36.5 25 36.5 31 40 35C43.5 31 43.5 25 40 20Z"
        fill="#D4AF37"
      />
      {/* Upper pair of leaves */}
      <path
        d="M39 39C33 34 27 35 26 40C30 43 35 42 39 39Z"
        fill="#D4AF37"
      />
      <path
        d="M41 39C47 34 53 35 54 40C50 43 45 42 41 39Z"
        fill="#D4AF37"
      />
      {/* Middle pair of leaves */}
      <path
        d="M39 51C31 45 24 47 22 53C27 56 34 55 39 51Z"
        fill="#D4AF37"
      />
      <path
        d="M41 51C49 45 56 47 58 53C53 56 46 55 41 51Z"
        fill="#D4AF37"
      />
      {/* Lower pair of leaves */}
      <path
        d="M39 63C32 58 26 60 25 65C29 68 35 67 39 63Z"
        fill="#D4AF37"
      />
      <path
        d="M41 63C48 58 54 60 55 65C51 68 45 67 41 63Z"
        fill="#D4AF37"
      />
    </svg>
  )
}

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
        className={`relative flex flex-col items-center justify-between p-5 text-center select-none overflow-hidden emerald-silk-bg border border-[#D4AF37]/30 ${className}`}
      >
        <div className="text-[9px] uppercase tracking-[0.25em] text-[#F2EBDD]/80 font-medium">
          ÉMERAUDE BOTANICA
        </div>
        <div className="my-auto flex flex-col items-center gap-2">
          <BotanicalCrest size="md" />
          <p className="font-serif text-sm font-semibold text-[#F2EBDD] line-clamp-2 px-2">
            {name}
          </p>
          <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest">
            {category}
          </span>
        </div>
        {volume && (
          <div className="text-[10px] text-[#78947F] tracking-wider font-mono">
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
