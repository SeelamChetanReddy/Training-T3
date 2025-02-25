import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ width: "100%", height: "100vh", background: "bisque" }}>
      Profile
      <br />
      <Link to="/profile/myaccount">My Account</Link>
      <br />
      <br />
      <hr />
      <br />
      <Link to="/profile/mysettings">My Settings</Link>

      <Outlet />
    </div>
  );
};

export default Profile;
