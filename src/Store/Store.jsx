import {createStore, combineReducers} from "redux";
import {MyReducer} from "./MyReducer";
import {FavoriteReducer} from "./FavoriteReducer";
// import {composeWithDevTools} from 'redux-devtools-extension';

const RootReducer = combineReducers(
    {
        My: MyReducer,
        Favorite: FavoriteReducer
    }
)
// export const store = createStore(RootReducer, composeWithDevTools());

export const store = createStore(RootReducer);