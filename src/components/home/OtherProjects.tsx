import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  otherProjects: string;
  data: {
    OtherProjects: [
      {
        header: string;
        desc: string;
        url: string;
      }
    ];
  };
}

function OtherProjectsEN({ data, otherProjects }: types) {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div
      className={`other__projects__container other__projects__container--${theme}`}
    >
      <h1>{otherProjects}</h1>
      <div className="projects__items">
        {data.OtherProjects.map((e) => (
          <div className="projects__item" key={e.header}>
            <h2>{e.header}</h2>
            <p>{e.desc}</p>
            <a href={e.url}>Learn More</a>
          </div>
        ))}
      </div>
      <div className="purple__rectangle" />
    </div>
  );
}

export default OtherProjectsEN;
