import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';

function MyAbilities({ data }) {
  return (
    <div className="abilities">
      <div className="abilities__container">
        {data.MyAbilities.map((e, index) => (
          <div className="abilities__half" key={e.header}>
            <div className="icon__container">
              {index === 0 ? <BrushIcon /> : <CodeIcon />}
            </div>
            <h1>{e.header}</h1>
            <p>{e.desc}</p>
            <h2>{e.topic1}</h2>
            <p>{e.item1}</p>
            <h2>{e.topic2}</h2>
            {e.item2.map((f) => (
              <p key={f}>{f}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAbilities;
