import React, { useState } from "react";
import "./styles.css";
import { NavBar } from "./components/NavBar";
import { SearchResults } from "./components/SearchResults";

export default function App(props) {
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function showSearchResults(message) {
    setShowResults(true);
    setSearchQuery(message);
  }

  return (
    <>
      <NavBar triggerShowSearchResults={showSearchResults} />
      <br />
      {showResults ? <SearchResults searchQuery={searchQuery} /> : ""}
    </>
  );
}
