import React, { Component } from "react";
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
    showIngredients: true,
    pizzaDetails: null,
    ingredientDetails: null,
    showCreatePizzaForm: false,
    showCreateIngredientForm: false
  }
  async componentDidMount() {
    await this.props.getAllPizzas();
    await this.props.getAllIngredients();
  }
  toggleCreationForm = (state) => {
    this.setState(currentState => ({
      [state]: !currentState[state]
    }))
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
    const { pizzaDetails, showCreatePizzaForm } = this.state;
    const { pizzaList, ingredientList } = this.props;
    return (
      <div className="tab-container menu-container">
        <h2 className="tab-title">Pizzas Menu</h2>
        <ul className="items-list pizza-list">
          <div className="header-container ">
            <li className="pizza-item header">Pizzas</li>
            <button className="pizza" onClick={() => this.toggleCreationForm("showCreatePizzaForm")}>Create pizza</button>
          </div>
          {pizzaList.map(pizza => (
            <li 
              className="pizza-item"
              onClick={() => this.showPizzaDetails(pizza)}
              key={`pizza-${pizza.id}`}
            >
              {pizza.name}
            </li>
          ))}
        </ul>
        {showCreatePizzaForm && (
          <PizzaForm
            title="Create a new pizza"
            onSaveChanges={this.onSaveNewPizza}
            ingredients={ingredientList}
            onCloseForm={() => this.toggleCreationForm("showCreatePizzaForm")}
          />
        )}
        {pizzaDetails !== null && (
          <PizzaComponent 
            pizza={pizzaDetails}
            onCloseDetails={this.closePizzaDetails}
          />
        )}
      </div>
    );
  }

  renderIngredients = () => {
    const { ingredientDetails, showCreateIngredientForm } = this.state;
    const { ingredientList } = this.props;
    return (
      <div className="tab-container ingredient-container">
        <h2 className="tab-title">Ingredients List</h2>
        <ul className="items-list ingredient-list">
          <div className="header-container ">
            <li className="ingredient-item header">Ingredients</li>
            <button className="ingredient" onClick={() => this.toggleCreationForm("showCreateIngredientForm")}>Create Ingredient</button>
          </div>
          {ingredientList.map(ing => (
            <li
              className="ingredient-item"
              onClick={() => this.showIngredientDetails(ing)}
              key={`ingredient-${ing.id}`}
            >
              {ing.name}
            </li>
          ))}
        </ul>
        {showCreateIngredientForm && (
          <IngredientForm 
            title="Create new ingredient"
            onSaveChanges={this.onSaveNewIngredient}
            onCloseForm={() => this.toggleCreationForm("showCreateIngredientForm")}
          />
        )}
        {ingredientDetails !== null && (
          <IngredientComponent 
            ingredient={ingredientDetails}
            onCloseDetails={this.closeIngredientDetails} />
        )}
      </div>
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
        <div className="tabs-container">
          <button 
            className="tab menu"
            onClick={this.toggleMenuView}
          >
            See the Menu
          </button>
          <button
            className="tab ingredient"
            onClick={this.toggleIngredientsView}
          >
            See the Ingredients
          </button>
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
