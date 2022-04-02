import React, { Component } from "react";
import Header from "../Header/Header";
import SearchField from "../SearchField/SearchField";

export class SearchBox extends Component {
  render() {
    return (
      <div className="bg-white w-3/5 h-96 drop-shadow-lg rounded">
        <Header />
        <SearchField />
      </div>
    );
  }
}

export default SearchBox;
