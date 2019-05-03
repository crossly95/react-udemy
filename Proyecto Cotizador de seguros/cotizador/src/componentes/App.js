import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from "../Calculos";

class App extends Component {
  cotizarSeguro = (datos) =>{
    const {marca,año,plan} = datos;
    let resultado = 2000;
    const diferentcia = obtenerDiferenciaAnio(año);
    console.log("la diferencia es : "+ diferentcia)
    resultado -= ((diferentcia * 3) * resultado)/100;
    resultado = calcularMarca(marca) *  resultado;
    console.log("valor marca : "+ resultado);
    let incrementarPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementarPlan * resultado).toFixed(2);
  }
  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de Seguros" />
        <div className= "contenedor-formulario">
        <Formulario cotizarSeguro={this.cotizarSeguro}/>
        </div>
      </div>
      
    );
  }
}

export default App;
