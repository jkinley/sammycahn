import React from 'react'
import quotes from '../../constants/quotes'
import styled from "@emotion/styled";

const Quote = ({id}) => {
	const result = quotes.find(quote => quote.id === id);
	
	return (
		<Section>
			<div className="container mx-auto px-4 lg:px-24 xl:px-48">
				<Blockquote>
					<div>
						<Text>{result.text}</Text>
						<Author>—{result.author}</Author>
					</div>
				</Blockquote>
			</div>
		</Section>
	)
}

const Section = styled.section`
	background-color: #b09a50;
	padding: 3rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Blockquote = styled.blockquote`
	color: #231f20;
	display: grid;
	grid-column-gap: 0.5rem;
	grid-template-columns: auto 1fr;
	align-items: center;
	&::before {
		content: '\\201C';
		font-family: 'Playfair Display', serif;
		font-size: 10rem;
		line-height: 7rem;
		align-self: flex-start;
		justify-self: center;
		color:#8e7a3e;
	}
	/* &::after {
		content: '\\201D';
		font-family: 'Playfair Display', serif;
		font-size: 10rem;
		color: #8e7a3e;
		align-self: flex-end;
		transform: translateY( 100%);
	} */
`
const Text = styled.p`	
	font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
	margin-bottom: 1rem;
	
	z-index: 1;
`
const Author = styled.p`
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 1.3rem;
	margin: 0;
`
export default Quote
