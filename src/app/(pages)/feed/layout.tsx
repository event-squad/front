"use client";

type Props = {
  feed: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

import { SearchContext } from "@/app/components/searchContext";
import { useState } from "react";
import SearchBar from "./searchInput";

const Layout = ({ header, feed, footer }: Props) => {
  const [textSearch, setTextSearch] = useState("");

  const handleInput = (e: any) => {
    const value = e.target.value.length;
    if (value % 5 === 0) {
      return setTextSearch(e.target.value);
    }
  };

  return (
    <SearchContext.Provider value={textSearch}>
      <div className="px-6">
        {header}
        <SearchBar Search={handleInput} />
        {feed}
        {footer}
      </div>
    </SearchContext.Provider>
  );
};

export default Layout;
