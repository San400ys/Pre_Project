export const recipeImage = (Recipe) => {
    const images = [];
    for (const key in Recipe) {
        if (key.startsWith('image')) {
            images.push(Recipe[key]);
        }
    }
    return images;
};