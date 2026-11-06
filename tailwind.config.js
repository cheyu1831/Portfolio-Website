/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#080B11',
        deepNavy: '#0E1626',
        mutedNavy: '#18233C',
        surfaceNavy: '#111B30',
        cardNavy: '#0D1525',
        borderNavy: '#1E2D4A',
        electricBlue: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        cyanAccent: {
          DEFAULT: '#06B6D4',
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
        },
        softBlush: {
          DEFAULT: '#38BDF8', // Remapped from pink to clean cyan/blue accent for safe compatibility
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
        },
        warmWhite: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
      },
      fontFamily: {
        sans: [
          '"JetBrains Mono"',
          '"IBM Plex Mono"',
          '"Fira Code"',
          'monospace',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"IBM Plex Mono"',
          '"Fira Code"',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-blue': '0 0 20px -4px rgba(59, 130, 246, 0.25)',
        'glow-cyan': '0 0 20px -4px rgba(6, 182, 212, 0.2)',
        'card-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(30, 45, 74, 0.6)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
