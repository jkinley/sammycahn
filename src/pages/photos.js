import React from 'react';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Gallery1 from '../components/gallery/gallery-1';
import Gallery2 from '../components/gallery/gallery-2';
import Quote from '../components/common/quote';
import PageTitle from '../components/common/page-title';

const Photos = () => (
  <Layout>
    <SEO title="Photos" />
    <PageTitle title="Photos" />
    <Gallery1 />
    <Quote id={5} />
    <Gallery2 />
  </Layout>
);

export default Photos;