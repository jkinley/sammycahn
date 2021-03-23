import React, {component} from "react";
import { Link } from "gatsby";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {graphql} from 'gatsby';
import HeroImage from '../components/home/hero-image';
//import Quote from '../components/common/quote';
import Swipe from "../components/Swipe"

const Home = ({data}) => {

  const bgStack = [
    data.bgImage.childImageSharp.fluid,
    `linear-gradient(to top right, #f5f5f5, #ccc)`
  ]

  return(
    <Layout>
      <SEO title="Home" />
      <HeroImage home={true} img={bgStack} />
      <section className="bg-white py-12">
        <div class="container mx-auto px-8 flex flex-col">
          <h2 className="mb-2">About Sammy</h2>
          <p className="mb-8">Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis.</p>
          <p className="mb-8">Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</p>
          <Link to="/bio" className="btn ml-auto" component={Link}>Read More</Link>
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