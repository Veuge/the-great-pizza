import {
  FETCH_PIZZAS,
  FETCH_PIZZAS_SUCCESS,
  FETCH_PIZZAS_FAILURE,
  CREATE_PIZZA,
  CREATE_PIZZA_SUCCESS,
  CREATE_PIZZA_FAILURE
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
    case CREATE_PIZZA:
      return {
        ...state,
        pizzaList: [
          ...state.pizzaList,
          action.payload
        ]
      }
    case CREATE_PIZZA_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    case CREATE_PIZZA_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
