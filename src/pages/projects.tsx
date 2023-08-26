import React, { useState, useEffect } from "react";
import { AiOutlineGlobal, AiOutlineEye } from "react-icons/ai";

import Panels from "../components/panels";
import Card from "../components/card";

import { removeDuplicates } from "../utils/functions";
import { RepoType } from "../utils/types";
import Api from "../utils/api";

const Projects: React.ElementType = () => {
  const [repos, setRepos] = useState<RepoType[] | never[]>([]);

  const toRepo = (name: string) =>
    window.open("https://github.com/ahosall/" + name, "_blank");

  const handleTo = (uri: string) => window.open(uri, "_blank");

  useEffect(() => {
    (async () => setRepos(await Api.repos))();
  }, []);
  return (
    <>
      <div className="container">
        <div className="list">
          {repos.map((r, i) =>
            r.topics.includes("portfolio") ? (
              <div className="item">
                <Card
                  title={r.name}
                  content={r.description}
                  actions={[
                    ...(r.homepage
                      ? [
                          {
                            name: <AiOutlineGlobal />,
                            action: () => handleTo(r.homepage as string),
                          },
                        ]
                      : []),
                    { name: <AiOutlineEye />, action: () => toRepo(r.name) },
                  ]}
                  highlight
                />
              </div>
            ) : null
          )}
        </div>
      </div>

      <Panels
        panels={[
          {
            title: "Languagens",
            content: (
              <div className="list">
                {removeDuplicates(repos.map((r) => r.language)).map((r, i) => (
                  <div
                    key={i}
                    style={{ cursor: "pointer" }}
                    className="item highlight"
                  >
                    {r}
                  </div>
                ))}
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Projects;
