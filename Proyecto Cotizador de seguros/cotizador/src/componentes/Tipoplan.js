import React, { Component } from "react";

class Tipoplan extends Component {
  render() {
    return (
      <div className="campo">
        <label>Plan:</label>
        <input type="radio" name="plan" value="basico" /> Básico
        <input type="radio" name="plan" value="completo" /> Completo
      </div>
    );
  }
}

export default Tipoplan;
