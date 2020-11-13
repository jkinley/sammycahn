import React from 'react'
import styled from "@emotion/styled";
import Image from '../../images/sammy/sammy-working-3.jpg'

const Third = () => {
	return (
		<Section>
			<div className="container mx-auto">
				<Grid>
					<Img src={Image} />
					<Text>
						<h2>Lyrical Legacy</h2>
						<p>In 1972, Sammy realized a lifelong ambition when, at age 60, he did the 92nd Street Y's, "Lyrics and Lyricists" series. An audio recording of the event resulted in his opening on broadway at the Golden Theater in 1974 with a one-man (plus three singers and a pianist) show called "Words and Music". The unanimous rave reviews started Sammy making appearances in London at the Duke of York's Theater, as well as a tour of the USA. In 1988 he began a second national tour to even more remarkable reviews.</p>
						<p>In 1992, Sammy was the first recipient of the <strong>Golden Word Award</strong>, created by the American Society of Composers, Authors and Publishers (ASCAP) for outstanding achievement in lyric writing.</p>
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

export default Third
