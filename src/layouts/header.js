import React from "react";
import { Link } from "gatsby";
import { navLinks } from '../constants/nav';
import MobileNav from './mobile-nav';


const Header = ({ siteTitle }) => (
  <header className="bg-brand-black border-b-4 border-brand-gold flex flex-col justify-center">
		<nav className="px-4 flex items-center justify-between">
    
      <Link to="/" className="text-white text-2xl font-display mr-auto" title="Homepage">
        {siteTitle}
      </Link>

      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <li>
            <Link className="text-white mr-4 last:mr-none" key={link.name} to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    
      <MobileNav />

    </nav>
  </header>
);

export default Header;