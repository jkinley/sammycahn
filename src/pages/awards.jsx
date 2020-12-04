import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import {css} from "@emotion/core"
import awardsList from '../constants/awardsList'
import {FaTrophy} from 'react-icons/fa'

const awards = () => {
	return (
		<Layout>
			<SEO title="Awards" />
			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Awards</h1>
				</div>
			</PageTitle>
			
			<section className="py-16 bg-brand-lightgray">
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
				<Grid>
					{
						awardsList.map((award) => {
							return (
								<li className="flex flex-row shadow-md bg-white">
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
		</Layout>
	)
}


const PageTitle= styled.section`
	padding: 2rem;
	background: 
		linear-gradient( #eaeaea, #ccc) no-repeat;
	display: flex;
	align-items: center;
`

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

export default awards