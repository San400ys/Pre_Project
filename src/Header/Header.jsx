import React from 'react';
import {Link, Outlet} from "react-router-dom";
import HeaderStyle from "./HeaderStyle";

const Header = () => {
    return (
        <HeaderStyle>
            <header>
                <Link to="">Все рецепты</Link>
                <Link to="FavoritesRecipes">Избранные рецепты</Link>
                <Link to="MyRecipes">Мои рецепты</Link>
            </header>
            <Outlet/>
        </HeaderStyle>
    );
};

export default Header;