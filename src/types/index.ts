export type CosmeticCategory =
  | 'Semua'
  | 'Serum & Essence'
  | 'Moisturizer & Cream'
  | 'Cleanser & Toner'
  | 'Lip & Cheek Couture'
  | 'Eye & Night Ritual'
  | 'Body & Wellness'

export type SkinTypeFilter =
  | 'Semua Kulit'
  | 'Kulit Kering'
  | 'Kulit Berminyak & Acne'
  | 'Kulit Sensitif'
  | 'Anti-Aging & Kusam'

export interface CosmeticProduct {
  id: string
  name: string
  subtitle: string
  category: Exclude<CosmeticCategory, 'Semua'>
  skinTypes: Exclude<SkinTypeFilter, 'Semua Kulit'>[]
  price: number
  discountPrice?: number
  stock: number
  rating: number
  reviewCount: number
  volume: string
  bpomNumber: string
  keyIngredients: string[]
  ritualUsage: string
  description: string
  luxuryQuote?: string
  imageUrl: string
  badge?: 'Best Seller' | 'New Haute' | 'Limited Edition' | 'Award Winner'
  isVegan: boolean
}

export interface CartItem {
  product: CosmeticProduct
  quantity: number
}

export type OrderStatus =
  | 'Pending'
  | 'Dibayar'
  | 'Dikemas'
  | 'Dikirim'
  | 'Selesai'
  | 'Dibatalkan'

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  customerPhone: string
  postalCode: string
  province?: string
  city: string
  district?: string
  shippingAddress: string
  paymentMethod: 'QRIS' | 'Transfer BCA' | 'Transfer Mandiri' | 'Kartu Kredit' | 'COD'
  complimentarySample?: string
  items: CartItem[]
  subtotal: number
  discount: number
  shippingCost: number
  total: number
  status: OrderStatus
  createdAt: string
  trackingNumber?: string
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  role: 'admin' | 'customer'
  avatarUrl?: string
  skinProfile?: string
  createdAt: string
}

export interface UserAccount extends User {
  password: string
}
