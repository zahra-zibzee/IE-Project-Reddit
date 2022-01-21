import React from "react";

const SearchInput = () => {
  
  return (
    <form
      className="search-form"
      aria-label="search-form"
    >
      <input
        type="search"
        aria-label="Search Reddit"
        name="search"
        id="search"
        placeholder="Search"
        data-testid="search"
        required
      />
      <i className="material-icons">search</i>
    </form>
  );
};

export default SearchInput;
