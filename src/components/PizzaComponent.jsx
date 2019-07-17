import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deletePizzaThunk, updatePizzaThunk } from "../api/pizzasApi";
import PizzaForm from "./PizzaForm";

class PizzaComponent extends Component {
  state = {
    isEditing: false
  }

  onDeletePizza = () => {
    const { pizza } = this.props;
    this.props.deletePizza(pizza);
    this.props.onDeletePizza();
  }

  onEditPizza = () => {
    this.setState({
      isEditing: true
    })
  }

  onSaveEditing = (payload) => {
    const { pizza } = this.props;
    this.props.editPizza({
      ...payload,
      id: pizza.id
    });
    this.setState({
      isEditing: false
    });
  }

  render() {
    const { isEditing } = this.state;
    const { pizza, ingredients } = this.props;
    return (
      <div className="pizza-details">
        {isEditing ? (
          <PizzaForm 
            pizza={pizza} 
            ingredients={ingredients}
            onSaveChanges={this.onSaveEditing}
          />
        ) : (
          <Fragment>
            <h3>{pizza.name}</h3>
            <button onClick={this.onDeletePizza}>Delete</button>
            <button onClick={this.onEditPizza}>Edit</button>
            <p>$ {pizza.price}</p>
            <h4>Ingredients</h4>
            <ul>
              {pizza.ingredients.map(ing => (
                <li key={`ingredient-${ing.id}`}>{ing.name}</li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredientsReducer.ingredientList
});

const mapDispatchToProps = {
  deletePizza: deletePizzaThunk,
  editPizza: updatePizzaThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaComponent);
