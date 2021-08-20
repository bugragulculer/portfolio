import React, { useState } from 'react';

const MyNewsletter = ({ data }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <section className="newsletter__form">
      <h2>{data.Newsletter.header}</h2>
      <h4>{data.Newsletter.subheader}</h4>
      <form action="https://youtube.us4.list-manage.com/subscribe/post?u=202596093129dd9f85893dc69&amp;id=de8bc456c2" method="GET" noValidate>
        <input type="hidden" name="u" value="202596093129dd9f85893dc69" />
        <input type="hidden" name="id" value="de8bc456c2" />
        <label htmlFor="MERGE0">
          <input
            type="email"
            name="EMAIL"
            id="MERGE0"
            placeholder={data.Newsletter.mail}
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </label>
        <label htmlFor="MERGE1">
          <input
            type="text"
            name="NAME"
            id="MERGE1"
            placeholder={data.Newsletter.name}
            value={name}
            onChange={(e) => { setName(e.target.value); }}
          />
        </label>
        <li>
          <label htmlFor="mce-group[71482]-71482-0">
            Bugra Gulculer
            <input type="checkbox" value="1" name="group[71482][1]" id="mce-group[71482]-71482-0" checked readOnly />
          </label>
        </li>
        <input type="submit" value={data.Newsletter.subscribe} name="subscribe" id="mc-embedded-subscribe" className="button" />
      </form>
    </section>
  );
};

export default MyNewsletter;
