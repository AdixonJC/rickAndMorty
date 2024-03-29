import React from "react";
import { Outlet, NavLink, Route, Routes } from "react-router-dom";
import "./nav.css";
import Home from "../Home/Home";
const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div>
          <img className="img__logo" src="/images/logo.png" alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/characters"}>characters</NavLink>
            </li>
            <li>
              <NavLink to={"/locations"}>locations</NavLink>
            </li>
            <li>
              <NavLink to={"/episodes"}>episodes</NavLink>
            </li>
          </ul>
        </nav>
      </div>
        <Routes>
          <Route index path="/" element={<Home/>}/>
        </Routes>
    </>
  );
};

export default Nav;
