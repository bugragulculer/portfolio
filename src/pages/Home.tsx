import { useLocation } from 'react-router-dom';
import React from 'react';
import { Navbar, MainHeader, SubHeader, MyAbilities, Coffee, RecentWorks, OtherProjects, MyNewsletter, Footer } from '../components';

interface types {
  recentWorks: string,
  otherProjects: string,
  data: any,
}

const Home = ({ data, recentWorks, otherProjects }: types) => {
  const param = useLocation();
  return (
    <>
      <Navbar data={data} />
      <MainHeader data={data} />
      <SubHeader data={data} />
      <MyAbilities data={data} />
      {param.pathname === "/tr" ? null : <Coffee />}
      <RecentWorks data={data} recentWorks={recentWorks} />
      <OtherProjects data={data} otherProjects={otherProjects} />
      <MyNewsletter data={data} />
      <Footer data={data} />
    </>
  )
};


export default Home;
