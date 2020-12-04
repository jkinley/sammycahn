import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import Gallery1 from "../components/gallery/Gallery1"
import Gallery2 from "../components/gallery/Gallery2"
import Quote from "../components/common/Quote"

const photos = () => (
    <Layout>
        <SEO title="Photos" />

        <PageTitle>
            <div className="container mx-auto px-8 lg:px-24 xl:px-48">	
                <h1>Gallery</h1>
            </div>
        </PageTitle>

        
        <Gallery1 />
        <Quote id={5} />

        <Gallery2 />

    </Layout>
)

const PageTitle= styled.section`
	background-color: #eaeaea;
	padding: 2rem;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
`

export default photos



// export const query = graphql`
// {
//     images:allFile(filter: {relativeDirectory: {eq: "sammy"}}) {
//         edges {
//             node {
//                 childImageSharp {
//                     thumb: fluid(maxWidth: 300, maxHeight: 300) {
//                         ...GatsbyImageSharpFluid
//                     }
//                     full: fluid(maxWidth: 1024) {
//                         ...GatsbyImageSharpFluid
// 			        }
// 		        }
//             }
//         }
//     }
// }
// `
