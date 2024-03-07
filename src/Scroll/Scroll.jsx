import { useState, useEffect } from 'react';

const Scroll = (filteredRecipes) => {
    const [visibleRecipes, setVisibleRecipes] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setVisibleRecipes(filteredRecipes.slice(0, 10));
        setHasMore(true);
    }, [filteredRecipes]);

    const loadMoreRecipes = async () => {
        const Size = 5;
        const lastIndex = visibleRecipes.length;
        const nextRecipes = filteredRecipes.slice(lastIndex, lastIndex + Size);
        setVisibleRecipes([...visibleRecipes, ...nextRecipes]);

        if (lastIndex + Size >= filteredRecipes.length) {
            setHasMore(false);
        }
    };

    return { visibleRecipes, hasMore, loadMoreRecipes };
};

export default Scroll;