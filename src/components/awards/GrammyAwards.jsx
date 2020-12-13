import React from 'react'
import {grammyAwards} from '../../constants/awardsList'
import styled from "@emotion/styled";

const GrammyAwards = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-8 lg:px-24 xl:px-48">
                <h2 className="mb-12">Grammy Awards</h2>
                    <Grid>
                    {
                        grammyAwards.map((award) => {
                            return (
                                <li className="p-4 border ">
                                    <p className="">{award.year} {award.type}</p>
                                    <p>{award.title} for "{award.work}"</p>
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

export default GrammyAwards
