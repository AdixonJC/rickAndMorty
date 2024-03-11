import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./nav.css";
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
    </>
  );
};

export default Nav;
