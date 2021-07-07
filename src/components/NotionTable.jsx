import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NotionTable = ({ data, header, background, color }) => {
  const [activeTab, setActiveTab] = useState(data[0].label);
  const [content, setContent] = useState(data[0]);
  const buttons = [];
  data.map((e) => (buttons.push(e.label)));

  const changeTab = (tab) => (
    setActiveTab(tab)
  );

  useEffect(() => (
    data.map((e) => (
      activeTab === e.label ? setContent(e) : null
    ))
  ), [activeTab, data]);

  return (
    <div style={{ backgroundColor: `${background}` }} className='notion__table'>
      <h2 style={{ color: `${color}` }}>{header}</h2>
      <div className="tab__buttons">
        {buttons.map((button) => <button type="button" style={{ color: `${color}` }} className={button === activeTab ? 'active' : 'normal'} onClick={() => changeTab(button)}>{button}</button>)}
      </div>
      <div className="tab__content" id={content.id}>
        <div className="notion__content__half__right">
          <h1 style={{ color: `${color}` }}>{content.header}</h1>
          <p style={{ color: `${color}` }}>{content.desc}</p>
          <a href={content.url} style={{ color: `${color}` }}>{content.action}</a>
        </div>
        <div className="notion__content__half__left">
          <img src={content.image} alt={content.header} />
        </div>
      </div>
    </div>
  );
};

NotionTable.propTypes = {
  data: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default NotionTable;
