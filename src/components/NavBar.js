import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = ["albums", "shows"];
  const renderedNavLinks = links.map((link) => {
    return (
      <li key={link}>
        <NavLink to={`/${link}`}>{link.toUpperCase()}</NavLink>
      </li>
    );
  });
  return (
    <nav>
      <ul>{renderedNavLinks}</ul>
    </nav>
  );
};

export default NavBar;
