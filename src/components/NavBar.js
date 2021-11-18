import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = ["albums", "shows"];
  const [isDark, setIsDark] = useState(false);
  const renderedNavLinks = links.map((link) => {
    return (
      <li key={link}>
        <NavLink to={`/${link}`}>{link.toUpperCase()}</NavLink>
      </li>
    );
  });
  return (
    <nav>
      <ul className="d-flex">
        {renderedNavLinks}{" "}
        <li className="my-auto">
          <i
            onClick={() => {
              document.body.classList.toggle("dark-mode");
              setIsDark((prev) => !prev);
            }}
            id="modeSwitcher"
            className={`fas fa-${isDark ? "sun" : "moon"} fa-2x text-white`}
          ></i>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
