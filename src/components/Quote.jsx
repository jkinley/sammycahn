// Quote component is used to display a quote section.

import React from 'react'
import quotes from '../constants/quotes'
import styled from "@emotion/styled";

const Quote = (props) => {
	const result = quotes.find(quote => quote.id === props.id);
	//console.log(result)
	return (
		<Section>
			<Blockquote>
				<Text>{result.text}</Text>
				<Author>{result.author}</Author>
			</Blockquote>
		</Section>
	)
}

const Section = styled.section`
	padding: 2rem;
`
const Blockquote = styled.blockquote`
	border-left: 10px solid #1baab8;
	color: #555;
	background-color: #eae5e0;
	padding: 2rem 5rem;
	position: relative;
	width: 66vw;
	margin: 0 auto;
	&::before {
		content: '\\201C';
		font-family: 'Playfair Display', serif;
		font-size: 8rem;
		opacity: 0.4;
		position: absolute;
		display: inline;
		top:  3rem;
		left: 1rem;
	}
`
const Text = styled.p`	
	font-family: 'Montserrat', sans-serif;
	line-height: 1.3;
	font-size: 1.6rem;
	font-weight: bold;
	margin-bottom: 1rem;
`
const Author = styled.p`
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	font-size: 1.3rem;
	margin: 0;
`
export default Quote
