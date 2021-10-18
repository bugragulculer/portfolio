import React from 'react';

interface data {
  errorImage: string,
  errorHeader: string,
  errorSubheader: string,
  button: string,
}

const Error = ({ data }: { data: data }) => (
  <div className="error__container">
    <img src={data.errorImage} alt={data.errorHeader} />
    <h1>{data.errorHeader}</h1>
    <h2>{data.errorSubheader}</h2>
    <button type="submit">{data.button}</button>
  </div>
);

export default Error;
