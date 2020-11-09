import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ContactForm from '../components/ContactForm'
import styled from "@emotion/styled";

const contact = () => (
  <Layout>
    <SEO title="Contact" />

		<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Contact</h1>
				</div>
			</PageTitle>

		<ContactWrap>
			<div className="container mx-auto px-8">
				<ContactForm />
			</div>
		</ContactWrap>
		
  </Layout>
)

const PageTitle= styled.section`
	background-color: #ccc;
	padding: 2rem;
	min-height: 15vh;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
	& h1 {
		font-size: 2.8rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}
`

const ContactWrap = styled.section`
	padding: 3rem 0;
`

export default contact