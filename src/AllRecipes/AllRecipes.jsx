import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteAction, deleteFavoriteAction } from "../Store/FavoriteReducer";
import InfiniteScroll from 'react-infinite-scroller';
import AllRecipesStyle from "../AllRecipes/AllRecipesStyle";
import Search from "../Search/Search";
import SearchStyle from "../Search/SearchStyle";
import GridStyle from "./GridStyle";
import CardStyle from "./CardStyle";
import Scroll from "../Scroll/Scroll";

const AllRecipes = ({ recipes }) => {
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(state => state.Favorite.favoriteRecipes);
    const updateFilteredRecipes = (newSearch) => {
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(newSearch.toLowerCase())
        );
        setFilteredRecipes(filteredRecipes);
    };
    const { visibleRecipes, hasMore, loadMoreRecipes } = Scroll(filteredRecipes);
    const ToggleFavorite = (id) => {
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
                            <Link to={`${id}`}>
                                <img src={image} alt={title}/>
                                <h1>{title}</h1>
                                <p>Время приготовления: {prep_time}</p>
                            </Link>
                            <button onClick={() => ToggleFavorite(id)}>
                                {favoriteRecipes.some((recipe) => recipe.id === id) ? "Удалить из избранного" : "Добавить в избранное"}
                            </button>
                        </CardStyle>
                    ))}
                </GridStyle>
            </InfiniteScroll>
        </AllRecipesStyle>
    );
};

export default AllRecipes;
