import React from "react";
import { Link } from "react-router-dom";
import "./Productos.css";

export default function Productos() {
  return (
    <div className="productosUl">
      <ul>
        <li>Limpiadores</li>
        <li>Detergentes</li>
        <li>Desinfectantes</li>
        <li>Cuidado de Manos</li>
        <li>Furtas y Vegetales</li>
      </ul>
    </div>
  );
}
