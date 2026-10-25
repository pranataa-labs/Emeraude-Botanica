export interface PostalCodeEntry {
  code: string
  province: string
  city: string
  district: string
}

export const INDONESIAN_POSTAL_CODES: PostalCodeEntry[] = [
  { code: '12190', province: 'DKI Jakarta', city: 'Jakarta Selatan', district: 'Kebayoran Baru (SCBD / Senopati)' },
  { code: '10310', province: 'DKI Jakarta', city: 'Jakarta Pusat', district: 'Menteng' },
  { code: '12430', province: 'DKI Jakarta', city: 'Jakarta Selatan', district: 'Cilandak (Kemang / Pondok Indah)' },
  { code: '14460', province: 'DKI Jakarta', city: 'Jakarta Utara', district: 'Penjaringan (PIK Boulevard)' },
  { code: '40115', province: 'Jawa Barat', city: 'Kota Bandung', district: 'Sumur Bandung (Braga / Dago)' },
  { code: '15310', province: 'Banten', city: 'Tangerang Selatan', district: 'Serpong (BSD City / Alam Sutera)' },
  { code: '60264', province: 'Jawa Timur', city: 'Kota Surabaya', district: 'Tegalsari (Tunjungan)' },
  { code: '60213', province: 'Jawa Timur', city: 'Kota Surabaya', district: 'Sambikerep (CitraLand / Pakuwon)' },
  { code: '55281', province: 'DI Yogyakarta', city: 'Sleman', district: 'Depok (Gejayan / Kaliurang)' },
  { code: '80361', province: 'Bali', city: 'Badung', district: 'Kuta Utara (Canggu / Seminyak)' },
  { code: '80571', province: 'Bali', city: 'Gianyar', district: 'Ubud' },
  { code: '20112', province: 'Sumatera Utara', city: 'Kota Medan', district: 'Medan Baru' },
  { code: '90111', province: 'Sulawesi Selatan', city: 'Kota Makassar', district: 'Ujung Pandang (Losari)' },
]

export function lookupPostalCode(code: string): PostalCodeEntry | undefined {
  const clean = code.trim()
  return INDONESIAN_POSTAL_CODES.find(entry => entry.code === clean)
}
