import React, { useState } from "react";
import AllRecipes from "./AllRecipes/AllRecipes";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import FavoritesRecipes from "./FavoritesRecipes/FavoritesRecipes";
import MyRecipes from "./MyRecipes/MyRecipes";
import PageRecipe from "./PageRecipe/PageRecipe";
import {Recipes} from "./Recipes/Recipes";

function App() {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [myRecipes, setMyRecipes] = useState([]);

    const addNewRecipe = (newRecipe) => {
        setMyRecipes([...myRecipes, newRecipe]);
    };

    const allRecipes = [...Recipes, ...myRecipes];

    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route path="/" element={<AllRecipes recipes={allRecipes} favoriteRecipes={favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/>}/>
                <Route path="FavoritesRecipes" element={<FavoritesRecipes favoriteRecipes={favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/>}/>
                <Route path="MyRecipes" element={<MyRecipes recipes={myRecipes} setRecipes={setMyRecipes} addNewRecipe={addNewRecipe} allRecipes ={allRecipes} />} />
                <Route path="/:id" element={<PageRecipe recipes={allRecipes} />} />
                <Route path="FavoritesRecipes/:id" element={<PageRecipe recipes={allRecipes} />} />
            </Route>
        </Routes>
    );
}

export default App;
