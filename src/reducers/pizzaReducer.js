import {
  FETCH_PIZZAS,
  FETCH_PIZZAS_SUCCESS,
  FETCH_PIZZAS_FAILURE
} from "../actions/pizzaActions";

const initialState = {
  pizzaList: [],
  loading: false,
  error: null
};

export default function pizzaReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PIZZAS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PIZZAS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        pizzaList: action.payload.pizzas
      };
    case FETCH_PIZZAS_FAILURE:
      return {
        ...state,
        loading: false,
        pizzaList: [],
        error: action.payload.error
      };
    default:
      return state;
  }
};
