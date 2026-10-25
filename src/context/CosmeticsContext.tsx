import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
  CosmeticProduct,
  CosmeticCategory,
  SkinTypeFilter,
  CartItem,
  Order,
  OrderStatus,
  User,
  UserAccount,
} from '@/types'
import {
  DEFAULT_USER_ACCOUNTS,
  INITIAL_PRODUCTS,
  INITIAL_ORDERS,
  COMPLIMENTARY_SAMPLES,
} from '@/data/seedData'
import { toast } from 'sonner'

interface CosmeticsContextType {
  // Products catalog
  products: CosmeticProduct[]
  selectedCategory: CosmeticCategory
  setSelectedCategory: (cat: CosmeticCategory) => void
  selectedSkinType: SkinTypeFilter
  setSelectedSkinType: (skin: SkinTypeFilter) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  addProduct: (product: Omit<CosmeticProduct, 'id'>) => void
  updateProduct: (id: string, product: Partial<CosmeticProduct>) => void
  deleteProduct: (id: string) => void
  selectedProduct: CosmeticProduct | null
  setSelectedProduct: (product: CosmeticProduct | null) => void

  // Wishlist
  wishlistIds: string[]
  toggleWishlist: (productId: string) => void

  // Cart
  cart: CartItem[]
  addToCart: (product: CosmeticProduct, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  cartSubtotal: number
  cartItemCount: number
  selectedSample: string
  setSelectedSample: (sample: string) => void

  // Orders
  orders: Order[]
  createOrder: (orderData: {
    customerName: string
    customerEmail: string
    customerPhone: string
    postalCode: string
    province?: string
    city: string
    district?: string
    shippingAddress: string
    paymentMethod: Order['paymentMethod']
    shippingCost: number
    discount: number
  }) => Order
  updateOrderStatus: (orderId: string, status: OrderStatus) => void

  // Auth & Users
  currentUser: User | null
  users: UserAccount[]
  login: (email: string, password: string) => boolean
  register: (name: string, email: string, password: string, phone?: string, skinProfile?: string) => boolean
  logout: () => void
  isAuthModalOpen: boolean
  authModalMode: 'login' | 'register'
  openAuthModal: (mode?: 'login' | 'register') => void
  closeAuthModal: () => void

  // Navigation / Shell
  activeView: 'store' | 'admin' | 'orders' | 'checkout' | 'success'
  setActiveView: (view: 'store' | 'admin' | 'orders' | 'checkout' | 'success') => void
  lastPlacedOrder: Order | null

  // Theme & Cmd+K
  theme: 'light' | 'dark'
  toggleTheme: () => void
  isCmdKOpen: boolean
  setIsCmdKOpen: (open: boolean) => void
}

const CosmeticsContext = createContext<CosmeticsContextType | undefined>(undefined)

const STORAGE_KEYS = {
  PRODUCTS: 'emeraude_products_v1',
  CART: 'emeraude_cart_v1',
  WISHLIST: 'emeraude_wishlist_v1',
  ORDERS: 'emeraude_orders_v1',
  USERS_DB: 'emeraude_users_db_v1',
  SESSION_USER: 'emeraude_session_user_v1',
  THEME: 'emeraude_theme_v1',
}

export function CosmeticsProvider({ children }: { children: ReactNode }) {
  // 1. Theme State — defaults to 'dark' to showcase the Deep Emerald & Gold silk luxury palette
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME)
      return (saved as 'light' | 'dark') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme)
    } catch {
      // Ignore storage errors
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  // 2. Users & Authentication
  const [users, setUsers] = useState<UserAccount[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USERS_DB)
      return saved ? JSON.parse(saved) : DEFAULT_USER_ACCOUNTS
    } catch {
      return DEFAULT_USER_ACCOUNTS
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(users))
    } catch {
      // Ignore
    }
  }, [users])

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SESSION_USER)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login')

  const openAuthModal = (mode: 'login' | 'register' = 'login') => {
    setAuthModalMode(mode)
    setIsAuthModalOpen(true)
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  const login = (email: string, pass: string): boolean => {
    const cleanEmail = email.trim().toLowerCase()
    const found = users.find(u => u.email.toLowerCase() === cleanEmail && u.password === pass)
    if (found) {
      const { password: _, ...userData } = found
      setCurrentUser(userData)
      try {
        localStorage.setItem(STORAGE_KEYS.SESSION_USER, JSON.stringify(userData))
      } catch {
        // Ignore
      }
      toast.success(`Bienvenue, ${userData.name}!`)
      return true
    }
    toast.error('Email atau kata sandi tidak sesuai. Silakan periksa kembali.')
    return false
  }

  const register = (
    name: string,
    email: string,
    pass: string,
    phone?: string,
    skinProfile?: string
  ): boolean => {
    const cleanEmail = email.trim().toLowerCase()
    const existing = users.find(u => u.email.toLowerCase() === cleanEmail)
    if (existing) {
      toast.error('Alamat email sudah terdaftar di Maison Émeraude.')
      return false
    }

    const newUser: UserAccount = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      password: pass,
      phone: phone?.trim(),
      skinProfile: skinProfile || 'Normal — Combination',
      role: 'customer',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=180&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString(),
    }

    setUsers(prev => [newUser, ...prev])
    const { password: _, ...cleanUser } = newUser
    setCurrentUser(cleanUser)
    try {
      localStorage.setItem(STORAGE_KEYS.SESSION_USER, JSON.stringify(cleanUser))
    } catch {
      // Ignore
    }
    toast.success('Keanggotaan VIP Émeraude Botanica Anda telah aktif!')
    return true
  }

  const [activeView, setActiveView] = useState<
    'store' | 'admin' | 'orders' | 'checkout' | 'success'
  >('store')

  const logout = () => {
    setCurrentUser(null)
    try {
      localStorage.removeItem(STORAGE_KEYS.SESSION_USER)
    } catch {
      // Ignore
    }
    if (activeView === 'admin') {
      setActiveView('store')
    }
    toast.info('Anda telah keluar dari sesi Maison Émeraude.')
  }

  // 3. Products State
  const [products, setProducts] = useState<CosmeticProduct[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length >= 120) {
          return parsed
        }
      }
      return INITIAL_PRODUCTS
    } catch {
      return INITIAL_PRODUCTS
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products))
    } catch {
      // Ignore
    }
  }, [products])

  const addProduct = (newProductData: Omit<CosmeticProduct, 'id'>) => {
    const newProduct: CosmeticProduct = {
      ...newProductData,
      id: `emr-${Date.now()}`,
    }
    setProducts(prev => [newProduct, ...prev])
    toast.success(`Produk "${newProduct.name}" ditambahkan ke koleksi Émeraude`)
  }

  const updateProduct = (id: string, updates: Partial<CosmeticProduct>) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...updates } : p)))
    toast.success('Detail formulasi & produk berhasil diperbarui')
  }

  const deleteProduct = (id: string) => {
    const target = products.find(p => p.id === id)
    setProducts(prev => prev.filter(p => p.id !== id))
    toast.success(`Produk "${target?.name || id}" telah dihapus dari koleksi`)
  }

  // 4. Wishlist State
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST)
      return saved ? JSON.parse(saved) : ['emr-01', 'emr-04']
    } catch {
      return ['emr-01', 'emr-04']
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlistIds))
    } catch {
      // Ignore
    }
  }, [wishlistIds])

  const toggleWishlist = (productId: string) => {
    const target = products.find(p => p.id === productId)
    setWishlistIds(prev => {
      const exists = prev.includes(productId)
      if (exists) {
        toast.info(`"${target?.name || 'Produk'}" dihapus dari daftar favorit`)
        return prev.filter(id => id !== productId)
      } else {
        toast.success(`"${target?.name || 'Produk'}" disimpan ke favorit Anda`)
        return [...prev, productId]
      }
    })
  }

  // 5. Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart))
    } catch {
      // Ignore
    }
  }, [cart])

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedSample, setSelectedSample] = useState<string>(COMPLIMENTARY_SAMPLES[0])

  const addToCart = (product: CosmeticProduct, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        )
      }
      return [...prev, { product, quantity: Math.min(quantity, product.stock) }]
    })
    toast.success(`"${product.name}" ditambahkan ke Tas Belanja`, {
      description: `${quantity} unit (${product.volume}) siap untuk ritual kecantikan Anda.`,
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId))
    toast.info('Item dihapus dari tas belanja')
  }

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: Math.min(quantity, item.product.stock) }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
    try {
      localStorage.removeItem(STORAGE_KEYS.CART)
    } catch {
      // Ignore
    }
  }

  const cartSubtotal = cart.reduce((sum, item) => {
    const price = item.product.discountPrice ?? item.product.price
    return sum + price * item.quantity
  }, 0)

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // 6. Orders State
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ORDERS)
      return saved ? JSON.parse(saved) : INITIAL_ORDERS
    } catch {
      return INITIAL_ORDERS
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders))
    } catch {
      // Ignore
    }
  }, [orders])

  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null)

  const createOrder = (orderData: {
    customerName: string
    customerEmail: string
    customerPhone: string
    postalCode: string
    province?: string
    city: string
    district?: string
    shippingAddress: string
    paymentMethod: Order['paymentMethod']
    shippingCost: number
    discount: number
  }): Order => {
    const orderId = `EMR-2026-${Math.floor(1000 + Math.random() * 9000)}`
    const subtotal = cartSubtotal
    const total = Math.max(0, subtotal - orderData.discount + orderData.shippingCost)

    const newOrder: Order = {
      id: orderId,
      customerName: orderData.customerName,
      customerEmail: orderData.customerEmail,
      customerPhone: orderData.customerPhone,
      postalCode: orderData.postalCode,
      province: orderData.province,
      city: orderData.city,
      district: orderData.district,
      shippingAddress: orderData.shippingAddress,
      paymentMethod: orderData.paymentMethod,
      complimentarySample: selectedSample,
      items: [...cart],
      subtotal,
      discount: orderData.discount,
      shippingCost: orderData.shippingCost,
      total,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      trackingNumber: `EMR-LUX-${Math.floor(100000000 + Math.random() * 900000000)}`,
    }

    // Deduct stock
    setProducts(prev =>
      prev.map(product => {
        const cartItem = cart.find(ci => ci.product.id === product.id)
        if (cartItem) {
          return { ...product, stock: Math.max(0, product.stock - cartItem.quantity) }
        }
        return product
      })
    )

    setOrders(prev => [newOrder, ...prev])
    setLastPlacedOrder(newOrder)
    clearCart()
    setActiveView('success')
    toast.success('Pesanan Eksklusif Berhasil Dibuat!', {
      description: `Nomor Pesanan: ${orderId}. Paket Anda dikemas dalam kotak zamrud berpita emas.`,
    })

    return newOrder
  }

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev =>
      prev.map(order => (order.id === orderId ? { ...order, status } : order))
    )
    toast.success(`Status pesanan ${orderId} diperbarui menjadi: ${status}`)
  }

  // 7. Filter & Search State
  const [selectedCategory, setSelectedCategory] = useState<CosmeticCategory>('Semua')
  const [selectedSkinType, setSelectedSkinType] = useState<SkinTypeFilter>('Semua Kulit')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<CosmeticProduct | null>(null)
  const [isCmdKOpen, setIsCmdKOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCmdKOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <CosmeticsContext.Provider
      value={{
        products,
        selectedCategory,
        setSelectedCategory,
        selectedSkinType,
        setSelectedSkinType,
        searchQuery,
        setSearchQuery,
        addProduct,
        updateProduct,
        deleteProduct,
        selectedProduct,
        setSelectedProduct,
        wishlistIds,
        toggleWishlist,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartSubtotal,
        cartItemCount,
        selectedSample,
        setSelectedSample,
        orders,
        createOrder,
        updateOrderStatus,
        currentUser,
        users,
        login,
        register,
        logout,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        activeView,
        setActiveView,
        lastPlacedOrder,
        theme,
        toggleTheme,
        isCmdKOpen,
        setIsCmdKOpen,
      }}
    >
      {children}
    </CosmeticsContext.Provider>
  )
}

export function useCosmetics() {
  const context = useContext(CosmeticsContext)
  if (!context) {
    throw new Error('useCosmetics must be used within a CosmeticsProvider')
  }
  return context
}
