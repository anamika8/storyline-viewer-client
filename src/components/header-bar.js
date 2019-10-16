import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import { NavLink } from "react-router-dom";
import Nav from "./nav";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
    }
    return (
      <div className="header-bar">
        <Nav />
        <NavLink to="/" className="nav__link">
          <img src="../images/viewer_logo.jpg" alt="story-line viewer brand" />
        </NavLink>
        <h2>Storyline Viewer App</h2>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
