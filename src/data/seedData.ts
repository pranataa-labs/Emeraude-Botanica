import { CosmeticProduct, Order, UserAccount } from '@/types'

export const BRAND_SWATCHES = [
  { hex: '#F2EBDD', code: 'F2EBDD', name: 'Ivory', role: 'Warm Ivory Velvet' },
  { hex: '#78947F', code: '78947F', name: 'Sage', role: 'Botanical Sage Tint' },
  { hex: '#185844', code: '185844', name: 'Emerald', role: 'Rich Imperial Emerald' },
  { hex: '#102F27', code: '102F27', name: 'Forest', role: 'Deep Midnight Forest' },
  { hex: '#D4AF37', code: 'D4AF37', name: '24K Royal Gold', role: 'Radiant 24K Royal Gold Signature' },
] as const

export const COMPLIMENTARY_SAMPLES = [
  'Émeraude Cellular Elixir 3ml Vial',
  '24K Gold Peptide Eye Nectar Sachet',
  'Velvet Rosehip Barrier Balm Mini 5g',
  'Imperial Matcha Detox Mask Pod',
]

export const DEFAULT_USER_ACCOUNTS: UserAccount[] = [
  {
    id: 'usr-admin-01',
    name: 'Clarissa Aurelia (Maison Director)',
    email: 'admin@emeraude.com',
    password: 'password123',
    phone: '081199887766',
    role: 'admin',
    skinProfile: 'Normal — Combination',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=180&auto=format&fit=crop&q=80',
    createdAt: '2026-01-10T08:00:00.000Z',
  },
  {
    id: 'usr-cust-01',
    name: 'Nadia Pramesti',
    email: 'nadia.pramesti@emeraude.com',
    password: 'password123',
    phone: '081288776655',
    role: 'customer',
    skinProfile: 'Kulit Kering & Sensitif',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=180&auto=format&fit=crop&q=80',
    createdAt: '2026-05-15T10:30:00.000Z',
  },
  {
    id: 'usr-cust-02',
    name: 'dr. Savira Larasati, Sp.DVE',
    email: 'savira.larasati@emeraude.com',
    password: 'password123',
    phone: '081377665544',
    role: 'customer',
    skinProfile: 'Anti-Aging & Kusam',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=180&auto=format&fit=crop&q=80',
    createdAt: '2026-07-22T14:15:00.000Z',
  },
]

export const INITIAL_PRODUCTS: CosmeticProduct[] = [
  {
    "id": "srm-01",
    "name": "L’Élixir d’Émeraude Cellular Youth Serum",
    "subtitle": "Concentrated Malachite Peptide & 24K Bio-Gold Nectar",
    "category": "Serum & Essence",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 980000,
    "stock": 15,
    "rating": 4.7,
    "reviewCount": 60,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010001",
    "keyIngredients": [
      "Malachite Extract",
      "Copper Tripeptide-1",
      "5% Niacinamide",
      "24K Colloidal Gold"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Malachite Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 845000,
    "badge": "Best Seller"
  },
  {
    "id": "srm-02",
    "name": "L’Eau Botanique Sacred Green Tea Essence",
    "subtitle": "First-Harvest Uji Matcha Ferment & Polyglutamic Acid",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 680000,
    "stock": 18,
    "rating": 4.8,
    "reviewCount": 77,
    "volume": "120 ml / 4.0 fl. oz.",
    "bpomNumber": "NA18260010002",
    "keyIngredients": [
      "78% Uji Matcha Ferment",
      "Polyglutamic Acid",
      "Panthenol B5",
      "Allantoin"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 78% Uji Matcha Ferment dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "New Haute"
  },
  {
    "id": "srm-03",
    "name": "Sérum Clarifiant BHA Botani & White Willow Bark",
    "subtitle": "Pore Refining & Blemish Control Botanical Drops",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 695000,
    "stock": 21,
    "rating": 4.9,
    "reviewCount": 94,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010003",
    "keyIngredients": [
      "2% White Willow Bark BHA",
      "Zinc PCA",
      "Tea Tree Hydrosol",
      "Cica-Madecassoside"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 2% White Willow Bark BHA dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 599000
  },
  {
    "id": "srm-04",
    "name": "Nectar d’Or 24K Pure Peptide Illuminating Serum",
    "subtitle": "Radiance Infusion with Bio-Chelated 24K Gold",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 1150000,
    "stock": 24,
    "rating": 5.0,
    "reviewCount": 111,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010004",
    "keyIngredients": [
      "24K Gold Flakes",
      "Palmitoyl Tetrapeptide-7",
      "Vitamin C THD",
      "Hyaluronic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 24K Gold Flakes dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 985000,
    "badge": "Award Winner"
  },
  {
    "id": "srm-05",
    "name": "Essence Botanique Rose de Mai Hydrating Infusion",
    "subtitle": "Pure French Rose Hydrosol & Snow Mushroom",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 620000,
    "stock": 27,
    "rating": 4.7,
    "reviewCount": 128,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010005",
    "keyIngredients": [
      "92% French Rose Hydrosol",
      "Galactomyces",
      "Betaine",
      "Snow Mushroom"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 92% French Rose Hydrosol dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-06",
    "name": "Sérum Rénovateur AHA Fruit Acids & Hibiscus Peeling",
    "subtitle": "Gentle Nighttime Resurfacing Drops",
    "category": "Serum & Essence",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 720000,
    "stock": 30,
    "rating": 4.8,
    "reviewCount": 145,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010006",
    "keyIngredients": [
      "10% Glycolic Acid",
      "Hibiscus Extract",
      "Pomegranate Enzyme",
      "Aloe Vera"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 10% Glycolic Acid dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 640000
  },
  {
    "id": "srm-07",
    "name": "Concentré Apaisant Cica & Blue Tansy Calming Elixir",
    "subtitle": "Instant Redness Relief & Barrier Comfort",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 780000,
    "stock": 33,
    "rating": 4.9,
    "reviewCount": 162,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010007",
    "keyIngredients": [
      "Centella Asiatica",
      "Blue Tansy Oil",
      "Madecassic Acid",
      "Bisabolol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Centella Asiatica dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Limited Edition"
  },
  {
    "id": "srm-08",
    "name": "Sérum Repulpant Multi-Hyaluron Deep Moisture Drops",
    "subtitle": "8 Multi-Depth Molecular Hyaluronic Complex",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 650000,
    "stock": 36,
    "rating": 5.0,
    "reviewCount": 179,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010008",
    "keyIngredients": [
      "8 Molecular Weights HA",
      "Polyglutamic Acid",
      "Marine Algae",
      "B5"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 8 Molecular Weights HA dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-09",
    "name": "Elixir Pro-Collagène Squalane & Bakuchiol Nectar",
    "subtitle": "Natural Botanical Retinol Alternative",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 880000,
    "stock": 39,
    "rating": 4.7,
    "reviewCount": 196,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010009",
    "keyIngredients": [
      "2% Bakuchiol",
      "Plant Squalane",
      "Sea Buckthorn",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 2% Bakuchiol dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 750000,
    "badge": "Best Seller"
  },
  {
    "id": "srm-10",
    "name": "Sérum Éclat Niacinamide 10% & Alpha Arbutin Glow",
    "subtitle": "Intense Dark Spot & Hyperpigmentation Corrector",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 730000,
    "stock": 42,
    "rating": 4.8,
    "reviewCount": 213,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010010",
    "keyIngredients": [
      "10% Niacinamide",
      "2% Alpha Arbutin",
      "Licorice Root",
      "Glutathione"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 10% Niacinamide dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-11",
    "name": "Nectar Botanique Ferment Micro-Nutrient Essence",
    "subtitle": "Circadian Cellular Awakening Infusion",
    "category": "Serum & Essence",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 690000,
    "stock": 45,
    "rating": 4.9,
    "reviewCount": 230,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010011",
    "keyIngredients": [
      "95% Yeast Ferment",
      "Galactomyces",
      "Niacinamide",
      "Amino Acids"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 95% Yeast Ferment dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-12",
    "name": "Sérum Antioxydant Resveratrol & Green Caviar Drops",
    "subtitle": "Environmental Free-Radical Defense Guard",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 850000,
    "stock": 48,
    "rating": 5.0,
    "reviewCount": 247,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010012",
    "keyIngredients": [
      "3% Resveratrol",
      "Green Caviar Algae",
      "Ferulic Acid",
      "CoQ10"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 3% Resveratrol dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-13",
    "name": "Essence Vivifiante Citrus Blossom & Vitamin C Booster",
    "subtitle": "Luminous Complexion Enhancing Nectar",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 790000,
    "stock": 51,
    "rating": 4.7,
    "reviewCount": 264,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010013",
    "keyIngredients": [
      "15% Ethyl Ascorbic Acid",
      "Neroli Hydrosol",
      "Bitter Orange",
      "Ferulic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 15% Ethyl Ascorbic Acid dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 690000
  },
  {
    "id": "srm-14",
    "name": "Sérum Barrière Ceramide & Prebiotic Defense Elixir",
    "subtitle": "Microbiome Fortifying Barrier Fluid",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 760000,
    "stock": 54,
    "rating": 4.8,
    "reviewCount": 281,
    "volume": "40 ml / 1.4 fl. oz.",
    "bpomNumber": "NA18260010014",
    "keyIngredients": [
      "Ceramide NP",
      "Oat Kernel Beta-Glucan",
      "Inulin",
      "Ectoin"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Ceramide NP dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-15",
    "name": "Nectar Raffermissant Kigelia & Ginseng Lifting Serum",
    "subtitle": "Sculpting & Elasticity Recovery Drops",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 920000,
    "stock": 57,
    "rating": 4.9,
    "reviewCount": 298,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010015",
    "keyIngredients": [
      "Kigelia Africana",
      "Panax Ginseng",
      "Hexapeptide-8",
      "Lotus Flower"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Kigelia Africana dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 790000,
    "badge": "Award Winner"
  },
  {
    "id": "srm-16",
    "name": "Sérum Détox Matcha & Spirulina Cellular Purifier",
    "subtitle": "Urban Anti-Pollution Shield Treatment",
    "category": "Serum & Essence",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 670000,
    "stock": 15,
    "rating": 5.0,
    "reviewCount": 315,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010016",
    "keyIngredients": [
      "Chlorophyll",
      "Spirulina Platensis",
      "Bio-Flavonoids",
      "Niacinamide"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Chlorophyll dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-17",
    "name": "Essence Équilibrante Witch Hazel & Sage Pore Toner",
    "subtitle": "Sebum Harmonizing Botanical Mist",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 580000,
    "stock": 18,
    "rating": 4.7,
    "reviewCount": 332,
    "volume": "120 ml / 4.0 fl. oz.",
    "bpomNumber": "NA18260010017",
    "keyIngredients": [
      "Sage Extract",
      "Witch Hazel Distillate",
      "Niacinamide",
      "Zinc PCA"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Sage Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-18",
    "name": "Sérum Régénérant Phyto-Mucin & Black Truffle Infusion",
    "subtitle": "Haute Cellular Renewal Concentrate",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 1050000,
    "stock": 21,
    "rating": 4.8,
    "reviewCount": 349,
    "volume": "35 ml / 1.2 fl. oz.",
    "bpomNumber": "NA18260010018",
    "keyIngredients": [
      "Advanced Phyto-Mucin",
      "Black Truffle Extract",
      "Adenosine",
      "Peptides"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Advanced Phyto-Mucin dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 890000,
    "badge": "Limited Edition"
  },
  {
    "id": "srm-19",
    "name": "Nectar Soyeux Camellia & Marula Dry Oil Serum",
    "subtitle": "Deep Moisture Lock Botanical Oil",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 810000,
    "stock": 24,
    "rating": 4.9,
    "reviewCount": 76,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010019",
    "keyIngredients": [
      "Camellia Japonica Oil",
      "Virgin Marula",
      "Vitamin C Ester",
      "Rosehip"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Camellia Japonica Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "srm-20",
    "name": "Sérum Minéral Malachite & Tourmaline Aura Drops",
    "subtitle": "Energetic Radiance Crystal Elixir",
    "category": "Serum & Essence",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 990000,
    "stock": 27,
    "rating": 5.0,
    "reviewCount": 93,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010020",
    "keyIngredients": [
      "Bio-Chelated Malachite",
      "Tourmaline Powder",
      "Squalane",
      "Hyaluronic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Bio-Chelated Malachite dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 860000,
    "badge": "New Haute"
  },
  {
    "id": "mst-01",
    "name": "Crème de Velours Imperial Barrier Cream",
    "subtitle": "Triple Ceramide, Centella Madagascar & Squalane Silk",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 890000,
    "stock": 15,
    "rating": 4.7,
    "reviewCount": 60,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010021",
    "keyIngredients": [
      "Ceramide NP/AP/EOP",
      "Madagascar Centella",
      "Olive Squalane",
      "Shea Butter Organik"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Ceramide NP/AP/EOP dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 765000,
    "badge": "Award Winner"
  },
  {
    "id": "mst-02",
    "name": "Baume Botanique Water-Burst Aqua Cloud Gel",
    "subtitle": "Weightless Deep Quenching Glacial Hydration",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 590000,
    "stock": 18,
    "rating": 4.8,
    "reviewCount": 77,
    "volume": "60 ml / 2.0 fl. oz.",
    "bpomNumber": "NA18260010022",
    "keyIngredients": [
      "Glacier Water",
      "Trehalose",
      "Marine Collagen",
      "Centella Asiatica"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Glacier Water dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Best Seller"
  },
  {
    "id": "mst-03",
    "name": "Crème Régénératrice Nuit 24K Gold Sleeping Moisturizer",
    "subtitle": "Overnight Cellular Rejuvenation Butter",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 1180000,
    "stock": 21,
    "rating": 4.9,
    "reviewCount": 94,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010023",
    "keyIngredients": [
      "24K Gold",
      "Royal Jelly",
      "Adenosine",
      "Palmitoyl Tripeptide-5"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 24K Gold dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 990000,
    "badge": "Award Winner"
  },
  {
    "id": "mst-04",
    "name": "Emulsion Légère Green Tea & Centella Mattifying Lotion",
    "subtitle": "Oil-Free Balancing Moisture Veil",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 540000,
    "stock": 24,
    "rating": 5.0,
    "reviewCount": 111,
    "volume": "80 ml / 2.7 fl. oz.",
    "bpomNumber": "NA18260010024",
    "keyIngredients": [
      "Uji Matcha Extract",
      "Centella Asiatica",
      "Niacinamide",
      "Tea Tree"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Uji Matcha Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-05",
    "name": "Crème Réparatrice Cica & Panthenol 10% Soothing Balm",
    "subtitle": "Intensive Compromised Barrier Therapy",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 620000,
    "stock": 27,
    "rating": 4.7,
    "reviewCount": 128,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010025",
    "keyIngredients": [
      "10% Panthenol",
      "Madecassoside",
      "Asiatic Acid",
      "Jojoba Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 10% Panthenol dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 520000
  },
  {
    "id": "mst-06",
    "name": "Crème Nourrissante Shea Butter & Camellia Rich Velvet",
    "subtitle": "Deep Comfort for Very Dry Skin",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 780000,
    "stock": 30,
    "rating": 4.8,
    "reviewCount": 145,
    "volume": "60 ml / 2.0 fl. oz.",
    "bpomNumber": "NA18260010026",
    "keyIngredients": [
      "Pure Shea Butter",
      "Camellia Japonica Oil",
      "Ceramide NP",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Pure Shea Butter dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-07",
    "name": "Crème Éclat Vitamin C & White Truffle Radiance Whipped",
    "subtitle": "Luminous Glow & Even Complexion Cream",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 890000,
    "stock": 33,
    "rating": 4.9,
    "reviewCount": 162,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010027",
    "keyIngredients": [
      "Ascorbyl Glucoside",
      "White Truffle",
      "Niacinamide",
      "Licorice Extract"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Ascorbyl Glucoside dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 760000,
    "badge": "New Haute"
  },
  {
    "id": "mst-08",
    "name": "Gel-Crème Hydratant Cactus & Prickly Pear Moisture Melt",
    "subtitle": "Cooling Desert Succulent Hydration Veil",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 640000,
    "stock": 36,
    "rating": 5.0,
    "reviewCount": 179,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010028",
    "keyIngredients": [
      "Prickly Pear Seed Extract",
      "Hyaluronic Acid",
      "Aloe Leaf Juice",
      "B5"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Prickly Pear Seed Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-09",
    "name": "Crème Liftante Bakuchiol & Peptide Silk Day Cream",
    "subtitle": "Firming & Smoothing Daily Defense Moisturizer",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 840000,
    "stock": 39,
    "rating": 4.7,
    "reviewCount": 196,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010029",
    "keyIngredients": [
      "1% Bakuchiol",
      "Matrixyl 3000",
      "Rice Bran Oil",
      "Hyaluronic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 1% Bakuchiol dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 720000,
    "badge": "Best Seller"
  },
  {
    "id": "mst-10",
    "name": "Baume Intense Deep Ceramide Recovery Night Ointment",
    "subtitle": "Intensive Lipid Replacement Occlusive Balm",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 790000,
    "stock": 42,
    "rating": 4.8,
    "reviewCount": 213,
    "volume": "45 g / 1.5 oz.",
    "bpomNumber": "NA18260010030",
    "keyIngredients": [
      "5 Types of Ceramides",
      "Cholesterol",
      "Fatty Acids",
      "Sunflower Seed Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 5 Types of Ceramides dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-11",
    "name": "Emulsion Apaisante Oat Milk & Calendula Sensitive Milk",
    "subtitle": "Hypoallergenic Calming Daily Fluid",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 580000,
    "stock": 45,
    "rating": 4.9,
    "reviewCount": 230,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010031",
    "keyIngredients": [
      "Colloidal Oatmeal",
      "Calendula Flower",
      "Beta-Glucan",
      "Chamomile"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Colloidal Oatmeal dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-12",
    "name": "Crème Sorbet Hibiscus & Pomegranate Dewy Moisturizer",
    "subtitle": "Lightweight Glow-Boosting Fruit Infusion",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 670000,
    "stock": 48,
    "rating": 5.0,
    "reviewCount": 247,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010032",
    "keyIngredients": [
      "Hibiscus Extract",
      "Pomegranate Sterols",
      "Watermelon Seed Oil",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Hibiscus Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-13",
    "name": "Crème Solaire Émeraude Mineral Sunscreen SPF 50+ PA++++",
    "subtitle": "Broad Spectrum 100% Non-Nano Physical Filter",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 590000,
    "stock": 51,
    "rating": 4.7,
    "reviewCount": 264,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010033",
    "keyIngredients": [
      "Zinc Oxide Non-Nano",
      "Malachite Extract",
      "Centella",
      "Niacinamide"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Zinc Oxide Non-Nano dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 499000,
    "badge": "Best Seller"
  },
  {
    "id": "mst-14",
    "name": "Crème Protectrice Ectoin & Urban Anti-Pollution Shield",
    "subtitle": "Cellular Smog & Blue Light Defense Veil",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 720000,
    "stock": 54,
    "rating": 4.8,
    "reviewCount": 281,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010034",
    "keyIngredients": [
      "2% Ectoin",
      "Moringa Seed Peptides",
      "Chlorella Extract",
      "Niacinamide"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 2% Ectoin dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-15",
    "name": "Gelée Apaisante Aloe & Green Cucumber Moisture Jelly",
    "subtitle": "Post-Sun Cooling Botanical Sorbet",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 480000,
    "stock": 57,
    "rating": 4.9,
    "reviewCount": 298,
    "volume": "120 ml / 4.0 fl. oz.",
    "bpomNumber": "NA18260010035",
    "keyIngredients": [
      "95% Aloe Vera",
      "Cucumber Fruit Water",
      "Allantoin",
      "Panthenol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 95% Aloe Vera dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-16",
    "name": "Crème Royale Lotus Blossom & Marine Caviar Anti-Wrinkle",
    "subtitle": "Sculpting Contour Recovery Cream",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 1250000,
    "stock": 15,
    "rating": 5.0,
    "reviewCount": 315,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010036",
    "keyIngredients": [
      "Sacred Lotus Extract",
      "Marine Caviar",
      "Hexapeptide-8",
      "Shea Butter"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Sacred Lotus Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 1050000,
    "badge": "Limited Edition"
  },
  {
    "id": "mst-17",
    "name": "Crème Veloutée Rose Damascena & Argan Plumping Cream",
    "subtitle": "Supple Velvet Finish Firming Moisturizer",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 810000,
    "stock": 18,
    "rating": 4.7,
    "reviewCount": 332,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010037",
    "keyIngredients": [
      "Rose Damascena Distillate",
      "Organic Argan Oil",
      "Squalane",
      "Collagen"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Rose Damascena Distillate dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-18",
    "name": "Emulsion Purifiante Salicylic & Tea Tree Balance Fluid",
    "subtitle": "Blemish-Prone Lightweight Clarifier",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 530000,
    "stock": 21,
    "rating": 4.8,
    "reviewCount": 349,
    "volume": "60 ml / 2.0 fl. oz.",
    "bpomNumber": "NA18260010038",
    "keyIngredients": [
      "0.5% Encapsulated BHA",
      "Tea Tree Oil",
      "Zinc PCA",
      "Willow Bark"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 0.5% Encapsulated BHA dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "mst-19",
    "name": "Crème Richesse Murumuru & Ceramide Replenishing Soufflé",
    "subtitle": "Nutrient-Dense Barrier Restorative Cream",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 860000,
    "stock": 24,
    "rating": 4.9,
    "reviewCount": 76,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010039",
    "keyIngredients": [
      "Murumuru Butter",
      "Ceramide EOP",
      "Meadowfoam Seed Oil",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Murumuru Butter dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 740000
  },
  {
    "id": "mst-20",
    "name": "Crème d’Or Caviar & 24K Gold Luxury Firming Crème",
    "subtitle": "The Ultimate Haute Cosmétique Moisturizer",
    "category": "Moisturizer & Cream",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 1450000,
    "stock": 27,
    "rating": 5.0,
    "reviewCount": 93,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010040",
    "keyIngredients": [
      "French Sturgeon Caviar Extract",
      "24K Gold Leaf",
      "Peptides",
      "Resveratrol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak French Sturgeon Caviar Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 1200000,
    "badge": "Award Winner"
  },
  {
    "id": "cln-01",
    "name": "Baume Purifiant Emerald Melting Cleansing Balm",
    "subtitle": "Moringa Seed Oil, Tamanu & Papaya Enzyme Sorbet",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 590000,
    "stock": 15,
    "rating": 4.7,
    "reviewCount": 60,
    "volume": "90 g / 3.1 oz.",
    "bpomNumber": "NA18260010041",
    "keyIngredients": [
      "Moringa Oleifera Oil",
      "Green Tamanu Oil",
      "Papain Enzyme",
      "Bisabolol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Moringa Oleifera Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Best Seller"
  },
  {
    "id": "cln-02",
    "name": "Gel Nettoyant Doux Chlorophyll & Amino Cleanser",
    "subtitle": "pH 5.5 Ultra-Gentle Botanical Foaming Gel",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 440000,
    "stock": 18,
    "rating": 4.8,
    "reviewCount": 77,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010042",
    "keyIngredients": [
      "Alfalfa Chlorophyll",
      "11 Amino Acids Complex",
      "Chamomile Hydrosol",
      "Coco-Glucoside"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Alfalfa Chlorophyll dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Best Seller"
  },
  {
    "id": "cln-03",
    "name": "Tonique Botanique Sacred Sage & Rose Petal Floral Mist",
    "subtitle": "Balancing pH Balancing Botanical Infusion",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 490000,
    "stock": 21,
    "rating": 4.9,
    "reviewCount": 94,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010043",
    "keyIngredients": [
      "Sage Extract",
      "Damask Rose Hydrosol",
      "Witch Hazel",
      "Hyaluronic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Sage Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-04",
    "name": "Mousse Nettoyante Rice Water & Pearl Micro-Foam Cleanser",
    "subtitle": "Illuminating Soft Cloud Face Wash",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 460000,
    "stock": 24,
    "rating": 5.0,
    "reviewCount": 111,
    "volume": "120 ml / 4.0 fl. oz.",
    "bpomNumber": "NA18260010044",
    "keyIngredients": [
      "Fermented Rice Water",
      "Hydrolyzed Pearl",
      "Ceramide NP",
      "Glycerin"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Fermented Rice Water dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 390000
  },
  {
    "id": "cln-05",
    "name": "Huile Nettoyante Jojoba & Sweet Almond Silky Oil",
    "subtitle": "Water-Soluble Makeup Dissolving Oil",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 560000,
    "stock": 27,
    "rating": 4.7,
    "reviewCount": 128,
    "volume": "140 ml / 4.7 fl. oz.",
    "bpomNumber": "NA18260010045",
    "keyIngredients": [
      "Golden Jojoba",
      "Sweet Almond Oil",
      "Camellia Seed Oil",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Golden Jojoba dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Award Winner"
  },
  {
    "id": "cln-06",
    "name": "Tonique Exfoliant AHA 5% & Glycolic Glow Toner",
    "subtitle": "Clarifying & Micro-Resurfacing Solution",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 520000,
    "stock": 30,
    "rating": 4.8,
    "reviewCount": 145,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010046",
    "keyIngredients": [
      "5% Glycolic Acid",
      "Lactic Acid",
      "Apple Fruit Extract",
      "Centella"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 5% Glycolic Acid dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-07",
    "name": "Gel Purifiant Tea Tree & Green Clay Clarifying Wash",
    "subtitle": "Deep Pore Cleansing & Sebum Control Gel",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 430000,
    "stock": 33,
    "rating": 4.9,
    "reviewCount": 162,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010047",
    "keyIngredients": [
      "French Green Clay",
      "Tea Tree Leaf Oil",
      "Willow Bark",
      "Panthenol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak French Green Clay dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-08",
    "name": "Eau Micellaire Infusée Rose & Cornflower Soothing",
    "subtitle": "Gentle No-Rinse Micellar Water",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 380000,
    "stock": 36,
    "rating": 5.0,
    "reviewCount": 179,
    "volume": "200 ml / 6.7 fl. oz.",
    "bpomNumber": "NA18260010048",
    "keyIngredients": [
      "Rose Flower Water",
      "Cornflower Extract",
      "Glycerin",
      "Sodium Hyaluronate"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Rose Flower Water dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-09",
    "name": "Tonique Hydratant Hyaluronic & Ceramide Milky Toner",
    "subtitle": "Rich Barrier Priming Toner Essence",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 550000,
    "stock": 39,
    "rating": 4.7,
    "reviewCount": 196,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010049",
    "keyIngredients": [
      "5 Hyaluronic Acids",
      "Ceramide NP",
      "Squalane",
      "Oat Kernel Extract"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 5 Hyaluronic Acids dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 480000,
    "badge": "New Haute"
  },
  {
    "id": "cln-10",
    "name": "Poudre Nettoyante Matcha & Rice Enzyme Powder Wash",
    "subtitle": "Water-Activated Micro-Exfoliating Powder",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 510000,
    "stock": 42,
    "rating": 4.8,
    "reviewCount": 213,
    "volume": "60 g / 2.1 oz.",
    "bpomNumber": "NA18260010050",
    "keyIngredients": [
      "Uji Matcha Powder",
      "Rice Starch",
      "Papain",
      "Allantoin"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Uji Matcha Powder dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-11",
    "name": "Gelée Nettoyante Calendula & Chamomile Calming Jelly",
    "subtitle": "Soothing Non-Foaming Sensitive Gel",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 450000,
    "stock": 45,
    "rating": 4.9,
    "reviewCount": 230,
    "volume": "120 ml / 4.0 fl. oz.",
    "bpomNumber": "NA18260010051",
    "keyIngredients": [
      "Calendula Petals",
      "Chamomile Extract",
      "Decyl Glucoside",
      "Panthenol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Calendula Petals dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-12",
    "name": "Tonique Apaisant Centella 80% Relief Treatment Toner",
    "subtitle": "Concentrated Skin Barrier Calmer",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 530000,
    "stock": 48,
    "rating": 5.0,
    "reviewCount": 247,
    "volume": "180 ml / 6.0 fl. oz.",
    "bpomNumber": "NA18260010052",
    "keyIngredients": [
      "80% Centella Asiatica",
      "Madecassoside",
      "Portulaca Oleracea",
      "Betaine"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 80% Centella Asiatica dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-13",
    "name": "Baume Démaquillant Camellia & Shea Butter Melt",
    "subtitle": "Velvet Makeup Melting Cleanser",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 610000,
    "stock": 51,
    "rating": 4.7,
    "reviewCount": 264,
    "volume": "85 g / 2.9 oz.",
    "bpomNumber": "NA18260010053",
    "keyIngredients": [
      "Camellia Oleifera Seed Oil",
      "Shea Butter",
      "Orange Peel Wax",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Camellia Oleifera Seed Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 520000,
    "badge": "Limited Edition"
  },
  {
    "id": "cln-14",
    "name": "Mousse Nettoyante Amino-Acid Cloud Foam with Cryo-Pump",
    "subtitle": "Self-Foaming Velvet Cleanser",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 480000,
    "stock": 54,
    "rating": 4.8,
    "reviewCount": 281,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010054",
    "keyIngredients": [
      "Apple Amino Acids",
      "Bamboo Water",
      "Hyaluronic Acid",
      "Aloe"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Apple Amino Acids dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-15",
    "name": "Tonique Rééquilibrant Niacinamide & Zinc Pore Mist",
    "subtitle": "Mattifying & Refining Facial Spray",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 470000,
    "stock": 57,
    "rating": 4.9,
    "reviewCount": 298,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010055",
    "keyIngredients": [
      "3% Niacinamide",
      "Zinc PCA",
      "Rosemary Water",
      "Thyme Extract"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 3% Niacinamide dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-16",
    "name": "Huile Nettoyante Émulsifiante Olive Squalane Cleansing Oil",
    "subtitle": "Pure Squalane Deep Pore Cleansing Oil",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 580000,
    "stock": 15,
    "rating": 5.0,
    "reviewCount": 315,
    "volume": "130 ml / 4.4 fl. oz.",
    "bpomNumber": "NA18260010056",
    "keyIngredients": [
      "Olive Squalane",
      "Virgin Rosehip Oil",
      "Lavender",
      "Bisabolol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Olive Squalane dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-17",
    "name": "Tonique Illuminateur Ferment & Galactomyces Glazing",
    "subtitle": "Glass Skin Radiance Prep Liquid",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 610000,
    "stock": 18,
    "rating": 4.7,
    "reviewCount": 332,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010057",
    "keyIngredients": [
      "90% Galactomyces Ferment",
      "Niacinamide",
      "Trehalose",
      "Licorice"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 90% Galactomyces Ferment dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 530000,
    "badge": "Best Seller"
  },
  {
    "id": "cln-18",
    "name": "Gel Nettoyant Exfoliant BHA & Charcoal Detox Wash",
    "subtitle": "Pore De-clogging Clarifying Gel",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 460000,
    "stock": 21,
    "rating": 4.8,
    "reviewCount": 349,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010058",
    "keyIngredients": [
      "1% BHA",
      "Activated Bamboo Charcoal",
      "Eucalyptus Oil",
      "Tea Tree"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 1% BHA dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-19",
    "name": "Eau Tonique Végétale Neroli & Bitter Orange Tonic",
    "subtitle": "Awakening Aromatherapeutic Toner",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 540000,
    "stock": 24,
    "rating": 4.9,
    "reviewCount": 76,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010059",
    "keyIngredients": [
      "Neroli Blossom Water",
      "Citrus Aurantium",
      "Hyaluronic Acid",
      "B5"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Neroli Blossom Water dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "cln-20",
    "name": "Lait Nettoyant Soyeux Oat Milk & Marshmallow Root",
    "subtitle": "Ultra-Creamy Non-Stripping Wash",
    "category": "Cleanser & Toner",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 490000,
    "stock": 27,
    "rating": 5.0,
    "reviewCount": 93,
    "volume": "150 ml / 5.0 fl. oz.",
    "bpomNumber": "NA18260010060",
    "keyIngredients": [
      "Oat Milk Extract",
      "Marshmallow Root",
      "Sweet Almond",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Oat Milk Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 420000
  },
  {
    "id": "lip-01",
    "name": "Rouge Satin d’Or Couture Lip Velvet #08 Rosewood",
    "subtitle": "Rosehip Peptide Infused Matte-Satin Lipstick",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 540000,
    "stock": 15,
    "rating": 4.7,
    "reviewCount": 60,
    "volume": "3.8 g / 0.13 oz.",
    "bpomNumber": "NA18260010061",
    "keyIngredients": [
      "Cold-Pressed Rosehip Oil",
      "Palmitoyl Tripeptide-1",
      "Camellia Wax",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Cold-Pressed Rosehip Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 469000,
    "badge": "Best Seller"
  },
  {
    "id": "lip-02",
    "name": "Lumina Blush & Glow Liquid Silk Tint #03 Champagne",
    "subtitle": "Dewy Cheek & Lip Tint with Champagne Pearl",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 485000,
    "stock": 18,
    "rating": 4.8,
    "reviewCount": 77,
    "volume": "10 ml / 0.33 fl. oz.",
    "bpomNumber": "NA18260010062",
    "keyIngredients": [
      "French Peony Extract",
      "Hyaluronic Micro-Spheres",
      "Champagne Pearl",
      "Jojoba"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak French Peony Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "New Haute"
  },
  {
    "id": "lip-03",
    "name": "Huile à Lèvres Tintée 24K Gold Lip Oil #01 Royal Nectar",
    "subtitle": "Nourishing Lip Oil with Genuine 24K Gold",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 420000,
    "stock": 21,
    "rating": 4.9,
    "reviewCount": 94,
    "volume": "7 ml / 0.24 fl. oz.",
    "bpomNumber": "NA18260010063",
    "keyIngredients": [
      "24K Gold Flakes",
      "Organic Jojoba Oil",
      "Apricot Kernel Oil",
      "Peptides"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 24K Gold Flakes dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 360000,
    "badge": "Award Winner"
  },
  {
    "id": "lip-04",
    "name": "Baume à Lèvres Réparateur Velvet Rose Barrier Balm",
    "subtitle": "Intense Restorative Lip Treatment",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 390000,
    "stock": 24,
    "rating": 5.0,
    "reviewCount": 111,
    "volume": "12 g / 0.42 oz.",
    "bpomNumber": "NA18260010064",
    "keyIngredients": [
      "Rose Wax",
      "Shea Butter",
      "Ceramide NP",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Rose Wax dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-05",
    "name": "Rouge Velours Mat Couture Matte #12 Imperial Bordeaux",
    "subtitle": "Long-Wearing Velveteen Luxury Bullet",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 540000,
    "stock": 27,
    "rating": 4.7,
    "reviewCount": 128,
    "volume": "3.8 g / 0.13 oz.",
    "bpomNumber": "NA18260010065",
    "keyIngredients": [
      "Camellia Seed Oil",
      "Squalane",
      "Kaolin",
      "Micronized Mineral Pigments"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Camellia Seed Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 470000,
    "badge": "Limited Edition"
  },
  {
    "id": "lip-06",
    "name": "Sérum Repulpant Botanical Lip Gloss #05 Nude Cashmere",
    "subtitle": "Collagen Peptides Plumping Glass Finish",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 440000,
    "stock": 30,
    "rating": 4.8,
    "reviewCount": 145,
    "volume": "6.5 ml / 0.22 fl. oz.",
    "bpomNumber": "NA18260010066",
    "keyIngredients": [
      "Maxi-Lip Peptide",
      "Menthol Lactate",
      "Hyaluronic Acid",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Maxi-Lip Peptide dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-07",
    "name": "Fard à Joues Crème Camellia Cream Blush #02 Petal Satin",
    "subtitle": "Seamless Melting Velvet Cream Blush",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 475000,
    "stock": 33,
    "rating": 4.9,
    "reviewCount": 162,
    "volume": "6 g / 0.21 oz.",
    "bpomNumber": "NA18260010067",
    "keyIngredients": [
      "French Camellia Seed Oil",
      "Candelilla Wax",
      "Jojoba Esters",
      "Mica"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak French Camellia Seed Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Best Seller"
  },
  {
    "id": "lip-08",
    "name": "Rouge Hydratant Glaze Moisture Tint #04 Coral Ambre",
    "subtitle": "Sheer Hydrating Butter Lip Color",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 490000,
    "stock": 36,
    "rating": 5.0,
    "reviewCount": 179,
    "volume": "3.2 g / 0.11 oz.",
    "bpomNumber": "NA18260010068",
    "keyIngredients": [
      "Mango Seed Butter",
      "Sweet Almond Oil",
      "Squalane",
      "Phytosterols"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Mango Seed Butter dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 420000
  },
  {
    "id": "lip-09",
    "name": "Masque de Nuit Lèvres Berry & Hibiscus Overnight Mask",
    "subtitle": "Leave-On Conditioning Lip Therapy",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 410000,
    "stock": 39,
    "rating": 4.7,
    "reviewCount": 196,
    "volume": "20 g / 0.7 oz.",
    "bpomNumber": "NA18260010069",
    "keyIngredients": [
      "Berry Fruit Extract",
      "Murumuru Butter",
      "Vitamin C Ester",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Berry Fruit Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Award Winner"
  },
  {
    "id": "lip-10",
    "name": "Encre à Lèvres Longue Tenue Dewy Water Stain #06 Raspberry",
    "subtitle": "12-Hour Non-Drying Lip Stain",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 430000,
    "stock": 42,
    "rating": 4.8,
    "reviewCount": 213,
    "volume": "5 ml / 0.17 fl. oz.",
    "bpomNumber": "NA18260010070",
    "keyIngredients": [
      "Pomegranate Extract",
      "Hibiscus Water",
      "Trehalose",
      "Panthenol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Pomegranate Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-11",
    "name": "Baume Teinté Phyto-Glow pH Lip Tint #00 Crystal Rose",
    "subtitle": "Custom Color Reviving Moisture Balm",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 460000,
    "stock": 45,
    "rating": 4.9,
    "reviewCount": 230,
    "volume": "3.5 g / 0.12 oz.",
    "bpomNumber": "NA18260010071",
    "keyIngredients": [
      "pH Reactive Pigment",
      "Shea Butter",
      "Rosehip Oil",
      "24K Gold Flecks"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak pH Reactive Pigment dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 395000,
    "badge": "Best Seller"
  },
  {
    "id": "lip-12",
    "name": "Fard Multi-Usage Lip & Cheek Soufflé #07 Mauve Élixir",
    "subtitle": "Air-Whipped Multi-Tasking Pigment",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 495000,
    "stock": 48,
    "rating": 5.0,
    "reviewCount": 247,
    "volume": "8 g / 0.28 oz.",
    "bpomNumber": "NA18260010072",
    "keyIngredients": [
      "Rice Powder",
      "Castor Seed Oil",
      "Jojoba Butter",
      "Tocopherol"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Rice Powder dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-13",
    "name": "Crayon Contour des Lèvres Couture Precision #08 Rosewood",
    "subtitle": "Waterproof Velvet Lip Liner Pencil",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 380000,
    "stock": 51,
    "rating": 4.7,
    "reviewCount": 264,
    "volume": "1.2 g / 0.04 oz.",
    "bpomNumber": "NA18260010073",
    "keyIngredients": [
      "Beeswax",
      "Carnauba Wax",
      "Macadamia Oil",
      "Mineral Oxides"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Beeswax dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-14",
    "name": "Huile à Lèvres Teintée Cherry & Pomegranate #09 Ruby",
    "subtitle": "Antioxidant Rich Glossy Lip Nectar",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 430000,
    "stock": 54,
    "rating": 4.8,
    "reviewCount": 281,
    "volume": "7 ml / 0.24 fl. oz.",
    "bpomNumber": "NA18260010074",
    "keyIngredients": [
      "Cherry Seed Oil",
      "Pomegranate Sterols",
      "Hyaluronic Acid",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Cherry Seed Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-15",
    "name": "Rouge Mat Liquide Ultra-Wear Lip Velvet #14 Parisian Nude",
    "subtitle": "Transfer-Proof Liquid Lip Couture",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 510000,
    "stock": 57,
    "rating": 4.9,
    "reviewCount": 298,
    "volume": "4.5 ml / 0.15 fl. oz.",
    "bpomNumber": "NA18260010075",
    "keyIngredients": [
      "Dimethicone Crosspolymer",
      "Argan Oil",
      "Bisabolol",
      "Pure Pigments"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Dimethicone Crosspolymer dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 440000
  },
  {
    "id": "lip-16",
    "name": "Enlumineur Liquide 24K Bio-Gold Liquid Strobe Highlighter",
    "subtitle": "Multidimensional Golden Radiance Drops",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 560000,
    "stock": 15,
    "rating": 5.0,
    "reviewCount": 315,
    "volume": "15 ml / 0.5 fl. oz.",
    "bpomNumber": "NA18260010076",
    "keyIngredients": [
      "24K Micronized Gold",
      "Squalane",
      "Pearl Powder",
      "Sunflower Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 24K Micronized Gold dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 480000,
    "badge": "Award Winner"
  },
  {
    "id": "lip-17",
    "name": "Baume Nourrissant Coconut & Vanilla Comfort Lip Butter",
    "subtitle": "All-Day Soothing Botanical Lip Salve",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 370000,
    "stock": 18,
    "rating": 4.7,
    "reviewCount": 332,
    "volume": "15 g / 0.53 oz.",
    "bpomNumber": "NA18260010077",
    "keyIngredients": [
      "Virgin Coconut Oil",
      "Shea Butter",
      "Vanilla Oleoresin",
      "Cocoa Butter"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Virgin Coconut Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-18",
    "name": "Fard à Joues Poudre Malachite & Rose Mineral Blush",
    "subtitle": "Baked Mineral Silk Cheek Palette",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 530000,
    "stock": 21,
    "rating": 4.8,
    "reviewCount": 349,
    "volume": "8 g / 0.28 oz.",
    "bpomNumber": "NA18260010078",
    "keyIngredients": [
      "Micronized Malachite",
      "Mica",
      "Silk Amino Acids",
      "Jojoba Esters"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Micronized Malachite dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-19",
    "name": "Gloss Brillance Miroir Glass-Shine Lip Glass #01 Diamond",
    "subtitle": "Ultra-Reflective Non-Sticky Lip Glaze",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 420000,
    "stock": 24,
    "rating": 4.9,
    "reviewCount": 76,
    "volume": "6 ml / 0.2 fl. oz.",
    "bpomNumber": "NA18260010079",
    "keyIngredients": [
      "Polybutene",
      "Peptides",
      "Hyaluronic Spheres",
      "Castor Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Polybutene dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "lip-20",
    "name": "Baume d’Or 24K Gold Peptide Lip Treatment Pod",
    "subtitle": "Ultra-Luxe Night Lip Plumping Pod",
    "category": "Lip & Cheek Couture",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 480000,
    "stock": 27,
    "rating": 5.0,
    "reviewCount": 93,
    "volume": "10 g / 0.35 oz.",
    "bpomNumber": "NA18260010080",
    "keyIngredients": [
      "24K Colloidal Gold",
      "Tripeptide-1",
      "Cupuacu Butter",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 24K Colloidal Gold dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 410000,
    "badge": "Limited Edition"
  },
  {
    "id": "eye-01",
    "name": "Contour des Yeux 24K Gold & Bakuchiol Eye Nectar",
    "subtitle": "Firming Eye Elixir with Cryo-Metal Zamac Tip",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 820000,
    "stock": 15,
    "rating": 4.7,
    "reviewCount": 60,
    "volume": "15 ml / 0.5 fl. oz.",
    "bpomNumber": "NA18260010081",
    "keyIngredients": [
      "1% Pure Bakuchiol",
      "Caffeine Micro-Complex",
      "24K Gold Leaf",
      "Acetyl Hexapeptide-8"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 1% Pure Bakuchiol dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 710000,
    "badge": "Limited Edition"
  },
  {
    "id": "eye-02",
    "name": "Masque de Nuit Vetiver & Emerald Overnight Sleeping Mask",
    "subtitle": "Deep Circadian Cellular Recovery Gel-Balm",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 750000,
    "stock": 18,
    "rating": 4.8,
    "reviewCount": 77,
    "volume": "60 ml / 2.0 fl. oz.",
    "bpomNumber": "NA18260010082",
    "keyIngredients": [
      "Java Vetiver Essential",
      "Chrono-Peptide",
      "Tremella Fuciformis",
      "Blue Tansy"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Java Vetiver Essential dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Best Seller"
  },
  {
    "id": "eye-03",
    "name": "Sérum Contour Yeux Caffeine 5% & Green Tea Depuffing",
    "subtitle": "Instant Eye Bag & Dark Circle Deflator",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 590000,
    "stock": 21,
    "rating": 4.9,
    "reviewCount": 94,
    "volume": "15 ml / 0.5 fl. oz.",
    "bpomNumber": "NA18260010083",
    "keyIngredients": [
      "5% Green Tea Caffeine",
      "EGCG",
      "Niacinamide",
      "Hyaluronic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 5% Green Tea Caffeine dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 499000,
    "badge": "Award Winner"
  },
  {
    "id": "eye-04",
    "name": "Crème Yeux Réparatrice Peptide & Ceramide Recovery Balm",
    "subtitle": "Deep Hydration for Under-Eye Crepiness",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 720000,
    "stock": 24,
    "rating": 5.0,
    "reviewCount": 111,
    "volume": "20 ml / 0.67 fl. oz.",
    "bpomNumber": "NA18260010084",
    "keyIngredients": [
      "Hexapeptide-11",
      "Ceramide NP",
      "Squalane",
      "Shea Butter"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Hexapeptide-11 dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-05",
    "name": "Huile de Nuit Régénératrice Blue Tansy & Retinol Night Oil",
    "subtitle": "Gentle Retinoid Cellular Turnover Elixir",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 890000,
    "stock": 27,
    "rating": 4.7,
    "reviewCount": 128,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010085",
    "keyIngredients": [
      "0.5% Hydroxypinacolone Retinoate",
      "Moroccan Blue Tansy",
      "Jojoba",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 0.5% Hydroxypinacolone Retinoate dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 760000,
    "badge": "New Haute"
  },
  {
    "id": "eye-06",
    "name": "Masque Hydratant Nuit Snow Mushroom & Tremella Sleep",
    "subtitle": "Overnight Water-Lock Moisture Infusion",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 680000,
    "stock": 30,
    "rating": 4.8,
    "reviewCount": 145,
    "volume": "70 ml / 2.3 fl. oz.",
    "bpomNumber": "NA18260010086",
    "keyIngredients": [
      "Tremella Fuciformis Extract",
      "Beta-Glucan",
      "Squalane",
      "B5"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Tremella Fuciformis Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-07",
    "name": "Patchs Yeux Hydrogel 24K Gold & Collagen Eye Patches",
    "subtitle": "60 Cooling Hydrogel Eye Smoothing Patches",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 580000,
    "stock": 33,
    "rating": 4.9,
    "reviewCount": 162,
    "volume": "60 patches / 30 pairs",
    "bpomNumber": "NA18260010087",
    "keyIngredients": [
      "24K Gold",
      "Marine Collagen",
      "Caffeine",
      "Niacinamide"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 24K Gold dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 490000,
    "badge": "Best Seller"
  },
  {
    "id": "eye-08",
    "name": "Sérum Cils & Sourcils Peptide Fortifying Lash & Brow",
    "subtitle": "Advanced Lash Densifying & Lengthening Serum",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 520000,
    "stock": 36,
    "rating": 5.0,
    "reviewCount": 179,
    "volume": "6 ml / 0.2 fl. oz.",
    "bpomNumber": "NA18260010088",
    "keyIngredients": [
      "Myristoyl Pentapeptide-17",
      "Biotinoyl Tripeptide-1",
      "Panthenol",
      "Arginine"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Myristoyl Pentapeptide-17 dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-09",
    "name": "Crème Nuit Raffermissante Kigelia & Resveratrol Night",
    "subtitle": "Architectural Jawline & Facial Contour Cream",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 960000,
    "stock": 39,
    "rating": 4.7,
    "reviewCount": 196,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010089",
    "keyIngredients": [
      "Kigelia Africana",
      "Resveratrol",
      "Shea Butter",
      "Adenosine"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Kigelia Africana dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 820000,
    "badge": "Award Winner"
  },
  {
    "id": "eye-10",
    "name": "Baume Yeux Cryo-Restoring Caffeine Eye Stick",
    "subtitle": "Cooling On-the-Go Eye Awakening Balm",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 490000,
    "stock": 42,
    "rating": 4.8,
    "reviewCount": 213,
    "volume": "10 g / 0.35 oz.",
    "bpomNumber": "NA18260010090",
    "keyIngredients": [
      "Green Coffee Bean Oil",
      "Peptides",
      "Hyaluronic Acid",
      "Menthyl Lactate"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Green Coffee Bean Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-11",
    "name": "Huile Précieuse de Nuit Rosehip & Marula Midnight Elixir",
    "subtitle": "Potent Overnight Antioxidant Nourishment",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 840000,
    "stock": 45,
    "rating": 4.9,
    "reviewCount": 230,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010091",
    "keyIngredients": [
      "Cold-Pressed Rosehip",
      "Virgin Marula",
      "Vitamin C THD",
      "Frankincense"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Cold-Pressed Rosehip dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-12",
    "name": "Masque Yeux Chauffant Lavender & Silk Sleep Mask (5-Pack)",
    "subtitle": "Self-Warming Aromatherapeutic Eye Spa",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 380000,
    "stock": 48,
    "rating": 5.0,
    "reviewCount": 247,
    "volume": "5 single-use masks",
    "bpomNumber": "NA18260010092",
    "keyIngredients": [
      "Lavender Essential Oil",
      "Iron Powder",
      "Activated Charcoal",
      "Non-Woven Cotton"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Lavender Essential Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-13",
    "name": "Crème Yeux Illuminatrice Pearl & Niacinamide Corrector",
    "subtitle": "Light-Reflecting Dark Circle Neutralizer",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 660000,
    "stock": 51,
    "rating": 4.7,
    "reviewCount": 264,
    "volume": "15 ml / 0.5 fl. oz.",
    "bpomNumber": "NA18260010093",
    "keyIngredients": [
      "Pearl Extract",
      "3% Niacinamide",
      "Haloxyl Peptides",
      "Vitamin K"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Pearl Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 560000
  },
  {
    "id": "eye-14",
    "name": "Concentré de Nuit Glycolic & Lactic Peeling Drops",
    "subtitle": "Gentle Overnight Resurfacing Night Peel",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 710000,
    "stock": 54,
    "rating": 4.8,
    "reviewCount": 281,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010094",
    "keyIngredients": [
      "8% AHA Complex",
      "Centella Asiatica",
      "Aloe Vera",
      "Hyaluronic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 8% AHA Complex dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-15",
    "name": "Gel Contour des Yeux Marine Algae & Collagen Cooling",
    "subtitle": "Puffy Eye Relief Cooling Jelly",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 580000,
    "stock": 57,
    "rating": 4.9,
    "reviewCount": 298,
    "volume": "15 ml / 0.5 fl. oz.",
    "bpomNumber": "NA18260010095",
    "keyIngredients": [
      "Spirulina Algae",
      "Marine Collagen",
      "Escin",
      "Allantoin"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Spirulina Algae dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-16",
    "name": "Masque Crème de Nuit Propolis & Royal Jelly Sleep Pack",
    "subtitle": "Deep Nourishing Honey Radiance Mask",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 640000,
    "stock": 15,
    "rating": 5.0,
    "reviewCount": 315,
    "volume": "60 ml / 2.0 fl. oz.",
    "bpomNumber": "NA18260010096",
    "keyIngredients": [
      "Propolis Extract",
      "Royal Jelly",
      "Honey Extract",
      "Ceramide NP"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Propolis Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 540000
  },
  {
    "id": "eye-17",
    "name": "Baume Réparateur Nuit Centella Barrier Ointment",
    "subtitle": "Overnight Slug-Balm for Flaky Dry Skin",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 620000,
    "stock": 18,
    "rating": 4.7,
    "reviewCount": 332,
    "volume": "50 ml / 1.7 fl. oz.",
    "bpomNumber": "NA18260010097",
    "keyIngredients": [
      "Centella Asiatica",
      "Madecassoside",
      "Squalane",
      "Shea Butter"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Centella Asiatica dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-18",
    "name": "Sérum Yeux Tenseur Argireline 10% Line Smoothing",
    "subtitle": "Targeted Expression Line Relaxer",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 760000,
    "stock": 21,
    "rating": 4.8,
    "reviewCount": 349,
    "volume": "15 ml / 0.5 fl. oz.",
    "bpomNumber": "NA18260010098",
    "keyIngredients": [
      "10% Argireline Peptides",
      "Leuphasyl",
      "Hyaluronic Acid",
      "Glycerin"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 10% Argireline Peptides dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 650000,
    "badge": "Limited Edition"
  },
  {
    "id": "eye-19",
    "name": "Huile Rituelle Sommeil French Lavender Pillow Mist",
    "subtitle": "Aromatherapeutic Deep Sleep Botanical Spray",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 450000,
    "stock": 24,
    "rating": 4.9,
    "reviewCount": 76,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010099",
    "keyIngredients": [
      "French Lavender Water",
      "Roman Chamomile",
      "Bergamot",
      "Clary Sage"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak French Lavender Water dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "eye-20",
    "name": "Nectar de Nuit Émeraude 24K Gold Midnight Youth Radiance",
    "subtitle": "The Crown Jewel of Overnight Skin Repair",
    "category": "Eye & Night Ritual",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 1290000,
    "stock": 27,
    "rating": 5.0,
    "reviewCount": 93,
    "volume": "30 ml / 1.0 fl. oz.",
    "bpomNumber": "NA18260010100",
    "keyIngredients": [
      "24K Gold Leaf",
      "Malachite Extract",
      "Copper Tripeptide-1",
      "Evening Primrose Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 24K Gold Leaf dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 1100000,
    "badge": "Award Winner"
  },
  {
    "id": "bdy-01",
    "name": "Huile Précieuse Sacred Neroli & Gold Shimmer Body Oil",
    "subtitle": "Dry-Touch Botanical Body Elixir with 24K Gold",
    "category": "Body & Wellness",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 780000,
    "stock": 15,
    "rating": 4.7,
    "reviewCount": 60,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010101",
    "keyIngredients": [
      "Moroccan Neroli Blossom",
      "Argania Spinosa Oil",
      "24K Gold Shimmer",
      "Sweet Almond"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Moroccan Neroli Blossom dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 675000,
    "badge": "Award Winner"
  },
  {
    "id": "bdy-02",
    "name": "Crème Mains & Ongles Emerald Fig & Shea Hand Couture",
    "subtitle": "Ultra-Rich Protective Hand & Cuticle Balm",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 380000,
    "stock": 18,
    "rating": 4.8,
    "reviewCount": 77,
    "volume": "75 ml / 2.5 fl. oz.",
    "bpomNumber": "NA18260010102",
    "keyIngredients": [
      "Mediterranean Green Fig",
      "Organic Shea Butter",
      "Vitamin B5",
      "Jojoba Esters"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Mediterranean Green Fig dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Best Seller"
  },
  {
    "id": "bdy-03",
    "name": "Gommage Corps Sel Marin & Lemongrass Body Polish",
    "subtitle": "Detoxifying Mineral Exfoliating Scrub",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 520000,
    "stock": 21,
    "rating": 4.9,
    "reviewCount": 94,
    "volume": "250 g / 8.8 oz.",
    "bpomNumber": "NA18260010103",
    "keyIngredients": [
      "Dead Sea Salt",
      "Lemongrass Oil",
      "Sweet Almond Oil",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Dead Sea Salt dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 440000
  },
  {
    "id": "bdy-04",
    "name": "Lait Hydratant Corps Vanilla Orchid & Sweet Almond Silk",
    "subtitle": "Lightweight Velvet Hydrating Body Lotion",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 560000,
    "stock": 24,
    "rating": 5.0,
    "reviewCount": 111,
    "volume": "250 ml / 8.5 fl. oz.",
    "bpomNumber": "NA18260010104",
    "keyIngredients": [
      "Vanilla Orchid Extract",
      "Sweet Almond Oil",
      "Shea Butter",
      "Niacinamide"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Vanilla Orchid Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "badge": "Best Seller"
  },
  {
    "id": "bdy-05",
    "name": "Huile Sèche Corps French Camellia & Rose Petal Dry Oil",
    "subtitle": "Satin Sheen Non-Greasy Body Hydrator",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 640000,
    "stock": 27,
    "rating": 4.7,
    "reviewCount": 128,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010105",
    "keyIngredients": [
      "Camellia Japonica Oil",
      "Damask Rose Extract",
      "Vitamin E",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Camellia Japonica Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 550000
  },
  {
    "id": "bdy-06",
    "name": "Baume Corps Nourrissant Murumuru & Cocoa Butter Velvet",
    "subtitle": "Ultra-Rich Melting Body Soufflé",
    "category": "Body & Wellness",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 620000,
    "stock": 30,
    "rating": 4.8,
    "reviewCount": 145,
    "volume": "200 ml / 6.8 fl. oz.",
    "bpomNumber": "NA18260010106",
    "keyIngredients": [
      "Murumuru Butter",
      "Raw Cocoa Butter",
      "Ceramide NP",
      "Squalane"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Murumuru Butter dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-07",
    "name": "Gel Douche Botanique Bergamot & Cedarwood Body Wash",
    "subtitle": "Sulfate-Free Aromatherapeutic Cleanser",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 420000,
    "stock": 33,
    "rating": 4.9,
    "reviewCount": 162,
    "volume": "300 ml / 10.1 fl. oz.",
    "bpomNumber": "NA18260010107",
    "keyIngredients": [
      "Bergamot Peel Oil",
      "Atlas Cedarwood",
      "Aloe Vera",
      "Coconut Betaine"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Bergamot Peel Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-08",
    "name": "Sérum Corps Exfoliant AHA 10% & Lactic Smoothing Serum",
    "subtitle": "Keratosis Pilaris & Rough Skin Treatment",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 590000,
    "stock": 36,
    "rating": 5.0,
    "reviewCount": 179,
    "volume": "120 ml / 4.0 fl. oz.",
    "bpomNumber": "NA18260010108",
    "keyIngredients": [
      "10% Lactic Acid",
      "Salicylic Acid",
      "Green Tea Extract",
      "Hyaluronic Acid"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 10% Lactic Acid dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 510000,
    "badge": "Award Winner"
  },
  {
    "id": "bdy-09",
    "name": "Brume Corps & Cheveux Amber Resin & Bourbon Vanilla Mist",
    "subtitle": "Long-Lasting Haute Hair & Body Perfume Mist",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 480000,
    "stock": 39,
    "rating": 4.7,
    "reviewCount": 196,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010109",
    "keyIngredients": [
      "Amber Essence",
      "Bourbon Vanilla",
      "Aloe Hydrosol",
      "Glycerin"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Amber Essence dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-10",
    "name": "Huile de Bain Relaxante Lavender & Eucalyptus Bath Soak",
    "subtitle": "Aromatherapy Stress Relieving Bath Oil",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 580000,
    "stock": 42,
    "rating": 4.8,
    "reviewCount": 213,
    "volume": "200 ml / 6.8 fl. oz.",
    "bpomNumber": "NA18260010110",
    "keyIngredients": [
      "French Lavender",
      "Eucalyptus Globulus",
      "Jojoba Oil",
      "Apricot Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak French Lavender dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-11",
    "name": "Crème Raffermissante Corps Caffeine & Guarana Cream",
    "subtitle": "Targeted Silhouette Sculpting Treatment",
    "category": "Body & Wellness",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 690000,
    "stock": 45,
    "rating": 4.9,
    "reviewCount": 230,
    "volume": "200 ml / 6.8 fl. oz.",
    "bpomNumber": "NA18260010111",
    "keyIngredients": [
      "Caffeine Extract",
      "Brazilian Guarana",
      "Centella",
      "Shea Butter"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Caffeine Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 590000
  },
  {
    "id": "bdy-12",
    "name": "Gommage Corps Café & Coconut Smoothing Coffee Scrub",
    "subtitle": "Energizing Cellulite & Dry Patch Exfoliator",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 460000,
    "stock": 48,
    "rating": 5.0,
    "reviewCount": 247,
    "volume": "200 g / 7.0 oz.",
    "bpomNumber": "NA18260010112",
    "keyIngredients": [
      "Arabica Coffee Grounds",
      "Virgin Coconut Oil",
      "Brown Sugar",
      "Vitamin E"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Arabica Coffee Grounds dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-13",
    "name": "Baume Mains Réparateur 20% Shea Intensive Hand Salve",
    "subtitle": "Heavy Duty Nourishment for Chapped Hands",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 410000,
    "stock": 51,
    "rating": 4.7,
    "reviewCount": 264,
    "volume": "75 ml / 2.5 fl. oz.",
    "bpomNumber": "NA18260010113",
    "keyIngredients": [
      "20% Shea Butter",
      "Honey Extract",
      "Allantoin",
      "Sweet Almond Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 20% Shea Butter dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-14",
    "name": "Déodorant Botanique Bergamot & Sage Natural Cream",
    "subtitle": "Aluminium-Free 24H Odor Defense",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 360000,
    "stock": 54,
    "rating": 4.8,
    "reviewCount": 281,
    "volume": "60 g / 2.1 oz.",
    "bpomNumber": "NA18260010114",
    "keyIngredients": [
      "Magnesium Hydroxide",
      "Arrowroot Powder",
      "Sage Oil",
      "Coconut Oil"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Magnesium Hydroxide dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-15",
    "name": "Huile de Massage Botanique Rosemary & Arnica Muscle Relief",
    "subtitle": "Tension Releasing Deep Tissue Oil",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 540000,
    "stock": 57,
    "rating": 4.9,
    "reviewCount": 298,
    "volume": "120 ml / 4.0 fl. oz.",
    "bpomNumber": "NA18260010115",
    "keyIngredients": [
      "Arnica Montana Extract",
      "Rosemary Oil",
      "Sweet Almond",
      "Peppermint"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Arnica Montana Extract dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-16",
    "name": "Sel de Bain Détox Himalayan Pink Salt & Dead Sea Crystals",
    "subtitle": "Purifying Mineral Soak with Real Rose Buds",
    "category": "Body & Wellness",
    "skinTypes": [
      "Anti-Aging & Kusam",
      "Kulit Kering"
    ],
    "price": 480000,
    "stock": 15,
    "rating": 5.0,
    "reviewCount": 315,
    "volume": "400 g / 14.1 oz.",
    "bpomNumber": "NA18260010116",
    "keyIngredients": [
      "Himalayan Pink Salt",
      "Dead Sea Crystals",
      "Epsom Salt",
      "Rose Petals"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Himalayan Pink Salt dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-17",
    "name": "Crème Pieds Nourrissante Peppermint & Urea 10% Therapy",
    "subtitle": "Cracked Heel Intensive Smoothing Cream",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Kulit Sensitif"
    ],
    "price": 420000,
    "stock": 18,
    "rating": 4.7,
    "reviewCount": 332,
    "volume": "100 ml / 3.4 fl. oz.",
    "bpomNumber": "NA18260010117",
    "keyIngredients": [
      "10% Urea",
      "Peppermint Oil",
      "Tea Tree",
      "Shea Butter"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak 10% Urea dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-18",
    "name": "Coffret Rituel Bain & Corps The Imperial Emerald Luxury Set",
    "subtitle": "Curated Body Oil, Hand Cream & Scrub Trio",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif"
    ],
    "price": 1380000,
    "stock": 21,
    "rating": 4.8,
    "reviewCount": 349,
    "volume": "Curated Trio Box",
    "bpomNumber": "NA18260010118",
    "keyIngredients": [
      "Neroli Body Oil",
      "Fig Hand Cream",
      "Sea Salt Polish",
      "Bath Soak"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Neroli Body Oil dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 1150000,
    "badge": "Limited Edition"
  },
  {
    "id": "bdy-19",
    "name": "Bougie Parfumée Botanique Emerald Fig & Sandalwood Candle",
    "subtitle": "Hand-Poured Soy Wax Luxury Home Fragrance",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Kering",
      "Anti-Aging & Kusam",
      "Kulit Sensitif"
    ],
    "price": 490000,
    "stock": 24,
    "rating": 4.9,
    "reviewCount": 76,
    "volume": "220 g / 7.8 oz.",
    "bpomNumber": "NA18260010119",
    "keyIngredients": [
      "Soy Wax",
      "Essential Oils",
      "Cotton Wick",
      "Fig & Sandalwood"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Soy Wax dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&auto=format&fit=crop&q=85",
    "isVegan": true
  },
  {
    "id": "bdy-20",
    "name": "Élixir de Beauté Intérieure Botanical Collagen & Pearl Dust",
    "subtitle": "Nutricosmetic Powder for Radiant Skin",
    "category": "Body & Wellness",
    "skinTypes": [
      "Kulit Berminyak & Acne",
      "Kulit Sensitif",
      "Kulit Kering"
    ],
    "price": 790000,
    "stock": 27,
    "rating": 5.0,
    "reviewCount": 93,
    "volume": "150 g / 5.3 oz.",
    "bpomNumber": "NA18260010120",
    "keyIngredients": [
      "Marine Collagen Peptides",
      "Pearl Powder",
      "Tremella",
      "Hibiscus Extract"
    ],
    "ritualUsage": "Aplikasikan secukupnya pada kulit yang bersih setiap pagi dan malam. Ratakan dengan gerakan pijatan lembut ke arah atas untuk penyerapan optimal bahan aktif.",
    "description": "Formulasi haute cosmétique eksklusif dari laboratorium botani Émeraude. Menggabungkan ekstrak Marine Collagen Peptides dengan bioteknologi terdepan untuk merawat keremajaan dan kilau sehat kulit Anda.",
    "imageUrl": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=800&auto=format&fit=crop&q=85",
    "isVegan": true,
    "discountPrice": 680000,
    "badge": "New Haute"
  }
]

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'EMR-2026-8819',
    customerName: 'Nadia Pramesti',
    customerEmail: 'nadia.pramesti@emeraude.com',
    customerPhone: '081288776655',
    postalCode: '12190',
    province: 'DKI Jakarta',
    city: 'Jakarta Selatan',
    district: 'Kebayoran Baru (Senopati / Gunawarman)',
    shippingAddress: 'Jl. Senopati Raya No. 42A, Kebayoran Baru',
    paymentMethod: 'Transfer BCA',
    complimentarySample: 'Émeraude Cellular Elixir 3ml Vial',
    items: [
      { product: INITIAL_PRODUCTS[0], quantity: 1 },
      { product: INITIAL_PRODUCTS[1], quantity: 1 },
    ],
    subtotal: 1610000,
    discount: 0,
    shippingCost: 0,
    total: 1610000,
    status: 'Selesai',
    createdAt: '2026-10-21T09:30:00.000Z',
    trackingNumber: 'EMR-LUX-992014829',
  },
  {
    id: 'EMR-2026-9042',
    customerName: 'dr. Savira Larasati, Sp.DVE',
    customerEmail: 'savira.larasati@emeraude.com',
    customerPhone: '081377665544',
    postalCode: '40132',
    province: 'Jawa Barat',
    city: 'Kota Bandung',
    district: 'Coblong (Dago / ITB)',
    shippingAddress: 'Jl. Ir. H. Djuanda (Dago Asri) No. 18',
    paymentMethod: 'QRIS',
    complimentarySample: '24K Gold Peptide Eye Nectar Sachet',
    items: [
      { product: INITIAL_PRODUCTS[5], quantity: 1 },
      { product: INITIAL_PRODUCTS[3], quantity: 2 },
    ],
    subtotal: 1648000,
    discount: 0,
    shippingCost: 0,
    total: 1648000,
    status: 'Dikirim',
    createdAt: '2026-10-23T14:45:00.000Z',
    trackingNumber: 'EMR-LUX-992084112',
  },
  {
    id: 'EMR-2026-9372',
    customerName: 'Aurelia Wijaya',
    customerEmail: 'aurelia.wijaya@example.com',
    customerPhone: '081122334455',
    postalCode: '60213',
    province: 'Jawa Timur',
    city: 'Kota Surabaya',
    district: 'Sambikerep (CitraLand / Pakuwon)',
    shippingAddress: 'Bukit Golf Internasional Blok G2 No. 15, CitraLand',
    paymentMethod: 'Transfer BCA',
    complimentarySample: 'Velvet Rosehip Barrier Balm Mini 5g',
    items: [
      { product: INITIAL_PRODUCTS[9], quantity: 1 },
      { product: INITIAL_PRODUCTS[2], quantity: 1 },
    ],
    subtotal: 1355000,
    discount: 50000,
    shippingCost: 0,
    total: 1305000,
    status: 'Pending',
    createdAt: '2026-10-25T19:10:00.000Z',
    trackingNumber: 'EMR-LUX-992095831',
  },
]
