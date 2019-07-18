import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE,
  CREATE_INGREDIENT,
  CREATE_INGREDIENT_SUCCESS,
  CREATE_INGREDIENT_FAILURE,
  DELETE_INGREDIENT,
  DELETE_INGREDIENT_SUCCESS,
  DELETE_INGREDIENT_FAILURE,
  UPDATE_INGREDIENT,
  UPDATE_INGREDIENT_SUCCESS,
  UPDATE_INGREDIENT_FAILURE
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
    case CREATE_INGREDIENT:
      return {
        ...state,
        ingredientList: [
          ...state.ingredientList,
          action.payload
        ]
      }
    case CREATE_INGREDIENT_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    case CREATE_INGREDIENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case DELETE_INGREDIENT: {
      const ingredientIndex = state.ingredientList.findIndex(el => el.id === action.payload);
      let ingredientList = [...state.ingredientList];
      if (ingredientIndex !== -1) {
        ingredientList.splice(ingredientIndex, 1);
      }
      return {
        ...state,
        ingredientList
      }
    }
    case DELETE_INGREDIENT_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    case DELETE_INGREDIENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case UPDATE_INGREDIENT: {
      return {
        ...state,
        ingredientList: state.ingredientList.map((ing) => {
          return ing.id === action.payload.id
            ? { ...ing, name: action.payload.name }
            : ing
        })
      }
    }
    case UPDATE_INGREDIENT_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    case UPDATE_INGREDIENT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
