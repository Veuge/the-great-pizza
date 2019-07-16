import React, { Component } from "react";

class PizzaComponent extends Component {
  render() {
    const { pizzaId, name } = this.props 
    return (
      <div className="pizza-container">
        <h1>{name}</h1>
      </div>
		);
  }
}

export default PizzaComponent;
