import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
//import styled from "@emotion/styled";
import {graphql} from 'gatsby'
import HeroImage from '../components/HeroImage'
import Quote from '../components/Quote'
import SongBook from "../components/home/SongBook";
import Dictionary from "../components/home/Dictionary"

export default ({data}) => (
  <Layout>
    <SEO title="Home" />

		<HeroImage home={true} img={data.bgImage.childImageSharp.fluid} />
		<Quote id={2} />
		<SongBook />
		<Dictionary />
		
  </Layout>
)

export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "sammy/sammy-portrait-1.jpg"}) {
			childImageSharp {
				fluid(quality:90,maxWidth:2600) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`