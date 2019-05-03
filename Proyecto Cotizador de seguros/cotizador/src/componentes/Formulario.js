import React, { Component } from "react";
/*import Marca from "./Marca";
import Anos from "./Anos";
import Tipoplan from "./Tipoplan";
import Boton from "./Boton";*/

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.cotizarSeguro = this.cotizarSeguro.bind(this);
    this.marcaref = React.createRef();
    this.yearref = React.createRef();
    this.basicoref = React.createRef();
    this.completoref = React.createRef();
  }
  /*constructor(props) {
    super(props);
    //var handleToUpdate = this.handleToUpdate.bind(this);
    this.cotizarSeguro = this.cotizarSeguro.bind(this);
  }
  handleToUpdate(someArg) {
    alert("We pass argument from Child to Parent: \n" + someArg);
  }*/

  cotizarSeguro = e => {
    e.preventDefault();
    const plan = this.basicoref.current.checked ? "basico" : "completo";
    //console.log(this.marcaref.current.value);
    //objeto recolecctor de datos
    const infoAuto = {
      marca: this.marcaref.current.value,
      año: this.yearref.current.value,
      plan: plan
    };
    this.props.cotizarSeguro(infoAuto);
    e.currentTarget.reset();
    //console.log(infoAuto);
  };
  render() {
    //var handleToUpdate = this.handleToUpdate;
    return (
      <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
        <div className="campo">
          <label>Marca</label>
          <select name="marca" ref={this.marcaref}>
            <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
            <option value="asiatico">Asiatico</option>
          </select>
        </div>

        <div className="campo">
          <label>Año</label>
          <select name="year" ref={this.yearref}>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
          </select>
        </div>
        <div className="campo">
          <label>Plan:</label>
          <input
            type="radio"
            name="plan"
            value="basico"
            ref={this.basicoref}
          />{" "}
          Básico
          <input
            type="radio"
            name="plan"
            value="completo"
            ref={this.completoref}
          />{" "}
          Completo
        </div>

        <button type="submit" className="boton">
          Cotizar
        </button>
      </form>
    );
  }
}
export default Formulario;

/*<Marca handleToUpdate={handleToUpdate.bind(this)}/>
<Anos />
<Tipoplan />
<Boton />*/
