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
    this.props.onCloseDetails();
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
    this.props.onCloseDetails()
  }

  render() {
    const { isEditing } = this.state;
    const { pizza, ingredients } = this.props;
    return (
      <div className="form pizza-details">
        {isEditing ? (
          <PizzaForm
            title="Edit pizza"
            pizza={pizza} 
            ingredients={ingredients}
            onSaveChanges={this.onSaveEditing}
          />
        ) : (
          <Fragment>
            <h2 className="details-title">Pizza details</h2>
            <h3>{pizza.name}</h3>
            <p>$ {pizza.price}</p>
            <h4>Ingredients</h4>
            <ul>
              {pizza.ingredients.map(ing => (
                <li key={`ingredient-${ing.id}`}>{ing.name}</li>
              ))}
            </ul>
            <div className="action-buttons">
              <button onClick={this.onDeletePizza}>Delete</button>
              <button onClick={this.onEditPizza}>Edit</button>
              <button onClick={this.props.onCloseDetails}>Close</button>
            </div>
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
