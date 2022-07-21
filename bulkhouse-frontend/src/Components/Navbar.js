import React from "react";
import { Component } from "react";
import "../Styles/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <a className="link" href="/welcome">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="/workouts">
            Workouts
          </a>
        </li>
      </ul>
    );
  }
}

export default Navbar;