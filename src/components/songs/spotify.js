import React from 'react';
import styled from 'styled-components';
import spotifyPlaylists from '../../constants/spotify-playlists';

const Spotify = () => {
  return (
    <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">  
      {
        spotifyPlaylists.map((playlist, id) => {
          return (

            <div className="flex flex-col" key={playlist.id}>
              <iframe
              className="w-full m-w-60 overflow-hidden rounded-md mb-6"
              title={`Spotify ${playlist.id}`}
              src={playlist.url} 
              height="320" 
              style={{width: '100%'}} 
              frameBorder="0" 
              allowtransparency="true" 
              allow="encrypted-media"></iframe>
              <h3 className="mb-2 text-sm flex-1">{playlist.title}</h3>
              <p className="text-sm flex-1">Short description of playlist.</p>
            </div>
          )
        })
      }
    </div>
  )
};

export default Spotify;