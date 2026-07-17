/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#0B2545',
          navy: '#0F172A',
          blue: '#2A78D6',
          cyan: '#1BAF9A',
          teal: '#0E7C86',
          green: '#1BAF7A',
          mist: '#F4F8FA',
          fog: '#EAF1F5',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11, 37, 69, 0.06), 0 8px 24px rgba(11, 37, 69, 0.08)',
        card: '0 1px 3px rgba(11, 37, 69, 0.08)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fill-drop': {
          '0%': { opacity: '0', transform: 'scale(0.6)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fill-drop': 'fill-drop 0.4s ease-out both',
        'draw-line': 'draw-line 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
