/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5b8fc',
          400: '#8b93f8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        accent: {
          teal: '#14b8a6',
          emerald: '#10b981',
          amber: '#f59e0b',
          orange: '#f97316',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron Variable', 'Orbitron', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'electric': 'electric 1.5s ease-in-out infinite alternate',
        'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
        'data-flow': 'data-flow 3s linear infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(124, 109, 242, 0.5), 0 0 40px rgba(124, 109, 242, 0.3), 0 0 60px rgba(124, 109, 242, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(217, 70, 239, 0.6), 0 0 60px rgba(217, 70, 239, 0.4), 0 0 90px rgba(217, 70, 239, 0.2)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        electric: {
          '0%': { 
            textShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff',
            filter: 'hue-rotate(0deg)'
          },
          '100%': { 
            textShadow: '0 0 20px #d946ef, 0 0 30px #d946ef, 0 0 40px #d946ef',
            filter: 'hue-rotate(90deg)'
          },
        },
        'cyber-pulse': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)',
            filter: 'brightness(1) saturate(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)',
            filter: 'brightness(1.2) saturate(1.3)'
          },
        },
        'data-flow': {
          '0%': { 
            transform: 'translateX(-100%) scaleX(0)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateX(0%) scaleX(1)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%) scaleX(0)',
            opacity: '0'
          },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateY(0px)',
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '25%': { 
            opacity: '1',
            transform: 'translateY(-2px)',
            filter: 'hue-rotate(90deg) brightness(1.1)'
          },
          '50%': { 
            opacity: '0.9',
            transform: 'translateY(0px)',
            filter: 'hue-rotate(180deg) brightness(1.2)'
          },
          '75%': { 
            opacity: '1',
            transform: 'translateY(2px)',
            filter: 'hue-rotate(270deg) brightness(1.1)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': `
          linear-gradient(rgba(124, 109, 242, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124, 109, 242, 0.1) 1px, transparent 1px)
        `,
        'neural-network': `
          radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(57, 255, 20, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 60% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)
        `,
        'holographic': `
          linear-gradient(45deg, 
            rgba(124, 109, 242, 0.1) 0%, 
            rgba(217, 70, 239, 0.1) 25%, 
            rgba(0, 245, 255, 0.1) 50%, 
            rgba(57, 255, 20, 0.1) 75%, 
            rgba(124, 109, 242, 0.1) 100%
          )
        `,
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 109, 242, 0.5)',
        'glow-lg': '0 0 40px rgba(124, 109, 242, 0.4)',
        'electric': '0 0 30px rgba(0, 245, 255, 0.6)',
        'neon': '0 0 20px rgba(57, 255, 20, 0.5)',
        'cyber': '0 8px 32px rgba(124, 109, 242, 0.3), 0 0 0 1px rgba(124, 109, 242, 0.1)',
        'neural': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 20px rgba(124, 109, 242, 0.2)',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};