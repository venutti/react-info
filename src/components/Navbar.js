import React from "react";
import logo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="nav--logo_img" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
