import axios from "axios";
import {
    fetchPizzas,
    fetchPizzasSuccess,
    fetchPizzasFailure,
    createPizza,
    createPizzaSuccess,
    createPizzaFailure
} from "../actions/pizzaActions";

const getAllPizzasThunk = () => {
    return async (dispatch) => {
        dispatch(fetchPizzas());
        try {
            const res = await axios.get("/pizza");
            dispatch(fetchPizzasSuccess(res.data));
        } catch(err) {
            dispatch(fetchPizzasFailure(err));
        }
    }
}

const createPizzaThunk = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/pizza", payload);
            dispatch(createPizza(payload));
            dispatch(createPizzaSuccess(res));
        } catch(err) {
            dispatch(createPizzaFailure(err))
        }
    }
}

export { getAllPizzasThunk, createPizzaThunk };