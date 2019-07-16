import React, { Component } from "react";

import { connect } from "react-redux";
import { startFetchPizzas } from "./actions/pizzaActions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(startFetchPizzas());
  }

  render() {
    const { error, loading, pizzaList } = this.props;
    console.log(this.props);
    return (
      <div className="app">
        <h1 className="app-name">The Great Pizza</h1>
        {error && <p>ERROR</p>}
        {loading && <p>Loading...</p>}
        <ul>
          {pizzaList.map((pizza, index) => (
            <li key={`pizza-${pizza.pizzaId}`}>{pizza.name}</li>
          ))}
        </ul>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(">>>>", state);
  return {
    pizzaList: state.pizzaReducer.pizzaList,
    loading: state.pizzaReducer.loading,
    error: state.pizzaReducer.error
  }
};

export default connect(mapStateToProps)(App);
