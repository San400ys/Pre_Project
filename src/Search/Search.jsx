import React, {useState} from 'react';
import {debounce} from "lodash";

const Search = ({ setFilteredRecipes }) => {
    const [search, setSearch] = useState('');

    const debounced = debounce(setFilteredRecipes, 1500);

    const SearchChange = (event) => {
        const newSearch = event.target.value;
        debounced(newSearch);
        setSearch(newSearch);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск"
                value={search}
                onChange={SearchChange}
            />
        </div>
    );
};

export default Search;