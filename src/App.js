import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPizzasThunk, createPizzaThunk } from "./api/pizzasApi";
import { getAllIngredientsThunk } from "./api/ingredientsApi";
import PizzaComponent from "./components/PizzaComponent";
import PizzaForm from "./components/PizzaForm";

class App extends Component {
  state = {
    pizzaDetails: null
  }
  async componentDidMount() {
    await this.props.getAllPizzas();
    await this.props.getAllIngredients();
  }
  showPizzaDetails = id => {
    this.setState({
      pizzaDetails: id
    })
  }
  onSaveNewPizza = (payload) => {
    this.props.createPizza(payload);
  }
  onDeletePizza = (payload) => {
    this.setState({
      pizzaDetails: null
    })
  }

  render() {
    const { pizzaDetails } = this.state;
    const { error, loading, pizzaList, ingredientList } = this.props;
    return (
      <div className="app">
        <h1 className="app-name">The Great Pizza</h1>
        {error && <p>ERROR</p>}
        {loading && <p>Loading...</p>}
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
            onDeletePizza={this.onDeletePizza}
          />
        )}
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
  createPizza: createPizzaThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
