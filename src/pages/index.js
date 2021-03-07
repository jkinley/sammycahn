import React from "react";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {graphql} from 'gatsby';
import HeroImage from '../components/home/hero-image';
import Quote from '../components/common/quote';
//import Swipe from "../components/Swipe"

const Home = ({data}) => {

  const bgStack = [
    data.bgImage.childImageSharp.fluid,
    `linear-gradient(to top right, #f5f5f5, #ccc)`
  ]

  return(
    <Layout>
      <SEO title="Home" />
      <HeroImage home={true} img={bgStack} />
      <Quote id={2} />
    </Layout>

  )

}

export const query = graphql`
	query {
		bgImage: file(relativePath: {eq: "sammy-hero-img.png"}) {
			childImageSharp {
				fluid(quality:90,maxWidth:640) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

export default Home