import React from "react";
import { Link } from "react-router-dom";
import "./Productos.css";

export default function Productos() {
  return (
    <div className="productosUl">
      <ul>
        <Link to="/productos/limpiadores/">
          <li>Alimentos Y Bebidas</li>
        </Link>
        <Link to="/productos/institucional/">
          <li>Institucional</li>
        </Link>
      </ul>
    </div>
  );
}
