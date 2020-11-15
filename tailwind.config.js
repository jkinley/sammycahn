module.exports = {
	purge: {
		content: [
			'src/**/*.js',
			'src/**/*.jsx',
			'public/**/*.html',
		]
	},
  theme: {
    extend: {},
  },
  variants: {
		margin: ['responsive', 'last', 'first'],

	},
  plugins: [
	
	],
	future: {
    removeDeprecatedGapUtilities: true,
  },
}