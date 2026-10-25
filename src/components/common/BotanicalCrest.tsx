import React, { useState } from 'react'

export const BotanicalCrest: React.FC<{
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero'
}> = ({ className = '', size = 'md' }) => {
  const dimensions =
    size === 'hero'
      ? 'w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'
      : size === 'xl'
        ? 'w-28 h-28 sm:w-36 sm:h-36'
        : size === 'lg'
          ? 'w-16 h-16 sm:w-20 sm:h-20'
          : size === 'sm'
            ? 'w-9 h-9 sm:w-10 sm:h-10'
            : size === 'xs'
              ? 'w-6 h-6'
              : 'w-12 h-12 sm:w-14 sm:h-14'

  return (
    <img
      src="/logo.svg"
      alt="Émeraude Haute Botanique Gold Lotus Emblem"
      className={`${dimensions} ${className} object-contain shrink-0 select-none drop-shadow-[0_8px_24px_rgba(212,175,55,0.35)] transition-transform duration-300`}
      loading="eager"
    />
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
