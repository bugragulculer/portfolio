const BlogPosts = ({ data, blog }) => {
  return (
    <div className="blog__posts">
      <h1>{data.BlogHeader.posts}</h1>
      <div className="blog__post__container">
        {blog.map((e) => (
          <a className="blog__post" href={e.url} key={e.name}>
            <img src={e.img} alt={e.name} />
            <div>
              <h3>{e.name}</h3>
              <h4>{e.desc}</h4>
            </div>
          </a>
        ))}
      </div>
      <div className="blog__white">
        <div className="blog__rectangle" />
      </div>
    </div>
  )
};

export default BlogPosts;
