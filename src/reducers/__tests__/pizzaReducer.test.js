import pizzaReducer from "../pizzaReducer";
import * as actions from "../../actions/pizzaActions";

const initialState = {
  pizzaList: [],
  loading: false,
  error: null
};

const basePizza = {
  id: 10,
  name: "Pepperoni",
  price: 100
}

const pizzas = [
  {...basePizza, id: 11, name: "Pepperoni 1"},
  {...basePizza, id: 12, name: "Pepperoni 2"}
];

const error = {
  error: "Something went wrong",
  errorId: "ERR-123"
}

const message = {
  message: "One row added",
  status: 200
}

describe("Pizza reducer tests", () => {
  it("Should return the initial state", () => {
    expect(pizzaReducer(undefined, {})).toEqual(initialState);
  });
  describe("Fetching type actions", () => {
    it("Should return the pizzaList loading state", () => {
      expect(pizzaReducer(initialState, {type: actions.FETCH_PIZZAS})).toEqual({
        pizzaList: [],
        loading: true,
        error: null
      });
    });
    it("Should return the pizzaList success state", () => {
      expect(pizzaReducer(initialState, {type: actions.FETCH_PIZZAS_SUCCESS, payload: {pizzas}})).toEqual({
        pizzaList: pizzas,
        loading: false,
        error: null
      });
    });
    it("Should return the pizzaList error state", () => {
      expect(pizzaReducer(initialState, {type: actions.FETCH_PIZZAS_FAILURE, payload: {error}})).toEqual({
        pizzaList: [],
        loading: false,
        error
      });
    });
  });
  describe("Create type actions", () => {
    it("Should return state adding a new pizza", () => {
      expect(pizzaReducer(initialState, {type: actions.CREATE_PIZZA, payload: basePizza})).toEqual({
        pizzaList: [basePizza],
        loading: false,
        error: null
      });
    });
    it("Should return success state after pizza creation", () => {
      expect(pizzaReducer(initialState, {type: actions.CREATE_PIZZA_SUCCESS, payload: {message}})).toEqual({
        pizzaList: [],
        loading: false,
        error: null,
        message: { message }
      });
    });
    it("Should return failure state after pizza creation", () => {
      expect(pizzaReducer(initialState, {type: actions.CREATE_PIZZA_FAILURE, payload: {error}})).toEqual({
        pizzaList: [],
        loading: false,
        error: { error }
      });
    });
  });
});