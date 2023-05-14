import React, { useContext } from "react";
import "./searchInput.scss";
import { homeContext } from "../../context";

const SearchInput = () => {
  const {
    setFirstTenResults,
    setSearchParams,
  } = useContext(homeContext);
  let search;

  function searchHandler(e) {
    e.target.value ? setSearchParams({name: e.target.value}) : setSearchParams({})
  }

  return (
    <div className="searchInput">
      <input
        type="text"
        name="searchInputField"
        id=""
        placeholder="Search characters..."
        onChange={(e) => {
          clearTimeout(search);
          search = setTimeout(() => {
              searchHandler(e);
              setFirstTenResults(true);
          }, 300);
        }}
      />
    </div>
  );
};

export default SearchInput;
