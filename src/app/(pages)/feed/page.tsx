"use client";

import Carousel from "./carousel";
import Footer from "../../components/footer";
import Header from "./header";
import SearchBar from "./searchBar";
import Feed from "./feed";
import Events from "@/app/api/events/events";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { eventDetails } from "@/app/types/event";

const Page = () => {
  const redirect = useRouter();
  const [filter, setFilter] = useState("");
  const [events, setEvents] = useState<eventDetails[]>();

  useEffect(() => {
    const event = Events.getEvents();

    event
      .then(async (res) => {
        setEvents(res);
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

  const handleEvent = async (idReceived: number) => {
    const { id } = await Events.getEventById(idReceived);

    return redirect.push(`/events/${id}`);
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
