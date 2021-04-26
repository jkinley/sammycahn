import React from 'react'
import { goldenGlobes } from '../../constants/awardsList'
import styled from 'styled-components';

const GoldenGlobes = () => {
  return (
    <section className="py-8">
		  <div className="container mx-auto px-8">
        <h2 className="mb-12">Golden Globe Nominations</h2>
        <Grid>
          {
            goldenGlobes.map((award, index) => {
              return (
                <li key={index} className="p-4 border border shadow-md">
                  <h3 className="mb-2">{award.year} {award.type}</h3>
                  <p>For the song '{award.song}' in the film <em>{award.film}</em>.</p>
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

export default GoldenGlobes;
