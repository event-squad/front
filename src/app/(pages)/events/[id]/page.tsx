"use client";

import Events from "@/app/api/events/events";
import Header from "./header";
import ContentImage from "./contentImage";
import showImage from "@/../public/images/showImage.jpg";
import Footer from "./footer";
import { eventDetails } from "@/app/types/event";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const EventPage = async ({ params }: Props) => {
  const redirect = useRouter();
  const [event, setEvent] = useState<eventDetails>();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const event = Events.getEventById(Number(params.id));

    event
      .then((res) => {
        setEvent(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const handlePath = (path: string) => redirect.push(path);;

  const handleActive = () => setActive(!active);;

  return (
    <>
      <Header name={event?.name} handlePath={handlePath} />
      {event && <ContentImage image={showImage} event={event} />}
      <Footer active={active} handleActive={handleActive} />
    </>
  );
};

export default EventPage;
