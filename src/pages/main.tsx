import React from "react";
import Card from "../components/card";

const Projects: React.ElementType = () => {
  return (
    <>
      <div className="container">
        <h2>Projects</h2>
        <div className="list">
          <div className="item">
            {["", "", "", "", "", "", "", "", "", "", "", "", ""].map(
              (k, i) => (
                <Card title="Yoo~" content="Conteudo top" />
              )
            )}
          </div>
        </div>
      </div>

      <div className="panels">
        <div className="panel">
          <div className="content">
            <div className="title">Lista de itens</div>
            <div className="list list-simple">
              <a className="item">Hii!</a>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="content">
            <div className="title">Outros itens</div>
            <div className="list list-simple">
              <a className="item">Hii!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
