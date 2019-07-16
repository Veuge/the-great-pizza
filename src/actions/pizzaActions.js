export const FETCH_PIZZAS = "FETCH_PIZZAS";
export const FETCH_PIZZAS_SUCCESS = "FETCH_PIZZAS_SUCCESS";
export const FETCH_PIZZAS_FAILURE = "FETCH_PIZZAS_FAILURE";

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

export function startFetchPizzas () {
  return dispatch => {
    dispatch(fetchPizzas());
    dispatch(fetchPizzasSuccess( [
      { pizzaId: 1, name: "Hawaiian", price: 12.6 },
      { pizzaId: 2, name: "Classic", price: 13.6 },
      { pizzaId: 3, name: "Meat", price: 18.6 },
    ]));
  }
}
