import React from 'react'
import styled from "@emotion/styled";


const Footer = () => {
	return (
		<StyledFooter>
          © {new Date().getFullYear()} Sammy Cahn Music Company. All Rights Reserved.
    </StyledFooter>
	)
}

const StyledFooter = styled.footer`
	background-color: #121212;
	padding: 2rem;
	color: #d4af37;

`


export default Footer