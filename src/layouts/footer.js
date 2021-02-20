import React from 'react'
import { Link } from "gatsby"
import navLinks from '../constants/navLinks'

const Footer = ({copyright}) => {

  

	return (
		<footer className="bg-brand-black">
			<div className="container mx-auto px-4 py-8">
				<nav className="text-brand-gold mb-2 flex flex-wrap">
					{
						navLinks.map((link, index) => {
							return (
								<Link
									className="text-brand-gold mr-4 mb-2"
									key={index} 
									to={link.path}>
										{link.name}
								</Link>
							)
						})
					}
				</nav>
    
				<small className="text-brand-lightgray">
                &copy; {new Date().getFullYear()} {copyright}
                </small>
			</div>
    </footer>
	)
}

export default Footer