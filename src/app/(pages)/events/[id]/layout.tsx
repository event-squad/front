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
import { useRouter } from "next/navigation";

const Layout = (props: Props) => {
  const [event, setEvent] = useState<eventDetails>();
  const [likedEvents, setLikedEvents] = useState<EventLiked[]>();
  const [active, setActive] = useState(false);
  const [token, setToken] = useState<string | null>();
  const redirect = useRouter();

  useEffect(() => {
    if (!token) return setToken(localStorage.getItem("token"));
    const event = Events.getEventById(Number(props.params.id));
    const likes = Like.getLikes(token);

    event
      .then((res) => {
        setEvent(res);
      })
      .catch((err) => {
        redirect.push('/feed')
      });
    likes
      .then((res: any) => {
        if (res.message === 'Unauthorized token') {
          return redirect.push('/auth/signin');
        }
        setLikedEvents(res);
      })
      .catch((err: any) => {
        console.log(err);
        redirect.push('/auth/signin');
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
