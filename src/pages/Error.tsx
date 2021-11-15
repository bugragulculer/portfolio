import React from "react";
import { Link } from "react-router-dom";

const Error = ({ data }: any) => {
  console.log(data);
  return (
    <div className="error__container">
      <img src={data.errorImage} alt={data.errorHeader} />
      <h1>{data.errorHeader}</h1>
      <h2>{data.errorSubheader}</h2>
      <Link to="/">{data.button}</Link>
    </div>
  );
};

export default Error;
