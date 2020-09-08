import React from "react"
import { Link } from "gatsby"
import navLinks from '../constants/navLinks'
import PropTypes from "prop-types"
import styled from "@emotion/styled";

const Header = ({ siteTitle }) => (
  <StyledHeader>
			<Link to="/" className="logo">Sammy Cahn</Link>
			<Nav>
					{
						navLinks.map((link, index) => {
							return (
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
	position: sticky;
	top: 0;
	z-index: 10;

	& .logo {
		display: block;
		margin-right: auto;
		font-size: 1.5rem;
		outline: none;
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
