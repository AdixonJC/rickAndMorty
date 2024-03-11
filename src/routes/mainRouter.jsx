import React from "react";
import { createHashRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Profile from "../components/Profile";
import App from "../App";

const routerConfig = [
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "characters",
        element: <Home />,
      },
      {
        path: "locations",
        element: <Profile />,
      }
    ]
  },

];

const router = createHashRouter(routerConfig);

export default router;
