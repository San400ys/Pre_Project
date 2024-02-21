import { useState } from 'react';

const SelectFavorite = (recipes, favoriteRecipes, setFavoriteRecipes) => {
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

    return { filteredRecipes, toggleFavorite, updateFilteredRecipes };
};

export default SelectFavorite;
