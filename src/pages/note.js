import React from 'react';
import Layout from '../layouts/layout';
import { Seo } from "../components/seo";
import Quote from '../components/common/quote';
import TitaNote from '../components/note/tita-note';
import PageTitle from '../components/common/page-title';

export const Head = () => (
  <Seo title="A Note from Tita Cahn" />
);

const Note = () => {
  return (
    <Layout>
      <PageTitle title="A Note from Tita Cahn" />
      <TitaNote />
      <Quote id={4} />
    </Layout>
  );
};

export default Note;