import React from 'react';
import {useParams} from "react-router-dom";
import {Page, PageStyle, StyleCenter} from "./PageStyle";

const PageRecipe = ({ recipes }) => {
    const {id} = useParams();

    const Recipe = recipes.find(recipe => recipe.id === parseInt(id));

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