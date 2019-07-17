import {
    FETCH_INGREDIENTS,
    FETCH_INGREDIENTS_SUCCESS,
    FETCH_INGREDIENTS_FAILURE,
  } from "../actions/ingredientActions";
  
  const initialState = {
    ingredientList: [],
    loading: false,
    error: null
  };
  
  export default function pizzaReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_INGREDIENTS:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_INGREDIENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          ingredientList: action.payload.ingredients
        };
      case FETCH_INGREDIENTS_FAILURE:
        return {
          ...state,
          loading: false,
          ingredientList: [],
          error: action.payload.error
        };
      default:
        return state;
    }
  };
  