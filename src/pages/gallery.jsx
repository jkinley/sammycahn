import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import { graphql } from 'gatsby'



const gallery = ({data}) => {
	const images = data.allFile.edges.map(({ node }) => node.childImageSharp)

	//const captionsArr = ["test", "test 1", "test 3", "", "", "", "", ""];

	// const captions = captionsArr.map((caption, index) => 
	// 	<h1>caption</h1>	
	// )

	return (
		<Layout>
			<SEO title="Gallery" />
			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">	
					<h1>Gallery</h1>
				</div>
			</PageTitle>

			<GalleryWrap>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<Gallery images={images} title="How about that?" />
				</div>
			</GalleryWrap>
		</Layout>
	)
}

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
const PageTitle= styled.section`
	background-color: #eaeaea;
	padding: 2rem;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
`
const GalleryWrap = styled.section`
	padding: 3rem 0;
`
export default gallery
