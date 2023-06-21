import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar(props) {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/userProfile">User Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
