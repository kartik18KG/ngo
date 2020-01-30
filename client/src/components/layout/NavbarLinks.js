import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SubscriptionForm from "../newsLetter/subscriptionForm";

class NavbarLinks extends Component {
  render() {
    return (
      <div className="float-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-success">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/donate" className="nav-link text-success">
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" className="nav-link text-success">
              NeedHelp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/helpseekers" className="nav-link text-success">
              HelpSeekers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link text-success">
              AboutUs
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
