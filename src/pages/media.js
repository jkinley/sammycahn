import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import { videoList } from '../constants/videos';
import Layout from "../layouts/layout";
import { Seo } from "../components/seo";
import PageTitle from '../components/common/page-title';

export const Head = () => (
	<Seo title="Media" />
);

const Media = (video) => {
	return (
		<Layout>

			<PageTitle title="Media" />
		
			<VideoWrap>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
            <p className="mb-12">Sammy’s songs have been featured in films, television shows, and commercials for decades.  These wonderful new uses for his songs continue today.  This is just one more way that Sammy’s legacy lives on.</p>
					<MediaGrid>
						{
							videoList.map((video) => {
								return (
                  <div key={video.id}>
                    <PlayerWrapper>
                      <ReactPlayer
                        url={video.url}
                        className='react-player'
                        width='100%'
                        height='100%'
                        controls={true}
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

export default Media
