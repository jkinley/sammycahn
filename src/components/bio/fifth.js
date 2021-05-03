import React from 'react';
import styled from 'styled-components';
import Figure from '../common/figure';
import image from '../../images/sammy/sammy-working-3.jpg';

const Fifth = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto px-8">
				<Grid>
					<Figure 
						src={image} 
						width="420px" 
						height="auto" 
						alt="alternative text" 
						caption=" Sammy Cahn and Jimmy Van Huesen." 
					/>
					<div className="prose xl:prose-lg">
						<h2>Lyrical Legacy</h2>
						<p>In 1972, Sammy realized a lifelong ambition when, at age 60, he did the 92nd Street Y's, "Lyrics and Lyricists" series. An audio recording of the event resulted in his opening on broadway at the Golden Theater in 1974 with a one-man (plus three singers and a pianist) show called "Words and Music". The unanimous rave reviews started Sammy making appearances in London at the Duke of York's Theater, as well as a tour of the USA. In 1988 he began a second national tour to even more remarkable reviews.</p>
						<p>In 1992, Sammy was the first recipient of the <strong>Golden Word Award</strong>, created by the American Society of Composers, Authors and Publishers (ASCAP) for outstanding achievement in lyric writing.</p>
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
export default Fifth;