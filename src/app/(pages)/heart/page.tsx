"use client";

import Events from "@/app/api/events/events";
import Like from "@/app/api/likes/likes";
import IconCard from "@/app/components/iconCard";
import { EventLikedDetails } from "@/app/types/event";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [likedEvents, setLikedEvents] = useState<EventLikedDetails[]>();
  const redirect = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return redirect.push('/auth/signin');
    const response = Like.getLikedEvents(token);

    response
      .then((res) => setLikedEvents(res))
      .catch((err) => console.log(err));
  }, []);

  const handleEvent = async (idReceived: number) => {
    const { id } = await Events.getEventById(idReceived);

    return redirect.push(`/events/${id}`);
  };

  const handleCheckEvents = () => {
    if (!likedEvents) {
      return (
        <h1 className="font-extrabold text-white text-2xl mt-4">
          Nenhum Evento...
        </h1>
      );
    } else if (likedEvents.length === 0) {
      return (
        <h1 className="font-extrabold text-white text-2xl mt-4">
          Nenhum Evento curtido...
        </h1>
      );
    }
    return likedEvents.map((e) => (
      <IconCard key={e.id} event={e} handleEvent={handleEvent} />
    ));
  };

  return (
    <>
      <div className="mt-4">
        <h1 className="text-white font-extrabold text-md px-1">
          Eventos Curtidos...
        </h1>
        <div className="flex-wrap justify-around no-scrollbar scrollbar-hide heightHeart pb-bb overflow-scroll flex gap-4 mt-4 mx-auto">
          {handleCheckEvents()}
        </div>
      </div>
    </>
  );
};

export default Page;
