import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  recentWorks: string;
  data: {
    RecentWorks: [
      {
        desc: string;
        url: string;
        logo: string;
        name: string;
      }
    ];
    desc: string;
    ShareProject: [
      {
        url: string;
        title: string;
      }
    ];
  };
}

interface itemTypes {
  url: string;
  logo: string;
  name: string;
  desc: string;
}

const RecentWork = ({ item }: { item: itemTypes }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = (state: boolean | ((prevState: boolean) => boolean)) =>
    setHovered(state);
  return (
    <a
      className="recent__works__item"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      href={item.url}
    >
      <img
        className={hovered ? "close" : "works__logo"}
        src={item.logo}
        alt={item.name}
      />
      <section className={hovered ? "show" : "close"}>
        <p>{item.desc}</p>
      </section>
    </a>
  );
};

const RecentWorks = ({ data, recentWorks }: types) => {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div className={`recent__works recent__works--${theme}`}>
      <div className="recent__works__container">
        <h1 className="recent__works__header">{recentWorks}</h1>
        <div className="recent__works__items">
          {data.RecentWorks.map((e) => (
            <RecentWork item={e} key={e.desc} />
          ))}
        </div>
      </div>
      <div className="recent__works__buttons">
        {data.ShareProject.map((e) => (
          <a className="recent__works__a" href={e.url} key={e.title}>
            <p className="recent__works__button">{e.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
