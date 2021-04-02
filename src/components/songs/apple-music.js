import React from 'react';
import styled from 'styled-components';
import { playlists } from '../../constants/apple-playlists';

const AppleMusic = () => {
  return (
    <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">  
      {
        playlists.map((playlist, id) => {
          return (

            <div className="flex flex-col" key={playlist.id}>
              <Iframe
                className="mb-6"
                title={`Apple Music Playlist ${playlist.id}`}
                src={playlist.url}
                height="320"
                frameBorder="0"
                allow="autoplay *; encrypted-media *; fullscreen *" 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                >
              </Iframe>
              <h3 className="mb-2 text-sm flex-1">{playlist.title}</h3>
              <p className="text-sm flex-1">Short description of playlist.</p>
            </div>
          )
        })
      }
    </div>
  )
};

const Iframe = styled.iframe`
  width: 100%;
  max-width: 660px;
  overflow: hidden;
  border-radius: 10px;
  background: transparent;
`;

export default AppleMusic;
