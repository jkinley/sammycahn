import React from 'react';
import Layout from '../layouts/layout';
import SEO from "../components/seo";
import styled from 'styled-components';
import Products from '../components/store/products';

const Store = () => {
  return (
    <Layout>
			<SEO title="Store" />

			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Store</h1>
				</div>
			</PageTitle>

      <Products />
      
    </Layout>
  )
};

const PageTitle= styled.section`
	background-color: #eaeaea;
	padding: 2rem 0;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
`

export default Store;
