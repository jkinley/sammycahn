import React from 'react';
import { Link } from "gatsby";
import Img from '../../images/sammy/sammy-working-2.jpg';

const AboutSammy = () => {
  return (

    <Link to="/bio" className="rounded overflow-hidden shadow-md opacity-90 hover:opacity-100">
      <div className="flex flex-col h-full">
        <img src={Img} alt=""/>
        <div className="bg-gray-800 text-white p-4 flex-1">
          <h2 className="text-base xl:text-lg">About Sammy</h2>
        </div>
      </div>
    </Link>
  );
};

export default AboutSammy;