import React from "react";
import AllRecipes from "./AllRecipes/AllRecipes";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import FavoritesRecipes from "./FavoritesRecipes/FavoritesRecipes";
import MyRecipes from "./MyRecipes/MyRecipes";
import PageRecipe from "./PageRecipe/PageRecipe";
import {Recipes} from "./Recipes/Recipes";
import {useSelector} from "react-redux";

function App() {
    const myRecipes = useSelector(state => state.My.MyRecipes)

    const allRecipes = [...Recipes, ...myRecipes];

    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route path="/" element={<AllRecipes recipes={allRecipes}/>}/>
                <Route path="FavoritesRecipes" element={<FavoritesRecipes/>}/>
                <Route path="MyRecipes" element={<MyRecipes allRecipes={allRecipes}/>} />
                <Route path="/:id" element={<PageRecipe recipes={allRecipes} />} />
                <Route path="FavoritesRecipes/:id" element={<PageRecipe recipes={allRecipes} />} />
            </Route>
        </Routes>
    );
}

export default App;
