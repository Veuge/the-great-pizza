const FETCH_PIZZAS = "FETCH_PIZZAS";
const FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS";
const FETCH_PIZZAS_FAILURE = "FETCH_PIZZAS_FAILURE";
const CREATE_PIZZA = "CREATE_PIZZA";
const CREATE_PIZZA_SUCCESS = "CREATE_PIZZA_SUCCESS";
const CREATE_PIZZA_FAILURE = "CREATE_PIZZA_FAILURE";
const DELETE_PIZZA = "DELETE_PIZZA";
const DELETE_PIZZA_SUCCESS = "DELETE_PIZZA_SUCCESS";
const DELETE_PIZZA_FAILURE = "DELETE_PIZZA_FAILURE";
const UPDATE_PIZZA = "UPDATE_PIZZA";
const UPDATE_PIZZA_SUCCESS = "UPDATE_PIZZA_SUCCESS";
const UPDATE_PIZZA_FAILURE = "UPDATE_PIZZA_FAILURE";

const fetchPizzas = () => ({
  type: FETCH_PIZZAS
});

const fetchPizzasSuccess = pizzas => ({
  type: FETCH_PIZZAS_SUCCESS,
  payload: { pizzas }
});

const fetchPizzasFailure = error => ({
  type: FETCH_PIZZAS_FAILURE,
  payload: { error }
});

const createPizza = (newPizza) => ({
  type: CREATE_PIZZA,
  payload: newPizza
});

const createPizzaSuccess = message => ({
  type: CREATE_PIZZA_SUCCESS,
  payload: { message }
});

const createPizzaFailure = error => ({
  type: CREATE_PIZZA_FAILURE,
  payload: { error }
});

const deletePizza = (pizza) => ({
  type: DELETE_PIZZA,
  payload: pizza
});

const deletePizzaSuccess = (message) => ({
  type: DELETE_PIZZA_SUCCESS,
  payload: { message }
});

const deletePizzaFailure = (error) => ({
  type: DELETE_PIZZA_FAILURE,
  payload: { error }
});

const updatePizza = (pizza) => ({
  type: UPDATE_PIZZA,
  payload: pizza
});

const updatePizzaSuccess = (message) => ({
  type: UPDATE_PIZZA_SUCCESS,
  payload: { message }
});

const updatePizzaFailure = (error) => ({
  type: UPDATE_PIZZA_FAILURE,
  payload: { error }
});

export {
  FETCH_PIZZAS,
  FETCH_PIZZAS_SUCCESS,
  FETCH_PIZZAS_FAILURE,
  CREATE_PIZZA,
  CREATE_PIZZA_SUCCESS,
  CREATE_PIZZA_FAILURE,
  DELETE_PIZZA,
  DELETE_PIZZA_SUCCESS,
  DELETE_PIZZA_FAILURE,
  UPDATE_PIZZA,
  UPDATE_PIZZA_SUCCESS,
  UPDATE_PIZZA_FAILURE,
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
  updatePizzaFailure
}
