import React from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import bgImage from "../images/sammy-hero-img.png";
import Quote from '../components/common/quote';
import Intro from "../components/bio/intro";
import Second from "../components/bio/second";
import Third from "../components/bio/third";
import Fourth from "../components/bio/fourth";
import Fifth from "../components/bio/fifth";

const Bio = () => {
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
	background: #eaeaea url('${bgImage}') no-repeat;
	background-size: 40vh;
	background-position: 90% center;

	min-height: 25vh;
	display: flex;
	align-items: center;
`;

export default Bio
