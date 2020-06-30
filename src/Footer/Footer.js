import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="menBar">
        <ul className="menuButtons">
          <li>
            <Link to={"/"}>Nosotros</Link>
          </li>
          <li>
            <Link to={"/servicios"}>Servicios</Link>
          </li>
          <li>
            <Link to={"/productos"}>Productos</Link>
          </li>
          <li>
            <Link to={"./cotiza"}>Contacto</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
