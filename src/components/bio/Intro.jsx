import React from 'react'
import styled from "@emotion/styled";
import Image from '../../images/sammy/have-a-light.jpg'

const Intro = () => {
	return (
		<Section className="container mx-auto px-8">
			<Grid>
					<div className="p-8">
						<h2>Vehicula Malesuada</h2>
						<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
						<p>Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
					</div>
					<img src={Image} />
			</Grid>
		</Section>
	)
}

const Section = styled.section`
	padding: 2rem 0;
	& h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`
const Grid = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`

export default Intro
