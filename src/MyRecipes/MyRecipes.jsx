import React, { useState } from 'react';
import {MyRecipesStyle, MyCardStyle} from "./MyRecipesStyle";
import GridStyle from "../AllRecipes/GridStyle";

const MyRecipes = ({ recipes, addNewRecipe, allRecipes }) => {
    const [title, setTitle] = useState('');
    const [cookingMethod, setCookingMethod] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        const newRecipe = {
            id: allRecipes.length + 1,
            title: title,
            cooking_method: cookingMethod,
            prep_time: prepTime,
            image: image,
        };
        addNewRecipe(newRecipe);
    };

    return (
        <MyRecipesStyle>
            <h2>Мои рецепты</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Название"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Метод приготовления"
                    value={cookingMethod}
                    onChange={(event) => setCookingMethod(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Время приготовления"
                    value={prepTime}
                    onChange={(event) => setPrepTime(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL изображения"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    required
                />
                <button type="submit">Добавить рецепт</button>
            </form>
            <h2>Ваши рецепты:</h2>
            <GridStyle>
                {recipes.map(({id, title, image, prep_time}) => (
                    <MyCardStyle key={id}>
                        <img src={image} alt={title}/>
                        <h1>{title}</h1>
                        <p>Время приготовления: {prep_time}</p>
                    </MyCardStyle>
                ))}
            </GridStyle>
        </MyRecipesStyle>
    );
};
export default MyRecipes;