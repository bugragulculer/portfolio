import React from 'react';

interface types {
  header: string
}

function PodcastHeader({ data }: { data: types }) {
  return (
    <div className="podcast__header__container">
      <h1>{data.header}</h1>
    </div>
  )
}

export default PodcastHeader;
