const RecipeImage = (Recipe) => {
    const images = [];
    for (const key in Recipe) {
        if (key.startsWith('image')) {
            images.push(Recipe[key]);
        }
    }
    return images;
};

export default RecipeImage;
