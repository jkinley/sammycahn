module.exports = {
  siteMetadata: {
    title: `Sammy Cahn`,
    description: ``,
    author: `Jeff Kinley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-postcss`,
		{
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`]
          },
        ],
      },
    },
		{
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
		
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sammy Cahn`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `teal`,
				showSpinner: true,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-sass`,
  ],
}
