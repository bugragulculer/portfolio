import React from 'react';

function NotionCommunity({ data }) {
  return (
    <div className="notion__community__container">
      <h2>{data.community}</h2>
      <a href="https://www.notion.so/notionturkiye/Notion-T-rkiye-456ec455a3484192a6c4b7a2f9baa61a">{data.communityDesc}</a>
    </div>
  )
}

export default NotionCommunity;
