import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'

const HeroImage = ({img, className, children, home}) => {

	return (
		<BackgroundImage className={className} fluid={img} home={home}>
			{children}
		</BackgroundImage>
    )
}

export default styled(HeroImage)`
	height: calc(80vh - 100px);
	background-position: center center;
	background-size: cover;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	align-items: center;
`;