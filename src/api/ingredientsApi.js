import axios from "axios";
import {
    fetchIngredients,
    fetchIngredientsSuccess,
    fetchIngredientsFailure,
} from "../actions/ingredientActions";

const getAllIngredientsThunk = () => {
    return async (dispatch) => {
        dispatch(fetchIngredients());
        try {
            const res = await axios.get("/ingredient");
            dispatch(fetchIngredientsSuccess(res.data));
        } catch(err) {
            dispatch(fetchIngredientsFailure(err));
        }
    }
}

export { getAllIngredientsThunk };