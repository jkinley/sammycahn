const Url = 'https://sammycahnmusic.com';

module.exports = {
	
	siteMetadata: {
    siteUrl: Url,
		title: `Sammy Cahn Music`,
		description: `The official website for the songwriter Sammy Cahn.`,
		author: "Jeff Kinley",
		copyright: `Sammy Cahn Music Company. All Rights Reserved.`,
	},
	plugins: [
    `gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
			},
		},
		`gatsby-transformer-json`,
		`gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
		`gatsby-plugin-sitemap`,
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
				pluginConfig: {
          head: true,
        },
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