import "../../styles/navModules.css";
import React, { useState, useEffect } from "react";
import addUserIcon from "../../Pics/icons/addUser.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { auth } from "../../index";
const Menumodules = (props) => {
  var user = auth.currentUser;
  var name, email, photoUrl, uid, emailVerified;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }

  console.log(name, email, photoUrl, uid, emailVerified);

  const handleLogout = () => {
    auth.signOut();
  };

  let manuUserSeting;
  if (email) {
    manuUserSeting = (
      <div
        style={{ display: props.changeProfileDisplay }}
        className="profile-dropdown"
      >
        <div className="profile-dropdown-contant">
          <div className="profile-dropdown-info profile-items">
            <span className="profile-dropdown-info-img">
              <img alt="img" src={""} />
            </span>
            <span className="profile-dropdown-info-name">{user.email}</span>
          </div>
          <div className="profile-dropdown-logout">
            <span
              onClick={handleLogout}
              className="profile-dropdown-logout-button"
            >
              LogOut
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    manuUserSeting = (
      <div
        style={{ display: props.changeProfileDisplay }}
        className="profile-dropdown"
      >
        <div className="profile-dropdown-contant">
          <div className="navbar-loginButtonLink">
            <Link id="loginButtonLink" to="/login">
              Login
            </Link>
          </div>
          <div className="navbar-createAccountButtonLink">
            <span>
              <img src={addUserIcon} alt="img" />
            </span>
            <Link id="createAccountButtonLink" to="signup">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        onClick={props.handleToggle}
        style={{ display: props.changeProfileDisplay }}
        className="close-dropDown"
      ></div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      {manuUserSeting}
    </>
  );
};

export default Menumodules;
