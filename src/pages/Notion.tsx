import {
  Navbar,
  NotionHeader,
  NotionCommunity,
  NotionLearn,
  Footer,
  NotionTable,
} from "../components";

interface types {
  recentWorks: string;
  otherProjects: string;
  data: any;
  Notion: {
    planner: string;
    tracker: string;
  };
  Planner: string;
  Tracker: string;
  planner: string;
  tracker: string;
}

const Notion = ({ data }: types) => (
  <>
    <Navbar data={data} />
    <NotionHeader data={data.Notion} />
    <NotionCommunity data={data.Notion} />
    <NotionTable
      data={data.Planner}
      header={data.Notion.planner}
      background="color"
    />
    <NotionTable
      data={data.Tracker}
      header={data.Notion.tracker}
      background="white"
    />
    <NotionLearn data={data.Notion} />
    <Footer data={data} />
  </>
);

export default Notion;
