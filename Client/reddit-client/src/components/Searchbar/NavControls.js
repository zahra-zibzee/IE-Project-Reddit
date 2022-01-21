import React from "react";
import { Link } from "react-router-dom";
const NavControls = ({ isContact }) => {
  return (
    <div role="menu" className="nav-controls">
      <Link role="menuitem" to="/bookmarks">
        <i className="material-icons">bookmarks</i>
      </Link>
      <Link to="/contact">
        <i className="material-icons">email</i>
      </Link>
    </div>
  );
};

export default NavControls;
