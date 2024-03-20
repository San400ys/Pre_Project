import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "./Header/Header";
import { AllRecipes } from "./AllRecipes/AllRecipes";
import { FavoritesRecipes } from "./FavoritesRecipes/FavoritesRecipes";
import { PageRecipe } from "./PageRecipe/PageRecipe";
import { MyRecipes } from "./MyRecipes/MyRecipes";

export function App() {
    const [recipes, setRecipes] = useState([]);
    const myRecipes = useSelector((state) => state.MyRecipeReducer.MyRecipes);

    useEffect(() => {
        fetch("http://localhost:3001/Recipes")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    const allRecipes = [...recipes, ...myRecipes];

    return (
        <>
            <Header />
            <Routes>
                <Route path="" element={<AllRecipes recipes={allRecipes} />} />
                <Route path="FavoritesRecipes" element={<FavoritesRecipes />} />
                <Route path="MyRecipes" element={<MyRecipes allRecipes={allRecipes} />} />
                <Route path="PageRecipe/:id" element={<PageRecipe recipes={allRecipes} />} />
            </Routes>
        </>
    );
}
