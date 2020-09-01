import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"

import styled from "@emotion/styled";

const about = () => {
	return (
		<Layout>
			<SEO title="About" />
			<Title>About</Title>

			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.</p>
  </Layout>
	)
}

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

export default about
