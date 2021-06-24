import Navbar from '../components/Navbar';
import BlogHeader from '../components/BlogHeader';
import BlogPosts from '../components/BlogPosts';
import Footer from '../components/Footer';

const Blog = ({ data, blog }) => (
  <div>
    <Navbar data={data} />
    <BlogHeader data={data} />
    <BlogPosts blog={blog} data={data} />
    <Footer data={data} />
  </div>
);

export default Blog;
