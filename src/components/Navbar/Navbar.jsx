import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">CodePad</div>
      <div>
        <ul>
          <li>Home </li>
          <li>About </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
