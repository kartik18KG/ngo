import React from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light ">
      <div className="container">
        <Link to="/">
          <strong className="navbar-brand text-success">
            <h2>NGO</h2>
          </strong>
        </Link>
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
