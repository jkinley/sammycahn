import React from 'react'
import styled from 'styled-components';
import Figure from '../common/figure'
import image from '../../images/sammy/have-a-light.jpg'

const Intro = () => {
	return (
		<section className="py-12">
				<div className="container mx-auto px-8">
			<Grid>
				<Figure 
						src={image} 
						width="420px" 
						height="auto" 
						alt="alternative text" 
						caption="Sammy Cahn and Saul Chaplin." 
				/>
				
				<div className="prose xl:prose-lg">
					<h2>Show Business</h2>
					<p>In six decades, Sammy Cahn's career spanned every aspect of show business.</p>
					<p>He was born in New York City on June 18, 1913. At age 15, holding the record for truancy at Seward Park High, he began playing violin in the pit of the Bowery Burlesque.</p>
					<p>He wrote songs with Saul Chaplin for the famed Cotton Club, which produced "<strong>Shoe Shine Boy</strong>" for Louis Armstrong and the songs "<strong>Rhythm Is Our Business</strong>" and "<strong>Until the Real Thing Comes Along</strong>" for the Jimmy Lunceford Band, as well as scores for "Connie's Hot Chocolates".</p>
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
	grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
	@media (min-width: 1024px) {
		& > img, & > figure {
			order: 2;
		}
	}
`

export default Intro
