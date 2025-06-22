// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom spacing for sidebar
      spacing: {
        '72': '18rem', // 288px for sidebar width
      }
    },
  },
  plugins: [
    // Custom plugin for sidebar-active variants
    function({ addVariant }) {
      addVariant('sidebar-active', '.sidebar-active &')
    }
  ],
}