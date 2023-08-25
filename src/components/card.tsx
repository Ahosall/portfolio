import React from "react";

import "./card.css";

const Card: React.ElementType = ({ title = false, content }) => {
  return (
    <div className="card">
      {title ? <div className="card-title">Título top</div> : null}
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
