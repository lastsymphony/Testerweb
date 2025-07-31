module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm Terracotta
        primary: {
          50: "#FDF6F2", // terracotta-50
          100: "#F9E8DC", // terracotta-100
          200: "#F2D1B9", // terracotta-200
          300: "#E8B496", // terracotta-300
          400: "#D68B61", // terracotta-400
          500: "#C4622D", // terracotta-500
          600: "#A04F24", // terracotta-600
          700: "#7C3C1B", // terracotta-700
          800: "#582A13", // terracotta-800
          900: "#34180B", // terracotta-900
          DEFAULT: "#C4622D", // terracotta-500
        },
        // Secondary Colors - Rice Field Green
        secondary: {
          50: "#F4F7F0", // rice-green-50
          100: "#E8EFE1", // rice-green-100
          200: "#D1DFC3", // rice-green-200
          300: "#BACFA5", // rice-green-300
          400: "#9AB57E", // rice-green-400
          500: "#7A9B57", // rice-green-500
          600: "#627C46", // rice-green-600
          700: "#4A5D35", // rice-green-700
          800: "#323E24", // rice-green-800
          900: "#1A1F12", // rice-green-900
          DEFAULT: "#7A9B57", // rice-green-500
        },
        // Accent Colors - Golden Sunset
        accent: {
          50: "#FDF9F0", // golden-sunset-50
          100: "#FAF2E1", // golden-sunset-100
          200: "#F5E5C3", // golden-sunset-200
          300: "#F0D8A5", // golden-sunset-300
          400: "#ECC478", // golden-sunset-400
          500: "#E8B04B", // golden-sunset-500
          600: "#BA8D3C", // golden-sunset-600
          700: "#8C6A2D", // golden-sunset-700
          800: "#5E471E", // golden-sunset-800
          900: "#30240F", // golden-sunset-900
          DEFAULT: "#E8B04B", // golden-sunset-500
        },
        // Background Colors
        background: "#FEFCF8", // warm-white
        surface: "#F5F2ED", // cream-surface
        // Text Colors
        text: {
          primary: "#2D3436", // warm-charcoal
          secondary: "#636E72", // balanced-gray
        },
        // Status Colors
        success: {
          50: "#F0FDF9", // fresh-green-50
          100: "#DCFCE7", // fresh-green-100
          200: "#BBF7D0", // fresh-green-200
          300: "#86EFAC", // fresh-green-300
          400: "#4ADE80", // fresh-green-400
          500: "#00B894", // fresh-green-500
          600: "#059669", // fresh-green-600
          700: "#047857", // fresh-green-700
          800: "#065F46", // fresh-green-800
          900: "#064E3B", // fresh-green-900
          DEFAULT: "#00B894", // fresh-green-500
        },
        warning: {
          50: "#FFFBEB", // gentle-amber-50
          100: "#FEF3C7", // gentle-amber-100
          200: "#FDE68A", // gentle-amber-200
          300: "#FCD34D", // gentle-amber-300
          400: "#FDCB6E", // gentle-amber-400
          500: "#F59E0B", // gentle-amber-500
          600: "#D97706", // gentle-amber-600
          700: "#B45309", // gentle-amber-700
          800: "#92400E", // gentle-amber-800
          900: "#78350F", // gentle-amber-900
          DEFAULT: "#FDCB6E", // gentle-amber-400
        },
        error: {
          50: "#FEF2F2", // warm-coral-50
          100: "#FEE2E2", // warm-coral-100
          200: "#FECACA", // warm-coral-200
          300: "#FCA5A5", // warm-coral-300
          400: "#F87171", // warm-coral-400
          500: "#E17055", // warm-coral-500
          600: "#DC2626", // warm-coral-600
          700: "#B91C1C", // warm-coral-700
          800: "#991B1B", // warm-coral-800
          900: "#7F1D1D", // warm-coral-900
          DEFAULT: "#E17055", // warm-coral-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(196, 98, 45, 0.08)',
        'card-hover': '0 8px 24px rgba(196, 98, 45, 0.08)',
        'button': '0 2px 4px rgba(196, 98, 45, 0.12)',
        'warm': '0 4px 12px rgba(196, 98, 45, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'gentle-bounce': 'gentleBounce 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}