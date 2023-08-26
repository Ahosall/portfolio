import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import { UserType } from "./utils/types";

import Api from "./utils/api";

import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Projects from "./pages/projects";

const App: React.ElementType = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => setUser(await Api.user))();
  }, []);

  return (
    <div className="app">
      {user ? <SideBar user={user} /> : null}
      <div className="main">
        {user ? <Navbar user={user} /> : null}
        <div className="content">
          {user ? (
            <RouterProvider
              router={createBrowserRouter([
                {
                  path: "/",
                  element: <Home />,
                },
                {
                  path: "/projects",
                  element: <Projects />,
                },
              ])}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
