import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/view">View</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
