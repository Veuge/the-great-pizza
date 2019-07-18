import React, { Component } from "react";

class PizzaForm extends Component {
  state = {
    pizzaName: "",
    pizzaPrice: "",
    pizzaIngredients: [],
    isValidForm: false
  }

  componentDidMount() {
    if(this.props.pizza) {
      const { pizza } = this.props;
      this.setState({
        pizzaName: pizza.name,
        pizzaPrice: pizza.price,
        pizzaIngredients: pizza.ingredients.map(ing => ({ id: ing.ingredientId }))
      })
    }
  }

  handlePizzaNameChange = (e) => {
    this.setState({
      pizzaName: e.target.value
    }, this.validateForm);
  }
  
  handlePizzaPriceChange = (e) => {
    this.setState({
      pizzaPrice: e.target.value
    }, this.validateForm);
  }

  handleIngredientCheck = (e, ingredientId) => {
    const { pizzaIngredients } = this.state;
    let newPizzaIngredients = [ ...pizzaIngredients ];
    const index = this.getIngredientIndex(ingredientId);
    if (index !== -1) {
      newPizzaIngredients.splice(index, 1);
    } else {
      newPizzaIngredients = [ ...newPizzaIngredients, { id: ingredientId } ]
    }
    this.setState({
      pizzaIngredients: newPizzaIngredients
    })
  }

  validateForm = () => {
    const { pizzaName, pizzaPrice } = this.state;
    const isValidForm = pizzaName !== "" 
      && pizzaPrice !== "" 
      && typeof Number(pizzaPrice) == "number";
    this.setState({
      isValidForm
    });
  }

  getIngredientIndex = (ingredientId) => {
    const { pizzaIngredients } = this.state;
    return pizzaIngredients.findIndex(el => el.id === ingredientId);
  }

  onSaveChanges = () => {
    const { pizzaName, pizzaPrice, pizzaIngredients } = this.state;
    const payload = {
      name: pizzaName,
      price: pizzaPrice,
      ingredients: pizzaIngredients
    }
    this.props.onSaveChanges(payload);
    // Reset form defaults
    this.setState({
      pizzaName: "",
      pizzaPrice: "",
      pizzaIngredients: [],
      isValidForm: false
    })
  }

  render() {
    const { ingredients } = this.props;
    const { isValidForm, pizzaName, pizzaPrice } = this.state;
    return (
      <div className="pizza-form">
        <label>Pizza name:</label>
        <input type="text" value={pizzaName} onChange={this.handlePizzaNameChange} />
        <label>Pizza price:</label>
        <input type="number" value={pizzaPrice} onChange={this.handlePizzaPriceChange} />
        <label>Ingredients</label>
        {ingredients.map((ing, index) => (
          <div key={`ingredient-${ing.id}`}>
            <input 
              type="checkbox"
              value={ing.id}
              checked={this.getIngredientIndex(ing.id) !== -1}
              onChange={(e) => this.handleIngredientCheck(e, ing.id)}
            />
            <label>{ing.name}</label>
          </div>
        ))}
        <button disabled={!isValidForm} onClick={this.onSaveChanges}>Save Pizza</button>
      </div>
    );
  }
}

export default PizzaForm;
