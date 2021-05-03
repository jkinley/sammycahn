import React from 'react'
import styled from 'styled-components';
import Figure from '../common/figure';
import image from '../../images/sammy/saul-lou-sammy.jpg';

const Third = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto px-8">
				<Grid>
					<Figure 
						src={image} 
						width="420px" 
						height="auto" 
						alt="alternative text" 
						caption="Saul Chaplin, Lou Levy, and Sammy Cahn." 
					/>
					<div className="prose xl:prose-lg">
						<h2>Awards & Nominations</h2>
						<p>With 26 Academy Award nominations to his credit, Sammy earned more nominations than any other lyric writer in the history of the academy and four wins, with "<strong>Three Coins in the Fountain</strong>", "<strong>All the Way</strong>", "<strong>Call me Irresponsible</strong>", and "<strong>High Hopes</strong>", which became the John F. Kennedy campaign song.</p>

						<p>In 1955, Sammy was awarded an Oscar for "<strong>Three Coins in the Fountain</strong>". That same year, he won the first Emmy awarded to a song, for "<strong>Love and Marriage</strong>", written for the producers showcase musical version of Thornton Wilder's, "<strong>Our Town</strong>" starring Frank Sinatra and Paul Newman.</p>
					</div>
				</Grid>
			</div>
		</section>
	);
};

const Grid = styled.div`
	display: grid;
	grid-column-gap: 2rem;
	grid-row-gap: 3rem;
	align-items: flex-start;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	@media (min-width: 1024px) {
		& > img, & > figure {
			order: 2;
		}
	}
`
export default Third;