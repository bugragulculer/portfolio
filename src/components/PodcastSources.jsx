import React from 'react';

function PodcastSources({ data }) {
  return (
    <div>
      <div className="podcast__sources__container">
        <h3>{data.sourceHeader}</h3>
        <div className="podcast__source__container">
          <div className="podcast__source">
            <h2>Spotify</h2>
            <iframe className="spotify" title="Podcast Source 5" src="https://open.spotify.com/embed-podcast/show/558Alds0OXFl56F0Ar4LxS" width="680" height="250" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
          </div>
          <div className="podcast__source">
            <h2>Apple Podcast</h2>
            <iframe className="apple_music" title="Podcast Source 6" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" width="680" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/ortaya-kar%C4%B1%C5%9F%C4%B1k/id1538796490" />
          </div>
        </div>
        <div className="youtube__videos">
          <h2 className="youtube__header">YouTube</h2>
          <div className="youtube__video__container">
            <iframe className="youtube__embed" title="Podcast Source 7" src="https://www.youtube.com/embed/videoseries?list=PL0xvo3CxSLzqNKTEogz4l67SlbWFXyZjK" width="325" height="250" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <iframe className="youtube__embed" title="Podcast Source 8" src="https://www.youtube.com/embed/videoseries?list=PL0xvo3CxSLzorfEl9Bq2plOv-1aiE3nU_" width="325" height="250" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
        <div className="rectangle">
          <div className="podcast__rectangle" />
        </div>
      </div>
    </div>
  )
}

export default PodcastSources;
