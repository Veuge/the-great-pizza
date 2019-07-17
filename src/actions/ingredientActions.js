const FETCH_INGREDIENTS = "FETCH_INGREDIENTS";
const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
const FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE";

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

  export {
      FETCH_INGREDIENTS,
      FETCH_INGREDIENTS_SUCCESS,
      FETCH_INGREDIENTS_FAILURE,
      fetchIngredients,
      fetchIngredientsSuccess,
      fetchIngredientsFailure
  }
