import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";

const awards = () => {
	return (
		<Layout>
			<SEO title="Awards" />
			<Title>Awards</Title>

			<p>Placeholder for list of awards.</p>
		</Layout>
	)
}

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

export default awards
