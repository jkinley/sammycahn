import React from 'react'
import styled from "@emotion/styled";
import Image from '../../images/sammy/sammy-portrait-2.jpg'

const Fourth = () => {
	return (
		<Section>
			<div className="container mx-auto">
				<Grid>
					<Img src={Image} />
						<Text>
							<h2>Sammy and Frank</h2>
							<p>Sinatra recorded 81 Sammy Cahn songs, putting Sammy in the lead of any other Sinatra writer by a wide margin. The singer said of Sammy, "of all the writers, Sammy's words fit my mouth the best".</p>
							<p>Sammy also wrote the Mario Lanza hits "<strong>Be My Love</strong>" and "<strong>Because You're Mine</strong>," as well as "<strong>It's Magic</strong>" for Doris Day and the "<strong>Second Time Around</strong>", for Bing Crosby.</p>
						</Text>
				</Grid>
			</div>
		</Section>
	)
}

const Section = styled.section`
	padding: 3rem 5%;
	
	& h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`
const Grid = styled.div`
	display: grid;
	grid-column-gap: 2rem;
	grid-row-gap: 3rem;
	align-items: center;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	@media (min-width: 1024px) {
		& > img {
			order: 2;
		}
	}
`
const Img = styled.img`
	display: block;
	max-width: 400px;
	margin: 0 auto;
`
const Text = styled.div`
	& strong {
		font-weight: 600;
	}
`

export default Fourth
