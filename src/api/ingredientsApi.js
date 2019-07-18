import axios from "axios";
import {
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
} from "../actions/ingredientActions";

const getAllIngredientsThunk = () => {
  return async (dispatch) => {
    dispatch(fetchIngredients());
    try {
      const res = await axios.get("/ingredient");
      dispatch(fetchIngredientsSuccess(res.data));
    } catch (err) {
      dispatch(fetchIngredientsFailure(err));
    }
  }
}

const createIngredientThunk = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/ingredient", payload);
      dispatch(createIngredient({ ...payload, id: res.data.insertId }));
      dispatch(createIngredientSuccess(res));
    } catch (err) {
      dispatch(createIngredientFailure(err))
    }
  }
}

const deleteIngredientThunk = (ingredient) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/ingredient/${ingredient.id}`);
      dispatch(deleteIngredient(ingredient.id));
      dispatch(deleteIngredientSuccess(res));
    } catch (err) {
      dispatch(deleteIngredientFailure(err));
    }
  }
}

const updateIngredientThunk = ingredient => {
  return async dispatch => {
    try {
      const payload = {
        name: ingredient.name
      };
      const res = await axios.put(`/ingredient/${ingredient.id}`, payload);
      dispatch(updateIngredient({...payload, id: ingredient.id}));
      dispatch(updateIngredientSuccess(res));
    } catch (err) {
      dispatch(updateIngredientFailure(err));
    }
  }
}

export {
  getAllIngredientsThunk,
  createIngredientThunk,
  deleteIngredientThunk,
  updateIngredientThunk
};