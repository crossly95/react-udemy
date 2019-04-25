import React, { Component } from "react";
import Marca from "./Marca";
import Anos from "./Anos";
import Tipoplan from "./Tipoplan";
import Boton from "./Boton";

class Formulario extends Component {
  cotizarSeguro(e) {
      e.preventDeafault();
  }
  render() {
    return (
      <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
        <Marca />
        <Anos />
        <Tipoplan />
        <Boton />
      </form>
    );
  }
}
export default Formulario;
