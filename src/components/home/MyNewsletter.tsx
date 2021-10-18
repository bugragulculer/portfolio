import React from 'react';

interface types {
  Newsletter: {
    header: string,
    subheader: string,
    action: string,
    mail: string,
    name: string,
    subscribe: string,
  }
}

const MyNewsletter = ({ data }: { data: types }) => {
  return (
    <section className="newsletter__form">
      <h2>{data.Newsletter.header}</h2>
      <h4>{data.Newsletter.subheader}</h4>
      <form action={data.Newsletter.action} method="post" id="revue-form" name="revue-form" target="_blank">
        <div>
          <label htmlFor="member_email">{data.Newsletter.mail}</label>
          <input className="revue-form-field" placeholder={data.Newsletter.mail} type="email" name="member[email]" id="member_email" />
        </div>
        <div>
          <label htmlFor="member_first_name">{data.Newsletter.name}</label>
          <input className="revue-form-field" placeholder={data.Newsletter.name} type="text" name="member[first_name]" id="member_first_name" />
        </div>
        <input type="submit" value={data.Newsletter.subscribe} className="button" name="member[subscribe]" id="member_submit" />
      </form>
    </section>
  );
};

export default MyNewsletter;
