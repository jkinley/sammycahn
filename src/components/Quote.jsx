// Quote component is used to display a quote section.

import React from 'react'
import quotes from '../constants/quotes'
import styled from "@emotion/styled";
import {css} from '@emotion/core'

const Quote = (props) => {
	const result = quotes.find(quote => quote.id === props.id);
	//console.log(result)
	return (
		<Section>
			<Blockquote>
				<div>
					<Text>{result.text}</Text>
					<Author>—{result.author}</Author>
				</div>
			</Blockquote>
		</Section>
	)
}

const Section = styled.section`
	background-color: #b09a50;
	padding: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Blockquote = styled.blockquote`
	color: #231f20;
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	&::before {
		content: '\\201C';
		font-family: 'Playfair Display', serif;
		font-size: 10rem;
		color:#8e7a3e;
		align-self: flex-start;
		transform: translateY(100%);
		margin-right: 0.5rem;
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
	line-height: 1.3;
	font-size: 1.3rem;
	font-weight: bold;
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
