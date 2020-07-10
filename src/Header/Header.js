import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="menBar">
        <img src={require("../images/logo-kholsen1.png")} alt="Kholsen Logo" />
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
    </header>
  );
}
