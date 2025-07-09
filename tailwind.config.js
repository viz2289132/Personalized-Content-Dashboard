// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ✅ Now pointing to the root-level app directory
    './src/**/*.{js,ts,jsx,tsx}', // for components, context, etc.
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
