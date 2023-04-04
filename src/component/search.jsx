import React from "react";

import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="search">
      <div>
        <p> Anywhere</p>
      </div>

      <div>
        <p> Anyweek</p>
      </div>
      <div>Add Guests</div>
      <div className="search-icon">
        <FaSearch  />
      </div>
    </div>
  );
}

export default Search;
