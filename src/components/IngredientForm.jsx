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

  handleIngredientNameChange = (e) => {
    this.setState({
      ingredientName: e.target.value
    }, this.validateForm);
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
      <div className="form ingredient-form">
        <h2 className="details-title">Ingredient Form</h2>
        <div className="input-row">
          <label className="">Ingredient name:</label>
          <input type="text" value={ingredientName} onChange={this.handleIngredientNameChange} />
        </div>
        <button disabled={!isValidForm} onClick={this.onSaveChanges}>Save Ingredient</button>
      </div>
    );
  }
}

export default IngredientForm;
