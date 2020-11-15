import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styled from "@emotion/styled";
import {css} from '@emotion/core'
import videoList from '../constants/videoList'
import Layout from '../components/Layout';
import SEO from "../components/seo"

const videos = (video) => {
	return (
		<Layout>
			<SEO title="Songs" />

			<PageTitle>
				<div className="container mx-auto px-8">
					<h1>Videos</h1>
				</div>
			</PageTitle>

			<VideoWrap>
				<div className="container mx-auto px-8">
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
											<p className="text-sm m-0">
												"{video.song}" { video.performer && `performed by ${video.performer}` } { video.performer && video.composer && `and`} { video.composer && `composed by ${video.composer}.`}
											</p>
										
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
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
	margin-bottom: 0rem;
`

export default videos
