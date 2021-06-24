import React from 'react';

function PodcastHeader({ data }) {
  return (
    <div className="podcast__header__container">
      <h1>{data.header}</h1>
    </div>
  )
}

export default PodcastHeader;
