import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  header: string;
  background: string;
  data: any;
}

const NotionTable = ({ data, header, background }: types) => {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  const [activeTab, setActiveTab] = useState(data[0].label);
  const [content, setContent] = useState(data[0]);
  const buttons: any = [];

  data.map((e: any) => buttons.push(e.label));

  const changeTab = (tab: string) => setActiveTab(tab);

  useEffect(
    () => data.map((e: any) => (activeTab === e.label ? setContent(e) : null)),
    [activeTab, data]
  );

  return (
    <div className={`notion__table notion__table--${background}--${theme}`}>
      <h2>{header}</h2>
      <div className="tab__buttons">
        {buttons.map((button: string) => (
          <button
            type="button"
            className={button === activeTab ? "active" : "normal"}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="tab__content" id={content.id}>
        <div className="notion__content__half__right">
          <h3>{content.header}</h3>
          <p>{content.desc}</p>
          <a href={content.url}>{content.action}</a>
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
