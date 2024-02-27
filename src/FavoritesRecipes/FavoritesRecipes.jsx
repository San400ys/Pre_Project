import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavoriteAction } from "../Store/FavoriteReducer";
import GridStyle from "../AllRecipes/GridStyle";
import CardStyle from "../AllRecipes/CardStyle";
import AllRecipesStyle from "../AllRecipes/AllRecipesStyle";

const FavoritesRecipes = () => {
    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(state => state.Favorite.favoriteRecipes);

    const handleDeleteRecipe = (id) => {
        dispatch(deleteFavoriteAction(id));
    };

    return (
        <AllRecipesStyle>
            <h1>Избранные рецепты</h1>
            <GridStyle>
                {favoriteRecipes.map(({ id, title, image, prep_time }) => (
                    <CardStyle key={id}>
                        <Link to={`${id}`}>
                            <img src={image} alt={title}/>
                            <h1>{title}</h1>
                            <p>Время приготовления: {prep_time}</p>
                        </Link>
                        <button onClick={() => handleDeleteRecipe(id)}>Удалить из избранного</button>
                    </CardStyle>
                ))}
            </GridStyle>
        </AllRecipesStyle>
    );
};

export default FavoritesRecipes;
