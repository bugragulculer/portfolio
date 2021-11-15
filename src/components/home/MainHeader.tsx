import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  MainHeader: {
    header1: string;
    header2: string;
    logo: string;
  };
}

const MainHeader = ({ data }: { data: types }) => {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div className={`home__header home__header--${theme}`}>
      <div className="header__text">
        <h1>{data.MainHeader.header1}</h1>
        <h2>{data.MainHeader.header2}</h2>
      </div>
      <img src={data.MainHeader.logo} alt="Header" />
    </div>
  );
};

export default MainHeader;
