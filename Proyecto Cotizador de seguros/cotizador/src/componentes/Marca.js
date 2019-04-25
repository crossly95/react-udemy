import React, { Component } from "react";

class Marca extends Component {
  render() {
    return (
      <div className="campo">
        <label>Marca</label>
        <select name="marca">
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </div>
    );
  }
}

export default Marca;
