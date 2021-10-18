import { Navbar, NotionHeader, NotionCommunity, NotionLearn, Footer, NotionTable } from '../components';

interface types {
  recentWorks: string,
  otherProjects: string,
  data: any,
  Notion: {
    planner: string,
    tracker: string
  },
  Planner: string,
  Tracker: string,
  planner: string,
  tracker: string,
}

const Notion = ({ data }: types) => (
  <>
    <Navbar data={data} />
    <NotionHeader data={data.Notion} />
    <NotionCommunity data={data.Notion} />
    <NotionTable data={data.Planner} header={data.Notion.planner} background="#4531c2" color="#fff" />
    <NotionTable data={data.Tracker} header={data.Notion.tracker} background="#fff" color="#000" />
    <NotionLearn data={data.Notion} />
    <Footer data={data} />
  </>
);

export default Notion;