import React from "react";

import "./panels.css";

type TPanel = {
  title: string;
  content: any;
};
type TProps = { panels: TPanel[] };

const Panels: React.ElementType = (props: TProps) => {
  let { panels } = props;
  return (
    <div className="panels">
      {panels.map((p, i) => (
        <div className="panel">
          <div className="content">
            <div className="title">{p.title}</div>
            {p.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panels;
