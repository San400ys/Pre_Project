import React, {useState} from 'react';
import {debounce} from "lodash";

export const Search = ({setFilteredRecipes}) => {
    const [search, setSearch] = useState('');

    const debounced = debounce(setFilteredRecipes, 1500);

    const searchChange = (event) => {
        const newSearch = event.target.value;
        debounced(newSearch);
        setSearch(newSearch);
    };

    return (
        <input
            type="text"
            placeholder="Поиск"
            value={search}
            onChange={searchChange}
        />
    );
};
