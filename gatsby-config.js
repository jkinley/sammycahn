module.exports = {
	
	siteMetadata: {
		title: `Sammy Cahn`,
		description: `The official website for the songwriter Sammy Cahn.`,
		url: `https://sammycahnmusic.com`,
		author: "Jeff Kinley",
		copyright: `Sammy Cahn Music Company. All Rights Reserved.`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		`gatsby-transformer-json`,
		`gatsby-plugin-playground`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Sammy Cahn`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `teal`,
				showSpinner: true,
			},
		},
	],
};