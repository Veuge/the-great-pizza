import React, { Component } from "react";

class IngredientForm extends Component {
  state = {
    ingredientName: "",
    isValidForm: false
  }

  componentDidMount() {
    if(this.props.ingredient) {
      const { ingredient } = this.props;
      this.setState({
        ingredientName: ingredient.name,
      })
    }
  }

  handlePizzaNameChange = (e) => {
    this.setState({
      ingredientName: e.target.value
    }, this.validateForm);
  }
  
  handlePizzaPriceChange = (e) => {
    this.setState({
      ingredientPrice: e.target.value
    }, this.validateForm);
  }

  handleIngredientCheck = (e, ingredientId) => {
    const { ingredientIngredients } = this.state;
    let newPizzaIngredients = [ ...ingredientIngredients ];
    const index = this.getIngredientIndex(ingredientId);
    if (index !== -1) {
      newPizzaIngredients.splice(index, 1);
    } else {
      newPizzaIngredients = [ ...newPizzaIngredients, { id: ingredientId } ]
    }
    this.setState({
      ingredientIngredients: newPizzaIngredients
    })
  }

  validateForm = () => {
    const { ingredientName } = this.state;
    const isValidForm = ingredientName !== "" 
    this.setState({
      isValidForm
    });
  }

  onSaveChanges = () => {
    const { ingredientName } = this.state;
    const payload = {
      name: ingredientName,
    }
    this.props.onSaveChanges(payload);
    // Reset form defaults
    this.setState({
      ingredientName: "",
      isValidForm: false
    })
  }

  render() {
    const { isValidForm, ingredientName } = this.state;
    return (
      <div className="ingredient-form">
        <label>Ingredient name:</label>
        <input type="text" value={ingredientName} onChange={this.handlePizzaNameChange} />
        <button disabled={!isValidForm} onClick={this.onSaveChanges}>Save Ingredient</button>
      </div>
    );
  }
}

export default IngredientForm;
