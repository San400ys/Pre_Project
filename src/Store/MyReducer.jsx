const defaultState = {
    MyRecipes: [],
};

const ADD_RECIPE = "ADD_RECIPE"
const DELETE_RECIPE = "DELETE_RECIPE"
export const MyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return { ...state, MyRecipes: [...state.MyRecipes, action.payload] };
        case "DELETE_RECIPE":
            return { ...state, MyRecipes: state.MyRecipes.filter(recipe => recipe.id !== action.payload) };
        default:
            return state;
    }
};
export const addMyAction = (payload) => ({type:ADD_RECIPE, payload})
export const deleteMyAction = (payload) => ({type:DELETE_RECIPE, payload})