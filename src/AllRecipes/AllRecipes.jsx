import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteAction, deleteFavoriteAction } from "../Store/FavoriteReducer";
import InfiniteScroll from 'react-infinite-scroller';
import {Scroll} from "../Scroll/Scroll";
import {AllRecipesStyle} from "./AllRecipesStyle";
import SearchStyle from "../Search/SearchStyle";
import {Search} from "../Search/Search";
import {GridStyle} from "./GridStyle";
import {CardStyle} from "./CardStyle";
import {RecipeCard} from "./RecipeCard";

export const AllRecipes = ({ recipes }) => {
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(state => state.FavoriteRecipeReducer.favoriteRecipes);
    const isFavoriteRecipe = (favoriteRecipes, id) => {
        return favoriteRecipes.some(recipe => recipe.id === id);
    };
    const updateFilteredRecipes = (newSearch) => {
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(newSearch.toLowerCase())
        );
        setFilteredRecipes(filteredRecipes);
    };
    const { visibleRecipes, hasMore, loadMoreRecipes } = Scroll(filteredRecipes);
    const toggleFavorite = (id) => {
        if (favoriteRecipes.some(recipe => recipe.id === id)) {
            dispatch(deleteFavoriteAction(id));
        } else {
            const recipeToAdd = recipes.find(recipe => recipe.id === id);
            dispatch(addFavoriteAction(recipeToAdd));
        }
    };

    return (
        <AllRecipesStyle>
            <SearchStyle>
                <Search setFilteredRecipes={updateFilteredRecipes}/>
            </SearchStyle>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMoreRecipes}
                hasMore={hasMore}
                loader={<div className="loader" key={0}></div>}
            >
                <GridStyle>
                    {visibleRecipes.map(({ id, title, image, prep_time }) => (
                        <CardStyle key={id}>
                            <RecipeCard id={id}
                                        title={title}
                                        image={image}
                                        prep_time={prep_time}/>
                            <button onClick={() => toggleFavorite(id)}>
                                {isFavoriteRecipe(favoriteRecipes, id) ? "Удалить из избранного" : "Добавить в избранное"}
                            </button>
                        </CardStyle>
                    ))}
                </GridStyle>
            </InfiniteScroll>
        </AllRecipesStyle>
    );
};
