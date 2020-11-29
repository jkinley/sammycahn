import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styled from "@emotion/styled";
//import {css} from '@emotion/core'
import videoList from '../constants/videoList'
import Layout from '../components/Layout';
import SEO from "../components/seo"

const media = (video) => {
	return (
		<Layout>
			<SEO title="Media" />

			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Media</h1>
				</div>
			</PageTitle>
			
			<VideoWrap>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">

					<MediaGrid>
						{
							videoList.map((video) => {
								return (
									<div>
										<PlayerWrapper key={video.id}>
											<ReactPlayer
												url={video.url}
												className='react-player'
												width='100%'
												height='100%'
												controls="true"
												light
											/>
										</PlayerWrapper>
										<VideoTitle>{video.title}</VideoTitle>
									</div>
								)
							})
						}
					</MediaGrid>
				</div>
			</VideoWrap>
		</Layout>
	)
}

const PageTitle= styled.section`
	background-color: #eaeaea;
	padding: 2rem;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
`

const VideoWrap = styled.section`
	padding: 3rem 0;
`

const MediaGrid = styled.div`
	display: grid;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
const PlayerWrapper = styled.div`
	position: relative;
	padding-top: 56.25%;
	margin-bottom: 1rem;
	& > .react-player{
		position: absolute;
  	top: 0;
  	left: 0;
	}
`
const VideoTitle = styled.h2`
	font-size: 1.1rem;
	font-weight: bold;
	margin: 0;
`

export default media
