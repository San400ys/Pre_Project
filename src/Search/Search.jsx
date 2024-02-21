import React, {useState} from 'react';
import {debounce} from "lodash";

const Search = ({ setFilteredRecipes }) => {
    const [search, setSearch] = useState('');

    const debounced = debounce(setFilteredRecipes, 1500);

    const handleSearchChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        debounced(newSearch);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Поиск"
                value={search}
                onChange={handleSearchChange}
                className="search-input"
            />
        </div>
    );
};

export default Search;