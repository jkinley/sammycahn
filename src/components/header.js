import React from "react"
import { Link } from "gatsby"
import navLinks from '../constants/navLinks'
import PropTypes from "prop-types"
import styled from "@emotion/styled";

const Header = ({ siteTitle }) => (
  <StyledHeader>
			<div className="logo"> Sammy Cahn</div>
			<Nav>
					{
						navLinks.map((link, index) => {
							return(
								<Link key={index} to={link.path}>{link.name}</Link>
							)
						})
					}
			</Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
	display: flex;
	background-color: #121212;
	padding: 1rem;
	color: white;

	& .logo {
		display: block;
		margin-right: auto;
	}

`
const Nav = styled.nav`
	a {
		color: white;
		text-decoration: none;
	}

	& > a + a {
			margin-left: 1rem;
	}
`




export default Header
