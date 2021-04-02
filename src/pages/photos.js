import React from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import Gallery1 from "../components/gallery/gallery-1";
import Gallery2 from "../components/gallery/gallery-2";
import Quote from "../components/common/quote";

const Photos = () => (
  <Layout>
    <SEO title="Photos" />
    <PageTitle>
        <div className="container mx-auto px-8">	
            <h1>Photos</h1>
        </div>
    </PageTitle>
    <Gallery1 />
    <Quote id={5} />
    <Gallery2 />
  </Layout>
)

const PageTitle= styled.section`
	padding: 2rem 0;
	background: linear-gradient( to bottom, #eaeaea, #e3e3e3) no-repeat;
	display: flex;
	align-items: center;
`;

export default Photos