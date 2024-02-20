import React from 'react';
import {Link} from "react-router-dom";
import HomePageStyle from "./HomePageStyle";


const HomePage = () => {
    return (
        <HomePageStyle>
            <Link to="AllRecipes">Все рецепты</Link>
            <Link to="FavoritesRecipes">Избранные рецепты</Link>
            <Link to="MyRecipes">Мои рецепты</Link>
        </HomePageStyle>
    );
};

export default HomePage;