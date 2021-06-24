import React, { useState } from 'react';

const RecentWork = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = (state) => setHovered(state);
  return (
    <a className="recent__works__item" onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)} href={item.url}>
      <img className={hovered ? 'close' : 'works__logo'} src={item.logo} alt={item.name} />
      <section className={hovered ? 'show' : 'close'}>
        {item.desc}
      </section>
    </a>
  );
};

const RecentWorks = ({ data, recentWorks }) => {
  return (
  <div className="recent__works">
    <div className="recent__works__container">
      <h1 className="recent__works__header">{recentWorks}</h1>
      <div className="recent__works__items">
        {data.RecentWorks.map((e) => (
          <RecentWork item={e} key={e.desc}/>
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
  )
}

export default RecentWorks;
