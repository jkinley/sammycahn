import React, {useState} from 'react';
import { Link } from "gatsby";
import { navLinks } from '../constants/nav';
import {FaBars, FaTimes} from 'react-icons/fa';
import FilePlayer from 'react-player/file';

const MobileNav = (props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
		setMenuOpen(!menuOpen)
    console.log(menuOpen)
	}

  return (
    <div className="md:hidden">

      <button onClick={handleClick} className="text-white text-2xl focus:outline-none">
        <FaBars />
      </button>

      <div className={`${menuOpen ? 'absolute z-10 bottom-0 left-0 w-full bg-brand-darkgold' : 'hidden'}`} style={{height: `calc(100vh - 70px)` }}>

        <ul className="w-3/5 mx-auto py-16">
          {navLinks.map((link) => (
            <li className="mb-4">
              <Link className="text-white text-3xl" key={link.name} to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default MobileNav;

   {/* <div className="text-right p-4 self-stretch">
          <button onClick={handleClick} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div> */}