import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const SearchBar = ({ color }) => {
    const { states, func } = useContext(GlobalContext);
    const { keyword, setKeyword } = states;
    const { handleSearch } = func;
    return (
        <input
            className={`input input-bordered lg:w-full ${color}`}
            type="text"
            placeholder="Search here"
            value={keyword}
            onChange={(e) => {
                setKeyword(e.target.value);
                handleSearch();
            }}
        />
    );
};

export default SearchBar;
