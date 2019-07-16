import React, { Component } from "react";

import { connect } from "react-redux";
import { getAllPizzasThunk, createNewPizzaThunk } from "./api/getAllPizzas";

class App extends Component {
  state = {
    pizzaName: "",
    pizzaPrice: ""
  }
  async componentDidMount() {
    await this.props.getAllPizzas();
  }

  addNewPizza = () => {

  }

  render() {
    const { pizzaName, pizzaPrice } = this.state;
    const { error, loading, pizzaList } = this.props;
    return (
      <div className="app">
        <h1 className="app-name">The Great Pizza</h1>
        {error && <p>ERROR</p>}
        {loading && <p>Loading...</p>}
        <ul>
          {pizzaList.map((pizza, index) => (
            <li key={`pizza-${pizza.id}`}>{pizza.name}</li>
          ))}
        </ul>
        <form>
          <input type="text" value={pizzaName} />
          <input type="text" value={pizzaPrice} />
          <button onClick={this.addNewPizza}>Add Pizza</button>
        </form>
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
  createNewPizza: createNewPizzaThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
