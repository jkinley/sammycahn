import React from 'react';
import { academyNominations } from '../../constants/awardsList';
import styled from 'styled-components';
import AwardCard from './AwardCard';

const AcademyNominations = () => {
  return (
    <section className="py-8">
		  <div className="container mx-auto px-4">
        <h2 className="mb-8">Academy Award Nominations</h2>
          <Grid>
            <AwardCard data={academyNominations} />
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
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  

`;
export default AcademyNominations;