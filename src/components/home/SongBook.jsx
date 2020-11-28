import React from 'react'
import styled from "@emotion/styled";
import {css} from "@emotion/core"
import image from '../../images/songbook-cover.jpg'
import amazonButton from '../../images/amazon-button.png'

const SongBook = () => {
	return (
		<Section>
			<div className="container mx-auto px-8">
				<div css={wrap}>
				<img css={img} src={image} alt="The New Sammy Cahn Songbook."/>
					<div css={text}>
						<h2 css={title}>The New Sammy Cahn Songbook</h2>
						<p>The new songbook includes 99 of Sammy's finest compositions in piano/vocal/guitar format. Songs include: Teach Me Tonight, My Kind of Town (Chicago is), Bei Mir Bist Du Schon (Means That You're Grand), Call Me Irresponsible, The Christmas Waltz, Come Fly with Me, Day by Day, I'll Walk Alone, I've Heard That Song Before, Let It Snow!, Love and Marriage, Only the Lonely, Our Town, Pocketful of Miracles, Shoe Shine Boy, Thoroughly Modern Millie, and dozens more.</p>

						<a css={link} href="https://www.amazon.com/dp/1575606992/ref=cm_sw_em_r_mt_dp_iZuUFbEKQWCB4" target="_blank" rel="noopener noreferrer" >
						<img src={amazonButton} style={{display: 'inline'}}/>
						</a>
					</div>
				</div>
			</div>
		</Section>
		
	)
}

const Section = styled.section`
	padding: 3rem 0;
	background-color: #eaeaea;
`

const wrap = css`
	display: grid;
	grid-gap: 2rem;
	justify-content: center;
	justify-items: center;
	@media (min-width: 760px) {
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
const link = css`
	
	/* padding: 0.5rem 1rem;
	border-radius: 4px;
	background-color: #b09a50;
	font-weight: bold;
	text-transform: uppercase; */
`
export default SongBook
