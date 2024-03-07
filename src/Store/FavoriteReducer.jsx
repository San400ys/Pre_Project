const defaultState = {
    favoriteRecipes: [],
};

const ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";

export const FavoriteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return { ...state, favoriteRecipes: [...state.favoriteRecipes, action.payload] };
        case DELETE_FAVORITE:
            return { ...state, favoriteRecipes: state.favoriteRecipes.filter(recipe => recipe.id !== action.payload) };
        default:
            return state;
    }
};

export const addFavoriteAction = (payload) => ({ type: ADD_FAVORITE, payload });
export const deleteFavoriteAction = (payload) => ({ type: DELETE_FAVORITE, payload });
