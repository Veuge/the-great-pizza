import React, { Component } from "react";

class PizzaForm extends Component {
  state = {
    pizzaName: "",
    pizzaPrice: "",
    isValidForm: false
  }

  handlePizzaNameChange = (e) => {
    this.setState({
      pizzaName: e.target.value
    });
    this.validateForm();
  }
  
  handlePizzaPriceChange = (e) => {
    this.setState({
      pizzaPrice: e.target.value
    });
    this.validateForm();
  }

  validateForm = () => {
    const { pizzaName, pizzaPrice } = this.state;
    const isValidForm = pizzaName !== "" && pizzaPrice !== "" && typeof Number(pizzaPrice) == "number";
    this.setState({
      isValidForm
    });
  }

  onSaveChanges = () => {
    const { pizzaName, pizzaPrice } = this.state;
    const payload = {
      name: pizzaName,
      price: pizzaPrice,
      ingredients: []
    }
    this.props.onSaveChanges(payload);
  }

  render() {
    const { isValidForm, pizzaName, pizzaPrice } = this.state;
    return (
      <div className="pizza-form">
        <label>Pizza name:</label>
        <input type="text" value={pizzaName} onChange={this.handlePizzaNameChange} />
        <label>Pizza price:</label>
        <input type="number" value={pizzaPrice} onChange={this.handlePizzaPriceChange} />
        <button disabled={!isValidForm} onClick={this.onSaveChanges}>Save Pizza</button>
      </div>
    );
  }
}

export default PizzaForm;
