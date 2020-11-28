import React from 'react'
import styled from "@emotion/styled";
import Figure from "../../components/Figure"
import image from '../../images/sammy/saul-lou-sammy.jpg'

const Third = () => {
	return (
		<Section>
			<div className="container mx-auto">
				<Grid>
					<Figure src={image} width="420px" height="auto" alt="alternative text" caption="Saul Chaplin, Lou Levy, and Sammy Cahn." />
					<Text>
						<h2>Awards Roll In</h2>
						<p>With 26 Academy Award nominations to his credit, Sammy earned more nominations than any other lyric writer in the history of the academy and four wins, with "<strong>Three Coins in the Fountain</strong>", "<strong>All the Way</strong>", "<strong>Call me Irresponsible</strong>", and "<strong>High Hopes</strong>", which became the John F. Kennedy campaign song.</p>

						<p>In 1955, Sammy was awarded an Oscar for "<strong>Three Coins in the Fountain</strong>". That same year, he won the first Emmy awarded to a song, for "<strong>Love and Marriage</strong>", written for the producers showcase musical version of Thornton Wilder's, "<strong>Our Town</strong>" starring Frank Sinatra and Paul Newman.</p>
					</Text>
				</Grid>
			</div>
		</Section>
	)
}

const Section = styled.section`
	padding: 3rem 5%;
	background-color: #eaeaea;
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
		& > img, & > figure {
			order: 2;
		}
	}
`
const Text = styled.div`
	& strong {
		font-weight: 600;
	}
`
export default Third
