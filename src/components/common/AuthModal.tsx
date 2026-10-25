import React, { useState, useEffect } from 'react'
import { useCosmetics } from '@/context/CosmeticsContext'
import { BotanicalCrest } from './BotanicalCrest'
import {
  X,
  Lock,
  Mail,
  User as UserIcon,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { toast } from 'sonner'

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, authModalMode, closeAuthModal, login, register, setActiveView } =
    useCosmetics()
  const [mode, setMode] = useState<'login' | 'register'>('login')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [skinProfile, setSkinProfile] = useState('Kulit Kering & Sensitif')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (isAuthModalOpen) {
      setMode(authModalMode)
      setPassword('')
      setConfirmPassword('')
    }
  }, [isAuthModalOpen, authModalMode])

  if (!isAuthModalOpen) return null

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = login(email, password)
    if (success) {
      closeAuthModal()
    }
  }

  const handleQuickDemoLogin = (demoEmail: string, demoPass: string, goAdmin = false) => {
    setEmail(demoEmail)
    setPassword(demoPass)
    const success = login(demoEmail, demoPass)
    if (success) {
      closeAuthModal()
      if (goAdmin) {
        setActiveView('admin')
      }
    }
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 6) {
      toast.error('Kata sandi minimal 6 karakter.')
      return
    }
    if (password !== confirmPassword) {
      toast.error('Konfirmasi kata sandi tidak cocok.')
      return
    }
    const success = register(name, email, password, phone, skinProfile)
    if (success) {
      closeAuthModal()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in-0 duration-150"
      onClick={closeAuthModal}
    >
      <div
        className="w-full max-w-md rounded-xl border border-[#C8A96A]/40 bg-card p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border pb-3">
          <div className="flex items-center gap-3">
            <BotanicalCrest size="sm" />
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                {mode === 'login' ? 'Maison Émeraude Privé' : 'Keanggotaan VIP Baru'}
              </h3>
              <p className="text-xs text-muted-foreground">
                {mode === 'login'
                  ? 'Masuk untuk mengakses ritual kecantikan & pesanan eksklusif Anda.'
                  : 'Nikmati complimentary sample & poin loyalitas setiap pembelanjaan.'}
              </p>
            </div>
          </div>
          <button
            onClick={closeAuthModal}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`rounded-md py-1.5 transition ${
              mode === 'login'
                ? 'bg-[#C8A96A] text-[#0F3D34] shadow-2xs font-bold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Masuk (Login)
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`rounded-md py-1.5 transition ${
              mode === 'register'
                ? 'bg-[#C8A96A] text-[#0F3D34] shadow-2xs font-bold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Daftar Member VIP
          </button>
        </div>

        {mode === 'login' && (
          <>
            {/* Instant One-Click Demo Login Buttons */}
            <div className="rounded-lg border border-[#C8A96A]/30 bg-background/60 p-3 space-y-2">
              <p className="text-[11px] font-semibold text-[#C8A96A] flex items-center gap-1.5">
                <Sparkles className="size-3.5" />
                <span>Akses Cepat Akun Demo (1-Klik):</span>
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('user@example.com', 'password123', false)}
                  className="flex items-center justify-center gap-1.5 rounded-md border border-[#C8A96A]/40 bg-card px-2.5 py-2 text-[11px] font-semibold text-foreground hover:border-[#C8A96A] hover:bg-accent transition"
                >
                  <UserIcon className="size-3.5 text-[#C8A96A]" />
                  <span>Demo Member VIP</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoLogin('admin@example.com', 'password123', true)}
                  className="flex items-center justify-center gap-1.5 rounded-md bg-[#C8A96A]/20 border border-[#C8A96A] px-2.5 py-2 text-[11px] font-bold text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#0F3D34] transition"
                >
                  <ShieldCheck className="size-3.5" />
                  <span>Demo Admin Backoffice</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Alamat Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="user@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">Kata Sandi</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="password123"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-9 text-xs focus:border-[#C8A96A] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 h-10 rounded-md bg-[#C8A96A] text-[#0F3D34] font-bold text-xs hover:bg-[#d4b87c] transition shadow-xs mt-2"
              >
                <span>Masuk ke Akun</span>
                <ArrowRight className="size-3.5 stroke-[2.2]" />
              </button>
            </form>
          </>
        )}

        {mode === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-foreground">Nama Lengkap *</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  required
                  placeholder="Nama lengkap Anda"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background pl-9 pr-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Alamat Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background pl-8 pr-2 text-xs focus:border-[#C8A96A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-foreground">No. WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="0812xxxxxxxx"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background pl-8 pr-2 text-xs focus:border-[#C8A96A] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-foreground">Profil Jenis Kulit Utama</label>
              <select
                value={skinProfile}
                onChange={e => setSkinProfile(e.target.value)}
                className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
              >
                <option value="Kulit Kering & Sensitif">Kulit Kering & Sensitif</option>
                <option value="Kulit Berminyak & Acne-Prone">Kulit Berminyak & Acne-Prone</option>
                <option value="Anti-Aging & Kusam">Anti-Aging & Kusam</option>
                <option value="Normal — Combination">Normal — Combination</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Kata Sandi *</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Min. 6 karakter"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-foreground">Ulangi Sandi *</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Konfirmasi"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus:border-[#C8A96A] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 h-10 rounded-md bg-[#C8A96A] text-[#0F3D34] font-bold text-xs hover:bg-[#d4b87c] transition shadow-xs mt-2"
            >
              <span>Aktifkan Member VIP</span>
              <ArrowRight className="size-3.5 stroke-[2.2]" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
