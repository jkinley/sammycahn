import React from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import bgImage from "../images/piano.png";
import songList from '../constants/songs';
import styled from 'styled-components';

const songs = () => {
	return (
		<Layout>
			<SEO title="Songs" />

			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Songs</h1>
				</div>
			</PageTitle>
			
			<Songs>
				<SongGrid className="container mx-auto px-8 lg:px-24 xl:px-48">

					{
						songList.map((song, index) => {
							return (
								<li key={index}>
									<SongTitle>{song.title}</SongTitle>
									<Performer>{song.performer}</Performer>
								</li>
							)
						})
					}
				</SongGrid>
			</Songs>
		</Layout>
	)
}


const PageTitle= styled.section`
	background: 
			url('${bgImage}') no-repeat,
			linear-gradient( #eaeaea, #ccc) no-repeat;
	background-size: 34vh, cover;
	background-position: right center;
	min-height: 25vh;
	display: flex;
	align-items: center;
`
const Songs = styled.section`
	padding: 3rem 0;
`
const SongGrid = styled.ul`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
const SongTitle = styled.p`

	font-weight: light;
	color: #444;
`
const Performer = styled.p`

	font-weight: bold;
	color: #b09a50;
`

export default songs
