import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAllPizzasThunk, createPizzaThunk } from "./api/pizzasApi";
import { getAllIngredientsThunk, createIngredientThunk } from "./api/ingredientsApi";
import PizzaComponent from "./components/PizzaComponent";
import IngredientComponent from "./components/IngredientComponent";
import PizzaForm from "./components/PizzaForm";
import IngredientForm from "./components/IngredientForm";

class App extends Component {
  state = {
    showMenu: false,
    showIngredients: false,
    pizzaDetails: null,
    ingredientDetails: null
  }
  async componentDidMount() {
    await this.props.getAllPizzas();
    await this.props.getAllIngredients();
  }
  toggleMenuView = () => {
    this.setState({
      showMenu: true,
      showIngredients: false
    });
  }
  toggleIngredientsView = () => {
    this.setState({
      showMenu: false,
      showIngredients: true
    });
  }
  showPizzaDetails = id => {
    this.setState({
      pizzaDetails: id
    })
  }
  showIngredientDetails = id => {
    this.setState({
      ingredientDetails: id
    })
  }
  onSaveNewPizza = (payload) => {
    this.props.createPizza(payload);
    this.closePizzaDetails();
  }
  onSaveNewIngredient = (payload) => {
    this.props.createIngredient(payload);
    this.closeIngredientDetails();
  }
  closePizzaDetails = () => {
    this.setState({
      pizzaDetails: null
    })
  }
  closeIngredientDetails = () => {
    this.setState({
      ingredientDetails: null
    })
  }
  renderMenu = () => {
    const { pizzaDetails } = this.state;
    const { pizzaList, ingredientList } = this.props;
    return (
      <Fragment>
        <h3>Pizzas Menu</h3>
        <ul className="pizza-list">
          {pizzaList.map(pizza => (
            <li onClick={() => this.showPizzaDetails(pizza)} key={`pizza-${pizza.id}`}>{pizza.name}</li>
          ))}
        </ul>
        <PizzaForm 
          onSaveChanges={this.onSaveNewPizza}
          ingredients={ingredientList}
        />
        {pizzaDetails !== null && (
          <PizzaComponent 
            pizza={pizzaDetails}
            onCloseDetails={this.closePizzaDetails}
          />
        )}
      </Fragment>
    );
  }

  renderIngredients = () => {
    const { ingredientDetails } = this.state;
    const { ingredientList } = this.props;
    return (
      <Fragment>
        <h3>Ingredients List</h3>
        <ul className="ingredient-list">
          {ingredientList.map(ing => (
            <li onClick={() => this.showIngredientDetails(ing)} key={`ingredient-${ing.id}`}>{ing.name}</li>
          ))}
          <IngredientForm onSaveChanges={this.onSaveNewIngredient} />
          {ingredientDetails !== null && (
            <IngredientComponent 
              ingredient={ingredientDetails}
              onCloseDetails={this.closeIngredientDetails} />
          )}
        </ul>
      </Fragment>
    );
  }

  render() {
    const { showMenu, showIngredients } = this.state;
    const { error, loading } = this.props;
    return (
      <div className="app">
        <h1 className="app-name">The Great Pizza</h1>
        {error && <p>ERROR</p>}
        {loading && <p>Loading...</p>}
        <div>
          <button onClick={this.toggleMenuView}>See the Menu</button>
          <button onClick={this.toggleIngredientsView}>See the Ingredients</button>
        </div>
        {showMenu && this.renderMenu()}
        {showIngredients && this.renderIngredients()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pizzaList: state.pizzaReducer.pizzaList,
  ingredientList: state.ingredientsReducer.ingredientList,
  loading: state.pizzaReducer.loading,
  error: state.pizzaReducer.error
})

const mapDispatchToProps = {
  getAllPizzas: getAllPizzasThunk,
  getAllIngredients: getAllIngredientsThunk,
  createPizza: createPizzaThunk,
  createIngredient: createIngredientThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
