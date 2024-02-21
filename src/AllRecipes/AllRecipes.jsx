import React from 'react';
import AllRecipesStyle from "../AllRecipes/AllRecipesStyle";
import Search from "../Search/Search";
import SearchStyle from "../Search/SearchStyle";
import GridStyle from "./GridStyle";
import CardStyle from "./CardStyle";
import { Link } from "react-router-dom";
import SelectFavorite from "../FavoritesRecipes/SelectFavorite";

const AllRecipes = ({ recipes, favoriteRecipes, setFavoriteRecipes }) => {
    const { filteredRecipes, toggleFavorite, updateFilteredRecipes } = SelectFavorite(recipes, favoriteRecipes, setFavoriteRecipes);

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
