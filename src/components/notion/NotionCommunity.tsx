import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  community: string;
  communityDesc: string;
}

function NotionCommunity({ data }: { data: types }) {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div className={`notion__community__container notion__community--${theme}`}>
      <h2>{data.community}</h2>
      <a href="https://www.notion.so/notionturkiye/Notion-T-rkiye-456ec455a3484192a6c4b7a2f9baa61a">
        {data.communityDesc}
      </a>
    </div>
  );
}

export default NotionCommunity;
