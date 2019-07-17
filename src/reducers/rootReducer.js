import { combineReducers } from "redux";
import pizzaReducer from "./pizzaReducer";
import ingredientsReducer from "./ingredientReducer";

export default combineReducers({
  pizzaReducer,
  ingredientsReducer
});
