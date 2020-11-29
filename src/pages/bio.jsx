import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import bgImage from "../images/sammy-hero-img.png"
import Quote from '../components/Quote'

// page sections
import Intro from "../components/bio/Intro"
import Second from "../components/bio/Second"
import Third from "../components/bio/Third"
import Fourth from "../components/bio/Fourth"
import Fifth from "../components/bio/Fifth"

const bio = () => {
	return (
		<Layout>
			<SEO title="Biography" />
			
			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Biography</h1>
				</div>
			</PageTitle>

			<Intro />
			<Second />
			<Quote id={6} />
			<Third />
			<Fourth />
			<Quote id={1} />
			<Fifth />

  	</Layout>
	)
}


const PageTitle= styled.section`
	//background: url('${bgImage}');
	//background-color: #eaeaea;

	background: #eaeaea url('${bgImage}') no-repeat;
	background-size: 40vh;
	background-position: 90% center;

	min-height: 25vh;
	display: flex;
	align-items: center;
`



export default bio
