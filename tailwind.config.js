/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        brand: 'var(--color-brand)', // Readable name for primary text color
        textSecondary: 'var(--color-text-secondary)', // Readable name for secondary text color
      },

    },
  },
  plugins: [],
}

