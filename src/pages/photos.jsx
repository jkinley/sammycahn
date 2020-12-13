import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import Gallery1 from "../components/gallery/Gallery1"
import Gallery2 from "../components/gallery/Gallery2"
import Quote from "../components/common/Quote"

const photos = () => (
    <Layout>
        <SEO title="Photos" />

        <PageTitle>
            <div className="container mx-auto px-8 lg:px-24 xl:px-48">	
                <h1>Gallery</h1>
            </div>
        </PageTitle>

        
        <Gallery1 />
        <Quote id={5} />

        <Gallery2 />

    </Layout>
)

const PageTitle= styled.section`
	background-color: #eaeaea;
	padding: 2rem 0;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
`

export default photos