import React from 'react';
import { Link } from "gatsby";
import Img from '../../images/sammy-and-jule.jpg';

const Songs = () => {
  return (

    <Link to="/songs" className="rounded overflow-hidden shadow-md opacity-90 hover:opacity-100">
      <div className="flex flex-col h-full">
        <img className="" src={Img} />
        <div className="bg-gray-800 text-white p-4 flex-1">
          <h2 className="text-base xl:text-lg">Song Collections</h2>
        </div>
      </div>
    </Link>
  );
};

export default Songs;