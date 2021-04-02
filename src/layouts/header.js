import React from "react";
import { Link } from "gatsby";
import { navLinks } from '../constants/nav';
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <StyledHeader>
		<Link to="/" className="logo" title="Homepage">{siteTitle}</Link>
      <Nav>
        {
          navLinks.map((link, index) => (
            <Link key={index} to={link.path}>{link.name}</Link>
          ))
        }
    </Nav>
  </StyledHeader>
);

const StyledHeader = styled.header`
	background-color: #231f20;
	padding: 1rem;
	color: white;
	border-bottom: 4px solid #b09a50;
	@media (min-width: 768px) {
		display: flex;
		align-items:center;
	}

	& .logo {
		display: block;
		margin-right: auto;
		font-size: 1.6rem;
		outline: none;
		font-family: 'Cinzel', sans-serif;
		font-weight: 400;
		letter-spacing: 0.02rem;
	}
`;

const Nav = styled.nav`
	a {
		color: white;
		text-decoration: none;
		display: inline-block;
		margin-right: 1rem;
		&::last-child {
			margin-right: 0;
		}
	}
`;

export default Header;
