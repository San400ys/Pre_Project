import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteFavoriteAction } from "../Store/FavoriteReducer";
import {AllRecipesStyle} from "../AllRecipes/AllRecipesStyle";
import {GridStyle} from "../AllRecipes/GridStyle";
import {CardStyle} from "../AllRecipes/CardStyle";
import {RecipeCard} from "../AllRecipes/RecipeCard";

export const FavoritesRecipes = () => {
    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(state => state.FavoriteRecipeReducer.favoriteRecipes);

    const handleDeleteRecipe = (id) => () => {
        dispatch(deleteFavoriteAction(id));
    };

    return (
        <AllRecipesStyle>
            <h1>Избранные рецепты</h1>
            <GridStyle>
                {favoriteRecipes.map(({ id, title, image, prep_time }) => (
                    <CardStyle key={id}>
                        <RecipeCard id={id}
                                    title={title}
                                    image={image}
                                    prep_time={prep_time}/>
                        <button onClick={handleDeleteRecipe(id)}>Удалить из избранного</button>
                    </CardStyle>
                ))}
            </GridStyle>
        </AllRecipesStyle>
    );
};
