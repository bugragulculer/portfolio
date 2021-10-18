import React from 'react';

interface types {
  MainHeader: {
    header1: string,
    header2: string,
    logo: string
  }
}

const MainHeader = ({ data }: { data: types }) => {
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
