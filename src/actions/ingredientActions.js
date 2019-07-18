const FETCH_INGREDIENTS = "FETCH_INGREDIENTS";
const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
const FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE";
const CREATE_INGREDIENT = "CREATE_INGREDIENT";
const CREATE_INGREDIENT_SUCCESS = "CREATE_INGREDIENT_SUCCESS";
const CREATE_INGREDIENT_FAILURE = "CREATE_INGREDIENT_FAILURE";
const DELETE_INGREDIENT = "DELETE_INGREDIENT";
const DELETE_INGREDIENT_SUCCESS = "DELETE_INGREDIENT_SUCCESS";
const DELETE_INGREDIENT_FAILURE = "DELETE_INGREDIENT_FAILURE";
const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
const UPDATE_INGREDIENT_SUCCESS = "UPDATE_INGREDIENT_SUCCESS";
const UPDATE_INGREDIENT_FAILURE = "UPDATE_INGREDIENT_FAILURE";

const fetchIngredients = () => ({
  type: FETCH_INGREDIENTS
});

const fetchIngredientsSuccess = ingredients => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: { ingredients }
});

const fetchIngredientsFailure = error => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: { error }
});

const createIngredient = newIngredient => ({
  type: CREATE_INGREDIENT,
  payload: newIngredient
});

const createIngredientSuccess = message => ({
  type: CREATE_INGREDIENT_SUCCESS,
  payload: { message }
});

const createIngredientFailure = error => ({
  type: CREATE_INGREDIENT_FAILURE,
  payload: { error }
});
const deleteIngredient = newIngredient => ({
  type: DELETE_INGREDIENT,
  payload: newIngredient
});

const deleteIngredientSuccess = message => ({
  type: DELETE_INGREDIENT_SUCCESS,
  payload: { message }
});

const deleteIngredientFailure = error => ({
  type: DELETE_INGREDIENT_FAILURE,
  payload: { error }
});
const updateIngredient = ingredient => ({
  type: UPDATE_INGREDIENT,
  payload: ingredient
});

const updateIngredientSuccess = message => ({
  type: UPDATE_INGREDIENT_SUCCESS,
  payload: { message }
});

const updateIngredientFailure = error => ({
  type: UPDATE_INGREDIENT_FAILURE,
  payload: { error }
});

export {
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
  UPDATE_INGREDIENT_FAILURE,
  fetchIngredients,
  fetchIngredientsSuccess,
  fetchIngredientsFailure,
  createIngredient,
  createIngredientSuccess,
  createIngredientFailure,
  deleteIngredient,
  deleteIngredientSuccess,
  deleteIngredientFailure,
  updateIngredient,
  updateIngredientSuccess,
  updateIngredientFailure
}
