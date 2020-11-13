import React from 'react'
import styled from "@emotion/styled";
import Image from '../../images/sammy/trio.jpg'

const Third = () => {
	return (
		<Section>
			<div className="container mx-auto">
				<Grid>
						<Img src={Image} />
						<Text>
							<h2>Awards Roll In</h2>
							<p>With 26 Academy Award nominations to his credit, Sammy earned more nominations than any other lyric writer in the history of the academy and four wins, with "<strong>Three Coins in the Fountain</strong>", "<strong>All the Way</strong>", "<strong>Call me Irresponsible</strong>", and "<strong>High Hopes</strong>", which became the John F. Kennedy campaign song.</p>

							<p>He also won the first Emmy awarded to a song, for "<strong>Love and Marriage</strong>", written for the producers showcase musical version of Thornton Wilder's, "<strong>Our Town</strong>" starring Frank Sinatra and Paul Newman.</p>

							<p>Sammy was the official lyricist for the Rat Pack, writing "<strong>Come Fly with Me</strong>", "<strong>Ain't That a Kick in the Head</strong>", and "<strong>Ring-a-ding Ding</strong>", among many others.</p>
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
