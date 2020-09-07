import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";

const songs = () => {
	return (
		<Layout>
			<SEO title="Songs" />
			<Title>Songs</Title>
			<p>Placeholder for list of songs.</p>
		</Layout>
	)
}

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

export default songs
