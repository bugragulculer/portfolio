import { useLocation } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';
import MyAbilities from '../components/MyAbilities';
import Coffee from '../components/Coffee'
import RecentWorks from '../components/RecentWorks';
import OtherProjects from '../components/OtherProjects';
import MyNewsletter from '../components/MyNewsletter';
import Footer from '../components/Footer';

const Home = ({ data, recentWorks, otherProjects }) => {
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
