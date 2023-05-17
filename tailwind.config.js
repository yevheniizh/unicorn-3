module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans'],
      },
      screens: {
        sm: '600px',
        lg: '900px',
        xl: '1200px',
      },
      boxShadow: {
        newsLetter:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)',
      },
      gridTemplateRows: {
        'collapsed': '0fr',
        'expanded': '1fr',
      }
  },
  },
  // plugins: [require('@tailwindcss/forms')],
}
