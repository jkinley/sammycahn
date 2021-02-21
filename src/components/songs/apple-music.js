import React from 'react'

const AppleMusic = () => {
  return (
      <section className="">
        <div className="container mx-auto px-8 py-24">
          <h2 className="mb-12">Apple Music</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            <iframe title="am-1" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="320" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/sammy-cahn-songbook/pl.237cc45fc0e641e99e8943e4a8173fc2"></iframe>

            <iframe title="am-2" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="320" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/frank-sinatra-the-sammy-cahn-jimmy-van-heusen-songbook/pl.898dc92aa9334bc4aff8154a079f6a7b"></iframe>

            <iframe title="am-3" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="320" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/frank-sinatra-the-sammy-cahn-jule-styne-songbook/pl.e7ddc3dd54d64e29b9438a97d7d27dcb"></iframe>

            <iframe title="am-4" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="320" style={{width: '100%'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/holiday-songs/pl.u-qk76T8l5p0"></iframe>
          </div>

        </div>
      </section>
  )
}

export default AppleMusic
