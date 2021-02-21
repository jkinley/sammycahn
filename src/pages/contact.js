import React from "react";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import ContactForm from '../components/contact/contact-form';
import Address from '../components/contact/address';
import styled from 'styled-components';
import Quote from "../components/common/quote";
import bgImage from "../images/sammy-hero-img.png";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

		<PageTitle>
			<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Contact</h1>
				</div>
			</PageTitle>

		<ContactWrap className="flex-1">
			<div className="container mx-auto px-8 lg:px-24 xl:px-48">
				<Grid >
					<ContactForm />
					<Address />
				</Grid>
			</div>
		</ContactWrap>
		
		<Quote id={3} />

  </Layout>
)

const PageTitle= styled.section`
	background-color: #eaeaea;
	padding: 2rem;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
`

const ContactWrap = styled.section`
	background: url('${bgImage}') no-repeat;
	background-size: 35%;
	background-position: right bottom;
    padding: 3rem 0;
`

const Grid = styled.div`
	
	display: grid;
	grid-row-gap: 3rem;
	grid-template-columns: 1fr;
	@media (min-width: 960px) {
		grid-column-gap: 3rem;
		grid-template-columns: 2fr minmax(300px, 1fr);
	}
`

export default Contact