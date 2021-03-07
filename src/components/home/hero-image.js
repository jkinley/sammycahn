import React from 'react'
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'

const HeroImage = ({img, className, children, home}) => {

	return (
		<BackgroundImage 
      className={className} 
      fluid={img}
      home={home}>
			{children}
		</BackgroundImage>
    )
}

export default styled(HeroImage)`
  height: calc(40vh - 100px);
  background-size: contain, cover;
	background-position: right bottom, center center;
  background-repeat: no-repeat, no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
`;