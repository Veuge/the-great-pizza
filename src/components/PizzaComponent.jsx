import React, { Component, Fragment } from "react";

class PizzaComponent extends Component {
  state = {
    editingPizza: false,
    pizzaName: "",
    pizzaPrice: ""
  }

  componentDidMount() {
    this.setState({
      pizzaName: this.props.pizza.name,
      pizzaPrice: this.props.pizza.price
    })
  }

  updateInputValue = (e, state) => {
    this.setState({
      [state]: e.target.value
    })
  }

  toggleEdition = () => {
    this.setState((currentState) => ({
      editingPizza: !currentState.editingPizza
    }));
  }

  render() {
    const { pizza } = this.props;
    const { editingPizza, pizzaName, pizzaPrice } = this.state;
    return (
      <div className="pizza-details">
        {!editingPizza ? (
          <Fragment>
            <h3>{pizza.name}</h3>
            <button onClick={this.toggleEdition}>Edit Pizza</button>
            <p>$ {pizza.price}</p>
          </Fragment>
        ) : (
          <Fragment>
            <label>Pizza Name:</label>
            <input type="text" value={pizzaName} onChange={e => this.updateInputValue(e, "pizzaName")} />
            <label>Pizza Price:</label>
            <input type="text" value={pizzaPrice} onChange={e => this.updateInputValue(e, "pizzaPrice")}  />
            <button onClick={this.savePizzaEdition}>Save changes</button>
          </Fragment>
        )}
        <h4>Ingredients</h4>
        <ul>
          {pizza.ingredients.map((ing, index) => (
            <li key={`ingredient-${ing.id}`}>{ing.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PizzaComponent;
