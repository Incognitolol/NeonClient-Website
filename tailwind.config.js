import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        secondary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        background: {
          DEFAULT: '#0f1420',
          light: '#1f2937',
          lighter: '#374151',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#9ca3af',
          accent: '#22d3ee',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
            filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.3))'
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)',
            filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.5))'
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'scale(1)',
            filter: 'blur(2xl) brightness(1.5)'
          },
          '50%': {
            opacity: '0.3',
            transform: 'scale(1.05)',
            filter: 'blur(2xl) brightness(2)'
          }
        },
        'neon-glow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.5)) drop-shadow(0 0 50px rgba(6, 182, 212, 0.2))'
          },
          '50%': {
            filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.7)) drop-shadow(0 0 70px rgba(6, 182, 212, 0.3))'
          }
        }
      },
      dropShadow: {
        'neon': '0 0 15px rgba(6, 182, 212, 0.5)',
        'neon-lg': [
          '0 0 15px rgba(6, 182, 212, 0.5)',
          '0 0 50px rgba(6, 182, 212, 0.2)'
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}