import React from 'react'
import styled from "@emotion/styled";
import Image from '../../images/sammy/sammy-working-4.jpg'

const Second = () => {
	return (
		<Section>
			<div className="container mx-auto">
				<Grid>
					<Img className="img" src={Image} />
					<Text>
						<h2>The Composers</h2>
						<p>After parting amicably with Chaplin, Sammy began writing for the Tommy Dorsey orchestra, whose vocalist was then Frank Sinatra.</p>

						<p>With composer Jule Styne, Sammy wrote a series of hits for Sinatra that included "<strong>I've Heard that Song Before</strong>", "<strong>I'll Walk Alone</strong>", "<strong>Saturday Night is the Loneliest Night of the Week</strong>", "<strong>Time After Time</strong>" and dozens of others.</p>

						<p>After Styne decided to return to broadway, Sammy began a collaboration with James Van Heusen at Sinatra's request, which produced such Sinatra hits as "<strong>All the Way</strong>", "<strong>The Tender Trap</strong>", "<strong>My Kind of Town</strong>", "<strong>Only the Lonely</strong>" and "<strong>September of my Years</strong>".</p>
					</Text>
				</Grid>
			</div>
		</Section>
	)
}

const Section = styled.section`
	padding: 3rem 5%;
	background-color: #eee;
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

export default Second
