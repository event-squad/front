"use client";

type Props = {
  feed: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  search: React.ReactNode;
};

import { useState } from "react";
import { FeedContext } from "./context/feedContext";

const Layout = ({ header, feed, footer, search }: Props) => {
  const [textSearch, setTextSearch] = useState("");

  return (
    <FeedContext.Provider value={{ textSearch, setTextSearch }}>
      <div className="px-6">
        {header}
        {search}
        {feed}
        {footer}
      </div>
    </FeedContext.Provider>
  );
};

export default Layout;
