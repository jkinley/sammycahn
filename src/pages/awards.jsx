import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
//import bgImage from "../images/oscar.png"
import awardsList from '../constants/awardsList'
import placeholder from '../../src/images/movies/movie-placeholder.png'

const awards = () => {
	return (
		<Layout>
			<SEO title="Awards" />

			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Awards</h1>
				</div>
			</PageTitle>
			
			<Awards>
			<div className="container mx-auto px-8">
				<Grid>
					{
						awardsList.map((award) => {
							return (
								<li>
									<SongName>{award.song}</SongName>
									<AwardWrap>

										{
											award.image ? 

											<img width="125px" height="auto" src={award.image} alt="" /> :
											<div>
												<img width="125px" height="auto" src={placeholder} alt="" />
											</div>
											
										}
										
										<div>
											<p>Award: {award.award}</p>
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
			</Awards>
		</Layout>
	)
}


const PageTitle= styled.section`
	padding: 2rem;
	background: 
		linear-gradient( #eaeaea, #ccc) no-repeat;
	display: flex;
	align-items: center;
`

const Grid = styled.ul`
	display: grid;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`
const SongName = styled.h2`
	
	font-weight: bold;
	margin-bottom: 0.5rem;
`

const Awards = styled.section`
	padding: 3rem 0;
`

const AwardWrap = styled.div`
	display: flex;
	img {
		margin-right: 1rem;
	}
	p {
		margin-bottom: 0.5rem;
	}
`

export default awards
