"use client";

import Carousel from "./carousel";
import Footer from "../../components/footer";
import Header from "./header";
import SearchBar from "./searchBar";
import { useRouter } from "next/navigation";
import Feed from "./feed";
import { useEffect, useState } from "react";
import Events from "@/app/api/events/events";

const Page = () => {
  const redirect = useRouter();
  const [filter, setFilter] = useState("");
  const [events, setEvents] = useState();

  useEffect(() => {
    const event = Events.getEvents();

    event
      .then(async (res) => {
        setEvents(await res.json());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (e: any) => {
    const path = e.target.id;
    switch (path) {
      case "home":
        return redirect.push("/feed");
      case "map":
        return redirect.push("/map");
      case "heart":
        return redirect.push("/feed");
      case "user":
        return redirect.push("/feed");
    }
  };

  const handleFilter = (text: any) => {
    console.log("oi");
    if (text === filter) {
      setFilter("");
      return;
    }
    setFilter(text);
  };

  const handleEvent = (e: any) => {
    // console.log(e);
  };

  return (
    <div className="px-6">
      <Header />
      <SearchBar />
      <Carousel filter={filter} handleFilter={handleFilter} />
      <Feed events={events} handleEvent={handleEvent} />
      <Footer active={"home"} handleClick={handleClick} />
    </div>
  );
};

export default Page;
