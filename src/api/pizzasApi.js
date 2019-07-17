import axios from "axios";
import {
  fetchPizzas,
  fetchPizzasSuccess,
  fetchPizzasFailure,
  createPizza,
  createPizzaSuccess,
  createPizzaFailure,
  deletePizza,
  deletePizzaSuccess,
  deletePizzaFailure,
  updatePizza,
  updatePizzaSuccess,
  updatePizzaFailure,
} from "../actions/pizzaActions";

const getAllPizzasThunk = () => {
  return async (dispatch) => {
    dispatch(fetchPizzas());
    try {
      const res = await axios.get("/pizza");
      dispatch(fetchPizzasSuccess(res.data));
    } catch (err) {
      dispatch(fetchPizzasFailure(err));
    }
  }
}

const createPizzaThunk = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/pizza", payload);
      dispatch(createPizza({ ...payload, id: res.data.insertId }));
      dispatch(createPizzaSuccess(res));
    } catch (err) {
      dispatch(createPizzaFailure(err))
    }
  }
}

const deletePizzaThunk = (pizza) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/pizza/${pizza.id}`);
      dispatch(deletePizza(pizza.id));
      dispatch(deletePizzaSuccess(res));
    } catch (err) {
      dispatch(deletePizzaFailure(err));
    }
  }
}

const updatePizzaThunk = pizza => {
  return async dispatch => {
    try {
      const payload = {
        name: pizza.name,
        price: pizza.price,
        ingredients: pizza.ingredients
      };
      const res = await axios.put(`/pizza/${pizza.id}`, payload);
      dispatch(updatePizza({...payload, id: pizza.id}));
      dispatch(updatePizzaSuccess(res));
    } catch (err) {
      dispatch(updatePizzaFailure(err));
    }
  }
}

export {
  getAllPizzasThunk,
  createPizzaThunk,
  deletePizzaThunk,
  updatePizzaThunk
};