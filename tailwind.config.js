/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B894',
          light: '#00D9A5',
        },
        background: {
          dark: '#0D0D0D',
          light: '#1A1A1A',
        },
        border: '#2F2F2F',
        muted: '#B0B0B0',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
} 