import React, { Component } from "react";
import PropTypes from "prop-types";

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

  handleIngredientCheck = (e, ingredient) => {
    const { pizzaIngredients } = this.state;
    let newPizzaIngredients = [ ...pizzaIngredients ];
    const index = this.getIngredientIndex(ingredient.id);
    if (index !== -1) {
      newPizzaIngredients.splice(index, 1);
    } else {
      newPizzaIngredients = [ ...newPizzaIngredients, ingredient ]
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
    });
    this.props.onCloseForm();
  }

  render() {
    const { ingredients, title } = this.props;
    const { isValidForm, pizzaName, pizzaPrice } = this.state;
    return (
      <div className="form pizza-form">
        <h2 className="details-title">{title || "Pizza Form"}</h2>
        <div className="input-row">
          <label>Pizza name:</label>
          <input type="text" value={pizzaName} onChange={this.handlePizzaNameChange} />
        </div>
        <div className="input-row">
          <label>Pizza price:</label>
          <input type="number" value={pizzaPrice} onChange={this.handlePizzaPriceChange} />
        </div>
        <label>Ingredients</label>
        {ingredients.map((ing, index) => (
          <div className="ingredient-checkbox"  key={`ingredient-${ing.id}`}>
            <input
              type="checkbox"
              value={ing}
              checked={this.getIngredientIndex(ing.id) !== -1}
              onChange={(e) => this.handleIngredientCheck(e, ing)}
            />
            <label>{ing.name}</label>
          </div>
        ))}
        <div className="action-buttons">
          <button disabled={!isValidForm} onClick={this.onSaveChanges}>Save Pizza</button>
          <button onClick={this.props.onCloseForm}>Close</button>
        </div>
      </div>
    );
  }
}

PizzaForm.propTypes = {
  pizza: PropTypes.object,
  onSaveChanges: PropTypes.func.isRequired,
  onCloseForm: PropTypes.func.isRequired,
  ingredients: PropTypes.array.isRequired,
  title: PropTypes.string
}

export default PizzaForm;
