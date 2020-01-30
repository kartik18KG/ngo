import React from "react";
import { NavLink } from "react-router-dom";

const adminNavbar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-light ">
        <h5>
          <NavLink to="/adminpanel">AdminPanel</NavLink>
        </h5>
        <div className="container">
          <li className="navbar-nav ">
            <NavLink to="/adminpanel" className="nav-link text-success">
              <span className="text-danger">DonorsList</span>
            </NavLink>
          </li>
          <li className="navbar-nav ">
            <NavLink
              to="/adminpanel/teacherslist"
              className="nav-link text-success"
            >
              <span className="text-danger">Needy'sList</span>
            </NavLink>
          </li>
          <li className="navbar-nav ">
            <NavLink to="/adminpanel/sublist" className="nav-link text-success">
              <span className="text-danger">SubscribersList</span>
            </NavLink>
          </li>
          <li className="nav-item dropdown navbar ">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Edit
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Edit Homepage
              </a>
              <a className="dropdown-item" href="#">
                Edit Aboutpage
              </a>
              <div className="dropdown-divider"></div>
            </div>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default adminNavbar;
