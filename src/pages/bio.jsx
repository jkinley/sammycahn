import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import bgImage from "../images/paper1.jpg"
import Intro from "../components/bio/Intro"

const bio = () => {
	return (
		<Layout>
			<SEO title="Bio" />
			
			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Bio</h1>
				</div>
			</PageTitle>

			<Intro />


  	</Layout>
	)
}


const PageTitle= styled.section`
	//background: url('${bgImage}');
	background-color: #ccc;
	min-height: 15vh;
	display: flex;
	align-items: center;
	& h1 {
		font-size: 2.8rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}
`



export default bio
