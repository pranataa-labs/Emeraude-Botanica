import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

// 1. Cleansers: Sleek Pump Dispenser Bottle
export const IconPumpCleanser: React.FC<IconProps> = ({ className = 'size-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Pump nozzle & straw */}
    <path d="M12 2v4" />
    <path d="M12 2h-4" />
    <path d="M8 2l-1 2" />
    {/* Cap collar */}
    <path d="M9 6h6v2H9z" />
    {/* Bottle Body */}
    <rect x="7" y="8" width="10" height="13" rx="2" />
    {/* Minimalist label line */}
    <path d="M10 13h4" />
  </svg>
)

// 2. Serums: Dropper / Pipette Bottle
export const IconDropperSerum: React.FC<IconProps> = ({ className = 'size-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Dropper bulb & top */}
    <path d="M10.5 2.5a1.5 1.5 0 0 1 3 0V5h-3V2.5z" />
    {/* Neck cap */}
    <path d="M9 5h6v3H9z" />
    {/* Bottle Body */}
    <rect x="7.5" y="8" width="9" height="13.5" rx="2" />
    {/* Pipette liquid level */}
    <path d="M10 14h4" />
    <path d="M12 8v5" />
  </svg>
)

// 3. Moisturizers: Luxury Skincare Jar with Lid
export const IconMoisturizerJar: React.FC<IconProps> = ({ className = 'size-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Jar Lid */}
    <rect x="6" y="5" width="12" height="3.5" rx="1" />
    {/* Jar Body */}
    <path d="M5 8.5h14v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8z" />
    {/* Delicate brand stripe */}
    <path d="M8.5 13.5h7" />
  </svg>
)

// 4. Sun Care: Minimalist Squeeze Tube
export const IconSunTube: React.FC<IconProps> = ({ className = 'size-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Tube crimp top */}
    <path d="M8 2.5h8" />
    {/* Tube body tapered */}
    <path d="M8 2.5L7 14c0 1.5 1.5 2.5 3 2.5h4c1.5 0 3-1 3-2.5L16 2.5" />
    {/* Cap */}
    <rect x="8.5" y="16.5" width="7" height="4.5" rx="1" />
    {/* Sun/SPF emblem */}
    <circle cx="12" cy="9.5" r="1.5" />
  </svg>
)

// 5. Masks: Facial Sheet Mask with Eye & Mouth Cutouts
export const IconFaceMask: React.FC<IconProps> = ({ className = 'size-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Face mask oval */}
    <ellipse cx="12" cy="12" rx="7.5" ry="9" />
    {/* Eye cutouts */}
    <ellipse cx="9.5" cy="10" rx="1.2" ry="0.8" />
    <ellipse cx="14.5" cy="10" rx="1.2" ry="0.8" />
    {/* Nose mark */}
    <path d="M12 12.5v1" />
    {/* Mouth cutout */}
    <ellipse cx="12" cy="16" rx="2" ry="0.8" />
  </svg>
)

// 6. Sets & Kits: Elegant Gift Box with Ribbon
export const IconGiftSet: React.FC<IconProps> = ({ className = 'size-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Ribbon knot */}
    <path d="M12 4c-1.5-1.5-3.5-1.5-3.5 0s2 2 3.5 2c1.5 0 3.5-.5 3.5-2s-2-1.5-3.5 0z" />
    {/* Lid */}
    <rect x="4" y="6" width="16" height="3" rx="0.5" />
    {/* Box body */}
    <path d="M5 9v10a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V9" />
    {/* Vertical ribbon */}
    <path d="M12 6v14.5" />
  </svg>
)

// 7. New Arrivals: Minimalist Tag
export const IconTagNew: React.FC<IconProps> = ({ className = 'size-6', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M19 12.5L12.5 19a1.5 1.5 0 0 1-2.1 0l-6.9-6.9A1.5 1.5 0 0 1 3 11V4a1 1 0 0 1 1-1h7a1.5 1.5 0 0 1 1.1.4l6.9 6.9a1.5 1.5 0 0 1 0 2.2z" />
    <circle cx="7.5" cy="7.5" r="1.5" />
  </svg>
)

// --- Trust & Hero Pillars Minimalist Icons ---

// Clean Ingredients: Dual Botanical Leaf
export const IconCleanIngredients: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M20.5 4c-5.5 0-9 3-10.5 7.5-1.5-4-5-6-7.5-6 0 6 3 10.5 7.5 12" />
    <path d="M10 11.5c3 3.5 6 4 10.5 4" />
    <path d="M2.5 21.5l7.5-10" />
  </svg>
)

// Clinically Tested: Chemistry Erlenmeyer Flask
export const IconClinicallyTested: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M10 2v3" />
    <path d="M14 2v3" />
    <path d="M8.5 5h7" />
    <path d="M10 5v4.5L5 18a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8.5V5" />
    <path d="M7.8 15h8.4" />
  </svg>
)

// Suitable for Sensitive Skin: Pure Water Droplet
export const IconSensitiveSkin: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M12 2.5C12 2.5 5.5 10 5.5 14.5a6.5 6.5 0 0 0 13 0c0-4.5-6.5-12-6.5-12z" />
    <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
  </svg>
)

// Clean & Safe: Shield with Leaf
export const IconCleanSafe: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8c2.5 0 4 1.5 4 4-2.5 0-4-1.5-4-4z" />
    <path d="M12 8v6" />
  </svg>
)

// Sustainable: Recycling Cycle / Eco Circle
export const IconSustainable: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M7 6.5L9.5 2H14.5L17 6.5" />
    <path d="M17 6.5L19 10.5L15.5 17" />
    <path d="M15.5 17L13.5 21H10.5L8.5 17" />
    <path d="M8.5 17L5 10.5L7 6.5" />
  </svg>
)

// Cruelty Free: Minimalist Gentle Bunny Silhouette / Heart
export const IconCrueltyFree: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Bunny ears */}
    <path d="M9 3c-1.5 0-2.5 3-1.5 6" />
    <path d="M15 3c1.5 0 2.5 3 1.5 6" />
    {/* Head & Body */}
    <path d="M7.5 9a4.5 4.5 0 0 1 9 0c0 2-1 3.5-2.5 4.5 1.5 1 3 2.5 3 5 0 2-2 3.5-5 3.5s-5-1.5-5-3.5c0-2.5 1.5-4 3-5-1.5-1-2.5-2.5-2.5-4.5z" />
    {/* Tail */}
    <circle cx="17.5" cy="18" r="1" />
  </svg>
)

// Free Shipping: Minimalist Delivery Truck
export const IconShippingTruck: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M1 4h13v12H1z" />
    <path d="M14 8h4l3 3.5V16h-7z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="17.5" cy="18.5" r="2.5" />
  </svg>
)

// 30 Day Returns: Reverse Arrow Clock
export const IconReturnsClock: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M3 12a9 9 0 1 0 2.6-6.4L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l3 2" />
  </svg>
)

// Secure Payment: Padlock with Keyhole
export const IconSecureLock: React.FC<IconProps> = ({ className = 'size-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect x="5" y="10" width="14" height="11" rx="2" />
    <path d="M8 10V6a4 4 0 0 1 8 0v4" />
    <circle cx="12" cy="15.5" r="1.5" />
  </svg>
)

// Fast Add Button: Circle with Centered Plus
export const IconCirclePlus: React.FC<IconProps> = ({ className = 'size-7', size }) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <circle cx="14" cy="14" r="13" fill="currentColor" />
    <path
      d="M14 9v10M9 14h10"
      stroke="#F2EBDD"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)
