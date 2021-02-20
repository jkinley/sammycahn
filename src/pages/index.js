import React from "react";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {graphql} from 'gatsby';
import HeroImage from '../components/home/hero-image';
import Quote from '../components/common/quote';
//import Swipe from "../components/Swipe"

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
		<HeroImage home={true} img={data.bgImage.childImageSharp.fluid} />
		<Quote id={2} />
  </Layout>
)

export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "sammy/sammy-portrait-1.jpg"}) {
			childImageSharp {
				fluid(quality:90,maxWidth:1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`