import React,{useState} from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
//import bgImage from "../images/piano.png";
import styled from 'styled-components';
import Switcher from '../components/songs/switcher';
import AppleMusic from '../components/songs/apple-music';
import Spotify from '../components/songs/spotify';

const Songs = () => {
  const [checked, setChecked] = useState('Apple Music');

  const handleClick = (e) => {
    //console.log(e.target.value);
    setChecked(e.target.value);
  }

	return (
		<Layout>
			<SEO title="Songs" />

			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Songs</h1>
				</div>
			</PageTitle>
			
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
	)
}

const PageTitle= styled.section`
	padding: 2rem 0;
	background: linear-gradient( to bottom, #eaeaea, #e3e3e3) no-repeat;
	display: flex;
	align-items: center;
`;

// const PageTitle= styled.section`
// 	background: url('${bgImage}') no-repeat, linear-gradient( #eaeaea, #ccc) no-repeat;
// 	background-size: 34vh, cover;
// 	background-position: right center;
// 	min-height: 25vh;
// 	display: flex;
// 	align-items: center;
// `;

export default Songs
