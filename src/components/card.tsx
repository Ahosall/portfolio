import React from "react";

import "./card.css";

type TAction = {
  name: string;
  action: () => void;
};

type TProps = {
  title: string | boolean;
  content: string;
  actions: TAction[];
  highlight: boolean;
};

const Card: React.ElementType = (props: TProps) => {
  let { title = false, content, actions = [], highlight = false } = props;

  return (
    <div className={"card" + (highlight ? " highlight" : "")}>
      <div className="card-content">
        {title ? <div className="card-title">{title}</div> : null}
        {content}
      </div>
      {actions.length > 0 ? (
        <div className="card-actions">
          {actions.map((a, i) => (
            <div className="card-action" onClick={a.action}>
              {a.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
