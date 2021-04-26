import React from 'react';
import { academyWinners } from '../../constants/awardsList';
import styled from 'styled-components';

const AcademyWinners = () => {
  return (
    <section className="py-8">
		  <div className="container mx-auto px-8">
        <h2 className="mb-8">Academy Award Winners</h2>
          <Grid>
          {
            academyWinners.map((award, index) => {
              return (
                <li key={index} className="flex flex-row shadow-md bg-white">
                  <div className="m-4 w-2/5">
                    <img className="object-cover w-full mx-auto border border-gray-300" src={award?.image.default} alt="" />
                  </div>
                  <div className="p-6 flex-1">
                    <h2 className="text-xl font-semibold mb-2 flex justify-between">
                        {award?.song}
                    </h2> 
                      
                    <p> 
                      {award?.date} {award?.award} for '<span className="text-blue-800">{award?.song}</span>' in the film <em>{award?.film }</em>. Composed by {award?.composer} and performed by { award?.artist ? award?.artist : <span className="text-red-800">unknown</span> }.
                    </p>
                  </div>
                </li>
              )
            })
          }
        </Grid>
	    </div>
	  </section>
  )
}

const Grid = styled.ul`
	display: grid;
	grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: 1fr;
    //grid-template-columns: repeat(auto-fill, 320px);
    @media (min-width: 780px) {
        grid-template-columns: 1fr 1fr;
    }
    
    & > li {
        
        //background-color: #eee;
    }
`;

export default AcademyWinners;