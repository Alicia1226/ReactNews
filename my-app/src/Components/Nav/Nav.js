import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
<nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__listItem">
          <Link className="Nav__Link" to="/home">Inicio</Link>
        </li>
        <li>
          <Link to="/form">Crear noticia</Link>
        </li>
        <li>
          <Link to="/listNews">Lista noticias</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;