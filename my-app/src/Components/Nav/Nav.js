
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
<nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__listItem">
          <Link className="Nav__Link" to="/Home">Inicio</Link>
        </li>
        <li>
          <Link to="/Form">Crear noticia</Link>
        </li>
        <li>
          <Link to="/ListNews">Lista noticias</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;