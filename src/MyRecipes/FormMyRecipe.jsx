import React from 'react';

export const FormMyRecipe = ({ addMyRecipes, title, setTitle, cooking_method, setCooking_Method, prep_time, setPrep_Time, image, setImage }) => {
    return (
        <>
            <h2>Мои рецепты</h2>
            <form onSubmit={addMyRecipes}>
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
                    value={cooking_method}
                    onChange={(event) => setCooking_Method(event.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Время приготовления"
                    value={prep_time}
                    onChange={(event) => setPrep_Time(event.target.value)}
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
        </>
    );
};
