import React from "react";
import {Routes, Route} from "react-router-dom";
import {Recipes} from "./Recipes/Recipes";
import {useSelector} from "react-redux";
import {Header} from "./Header/Header";
import {AllRecipes} from "./AllRecipes/AllRecipes";
import {FavoritesRecipes} from "./FavoritesRecipes/FavoritesRecipes";
import {PageRecipe} from "./PageRecipe/PageRecipe";
import {MyRecipes} from "./MyRecipes/MyRecipes";

export function App() {
    const myRecipes = useSelector(state => state.MyRecipeReducer.MyRecipes)

    const allRecipes = [...Recipes, ...myRecipes];

    return (
        <Routes>
            <Route path="" element={<Header/>}>
                <Route path="" element={<AllRecipes recipes={allRecipes}/>}/>
                <Route path="FavoritesRecipes" element={<FavoritesRecipes/>}/>
                <Route path="MyRecipes" element={<MyRecipes allRecipes={allRecipes}/>} />
                <Route path="PageRecipe/:id" element={<PageRecipe recipes={allRecipes} />} />
            </Route>
        </Routes>
    );
}