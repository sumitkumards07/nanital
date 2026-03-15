/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f2d00d",
        "bg-dark":  "#221f10",
        "bg-light": "#f8f8f5",
        gold: {
          DEFAULT: "#f2d00d",
          dim:     "#d4a800",
          muted:   "rgba(242,208,13,0.15)",
          // Keep numeric scale for any existing references
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f2d00d',
          500: '#f2d00d',
          600: '#d4a800',
          700: '#b08900',
          800: '#8a6a00',
          900: '#654e00',
        },
        dark: {
          DEFAULT: "#221f10",
          800: "#2e2912",
          700: "#3a3318",
          600: "#4a4220",
        },
        // Keep full slate scale used across components
        slate: {
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Legacy aliases used in existing components
        "primary-50":  '#fff8d6',
        "primary-100": '#fef0a0',
        "primary-700": '#221f10',
        "primary-800": '#1a1809',
        "primary-900": '#221f10',
        "mountain-50":  '#f8fafc',
        "mountain-100": '#f1f5f9',
        "mountain-200": '#e2e8f0',
        "mountain-300": '#cbd5e1',
        "mountain-400": '#94a3b8',
        "mountain-500": '#64748b',
        "mountain-600": '#475569',
        "mountain-700": '#334155',
        "mountain-800": '#1e293b',
        "mountain-900": '#0f172a',
      },
      fontFamily: {
        display: ['"Noto Serif"', 'Georgia', 'serif'],
        sans:    ['"Noto Sans"', 'sans-serif'],
        heading: ['"Noto Serif"', 'Georgia', 'serif'],
        body:    ['"Noto Sans"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg:      '1rem',
        xl:      '1.5rem',
        full:    '9999px',
      },
      boxShadow: {
        gold:  '0 4px 20px rgba(242,208,13,0.25)',
        royal: '0 8px 40px rgba(0,0,0,0.45)',
        soft:  '0 2px 20px rgba(0,0,0,0.25)',
        glass: '0 8px 32px rgba(0,0,0,0.35)',
      },
      animation: {
        'float':      'float 3s ease-in-out infinite',
        'shimmer':    'shimmer 4s linear infinite',
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(242,208,13,0.4)' },
          '50%':     { boxShadow: '0 0 0 14px rgba(242,208,13,0)' },
        },
      },
    },
  },
  plugins: [],
}
