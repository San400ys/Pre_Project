import React from 'react';
import { Link } from "react-router-dom";
import SelectFavorite from "../FavoritesRecipes/SelectFavorite";
import InfiniteScroll from 'react-infinite-scroller';
import AllRecipesStyle from "../AllRecipes/AllRecipesStyle";
import Search from "../Search/Search";
import SearchStyle from "../Search/SearchStyle";
import GridStyle from "./GridStyle";
import CardStyle from "./CardStyle";
import Scroll from "../Scroll/Scroll";

const AllRecipes = ({ recipes, favoriteRecipes, setFavoriteRecipes }) => {
    const { filteredRecipes, toggleFavorite, updateFilteredRecipes } = SelectFavorite(recipes, favoriteRecipes, setFavoriteRecipes);
    const { visibleRecipes, hasMore, loadMoreRecipes } = Scroll(filteredRecipes);

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
                            <button onClick={() => toggleFavorite(id)}>
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
