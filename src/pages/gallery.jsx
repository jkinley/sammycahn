import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import { graphql } from 'gatsby'



const gallery = ({data}) => {
	const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

	const captionsArr = ["test", "test 1", "test 3", "", "", "", "", ""];

	// const captions = captionsArr.map((caption, index) => 
	// 	<h1>caption</h1>	
	// )

	return (
		<Layout>
			<div className="container mx-auto px-12">
				<Title>Gallery</Title>
				<Gallery images={images} title="How about that?" />

			</div>
		</Layout>
	)
}

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

export const query = graphql`
  query ImagesForGallery {
    allFile(filter: {relativeDirectory: {eq: "sammy"}}) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
						}
					}
        }
      }
    }
  }
`

export default gallery
