import React from "react";
import notion from "../../assets/notion.png";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  header: string;
  subheader: string;
  desc: string;
}

function NotionHeader({ data }: { data: types }) {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div
      className={`notion__header__container notion__header__container--${theme}`}
    >
      <img src={notion} alt="notion" />
      <div>
        <h1>{data.header}</h1>
        <h2>{data.subheader}</h2>
        <h3>{data.desc}</h3>
      </div>
    </div>
  );
}

export default NotionHeader;
