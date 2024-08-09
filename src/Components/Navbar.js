import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const styleModule = { listStyleType: "none", display: "flex", gap: "20px" };
  return (
    <div>
      <ul style={styleModule}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
