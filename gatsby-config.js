const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL


const siteUrl = 'https://sammycahnmusic.com';

module.exports = {
	
	siteMetadata: {
    siteUrl: siteUrl,
		title: `Sammy Cahn`,
		description: `The official website for the songwriter Sammy Cahn.`,
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
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