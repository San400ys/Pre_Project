import React, { useState } from 'react';
import { MyRecipesStyle } from "./MyRecipesStyle";
import { useDispatch, useSelector } from "react-redux";
import { addMyAction, deleteMyAction } from "../Store/MyReducer";
import {GridStyle} from "../AllRecipes/GridStyle";
import {CardStyle} from "../AllRecipes/CardStyle";
import {RecipeCard} from "../AllRecipes/RecipeCard";
import {FormMyRecipe} from "./FormMyRecipe";

export const MyRecipes = ({ allRecipes }) => {
    const dispatch = useDispatch();
    const myRecipes = useSelector(state => state.MyRecipeReducer.MyRecipes);

    const [title, setTitle] = useState('');
    const [cooking_method, setCooking_Method] = useState('');
    const [prep_time, setPrep_Time] = useState('');
    const [image, setImage] = useState('');

    const addMyRecipes = (event) => {
        event.preventDefault();
        const newRecipe = {
            id: allRecipes.length + 1,
            title,
            cooking_method,
            prep_time,
            image
        };
        dispatch(addMyAction(newRecipe));
        setTitle('');
        setCooking_Method('');
        setPrep_Time('');
        setImage('');
    };

    const deleteRecipe = (id) =>() => {
        dispatch(deleteMyAction(id));
    };

    return (
        <MyRecipesStyle>
            <FormMyRecipe
                addMyRecipes={addMyRecipes}
                title={title}
                setTitle={setTitle}
                cooking_method={cooking_method}
                setCooking_Method={setCooking_Method}
                prep_time={prep_time}
                setPrep_Time={setPrep_Time}
                image={image}
                setImage={setImage}
            />
            <GridStyle>
                {myRecipes.map(({id, title, image, prep_time}) => (
                    <CardStyle key={id}>
                        <RecipeCard id={id}
                                    title={title}
                                    image={image}
                                    prep_time={prep_time}>
                        </RecipeCard>
                        <button onClick={deleteRecipe(id)}>Удалить</button>
                    </CardStyle>
                ))}
            </GridStyle>
        </MyRecipesStyle>
    );
}
