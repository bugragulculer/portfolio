import React from 'react';
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  SubHeader: {
    header1: string,
    header2: string
  }
}

function SubHeader({ data }: { data: types }) {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div className={`subheader subheader--${theme}`}>
      <h3>{data.SubHeader.header1}</h3>
      <p>{data.SubHeader.header2}</p>
    </div>
  );
}

export default SubHeader;
