import React from "react";
import { createHashRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import {Episodes, Location} from "../components";
import App from "../App";

const routerConfig = [
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "characters",
        element: <Home/>,
      },
      {
        path: "locations",
        element: <Location />,
      },
      {
        path: "Episodes",
        element: <Episodes/>,
      }
    ]
  },

];

const router = createHashRouter(routerConfig);

export default router;
