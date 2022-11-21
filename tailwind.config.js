const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'body': ['"Open Sans"', 'sans-serif'],
      'display': ['Cinzel', 'sans-serif']
		},
		extend: {
			colors: {
				brand: {
          lightgold: '#b5a15c',
					gold: '#b09a50',
					darkgold: '#8e7a3e',
					black: '#231f20',
					lightgray: '#eaeaea',
          gray: '#ccc'
				},
        gray: colors.stone,
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