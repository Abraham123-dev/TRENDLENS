/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        background: '#020408', // Deepest void black/blue
        surface: '#0B101B',    // Card background
        surfaceHighlight: '#161F32',
        primary: {
          DEFAULT: '#ffffff',
          foreground: '#000000',
        },
        accent: {
          blue: '#2E90FA',     // Electric Blue
          darkBlue: '#004EEB',
          cyan: '#06b6d4',
        },
        text: {
          main: '#F2F4F7',
          muted: '#98A2B3',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(46, 144, 250, 0.15) 0%, transparent 50%)',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'widest': '0.1em',
      }
    },
  },
  plugins: [],
}
