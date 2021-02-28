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
	padding: 2rem 0;
	background: linear-gradient( to bottom, #eaeaea, #e3e3e3) no-repeat;
	display: flex;
	align-items: center;
`;

export default Store;
