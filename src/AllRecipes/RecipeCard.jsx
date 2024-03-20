import React from 'react';
import {Link} from "react-router-dom";

export const RecipeCard = ({id, title, image, prep_time}) => {
    return (
        <Link to={`/PageRecipe/${id}`}>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            <p>Время приготовления: {prep_time}</p>
        </Link>
    );
};
