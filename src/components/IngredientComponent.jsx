import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    this.setState(currentState => ({
      isEditing: !currentState.isEditing
    }))
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
      <div className="form ingredient-details">
        {isEditing ? (
          <IngredientForm 
            ingredient={ingredient}
            onSaveChanges={this.onSaveEditing}
            onCloseForm={this.onEditIngredient}
            title="Edit ingredient"
          />
        ) : (
          <Fragment>
            <h2 className="details-title">Ingredient details</h2>
            <h3>{ingredient.name}</h3>
            <div className="action-buttons">
              <button onClick={this.onDeleteIngredient}>Delete</button>
              <button onClick={this.onEditIngredient}>Edit</button>
              <button onClick={this.props.onCloseDetails}>Close</button>
            </div>
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

IngredientComponent.propTypes = {
  ingredient: PropTypes.object.isRequired,
  deleteIngredient: PropTypes.func.isRequired,
  editIngredient: PropTypes.func.isRequired,
  onCloseDetails: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientComponent);
