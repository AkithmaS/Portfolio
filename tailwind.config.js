/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#121212',   // near-black — matches reference site bg
        secondary: '#1e1e2e',   // dark surface — card/section backgrounds
        accent:    '#b026ff',   // vivid purple — matches reference site accent
        accentAlt: '#e040fb',   // magenta-purple — gradient partner
        accentBlue:'#4fc3f7',   // light blue — occasional highlights
        textPrimary:   '#ffffff',
        textSecondary: '#b0b0c0',
        textMuted:     '#6b7280',
        border:    '#2a2a3e',
        success:   '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(176,38,255,0.3), transparent)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
        // Corner color-blob background — matches reference site
        'blob-tl': 'radial-gradient(ellipse 60% 60% at 0% 0%, rgba(176,38,255,0.35), transparent)',
        'blob-br': 'radial-gradient(ellipse 60% 60% at 100% 100%, rgba(224,64,251,0.25), transparent)',
      },
      animation: {
        'float':           'float 6s ease-in-out infinite',
        'pulse-slow':      'pulse 4s ease-in-out infinite',
        'fade-in-up':      'fadeInUp 0.6s ease-out forwards',
        'fade-in':         'fadeIn 0.5s ease-out forwards',
        'slide-in-left':   'slideInLeft 0.6s ease-out forwards',
        'typing':          'typing 3s steps(30) forwards',
        // Profile photo ring animations
        'spin-cw':         'spinCW 8s linear infinite',
        'spin-ccw':        'spinCCW 12s linear infinite',
        'ring-pulse':      'ringPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        typing: {
          from: { width: '0' },
          to:   { width: '100%' },
        },
        spinCW: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        spinCCW: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(-360deg)' },
        },
        ringPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.04)' },
        },
      },
      boxShadow: {
        'glow':       '0 0 40px rgba(176,38,255,0.5)',
        'glow-sm':    '0 0 20px rgba(176,38,255,0.3)',
        'glow-lg':    '0 0 80px rgba(176,38,255,0.4)',
        'card':       '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 40px rgba(176,38,255,0.3)',
        'photo':      '0 0 0 4px rgba(176,38,255,0.4), 0 0 60px rgba(176,38,255,0.3)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
