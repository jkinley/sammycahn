import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styled from "@emotion/styled";
import videoList from '../constants/videoList'
import Layout from '../components/Layout';
import SEO from "../components/seo"

const videos = (video) => {
	return (
		<Layout>
			<SEO title="Songs" />

			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Gallery</h1>
				</div>
			</PageTitle>

			<VideoWrap>
				<div className="container mx-auto px-8">
					<MediaGrid>
						{
							videoList.map((video) => {
								return (
									<div>
									<VideoTitle>{video.title}</VideoTitle>
									<PlayerWrapper key={video.id}>
										<ReactPlayer
											url={video.url}
											className='react-player'
											width='100%'
											height='100%'
											controls="true"
										/>
									</PlayerWrapper>
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
	background-color: #ccc;
	padding: 2rem;
	min-height: 15vh;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: bottom center;
	& h1 {
		font-size: 2.8rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}
`

const VideoWrap = styled.section`
	padding: 3rem 0;
`

const MediaGrid = styled.div`
	display: grid;
	grid-column-gap: 2rem;
	grid-row-gap: 3rem;
	grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`
const PlayerWrapper = styled.div`
	position: relative;
  padding-top: 56.25%;
	& > .react-player{
		position: absolute;
  	top: 0;
  	left: 0;
	}
`
const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

const VideoTitle = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
`

export default videos
