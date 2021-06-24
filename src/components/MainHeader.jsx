import React from 'react';

const MainHeader = ({ data }) => {
  return (
  <div className="home__header">
    <div className="header__text">
      <h1>{data.MainHeader.header1}</h1>
      <h2>{data.MainHeader.header2}</h2>
    </div>
    <img src={data.MainHeader.logo} alt="Header" />
    </div>
  )
};

export default MainHeader;
