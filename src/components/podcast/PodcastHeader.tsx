import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  header: string;
}

function PodcastHeader({ data }: { data: types }) {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div
      className={`podcast__header__container podcast__header__container--${theme}`}
    >
      <h1>{data.header}</h1>
    </div>
  );
}

export default PodcastHeader;
