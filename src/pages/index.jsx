import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import {graphql} from 'gatsby'
import HeroImage from '../components/HeroImage'

export default ({data}) => (
  <Layout>
    <SEO title="Home" />

		<HeroImage home={true} img={data.bgImage.childImageSharp.fluid} />
  
  </Layout>
)


const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "sammy-1.jpg"}) {
			childImageSharp {
				fluid(quality:90,maxWidth:2600) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`