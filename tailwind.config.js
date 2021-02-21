const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'body': ['"Open Sans"', 'sans-serif']
		},
		extend: {
			colors: {
				brand: {
					gold: '#b09a50',
					darkgold: '#8e7a3e',
					black: '#231f20',
					lightgray: '#eaeaea'
				}
				
			}
		}
  },
  variants: {
		margin: ['responsive', 'last', 'first'],

	},
  plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
	future: {
    removeDeprecatedGapUtilities: true,
  },
}