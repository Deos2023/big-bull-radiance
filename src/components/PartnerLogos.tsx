import React from "react";

interface LogoProps {
  className?: string;
}

// 1. HDFC Mutual Fund Logo
export const HdfcLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#FFFFFF" />
    {/* 4 Red Corner Brackets */}
    <path d="M11 11H25V17H17V25H11V11Z" fill="#ED232A" />
    <path d="M53 11H39V17H47V25H53V11Z" fill="#ED232A" />
    <path d="M11 53H25V47H17V39H11V53Z" fill="#ED232A" />
    <path d="M53 53H39V47H47V39H53V53Z" fill="#ED232A" />
    {/* Central HDFC Blue Square */}
    <rect x="21" y="21" width="22" height="22" rx="3" fill="#004C8F" />
    {/* Central White Bar */}
    <rect x="29" y="25" width="6" height="14" fill="#FFFFFF" />
  </svg>
);

// 2. HSBC Mutual Fund Logo
export const HsbcLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#FFFFFF" />
    {/* Left Outer Red Triangle */}
    <polygon points="12,32 26,18 26,46" fill="#DB0011" />
    {/* Right Outer Red Triangle */}
    <polygon points="52,32 38,18 38,46" fill="#DB0011" />
    {/* Top Inward Red Triangle */}
    <polygon points="26,18 38,18 32,32" fill="#DB0011" />
    {/* Bottom Inward Red Triangle */}
    <polygon points="26,46 38,46 32,32" fill="#DB0011" />
  </svg>
);

// 3. Tata Mutual Fund Logo
export const TataLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#0B4386" />
    {/* Iconic Tata Twin Curves forming 'T' */}
    <path
      d="M19 20C27 20 32 25 32 44M45 20C37 20 32 25 32 44"
      stroke="#FFFFFF"
      strokeWidth="5.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 4. SBI Mutual Fund Logo
export const SbiLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#FFFFFF" />
    {/* SBI Blue Circle */}
    <circle cx="32" cy="32" r="22" fill="#00A3E0" />
    {/* SBI Center Keyhole */}
    <circle cx="32" cy="29" r="7.5" fill="#FFFFFF" />
    <rect x="29.5" y="29" width="5" height="25" fill="#FFFFFF" />
  </svg>
);

// 5. Star Health Insurance Logo
export const StarHealthLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#0A7C42" />
    {/* Golden/White Star of Protection */}
    <path
      d="M32 12L37 26H51L40 34.5L44 48L32 39.5L20 48L24 34.5L13 26H27L32 12Z"
      fill="#FFD100"
    />
    <circle cx="32" cy="32" r="4.5" fill="#FFFFFF" />
  </svg>
);

// 6. Care Health Insurance Logo
export const CareHealthLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#009688" />
    {/* Care Blooming Petals Symbol */}
    <circle cx="32" cy="32" r="6" fill="#FFFFFF" />
    <path
      d="M32 14C37 14 41 18 41 23C41 29 32 32 32 32C32 32 23 29 23 23C23 18 27 14 32 14Z"
      fill="#E0F2F1"
      opacity="0.95"
    />
    <path
      d="M50 32C50 37 46 41 41 41C35 41 32 32 32 32C32 32 35 23 41 23C46 23 50 27 50 32Z"
      fill="#80CBC4"
      opacity="0.95"
    />
    <path
      d="M32 50C27 50 23 46 23 41C23 35 32 32 32 32C32 32 41 35 41 41C41 46 37 50 32 50Z"
      fill="#E0F2F1"
      opacity="0.95"
    />
    <path
      d="M14 32C14 27 18 23 23 23C29 23 32 32 32 32C32 32 29 41 23 41C18 41 14 37 14 32Z"
      fill="#80CBC4"
      opacity="0.95"
    />
  </svg>
);

// 7. Axis Mutual Fund Logo
export const AxisLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#97144D" />
    {/* Axis Angular Letter 'A' Pyramid */}
    <path d="M16 46L32 18L48 46H38L32 33L26 46H16Z" fill="#FFFFFF" />
    <path d="M32 18L38 33H48L32 18Z" fill="#FFA3C0" opacity="0.4" />
  </svg>
);

// 8. DSP Mutual Fund Logo
export const DspLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#FF5E00" />
    {/* DSP Diamond Mark */}
    <rect x="24" y="14" width="16" height="16" transform="rotate(45 32 22)" fill="#FFFFFF" />
    {/* Bold DSP Typography */}
    <text
      x="32"
      y="49"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="15"
      fontWeight="900"
      fill="#FFFFFF"
      textAnchor="middle"
      letterSpacing="1.5"
    >
      DSP
    </text>
  </svg>
);

// 9. Invesco Mutual Fund Logo
export const InvescoLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#002855" />
    {/* Invesco Dual Mountain Peaks */}
    <path d="M14 46L29 23L36 34L32 46H14Z" fill="#00A3E0" />
    <path d="M26 46L38 18L50 46H40L34 35L30 46H26Z" fill="#FFFFFF" />
  </svg>
);

// 10. ICICI Mutual Fund Logo
export const IciciLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#9C1C26" />
    {/* ICICI Radiant Outer Spiral */}
    <circle cx="32" cy="32" r="19" stroke="#F58220" strokeWidth="4" strokeDasharray="80 40" />
    {/* Lowercase 'i' */}
    <circle cx="32" cy="21" r="3.5" fill="#F58220" />
    <rect x="29" y="27" width="6" height="16" rx="2" fill="#FFFFFF" />
  </svg>
);

// 11. Nippon India Mutual Fund Logo
export const NipponLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#E60012" />
    {/* Nippon Life Circular Disc */}
    <circle cx="32" cy="32" r="19" fill="#FFFFFF" />
    <circle cx="32" cy="32" r="15" fill="#E60012" />
    {/* Flowing Ribbon Accent */}
    <path
      d="M21 34C24 26 40 38 43 28"
      stroke="#FFFFFF"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  </svg>
);

// 12. UTI Mutual Fund Logo
export const UtiLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#0B3A78" />
    {/* UTI Golden Disc */}
    <circle cx="32" cy="32" r="17" fill="#F59E0B" />
    <circle cx="32" cy="32" r="8" fill="#0B3A78" />
    <text
      x="32"
      y="36"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="9"
      fontWeight="900"
      fill="#F59E0B"
      textAnchor="middle"
      letterSpacing="0.5"
    >
      UTI
    </text>
  </svg>
);

// 13. Kotak Mutual Fund Logo
export const KotakLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#ED1C24" />
    {/* Kotak Infinity 'K' Loop */}
    <path
      d="M22 25C18 25 15 28 15 32C15 36 18 39 22 39C27 39 30.5 32 32 32C33.5 32 37 39 42 39C46 39 49 36 49 32C49 28 46 25 42 25C37 25 33.5 32 32 32C30.5 32 27 25 22 25Z"
      stroke="#FFFFFF"
      strokeWidth="4.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
