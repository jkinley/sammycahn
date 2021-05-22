import React from 'react';
import { Link } from "gatsby";
import Img from '../../images/sammy-and-tita.jpg';

const TitaNote = () => {
  return (
    <Link to="/titas-note" className="rounded overflow-hidden shadow-md opacity-90 hover:opacity-100">
      <div className="flex flex-col h-full">
        <img className="" src={Img} />
        <div className="bg-gray-800 text-white p-4 flex-1">
          <h2 className="text-base xl:text-lg">A Note from Tita</h2>
        </div>
      </div>
    </Link>
  );
};

export default TitaNote;