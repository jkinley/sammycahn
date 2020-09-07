import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";

const bio = () => {
	return (
		<Layout>
			<SEO title="Bio" />
			<Title>Bio</Title>
			<p>Placeholder for Bio Page</p>
  </Layout>
	)
}

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

export default bio
