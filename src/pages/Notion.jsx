import Navbar from '../components/Navbar';
import NotionHeader from '../components/NotionHeader';
import NotionCommunity from '../components/NotionCommunity';
import NotionLearn from '../components/NotionLearn';
import Footer from '../components/Footer';
import NotionTable from '../components/NotionTable';

const Notion = ({ data }) => (
  <div>
    <Navbar data={data} />
    <NotionHeader data={data.Notion} />
    <NotionCommunity data={data.Notion} />
    <NotionTable data={data.Planner} header={data.Notion.planner} background="#4531c2" color="#fff"/>
    <NotionTable data={data.Tracker} header={data.Notion.tracker} background="#fff" color="#000"/>
    <NotionLearn data={data.Notion} />
    <Footer data={data} />
  </div>
);


export default Notion;
