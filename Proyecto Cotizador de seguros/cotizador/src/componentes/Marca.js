import React, { Component } from "react";

class Marca extends Component {
  
  constructor(props){
      super(props);
      this.state = {value: 'europeo'};
      this.valorSelect = React.createRef();

  }
  envioValor=(enviar)=> {
    //console.log(this.valorSelect.current.value);
    enviar('Algun valor');
  }
  render() {
    var handleToUpdate = this.props.handleToUpdate;
    return (
      <div className="campo">
        <label>Marca</label>
        <select name="marca"  defaultValue={this.state.value} onClick={this.envioValor(handleToUpdate)} ref={this.valorSelect}>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </div>
    );
  }
}

export default Marca;
