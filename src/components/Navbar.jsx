import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/add">Add product Page</NavLink>
    </div>
  );
}

export default Navbar;
