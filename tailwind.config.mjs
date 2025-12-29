/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#FEFCF9',
          light: '#FFFBF5',
          warm: '#F8F5F0',
        },
        primary: {
          blue: '#0066CC',
          'blue-50': '#E6F0FA',
          'blue-100': '#CCE1F5',
          'blue-600': '#0052A3',
          'blue-900': '#002952',
          yellow: '#FFCC00',
          'yellow-100': '#FFF5CC',
          pink: '#FF6B9D',
          'pink-50': '#FFF0F5',
        },
        text: {
          DEFAULT: '#1A1A1A',
          secondary: '#2D2D2D',
          muted: '#4A4A4A',
        },
      },
    },
  },
  plugins: [],
}

