import React from "react";

const SearchInput = () => {
  return (
    <>
      <form className="input-group w-auto my-auto d-none d-sm-flex  search-wide ms-3">
        <input
          autoComplete="off"
          type="search"
          className="form-control rounded"
          placeholder="Search Reddit"
        />
        <span className="input-group-text border-0 d-none d-lg-flex">
          <i className="fas fa-search"></i>
        </span>
      </form>
    </>
  );
};

export default SearchInput;