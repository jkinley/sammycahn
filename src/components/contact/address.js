import React from 'react';
//import nashville from './maps/nashville-dark.png';
//import nashvilleLight from './maps/nashville-light.png';
import nashvilleDark from './maps/nashville-dark.png';
//import newYorkLight from './maps/new-york-light.png';
import newYorkDark from './maps/new-york-dark.png';
import londonDark from './maps/london-dark.png';

const Address = () => {
	return (
		<section className="py-12 rounded bg-gray-100">
      <div className="container mx-auto px-4 lg:px-12">
      
        <h2 className="mb-12 font-bold">Concord Music</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">

          <div>
            <a 
              className="block border-4 border-gray-500 hover:border-brand-gold mb-4" 
              href="https://goo.gl/maps/jMXMQPCcvRnykTPm8" target="_blank" rel="noopener noreferrer">
              <img src={nashvilleDark} alt="nashville-map"/>
            </a>

            <h3 className="mb-1">Nashville</h3>
            <address className="not-italic">
              10 Lea Avenue, Suite 300<br />
              Nashville, Tenn. 37210
            </address>
          </div>

          <div>
            <a 
              className="block border-4 border-gray-500 hover:border-brand-gold mb-4"
              href="https://goo.gl/maps/ULask7ECSQgxgH2t8" target="_blank" rel="noopener noreferrer">
              <img src={newYorkDark} alt="new-york-map"/>
            </a>

            <h3 className="mb-1">New York</h3>
            <address className="not-italic">
              229 West 28th Street, 11th floor<br />
              New York, NY 10001
            </address>
          </div>

          <div>
            <a 
              className="block border-4 border-gray-500 hover:border-brand-gold mb-4"
              href="https://goo.gl/maps/pK6jGGFhTH53ZCkv6" target="_blank" rel="noopener noreferrer">
              <img src={londonDark} alt="london-map"/>
            </a>
            <h3 className="mb-1">London</h3>
            <address className="not-italic">
              71-91 Aldwych<br />
              London, WC2B 4HN
            </address>
          </div>
        </div>

      </div>
		</section>
	);
};

export default Address;