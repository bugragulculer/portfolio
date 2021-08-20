import React from 'react';

function SubHeader({ data }) {
  return (
    <div className="subheader">
      <h3>{data.SubHeader.header1}</h3>
      <p>{data.SubHeader.header2}</p>
    </div>
  );
}

export default SubHeader;
