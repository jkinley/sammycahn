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
    `gatsby-plugin-styled-components`,
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
		},{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-6T0L6VSW77", // Google Analytics / GA
        ],
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
		}
	],
};