import React from 'react'
import {academyAwards} from '../../constants/awardsList'
import styled from 'styled-components';

const AcademyAwards = () => {
  return (
    <section className="py-16">
		  <div className="container mx-auto px-8 lg:px-24 xl:px-48">
        <h2 className="mb-8">Academy Awards</h2>
          <Grid>
          {
            academyAwards.map((award, index) => {
              return (
                <li key={index} className="flex flex-row shadow-md bg-white">
                  <div className="m-4 w-2/5">
                    <img className="object-cover w-full mx-auto border border-gray-300" src={award.image} alt="" />
                  </div>
                  <div className="p-6 flex-1">
                      <h2 className="text-xl font-semibold mb-2 flex justify-between">
                          {award.song && award.song}
                      </h2> 
                      
                      <p> 
                          {award.date} {award.award} for '<span className="text-blue-800">{award.song}</span>' in the film <em>{award.film }</em>. Composed by {award.composer} and performed by { award.artist ? award.artist : <span className="text-red-800">unknown</span> }.
                      </p>
                  </div>

                  {/* {
                    award.winner === true ?
                      <div className="bg-brand-darkgold text-white p-2">
                      <p className="text-center text-sm">Acadamy Award Winner</p>
                      </div> :
                        <div className="bg-brand-black text-white p-2">
                        <p className="text-center text-sm">Acadamy Award Nomination</p>
                      </div>
                  } */}
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
`

export default AcademyAwards
