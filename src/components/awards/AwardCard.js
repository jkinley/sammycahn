import React from 'react';
import styled from 'styled-components';

const AwardCard = ({data}) => {
  return (
    <>
      {data.map((award, index) => {
        return (
          <Card key={index} className="shadow-md bg-white">
            <img className="image border border-gray-300" src={award?.image.default} alt="" />
            <div className="content">
              <h2 className="font-semibold mb-2 text-base md:text-xl lg:text-2xl">{award?.song}</h2>
              <p className="text-sm md:text-base xl:text-lg"> 
                {award?.date} {award?.award} for '<span className="text-blue-800">{award?.song}</span>' in the film <em>{award?.film }</em>. Composed by {award?.composer} and performed by { award?.artist}.
              </p>
            </div>
          </Card>
        )
      })}
    </>
  )
};


const Card = styled.li`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 80px 1fr;
  padding: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1024px) {
    grid-gap: 2rem;
    grid-template-columns: 125px 1fr;
  }

`;

export default AwardCard;