import React from "react";

import "./Contacto.css";

export default function Contacto() {
  return (
    <section>
      <div className="contacto">
        <img
          className="contactUs"
          src={require("../images/contact.jpg")}
          alt="envelope telephone signs"
        />
        <h2>Email: info@kholsen.com</h2>
        <>
          Tel: (52) 55-5840-3030
          <p>Kholsen S.A. de C.V. </p>
          <p>Agustin Melgar 6, Barrio San Antonio</p>
          <p>Iztapalapa México D.F.C.P. 09900</p>
        </>
      </div>
    </section>
  );
}
