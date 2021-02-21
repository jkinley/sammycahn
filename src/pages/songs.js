import React,{useState} from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import bgImage from "../images/piano.png";
import styled from 'styled-components';
import AppleMusic from '../components/songs/apple-music'
import Spotify from '../components/songs/spotify'

const Songs = () => {
  const [selected, setSelected] = useState('apple');

	return (
		<Layout>
			<SEO title="Songs" />

  
			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Songs</h1>
				</div>
			</PageTitle>
			
        <div className="container mx-auto p-4 m-8 bg-gray-300 rounded flex justify-end">
            <p>Music Service: </p>  
            
            <label className="cursor-pointer ml-4 ">
              <input 
                type="radio"
                className="form-radio focus:ring-0"
                name="provider" 
                value="apple" 
                checked={selected === 'apple'}
                onClick={() => setSelected('apple')}
              />
              <span className="ml-1">Apple Music</span>
            </label>

            <label className="cursor-pointer ml-4">
              <input type="radio" 
                className="form-radio focus:ring-0"
                name="provider" 
                value="spotify"
                checked={selected === 'spotify'}
                onClick={() => setSelected('spotify')}
              />
              <span className="ml-1">Spotify</span>
            </label>
            
          
      
        </div>

      {
        selected === 'apple' ? 
        <AppleMusic /> :
        <Spotify />
      }
		</Layout>
	)
}


const PageTitle= styled.section`
	background: url('${bgImage}') no-repeat, linear-gradient( #eaeaea, #ccc) no-repeat;
	background-size: 34vh, cover;
	background-position: right center;
	min-height: 25vh;
	display: flex;
	align-items: center;
`;

export default Songs
