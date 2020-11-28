import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import bgImage from "../images/piano.png"
import songList from '../constants/songs'
import styled from "@emotion/styled";

const songs = () => {
	return (
		<Layout>
			<SEO title="Songs" />

			<PageTitle>
				<div className="container mx-auto px-8">
				<h1>Songs</h1>
				</div>
			</PageTitle>
			
			<Songs>
				<SongGrid className="container mx-auto px-8">

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
	& h1 {
		font-size: 2.8rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}
`
const Songs = styled.section`
	padding: 3rem 0;
`


const SongGrid = styled.ul`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const SongTitle = styled.h2`
	font-size: 1.3rem;
	font-weight: light;
	color: #444;
`
const Performer = styled.p`
	font-size: 1.1rem;
	font-weight: bold;
	color: #b09a50;
`

export default songs
