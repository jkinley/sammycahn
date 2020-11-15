import React from 'react'
import styled from "@emotion/styled";
import Image from '../../images/sammy/have-a-light.jpg'

const Intro = () => {
	return (
		<Section>
			<div className="container mx-auto">
			<Grid>
					<Img src={Image} />
					<Text>
						<h2>Show Business</h2>
						<p>In six decades, Sammy Cahn's career spanned every aspect of show business.</p>

						<p>He was born in New York City on June 18, 1913. At age 15, holding the record for truancy at Seward Park High, he began playing violin in the pit of the Bowery Burlesque.</p>

						<p>He wrote songs with Saul Chaplin for the famed Cotton Club, which produced "<strong>Shoe Shine Boy</strong>" for Louis Armstrong and the songs "<strong>Rhythm Is Our Business</strong>" and "<strong>Until the Real Thing Comes Along</strong>" for the Jimmy Lunceford Band, as well as scores for "Connie's Hot Chocolates".</p>
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

export default Intro
