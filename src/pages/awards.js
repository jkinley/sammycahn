import React from 'react';
import Layout from "../layouts/layout";
import { Seo } from "../components/seo";
import AcademyWinners from '../components/awards/academy-winners';
import AcademyNominations from '../components/awards/academy-nominations';
import GrammyAwards from '../components/awards/grammy-awards';
import GoldenGlobes from '../components/awards/golden-globes';
import PageTitle from '../components/common/page-title';
	
export const Head = () => (
  <Seo title="Awards & Nominations"/>
);

const Awards = () => {
	return (
		<Layout>
      <PageTitle title="Awards & Nominations"/>
        <AcademyWinners />
        <AcademyNominations />
        <GrammyAwards />
        <GoldenGlobes />
		</Layout>
	)
}

export default Awards;