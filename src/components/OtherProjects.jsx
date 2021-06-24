import React from 'react';
import { Link } from 'react-router-dom';

function OtherProjectsEN({ data, otherProjects }) {
  return (
    <div className="other__projects__container">
      <h1>{ otherProjects }</h1>
      <div className="projects__items">
        {data.OtherProjects.map((e) => (
          <div className="projects__item" key={e.header}>
            <h2>{e.header}</h2>
            <p>{e.desc}</p>
            <Link className="projects__item__link" to={e.url}>Learn More</Link>
          </div>
        ))}
      </div>
      <div className="recent__works__rectangle" />
    </div>
  )
}

export default OtherProjectsEN;
