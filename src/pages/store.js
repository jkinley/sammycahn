import React from 'react';
import Layout from '../layouts/layout';
import SEO from "../components/seo";
import Products from '../components/store/products';
import PageTitle from '../components/common/page-title';

const Store = () => {
  return (
    <Layout>
			<SEO title="Store" />
			<PageTitle title="Store" />
      <Products />
    </Layout>
  )
};

export default Store;
