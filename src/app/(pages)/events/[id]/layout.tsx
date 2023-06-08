"use client";

type Props = {
  children: React.ReactNode;
  footer: React.ReactNode;
  event: React.ReactNode;
  params: {
    id: number;
  };
};

import Events from "@/app/api/events/events";
import Like from "@/app/api/likes/likes";
import { SetStateAction, useEffect, useState } from "react";
import { EventLiked, eventDetails } from "@/app/types/event";
import { EventContext } from "./context/eventContext";

const Layout = (props: Props) => {
  const [event, setEvent] = useState<eventDetails>();
  const [likedEvents, setLikedEvents] = useState<EventLiked[]>();
  const [active, setActive] = useState(false);
  const [token, setToken] = useState<string | null>();

  useEffect(() => {
    if (!token) return setToken(localStorage.getItem("token"));
    const event = Events.getEventById(Number(props.params.id));
    const likes = Like.getLikes(token);

    event
      .then((res) => {
        setEvent(res);
      })
      .catch((err) => {
        console.log(err);
      });
    likes
      .then((res: SetStateAction<EventLiked[] | undefined>) => {
        setLikedEvents(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [token, props.params.id]);

  const handleActive = async () => {
    if (!token || !event) return;

    if (active) {
      await Like.dislikeEvent(token, event.id);
      const likes = await Like.getLikes(token);
      setLikedEvents(likes);
    } else {
      await Like.likeEvent(token, event.id);
      const likes = await Like.getLikes(token);
      setLikedEvents(likes);
    }
  };

  useEffect(() => {
    if (!event || !likedEvents) return;
    const filtered = likedEvents.filter((e) => e.eventId === event.id);

    if (!filtered[0]) return setActive(false);

    return setActive(true);
  }, [likedEvents]);

  return (
    <EventContext.Provider value={{ event, active, handleActive }}>
      {props.event}
      {props.footer}
    </EventContext.Provider>
  );
};

export default Layout;
