import React, { useState } from 'react';
import { MyRecipesStyle } from "./MyRecipesStyle";
import GridStyle from "../AllRecipes/GridStyle";
import { useDispatch, useSelector } from "react-redux";
import { addMyAction, deleteMyAction } from "../Store/MyReducer";
import CardStyle from "../AllRecipes/CardStyle";

const MyRecipes = ({ allRecipes }) => {
    const dispatch = useDispatch();
    const myRecipes = useSelector(state => state.My.MyRecipes);

    const [title, setTitle] = useState('');
    const [cookingMethod, setCookingMethod] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [image, setImage] = useState('');

    const AddMyRecipes = (event) => {
        event.preventDefault();
        const newRecipe = {
            id: allRecipes.length + 1,
            title: title,
            cooking_method: cookingMethod,
            prep_time: prepTime,
            image: image,
        };
        dispatch(addMyAction(newRecipe));
        setTitle('');
        setCookingMethod('');
        setPrepTime('');
        setImage('');
    };

    const DeleteRecipe = (id) => {
        dispatch(deleteMyAction(id));
    };

    return (
        <MyRecipesStyle>
            <h2>Мои рецепты</h2>
            <form onSubmit={AddMyRecipes}>
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
                {myRecipes.map(({ id, title, image, prep_time }) => (
                    <CardStyle key={id}>
                        <img src={image} alt={title} />
                        <h1>{title}</h1>
                        <p>Время приготовления: {prep_time}</p>
                        <button onClick={() => DeleteRecipe(id)}>Удалить</button>
                    </CardStyle>
                ))}
            </GridStyle>
        </MyRecipesStyle>
    );
};

export default MyRecipes;
