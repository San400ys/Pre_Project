import React, { useState } from "react";
import { Recipes } from "./Recipes/Recipes";
import AllRecipes from "./AllRecipes/AllRecipes";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Header from "./Header/Header";
import FavoritesRecipes from "./FavoritesRecipes/FavoritesRecipes";
import MyRecipes from "./MyRecipes/MyRecipes";
import PageRecipe from "./PageRecipe/PageRecipe";

function App() {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/" element={<Header/>}>
                <Route path="AllRecipes" element={<AllRecipes recipes={Recipes} favoriteRecipes={favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/>}/>
                <Route path="FavoritesRecipes" element={<FavoritesRecipes favoriteRecipes={favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/>}/>
                <Route path="MyRecipes" element={<MyRecipes/>}/>
                <Route path="AllRecipes/:id" element={<PageRecipe/>}/>
            </Route>
        </Routes>
    );
}

export default App;