import React from 'react';
import Layout from '../layouts/layout';
import Seo from '../components/seo';
import Quote from '../components/common/quote';
import Intro from '../components/bio/intro';
import Second from '../components/bio/second';
import Third from '../components/bio/third';
import Fourth from '../components/bio/fourth';
import Fifth from '../components/bio/fifth';
import PageTitle from '../components/common/page-title';

const Bio = () => {
	return (
		<Layout>
			<Seo title="Biography" />
      <PageTitle title="Biography"/>
			<Intro />
			<Second />
			<Quote id={6} />
			<Third />
			<Fourth />
			<Quote id={1} />
			<Fifth />

  	</Layout>
	);
};

export default Bio;