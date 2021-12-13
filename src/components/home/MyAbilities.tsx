import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import BrushIcon from "@material-ui/icons/Brush";
import { RootStateOrAny, useSelector } from "react-redux";

interface types {
  MyAbilities: any;
  header: string;
  desc: string;
  topic1: string;
  item1: string;
  topic2: string;
  item2: string[];
}

function MyAbilities({ data }: { data: types }) {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div className={`abilities abilities--${theme}`}>
      <div className="abilities__container">
        {data.MyAbilities.map((e: types, index: number) => (
          <div className="abilities__half" key={e.header}>
            <div className="abilities__half__content">
              <div className="icon__container">
                {index === 0 ? <BrushIcon /> : <CodeIcon />}
              </div>
              <h2>{e.header}</h2>
              <p>{e.desc}</p>
              <h3>{e.topic1}</h3>
              <p>{e.item1}</p>
              <h3>{e.topic2}</h3>
              {e.item2.map((f) => (
                <p key={f}>{f}</p>
              ))}
            </div>
            {index === 0 ? <div className="divider" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAbilities;
