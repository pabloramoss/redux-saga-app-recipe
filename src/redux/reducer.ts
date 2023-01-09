import * as types from "./actions"
const initialState = {
  recipes: [],
  error: null,
  loading: false,
}

const recipeReducer = (state=initialState, action: any) => {
  switch(action.type) {
    case types.FETCH_RECIPE_START:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_RECIPE_SUCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      }
    case types.FETCH_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
  }
}

export default recipeReducer