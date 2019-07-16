export const FETCH_PIZZAS = "FETCH_PIZZAS";
export const FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS";
export const FETCH_PIZZAS_FAILURE = "FETCH_PIZZAS_FAILURE";
export const CREATE_PIZZA = "CREATE_PIZZA";

export const fetchPizzas = () => ({
  type: FETCH_PIZZAS
});

export const fetchPizzasSuccess = pizzas => ({
  type: FETCH_PIZZAS_SUCCESS,
  payload: { pizzas }
});

export const fetchPizzasFailure = error => ({
  type: FETCH_PIZZAS_FAILURE,
  payload: { error }
});

