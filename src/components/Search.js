import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search__search">
          <label htmlFor="search-input">
            <h1 className="search__title">
              <span role="img" aria-label="search">
                🔍
              </span>{" "}
              Cerca accessi
            </h1>
          </label>
          <input
            placeholder="Nome sito"
            type="text"
            id="search-input"
            className="search__input"
          />
        </div>
      </div>
    );
  }
}

export default Search;
