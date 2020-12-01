import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import {css} from "@emotion/core"
import awardsList from '../constants/awardsList'

const awards = () => {
	return (
		<Layout>
			<SEO title="Awards" />
			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Awards</h1>
				</div>
			</PageTitle>
			
			<section className="py-16">
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
				<Grid>
					{
						awardsList.map((award) => {
							return (
								<li className="flex flex-col shadow-md bg-gray-50">
                                    <div className="">
                                        <img className="object-cover w-70 mx-auto" src={award.image} alt="" />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold mb-2">
                                            {award.song && award.song}
                                        </h2> 
                                        
                                        <p> 
                                            {award.date} {award.award} for '<span className="text-blue-800">{award.song}</span>' in the film <em>{award.film }</em>. Composed by {award.composer} and performed by { award.artist ? award.artist : <span className="text-red-800">unknown</span> }.
                                        </p>
                                    </div>
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
	grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    & > li {
        
        //background-color: #eee;
    }
`

export default awards