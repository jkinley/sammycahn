import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import AcademyAwards from '../components/awards/AcademyAwards'
import GrammyAwards from '../components/awards/GrammyAwards'
//import {FaTrophy} from 'react-icons/fa'

const awards = () => {
	return (
		<Layout>
			<SEO title="Awards" />
			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Awards</h1>
				</div>
			</PageTitle>
			
            <AcademyAwards />

            <GrammyAwards />
            
			
		</Layout>
	)
}


const PageTitle= styled.section`
	padding: 2rem 0;
	background: 
		linear-gradient( #eaeaea, #ccc) no-repeat;
	display: flex;
	align-items: center;
`


export default awards