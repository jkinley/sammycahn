import React from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import Quote from '../components/common/quote';
import TitaNote from '../components/note/tita-note';

const NoteFromTitaCahn = () => {
  return (
    <Layout>
      <SEO title="A Note from Tita Cahn" />
      <PageTitle>
				<div className="container mx-auto px-8">
					<h1>A Note from Tita Cahn</h1>
				</div>
      	</PageTitle>

        <TitaNote />
        <Quote id={4} />
       
    </Layout>
  );
};

const PageTitle = styled.section`
	padding: 2rem 0;
	background: linear-gradient( to bottom, #eaeaea, #e3e3e3) no-repeat;
	display: flex;
	align-items: center;
`;




export default NoteFromTitaCahn;
