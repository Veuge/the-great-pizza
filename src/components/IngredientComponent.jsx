import React, { Component } from "react";

class IngredientComponent extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="ingredient-container">
        <h1>{name}</h1>
      </div>
    );
  }
}

export default IngredientComponent;
