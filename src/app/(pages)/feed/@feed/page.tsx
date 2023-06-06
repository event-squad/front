"use client";

import { eventDetails } from "@/app/types/event";
import IconCard from "./iconCard";
import Events from "@/app/api/events/events";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CarouselIcon from "@/app/components/carouselIcon";
import IconFlashOutline from "@/app/components/icons/flash";
import Category from "@/app/api/category/category";
import { CategoryType } from "@/app/types/category";

const Feed = async () => {
  const redirect = useRouter();
  const [events, setEvents] = useState<eventDetails[]>();
  const [filter, setFilter] = useState<CategoryType>();
  const [category, setCategory] = useState<CategoryType[]>();

  const handleFilter = async (id: number) => {
    const response = await Category.getCategoryById(id);

    if (response.categoryName === filter?.categoryName) {
      return setFilter(undefined);
    }

    return setFilter(response);
  };

  useEffect(() => {
    const response = Category.getCategory();

    response.then((res) => {
      setCategory(res);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    const response = Events.getEvents();

    response
      .then((res) => {
        setEvents(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEvent = async (idReceived: number) => {
    const { id } = await Events.getEventById(idReceived);

    return redirect.push(`/events/${id}`);
  };

  return (
    <>
      <div className="mt-4">
        <h1 className="text-white font-extrabold text-md px-1">
          Próximos eventos
        </h1>
        <div className="scrollbar-hide no-scrollbar flex overflow-y-scroll scrollbar-hide">
          {category?.map((c) => (
            <CarouselIcon
              key={c.id}
              category={c}
              filter={filter}
              handleFilter={handleFilter}
              text="Feed"
              icon={<IconFlashOutline className="text-3xl" />}
            />
          ))}
        </div>
      </div>
      <div className="flex-wrap justify-around no-scrollbar scrollbar-hide height pb-aa overflow-scroll flex gap-4 mt-4 mx-auto">
        {!events ? (
          <></>
        ) : (
          events.map((e) => (
            <IconCard key={e.id} event={e} handleEvent={handleEvent} />
          ))
        )}
      </div>
    </>
  );
};

export default Feed;
