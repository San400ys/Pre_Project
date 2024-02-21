import React, { useState } from 'react';
import AllRecipesStyle from "../AllRecipes/AllRecipesStyle";
import Search from "../Search/Search";
import SearchStyle from "../Search/SearchStyle";
import GridStyle from "./GridStyle";
import CardStyle from "./CardStyle";
import { Link } from "react-router-dom";

const AllRecipes = ({ recipes, favoriteRecipes, setFavoriteRecipes }) => {
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);

    const toggleFavorite = (recipeId) => {
        const isFavorite = favoriteRecipes.some((recipe) => recipe.id === recipeId);
        if (isFavorite) {
            setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== recipeId));
        } else {
            const recipeToAdd = recipes.find((recipe) => recipe.id === recipeId);
            if (recipeToAdd) {
                setFavoriteRecipes([...favoriteRecipes, recipeToAdd]);
            }
        }
    };

    const updateFilteredRecipes = (newSearch) => {
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(newSearch.toLowerCase())
        );
        setFilteredRecipes(filteredRecipes);
    };

    return (
        <AllRecipesStyle>
            <SearchStyle>
                <Search setFilteredRecipes={updateFilteredRecipes}/>
            </SearchStyle>
            <GridStyle>
                {filteredRecipes.map(({ id, title, image, prep_time }) =>
                    <CardStyle key={id}>
                        <Link to={`${id}`}>
                            <img src={image} alt={title}/>
                            <h1>{title}</h1>
                            <p>Время приготовления: {prep_time}</p>
                        </Link>
                        <button onClick={() => toggleFavorite(id)}>
                            {favoriteRecipes.some((recipe) => recipe.id === id)
                                ? "Удалить из избранного"
                                : "Добавить в избранное"}
                        </button>
                    </CardStyle>
                )}
            </GridStyle>
        </AllRecipesStyle>
    );
};

export default AllRecipes;
