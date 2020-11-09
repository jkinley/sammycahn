import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import {graphql} from 'gatsby'
import HeroImage from '../components/HeroImage'
import Quote from '../components/Quote'

export default ({data}) => (
  <Layout>
    <SEO title="Home" />

		<HeroImage home={true} img={data.bgImage.childImageSharp.fluid} />
	
		<Quote id={2} />

		<Section>
			<Heading>Introduction</Heading>
			<Text>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.</Text>
		</Section>

  </Layout>
)

const Section = styled.p`
	padding: 5rem;
`


const Heading = styled.h1`
	font-family: 'Montserrat';
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 0.7rem;
`
const Text = styled.p`
	font-size: 1;
	margin-bottom: 1rem;
	font-family: 'Open Sans';
`

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