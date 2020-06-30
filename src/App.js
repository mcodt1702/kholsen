import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import { Link } from "react-router-dom";
import Servicios from "./Servicios/Servicios";
import Nosotros from "./Nosotros/Nosotros";
import Productos from "./Productos/Productos";
import Contacto from "./Contacto/Contacto";
import Footer from "./Footer/Footer";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = [];
  }

  render() {
    return (
      <Router>
        <Route path={"/"} component={Header}></Route>
        <Route exact path={"/"} component={Nosotros}></Route>
        <Route path={"/servicios"} component={Servicios}></Route>
        <Route path={"/productos"} component={Productos}></Route>
        <Route path={"/cotiza"} component={Contacto}></Route>
        <Route path={"/"} component={Footer}></Route>
      </Router>
    );
  }
}