import React from 'react';
import Layout from '../layouts/layout';
import Seo from "../components/seo";
import Products from '../components/store/products';
import PageTitle from '../components/common/page-title';

const Store = () => {
  return (
    <Layout>
			<Seo title="Store" />
			<PageTitle title="Store" />
      <Products />
    </Layout>
  )
};

export default Store;
