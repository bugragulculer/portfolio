import {Navbar, PodcastHeader, PodcastSources, Footer } from '../components';

interface data {
  data: any,
  Podcast: object
}

const Podcast = ({ data }:data) => (
  <div>
    <Navbar data={data} />
    <PodcastHeader data={data.Podcast} />
    <PodcastSources data={data.Podcast} />
    <Footer data={data} />
  </div>
);

export default Podcast;
