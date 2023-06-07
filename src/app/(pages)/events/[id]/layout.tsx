"use client";

import { useEffect, useState } from "react";
import { EventLiked, eventDetails } from "@/app/types/event";
import { EventContext } from "./context/eventContext";
import Like from "@/app/api/like/like";
import Events from "@/app/api/events/events";

type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
  event: React.ReactNode;
  params: {
    id: number;
  };
};

const Layout = (props: Props) => {
  const [event, setEvent] = useState<eventDetails>();
  const [active, setActive] = useState(false);
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    const event = Events.getEventById(Number(props.params.id));

    event
      .then((res) => {
        setEvent(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, props.params.id]);

  const handleActive = async () => {
    if (!token || !event) return;

    if (active) {
      await Like.dislikeEvent(token, event.id);
      const likes = await Like.getLikes(token);
      isActive(likes);
    } else {
      await Like.likeEvent(token, event.id);
      const likes = await Like.getLikes(token);
      isActive(likes);
    }
  };

  const isActive = (likes: EventLiked[]) => {
    if (!event) return setActive(false);
    const filtered = likes.filter((e) => e.eventId === event.id)

    if (!filtered[0]) return setActive(false);

    return setActive(true);
  }

  return (
    <EventContext.Provider value={{ event, active, handleActive }}>
      {props.event}
      {props.footer}
    </EventContext.Provider>
  );
};

export default Layout;
