"use client";

import Carousel from "./carousel";
import Footer from "../../components/footer";
import Header from "./header";
import SearchBar from "./searchBar";
import { useRouter } from "next/navigation";
import Feed from "./feed";
import { useState } from "react";

const Page = () => {
  const redirect = useRouter();
  const [filter, setFilter] = useState("");

  const handleClick = (e: any) => {
   const path = e.target.id;
   switch(path) {
    case "home":
     return redirect.push('/feed');
    case "map":
     return redirect.push('/map');
    case "heart":
     return redirect.push('/feed');
    case "user":
     return redirect.push('/feed');
   }
  };

  const handleFilter = (text: any) => {
    if (text === filter) {
      setFilter("");
      return;
    }
    setFilter(text);
  }

  return (
    <div className="px-6">
      <Header />
      <SearchBar />
      <Carousel filter={filter} handleFilter={handleFilter} />
      <Feed />
      <Footer active={"home"} handleClick={handleClick} />
    </div>
  );
};

export default Page;
