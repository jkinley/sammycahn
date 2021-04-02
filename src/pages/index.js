import React from "react";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {graphql} from 'gatsby';
import HeroImage from '../components/home/hero-image';
import Swipe from "../components/swipe";
import AboutSammy from '../components/home/about-sammy';
import TitaNote from '../components/home/tita-note';

const Home = ({data}) => {

  const bgStack = [
    data.bgImage.childImageSharp.fluid,
    `linear-gradient(to top right, #f5f5f5, #ccc)`
  ]

  return(
    <Layout>
      <SEO title="Home" />
      <HeroImage home={true} img={bgStack}>
        <div className="hidden md:block container mx-auto px-8">
          <div className="w-1/3">
            <p className="text-2xl mb-4">A word is only as good as the note it sits under, and I've been blessed with some great notes.</p>
            <p className="text-right p-3">—Sammy Cahn</p>
          </div>
        </div>
 
      </HeroImage>

      <section className="bg-white py-12">
        <div className="container mx-auto px-8">

        <div className="grid gap-8 md:grid-cols-2">
          <AboutSammy />
          <TitaNote />
        </div>
          
        </div>
      </section>

      <Swipe />
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