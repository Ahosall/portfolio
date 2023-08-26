import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import "./navbar.css";

import { UserType } from "../utils/types";

type TProps = {
  user: UserType;
};

const Navbar: React.ElementType = (props: TProps) => {
  let { user } = props;
  const handleTo = (uri: string) => (window.location.href = uri);

  return (
    <div className="navbar">
      {/* <div className="nav-brand">{user.name}</div> */}
      <div className="nav-items">
        <div className="nav-item item-left">
          <div className="location">
            <div
              className={
                "location-item" +
                (window.location.pathname !== "/" ? " enabled" : "")
              }
              onClick={() =>
                window.location.pathname !== "/" ? handleTo("/") : null
              }
            >
              home
            </div>{" "}
            {window.location.pathname !== "/" ? (
              <>
                <div className="location-sep">
                  <AiOutlineRight />
                </div>
                <div className={"location-item"}>
                  {window.location.pathname.replace("/", "")}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
