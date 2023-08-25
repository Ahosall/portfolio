import React from "react";

import "./sidebar.css";

const SideBar: React.ElementType = () => {
  return (
    <div className="sidebar">
      <div className="content">
        <div className="avatar avatar-rounded">
          <div
            className="image"
            style={{
              backgroundImage:
                "url('https://avatars.githubusercontent.com/u/49027157?v=4')",
            }}
          ></div>
        </div>
        <div className="separator"></div>
        <div className="profile">
          <div className="name">Feh's</div>
          <div className="roles">
            <div className="role tag">FullStack Developer</div>
            <div className="role tag">Musician</div>
            <div className="role tag">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
