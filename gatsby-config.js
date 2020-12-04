module.exports = {
  siteMetadata: {
    title: `Sammy Cahn`,
    description: ``,
    author: `Jeff Kinley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	`gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data`,
        }
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
    
	// {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
		// 				family: `Lora`,
		// 				variants: [`300`, `400`, `700`]
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`300`, `400`, `700`]
		// 			},
		// 			{
    //         family: `Raleway`,
    //         variants: [`300`, `400`, `700`]
    //       },
    //     ],
    //   },
    // },
		{
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `teal`,
				showSpinner: true,
			},
		}
  ],
}
