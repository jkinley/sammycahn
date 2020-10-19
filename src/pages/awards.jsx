import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import awardsList from '../constants/awardsList'

const awards = () => {
	return (
		<Layout>
			<SEO title="Awards" />
			<div className="container mx-auto px-8">
				<Title>Awards</Title>
				<Grid>
					{
						awardsList.map((award) => {
							return (
								<li>
									<SongName>{award.song}</SongName>
									<AwardWrap>
										<img width="125px" height="auto" src={award.image} />
										<div>
											<p>Composer: {award.composer}</p> 
											<p>Artist: {award.artist}</p>
											<p>Film: {award.film}</p>
											<p>Date: {award.date}</p>
										</div>
									</AwardWrap>
								</li>
							)
						})
					}
				</Grid>
			</div>
		</Layout>
	)
}

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

const Grid = styled.ul`
	display: grid;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`
const SongName = styled.h2`
	font-size: 1.8rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`

const AwardWrap = styled.h2`
	display: flex;
	img {
		margin-right: 1rem;
	}
	p {
		margin-bottom: 0.5rem;
	}
`

export default awards
