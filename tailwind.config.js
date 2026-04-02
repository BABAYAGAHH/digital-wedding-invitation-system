/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fffaf2',
        champagne: '#eadbc2',
        gold: '#b89b6c',
        ink: '#372c22',
        cocoa: '#5d4736',
        rose: '#b98372',
        sage: '#6f7c67',
        mist: '#f6efe5',
      },
      boxShadow: {
        luxe: '0 22px 60px rgba(71, 54, 33, 0.13)',
        soft: '0 14px 34px rgba(71, 54, 33, 0.08)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        champagne:
          'linear-gradient(135deg, rgba(255,250,242,1) 0%, rgba(247,240,227,1) 45%, rgba(239,226,205,1) 100%)',
        glow:
          'radial-gradient(circle at top, rgba(255,248,241,0.98), rgba(255,248,241,0.75) 38%, rgba(255,250,242,0) 76%)',
      },
    },
  },
  plugins: [],
};
