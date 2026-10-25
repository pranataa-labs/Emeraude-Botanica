import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { CosmeticsProvider } from './context/CosmeticsContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CosmeticsProvider>
      <App />
    </CosmeticsProvider>
  </StrictMode>
)
