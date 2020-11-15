import React from 'react'
import styled from "@emotion/styled";
import {css} from '@emotion/core'
import { Link } from "gatsby"
import navLinks from '../constants/navLinks'

const Footer = () => {
	return (

		<StyledFooter>
			<div className="container mx-auto px-8">
				<Nav>
					{
						navLinks.map((link, index) => {
							return (
								<Link key={index} to={link.path}>{link.name}</Link>
							)
						})
					}
				</Nav>
				<small css={copyright}>© {new Date().getFullYear()} Sammy Cahn Music Company. All Rights Reserved.</small>
			</div>
    </StyledFooter>
	)
}

const StyledFooter = styled.footer`
	text-align: center;
	background-color: #231f20;
	padding: 2rem 0;
	color: white;
	/* & .logo {
		display: block;
		margin-bottom: 1rem;
		font-size: 1.3rem;
		outline: none;
		font-family: 'Cinzel', sans-serif;
		font-weight: 400;
		letter-spacing: 0.02rem;
	} */
`

// const Grid = styled.div`
// 	display: grid;
// 	align-items: center;
// 	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//`

const Nav = styled.nav`
	margin-bottom: 0.5rem;
	a {
		color: white;
		text-decoration: none;
	}

	& > a + a {
			margin-left: 1rem;
	}
`

const copyright = css`
	color: #999;
`


export default Footer