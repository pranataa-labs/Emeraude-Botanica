import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculateDiscountPercentage(price: number, discountPrice?: number): number {
  if (!discountPrice || discountPrice >= price || price <= 0) return 0
  return Math.round(((price - discountPrice) / price) * 100)
}
