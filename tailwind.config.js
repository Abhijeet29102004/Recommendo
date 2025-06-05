/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c7ddff',
          300: '#9dc2ff',
          400: '#699dff',
          500: '#4178ff',
          600: '#2a5aff',
          700: '#1d44e5',
          800: '#1e39bc',
          900: '#1e3494',
          950: '#162154',
        },
        secondary: {
          50: '#f2f9f9',
          100: '#dcf1f0',
          200: '#bce4e3',
          300: '#8ed0cf',
          400: '#58b6b5',
          500: '#3a9b9a',
          600: '#2f7f7e',
          700: '#2a6665',
          800: '#265353',
          900: '#234746',
          950: '#112a29',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdb89',
          300: '#ffc04d',
          400: '#ffa41c',
          500: '#f98307',
          600: '#dd6302',
          700: '#b74306',
          800: '#94330c',
          900: '#792a0d',
          950: '#461403',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      boxShadow: {
        card: '0 2px 8px -1px rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};