import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"

import songList from '../constants/songs'
import styled from "@emotion/styled";

const songs = () => {
	return (
		<Layout>
			<SEO title="Songs" />
			
			<section className="container mx-auto px-8">
			<Title>Songs</Title>
				<SongGrid>
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
			</section>


		</Layout>
	)
}

const SongGrid = styled.ul`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

const SongTitle = styled.h2`
	font-size: 1.6rem;
	font-weight: light;
	color: #444;
`
const Performer = styled.p`
	font-size: 1.1rem;
	font-weight: bold;
	color: slateblue;
`

export default songs
