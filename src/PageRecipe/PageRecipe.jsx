import React from 'react';
import {useParams} from "react-router-dom";
import {Recipes} from "../Recipes/Recipes";
import {Page, PageStyle, StyleCenter} from "./PageStyle";

const PageRecipe = () => {
    const {id} = useParams();

    const Recipe = Recipes.find(Recipe => Recipe.id === parseInt(id));

    return (
        <PageStyle>
            <StyleCenter>
                {Recipe ? (
                    <Page>
                        <h2>{Recipe.title}</h2>
                        <img src={Recipe.image} alt={Recipe.title}/>
                        <ol>
                            {Recipe.cooking_method.split('\n').map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                        Время приготовления: {Recipe.prep_time}
                    </Page>
                ) : (
                    <p>Рецепт не найден</p>
                )}
            </StyleCenter>
        </PageStyle>

    );
};

export default PageRecipe;