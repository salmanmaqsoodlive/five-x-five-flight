/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: '#050a14',
          900: '#050a14',
          800: '#080f1f',
          700: '#0d1929',
          600: '#122035',
          500: '#1a2d4a',
        },
        aviation: {
          blue: '#0050b3',
          sky: '#0ea5e9',
          light: '#38bdf8',
          deep: '#003380',
        },
        danger: {
          DEFAULT: '#cc0000',
          light: '#ef4444',
          dark: '#990000',
        },
        radar: '#00ff88',
        silver: '#94a3b8',
        cockpit: '#1a2744',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
        mono: ['var(--font-share-tech)', 'monospace'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'military': '0.15em',
      },
      animation: {
        'radar-spin': 'radarSpin 4s linear infinite',
        'altitude': 'altitude 3s ease-in-out infinite',
        'flight-path': 'flightPath 12s linear infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
        'sweep': 'radarSpin 4s linear infinite',
      },
      keyframes: {
        radarSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        altitude: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        flightPath: {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(calc(100vw + 200px))', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      backgroundImage: {
        'cockpit-gradient': 'linear-gradient(180deg, #050a14 0%, #0d1929 50%, #050a14 100%)',
        'blue-glow': 'radial-gradient(ellipse at center, rgba(0,80,179,0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'aviation-glow': '0 0 30px rgba(0,80,179,0.4)',
        'danger-glow': '0 0 20px rgba(204,0,0,0.4)',
        'radar-glow': '0 0 15px rgba(0,255,136,0.5)',
      },
    },
  },
  plugins: [],
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

