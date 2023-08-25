import React from "react";

import "./App.css";

import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";

import Projects from "./pages/main";

const App: React.ElementType = () => {
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Navbar />
        <div className="content">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
