import ingredientReducer from "../ingredientReducer";
import * as actions from "../../actions/ingredientActions";

const baseIngredient = {
  id: 10,
  name: "Ham"
}

const ingredients = [
  { ...baseIngredient },
  { ...baseIngredient, id: 11 },
  { ...baseIngredient, id: 12 }
];

const ingredientsDeleted = [
  { ...baseIngredient, id: 11 },
  { ...baseIngredient, id: 12 }
];

const error = {
  error: "Something went wrong",
  errorId: "ERR-123"
}

const message = {
  message: "One row added",
  status: 200
}

const initialState = {
  ingredientList: [...ingredients],
  loading: false,
  error: null
};

describe("Ingredient reducer tests", () => {
  it("Should return the initial state", () => {
    expect(ingredientReducer(undefined, {})).toEqual({ ...initialState, ingredientList: [] });
  });
  describe("Delete type actions", () => {
    it("Should the new state after a deletion", () => {
      expect(ingredientReducer(initialState, { type: actions.DELETE_INGREDIENT, payload: 10 })).toEqual({
        ingredientList: [...ingredientsDeleted],
        loading: false,
        error: null
      });
    });
    it("Should return the ingredient success state", () => {
      expect(ingredientReducer(initialState, {type: actions.DELETE_INGREDIENT_SUCCESS, payload: {message}})).toEqual({
        ...initialState,
        message: {message}
      });
    });
    it("Should return the ingredient error state", () => {
      expect(ingredientReducer(initialState, {type: actions.DELETE_INGREDIENT_FAILURE, payload: {error}})).toEqual({
        ...initialState,
        error: {error}
      });
    });
  });
});