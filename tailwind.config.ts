import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#131118',
          light: '#1A1820',
          dark: '#0B0A0F',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        background: {
          dark: '#0B0A0F',
          light: '#F4EDE8',
        },
        cream: '#F4EDE8',
        crimson: {
          DEFAULT: '#C41E3A',
          dark: '#8B1528',
        },
        purple: {
          DEFAULT: '#7B2FBE',
          light: '#A855F7',
          dim: '#3D1672',
        },
        surface: {
          1: '#131118',
          2: '#1A1820',
          3: '#222030',
          4: '#2A2838',
        },
        dim: '#8880A0',
        muted: '#48446A',
        border: {
          DEFAULT: '#242232',
          light: '#343250',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
