const Error = ({ data }) => (
  <div className="error__container">
    <img src={data.errorImage} alt={data.errorHeader} />
    <h1>{data.errorHeader}</h1>
    <h2>{data.errorSubheader}</h2>
    <button type="submit">{data.button}</button>
  </div>
);

export default Error;
