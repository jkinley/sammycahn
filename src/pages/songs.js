import React,{ useState } from 'react';
import Layout from "../layouts/layout";
import { Seo } from "../components/seo";
import Switcher from '../components/songs/switcher';
import AppleMusic from '../components/songs/apple-music';
import Spotify from '../components/songs/spotify';
import PageTitle from '../components/common/page-title';

export const Head = () => (
  <Seo title="Songs" />
);

const Songs = () => {
  const [checked, setChecked] = useState('Apple Music');

  const handleClick = (e) => {
    setChecked(e.target.value);
  }

	return (
		<Layout>
			<PageTitle title="Songs" />
			
      <section>
        <div className="container mx-auto px-8 py-8">
        <Switcher checked={checked} handleClick={handleClick} />
        {
          checked === 'Apple Music' ? 
          <AppleMusic /> :
          <Spotify />
        }
        </div>
      </section>
		</Layout>
	);
};

export default Songs;