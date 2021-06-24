import React from 'react';

function BlogHeader({ data }) {
  return (
    <a href={data.BlogHeader.url} className="blog__header__container">
      <img src={data.BlogHeader.img} alt="" />
      <div>
        <h1>{data.BlogHeader.name}</h1>
        <h2>{data.BlogHeader.subheader}</h2>
        <h3>{data.BlogHeader.desc}</h3>
      </div>
    </a>
  )
}

export default BlogHeader;
