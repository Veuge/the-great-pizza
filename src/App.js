import React, { Component } from "react";

import { connect } from "react-redux";
import { getAllPizzasThunk, createPizzaThunk } from "./api/getAllPizzas";
import PizzaComponent from "./components/PizzaComponent";
import PizzaForm from "./components/PizzaForm";

class App extends Component {
  state = {
    pizzaDetails: null
  }
  async componentDidMount() {
    await this.props.getAllPizzas();
  }
  showPizzaDetails = (index) => {
    this.setState({
      pizzaDetails: index
    })
  }

  onSaveNewPizza = (payload) => {
    this.props.createPizza(payload);
  }

  render() {
    const { pizzaDetails } = this.state;
    const { error, loading, pizzaList } = this.props;
    return (
      <div className="app">
        <h1 className="app-name">The Great Pizza</h1>
        {error && <p>ERROR</p>}
        {loading && <p>Loading...</p>}
        <ul className="pizza-list">
          {pizzaList.map((pizza, index) => (
            <li onClick={() => this.showPizzaDetails(index)} key={`pizza-${pizza.id}`}>{pizza.name}</li>
          ))}
        </ul>
        <PizzaForm onSaveChanges={this.onSaveNewPizza} />
        {pizzaDetails !== null && (
          <PizzaComponent pizza={pizzaList[pizzaDetails]} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    pizzaList: state.pizzaReducer.pizzaList,
    loading: state.pizzaReducer.loading,
    error: state.pizzaReducer.error
})

const mapDispatchToProps = {
  getAllPizzas: getAllPizzasThunk,
  createPizza: createPizzaThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
