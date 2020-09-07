import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

const HeroImage = ({img, className, children, home}) => {

	return (
		<BackgroundImage className={className} fluid={img} home={home}>
			{children}
		</BackgroundImage>
    )
}

export default styled(HeroImage)`
	/* min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vw")}; */
	min-height: 85vh;
	background-position: center center;
	background-size: cover;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	align-items: center;
`