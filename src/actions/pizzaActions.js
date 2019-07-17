const FETCH_PIZZAS = "FETCH_PIZZAS";
const FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS";
const FETCH_PIZZAS_FAILURE = "FETCH_PIZZAS_FAILURE";
const CREATE_PIZZA = "CREATE_PIZZA";
const CREATE_PIZZA_SUCCESS = "CREATE_PIZZA_SUCCESS";
const CREATE_PIZZA_FAILURE = "CREATE_PIZZA_FAILURE";

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

export {
  FETCH_PIZZAS,
  FETCH_PIZZAS_SUCCESS,
  FETCH_PIZZAS_FAILURE,
  fetchPizzas,
  fetchPizzasSuccess,
  fetchPizzasFailure,
  CREATE_PIZZA,
  CREATE_PIZZA_SUCCESS,
  CREATE_PIZZA_FAILURE,
  createPizza,
  createPizzaSuccess,
  createPizzaFailure
}
