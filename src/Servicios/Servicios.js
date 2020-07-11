import React from "react";

import "./Servicios.css";

export default function Servicios() {
  return (
    <section className="servicios">
      <img
        className="handSpray"
        src={require(".././images/handspray.jpg")}
        alt="chemestry jar"
      />
      <p>
        <ul>
          <li>Restaurantes</li>
          <li>Comedores Industriales</li>
          <li>Supermercados</li>
          <li>Supermercados</li>
          <li>Comisariatos</li>
          <li>Hoteles y Moteles</li>
          <li>Hospitales</li>
          <li>Tiendas Departamentales</li>
          <li>Edificios Públicos</li>
          <li>Escuelas y Universidades</li>
          <li>Clubes y Gimnasios</li>
          <li>Restaurantes de comida rápida</li>
          <li>Cines</li>
          <li>Cafeterías</li>
          <li>Tiendas de conveniencia</li>
        </ul>
      </p>
    </section>
  );
}
