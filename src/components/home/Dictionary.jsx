import React from 'react'
import styled from "@emotion/styled";
import {css} from "@emotion/core"
import image from '../../images/dictionary-cover.jpg'
import amazonButton from '../../images/amazon-button.png'

const Dictionary = () => {
	return (
		<Section>
			<div className="container mx-auto px-8">
				<div css={wrap}>
					<img css={img} src={image} alt="Sammy Cahn's Rhyming Dictionary."/>
					<div css={text}>
						<h2 css={title}>Sammy Cahn's Rhyming Dictionary</h2>
						<p>It contains 50,000 words that are arranged phonetically, according to vowel sounds, rather than alphabetically. This invaluable reference tool also includes a 32-page introduction by Cahn, in which he relates stories from his work with notable composers and partners Jule Styne and Jimmy Van Heusen. For any lyricist with a song in their heart but a block in their brain, there is no better muse than The Sammy Cahn Rhyming Dictionary.</p>

						<a href="https://www.amazon.com/Sammy-Cahns-Rhyming-Dictionary-Cahn/dp/1575606224" target="_blank" rel="noopener noreferrer" >
							<img src={amazonButton} style={{display: 'inline'}} />
						</a>
					</div>
				</div>
			</div>
		</Section>
	)
}

const Section = styled.section`
	padding: 3rem 0;
	background-color: white;
`

const wrap = css`
	display: grid;
	grid-gap: 2rem;
	justify-content: center;
	justify-items: center;

	@media (min-width: 600px) {
		grid-template-columns: 240px 1fr;
	}
`
const img = css`
	margin: 0 auto;
	width: 100%;
`


const text = css`
	//padding: 2rem;
	//background-color:#ccc;
`

const title = css`
	font-size: 1.6rem;
	margin-bottom: 1rem;
	font-weight: bold;
`
const btn = css`
	padding: 0.5rem 1rem;
	border-radius: 4px;
	background-color: #b09a50;
	font-weight: bold;
	text-transform: uppercase;
`
export default Dictionary
