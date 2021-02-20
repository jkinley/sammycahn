import React from 'react';
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import bgImage from "../images/piano.png";
import styled from 'styled-components';

const songs = () => {
	return (
		<Layout>
			<SEO title="Songs" />

			<PageTitle>
				<div className="container mx-auto px-8 lg:px-24 xl:px-48">
					<h1>Songs</h1>
				</div>
			</PageTitle>
			
			<section className="">
        <div className="container mx-auto px-8 py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="300" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/sammy-cahn-songbook/pl.237cc45fc0e641e99e8943e4a8173fc2"></iframe>

            <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="300" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/frank-sinatra-the-sammy-cahn-jimmy-van-heusen-songbook/pl.898dc92aa9334bc4aff8154a079f6a7b"></iframe>

            <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="300" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/frank-sinatra-the-sammy-cahn-jule-styne-songbook/pl.e7ddc3dd54d64e29b9438a97d7d27dcb"></iframe>

            <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="300" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/holiday-songs/pl.u-qk76T8l5p0"></iframe>
          </div>

        </div>
      </section>

		</Layout>
	)
}


const PageTitle= styled.section`
	background: 
			url('${bgImage}') no-repeat,
			linear-gradient( #eaeaea, #ccc) no-repeat;
	background-size: 34vh, cover;
	background-position: right center;
	min-height: 25vh;
	display: flex;
	align-items: center;
`;

export default songs
