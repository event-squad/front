'use client';

import { useContext } from "react";
import SearchInput from "./search";
import { FeedContext } from "../context/feedContext";

const SearchBar = () => {
  const { setTextSearch } = useContext(FeedContext);
  const handleSearch = (e: any) => {
    return setTextSearch(e.target.value)
  }

  return (
    <SearchInput  handleSearch={handleSearch} />
  );
};

export default SearchBar;
