import React from "react";

import { UserType } from "../utils/types";

import "./sidebar.css";

type TProps = {
  user: UserType;
};

const SideBar: React.ElementType = (props: TProps) => {
  let { user } = props;

  const routes = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Projects",
      to: "/projects",
    },
  ];

  const handleTo = (uri: string) => (window.location.href = uri);

  return (
    <div className="sidebar">
      <div className="content">
        <div className="avatar avatar-rounded">
          <div
            className="image upscale-background"
            style={{
              backgroundImage: `url('${user.avatar_url}')`,
            }}
          ></div>
        </div>
        <div className="separator"></div>
        <div className="profile">
          <div className="name">{user.name}</div>
          <div className="roles">
            {user.bio.split(",").map((v, i) => (
              <div key={i} className="role tag">
                {v}
              </div>
            ))}
          </div>
        </div>
        <div className="list">
          {routes.map((r, i) => (
            <div
              key={i}
              className="item highlight"
              style={{
                cursor: "pointer",
                backgroundColor:
                  window.location.pathname == r.to
                    ? "var(--secondary)"
                    : "transparent",
              }}
              onClick={() => handleTo(r.to)}
            >
              {r.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
