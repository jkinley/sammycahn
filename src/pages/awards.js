import React from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import AcademyWinners from '../components/awards/academy-winners';
import AcademyNominations from '../components/awards/academy-nominations';
import GrammyAwards from '../components/awards/grammy-awards';
import GoldenGlobes from '../components/awards/golden-globes';
//import {FaTrophy} from 'react-icons/fa'

const Awards = () => {
	return (
		<Layout>
			<SEO title="Awards & Nominations" />
			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Awards & Nominations</h1>
				</div>
			</PageTitle>
        <AcademyWinners />
        <AcademyNominations />
        <GrammyAwards />
        <GoldenGlobes />
		</Layout>
	)
}

const PageTitle= styled.section`
	padding: 2rem 0;
	background: linear-gradient( to bottom, #eaeaea, #e3e3e3) no-repeat;
	display: flex;
	align-items: center;
`;

export default Awards