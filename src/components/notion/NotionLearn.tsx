import React from 'react';

interface types {
  learn: string,
  learnDesc: string,
  new: string,
  latest: string,
}

const NotionVideos = ({ data }: { data: types }) => {
  return (
    <div className="notion__videos">
      <div className="video__desc">
        <h1 className="video__desc__h1">{data.learn}</h1>
        <h3 className="video__desc__h3">{data.learnDesc}</h3>
      </div>
      <h2 className="video__desc__h2">{data.new}</h2>
      <div className="videos">
        <iframe className="video" title="Notion Video 5" src="https://www.youtube.com/embed/xPRFMEfWKtE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <iframe className="video" title="Notion Video 6" src="https://www.youtube.com/embed/fAHU8EW_PPI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <h2 className="video__desc__h2">{data.latest}</h2>
      <div className="videos">
        <iframe className="video" title="Notion Video 7" src="https://www.youtube.com/embed/t7KfyBZ3BjI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <iframe className="video" title="Notion Video 8" src="https://www.youtube.com/embed/flIwZNmovf4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div className="notion__white" />
    </div>
  )
};

export default NotionVideos;
