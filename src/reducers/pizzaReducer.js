import {
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
  UPDATE_PIZZA_FAILURE
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
    case DELETE_PIZZA: {
      const pizzaIndex = state.pizzaList.findIndex(el => el.id === action.payload);
      let pizzaList = [...state.pizzaList];
      if(pizzaIndex !== -1) {
        pizzaList.splice(pizzaIndex, 1);
      }
      return {
        ...state,
        pizzaList
      }
    }
    case DELETE_PIZZA_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    case DELETE_PIZZA_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case UPDATE_PIZZA: {
      return {
        ...state,
        pizzaList: state.pizzaList.map((pizza) => {
          return pizza.id === action.payload.id 
            ? { ...pizza, name: action.payload.name, price: action.payload.price }
            : pizza
        })
      }
    }
    case UPDATE_PIZZA_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    case UPDATE_PIZZA_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
