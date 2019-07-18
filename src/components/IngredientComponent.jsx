import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteIngredientThunk, updateIngredientThunk } from "../api/ingredientsApi";
import IngredientForm from "./IngredientForm";

class IngredientComponent extends Component {
  state = {
    isEditing: false
  }

  onDeleteIngredient = () => {
    const { ingredient } = this.props;
    this.props.deleteIngredient(ingredient);
    this.props.onCloseDetails();
  }

  onEditIngredient = () => {
    this.setState({
      isEditing: true
    })
  }

  onSaveEditing = (payload) => {
    const { ingredient } = this.props;
    this.props.editIngredient({
      ...payload,
      id: ingredient.id
    });
    this.setState({
      isEditing: false
    });
    this.props.onCloseDetails();
  }

  render() {
    const { isEditing } = this.state;
    const { ingredient } = this.props;
    return (
      <div className="ingredient-details">
        {isEditing ? (
          <IngredientForm 
            ingredient={ingredient}
            onSaveChanges={this.onSaveEditing}
          />
        ) : (
          <Fragment>
            <h3>{ingredient.name}</h3>
            <button onClick={this.onDeleteIngredient}>Delete</button>
            <button onClick={this.onEditIngredient}>Edit</button>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  deleteIngredient: deleteIngredientThunk,
  editIngredient: updateIngredientThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientComponent);
