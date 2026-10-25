import { describe, it, expect } from 'vitest'
import { formatRupiah, calculateDiscountPercentage } from '../lib/utils'
import { lookupPostalCode } from '../data/postalCodes'
import {
  BRAND_SWATCHES,
  INITIAL_PRODUCTS,
  DEFAULT_USER_ACCOUNTS,
  INITIAL_ORDERS,
} from '../data/seedData'

describe('Émeraude Botanica — Luxury Cosmetics Store Suite', () => {
  it('validates the exact 5-color Emerald & Cream luxury palette from reference image', () => {
    const hexCodes = BRAND_SWATCHES.map(s => s.hex)
    expect(hexCodes).toEqual(['#0F3D34', '#134E43', '#E6F0E9', '#F7F6F1', '#C8A96A'])
  })

  it('seeds 12 luxury cosmetic and skincare products with BPOM numbers and key ingredients', () => {
    expect(INITIAL_PRODUCTS.length).toBe(12)
    for (const product of INITIAL_PRODUCTS) {
      expect(product.bpomNumber).toMatch(/^NA1826/)
      expect(product.keyIngredients.length).toBeGreaterThanOrEqual(3)
      expect(product.price).toBeGreaterThan(0)
      expect(product.stock).toBeGreaterThan(0)
    }
  })

  it('includes ready-to-use Admin and VIP Customer demo accounts per Rule 16', () => {
    const admin = DEFAULT_USER_ACCOUNTS.find(u => u.email === 'admin@example.com')
    const customer = DEFAULT_USER_ACCOUNTS.find(u => u.email === 'user@example.com')

    expect(admin).toBeDefined()
    expect(admin?.role).toBe('admin')
    expect(admin?.password).toBe('password123')

    expect(customer).toBeDefined()
    expect(customer?.role).toBe('customer')
    expect(customer?.password).toBe('password123')
  })

  it('calculates discount percentages and Rupiah currency formatting accurately', () => {
    expect(calculateDiscountPercentage(1000000, 850000)).toBe(15)
    expect(calculateDiscountPercentage(500000, undefined)).toBe(0)
    expect(formatRupiah(845000)).toContain('845.000')
  })

  it('resolves Indonesian postal codes for luxury shipping autofill', () => {
    const senopati = lookupPostalCode('12190')
    expect(senopati).toBeDefined()
    expect(senopati?.city).toBe('Jakarta Selatan')

    const unknown = lookupPostalCode('00000')
    expect(unknown).toBeUndefined()
  })

  it('seeds realistic initial cosmetic orders with tracking numbers', () => {
    expect(INITIAL_ORDERS.length).toBeGreaterThanOrEqual(3)
    expect(INITIAL_ORDERS[0].id).toMatch(/^EMR-2026-/)
  })
})
