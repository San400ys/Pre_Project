import React from 'react';
import GridStyle from "../AllRecipes/GridStyle";
import CardStyle from "../AllRecipes/CardStyle";
import { Link } from "react-router-dom";
import AllRecipesStyle from "../AllRecipes/AllRecipesStyle";

const FavoritesRecipes = ({ favoriteRecipes, setFavoriteRecipes }) => {
    const removeFromFavorites = (recipeId) => {
        setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== recipeId));
    };

    return (
        <AllRecipesStyle>
            <h1>Избранные рецепты</h1>
            <GridStyle>
                {favoriteRecipes.map(({id, title, image, prep_time}) =>
                    <CardStyle key={id}>
                        <Link to={`${id}`}>
                            <img src={image} alt={title}/>
                            <h1>{title}</h1>
                            <p>Время приготовления: {prep_time}</p>
                        </Link>
                        <button onClick={() => removeFromFavorites(id)}>Удалить из избранного</button>
                    </CardStyle>
                )}
            </GridStyle>
        </AllRecipesStyle>
    );
};

export default FavoritesRecipes;