import Navbar from '../components/Navbar';
import PodcastHeader from '../components/PodcastHeader';
import PodcastSources from '../components/PodcastSources';
import Footer from '../components/Footer';

const Podcast = ({ data }) => (
  <div>
    <Navbar data={data} />
    <PodcastHeader data={data.Podcast} />
    <PodcastSources data={data.Podcast} />
    <Footer data={data} />
  </div>
);


export default Podcast;
