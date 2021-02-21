import React from 'react'

const Spotify = () => {
  return (
    <section className="">
      <div className="container mx-auto px-8 py-24">
      <h2 className="mb-12">Spotify</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">

        <iframe title="s-1" src="https://open.spotify.com/embed/playlist/0v6W2JsftwLSCxPXGZBz05" height="320" style={{width: '100%'}} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe title="s-1" src="https://open.spotify.com/embed/playlist/5sOIucNXf4Ai4CpFDI3Q3V" height="320" style={{width: '100%'}} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe title="s-1" src="https://open.spotify.com/embed/album/61r5yOyCHjm30AlcKUub6t" height="320" style={{width: '100%'}} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe title="s-1" src="https://open.spotify.com/embed/album/2yBwMVFsIibn8vj7XwaFjF" height="320" style={{width: '100%'}} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

      </div>

      
        
     </div>
    </section> 
  )
}

export default Spotify
