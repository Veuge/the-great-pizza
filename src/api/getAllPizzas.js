import axios from "axios";
import {
    fetchPizzas,
    fetchPizzasSuccess,
    fetchPizzasFailure
} from "../actions/pizzaActions";

const getAllPizzasThunk = () => {
    return async (dispatch) => {
        dispatch(fetchPizzas());
        try {
            const res = await axios("/pizza");
            dispatch(fetchPizzasSuccess(res.data));
        } catch(err) {
            dispatch(fetchPizzasFailure(err));
        }
    }
}

const createNewPizzaThunk = () => {
    return async (dispatch) => {
        dispatch(fetchPizzas());
        try {
            const res = await axios("/pizza");
            dispatch(fetchPizzasSuccess(res.data));
        } catch(err) {
            dispatch(fetchPizzasFailure(err));
        }
    }
}

export { getAllPizzasThunk };