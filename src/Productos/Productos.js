import React from "react";
import { Link } from "react-router-dom";
import "./Productos.css";

export default function Productos() {
  return (
    <div className="productosUl">
      <ul>
        <Link to="/productos/limpiadores/">
          <li>Limpiadores y Detergentes</li>
        </Link>
      </ul>
    </div>
  );
}
