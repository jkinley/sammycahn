import React from 'react'
import {grammyAwards} from '../../constants/awardsList'
import styled from 'styled-components';

const GrammyAwards = () => {
    return (
      <section className="py-8">
        <div className="container mx-auto px-8">
          <h2 className="mb-12">Grammy Nominations</h2>
            <Grid>
              {grammyAwards.map((award, index) => {
                return (
                  <li key={index} className="p-4 border shadow-md">
                      <h3 className="mb-2">{award.year} {award.type}</h3>
                      <p>{award.title} for "{award.work}".</p>
                  </li>
                )
              })}
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

export default GrammyAwards