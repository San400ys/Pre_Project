import React from 'react';
import { useParams } from "react-router-dom";
import { Page, PageStyle, StyleCenter } from "./PageStyle";
import {Slider} from "../Slider/Slider";
import {recipeImage} from "./RecipeImage";

export const PageRecipe = ({ recipes }) => {
    const { id } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    return (
        <PageStyle>
            <StyleCenter>
                {recipe ? (
                    <Page>
                        <h2>{recipe.title}</h2>
                        <Slider images={recipeImage(recipe)} />
                        <ol>
                            {recipe.cooking_method.split('\n').map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                        Время приготовления: {recipe.prep_time}
                    </Page>
                ) : (
                    <p>Рецепт не найден</p>
                )}
            </StyleCenter>
        </PageStyle>
    );
};