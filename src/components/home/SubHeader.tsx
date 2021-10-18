import React from 'react';

interface types {
  SubHeader: {
    header1: string,
    header2: string
  }
}

function SubHeader({ data }: { data: types }) {
  return (
    <div className="subheader">
      <h3>{data.SubHeader.header1}</h3>
      <p>{data.SubHeader.header2}</p>
    </div>
  );
}

export default SubHeader;
