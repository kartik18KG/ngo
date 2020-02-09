import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SubscriptionForm from "../newsLetter/subscriptionForm";

class NavbarLinks extends Component {
  render() {
    return (
      <div className="float-right" style={{ color: "#72DDF7" }}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/donate" className="nav-link ">
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" className="nav-link">
              Need Help
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/helpseekers" className="nav-link">
              HelpSeekers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link ">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <SubscriptionForm />
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarLinks;
