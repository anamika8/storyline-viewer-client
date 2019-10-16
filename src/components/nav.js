import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import { NavLink } from "react-router-dom";
import "./nav.css";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <NavLink to="/register" className="nav__link">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="nav__link">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
