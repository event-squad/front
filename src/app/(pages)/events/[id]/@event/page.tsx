"use client";

import showImage from "@/../public/images/showImage.jpg";
import Events from "@/app/api/events/events";
import { eventDetails } from "@/app/types/event";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./header";
import ContentImage from "./contentImage";

type Props = {
  params: {
    id: string;
  };
};

const EventPage = async ({ params }: Props) => {
  const redirect = useRouter();
  const [event, setEvent] = useState<eventDetails>();

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

  const handlePath = (path: string) => redirect.push(path);

  return (
    <>
      {event && (
        <>
          <Header name={event?.name} handlePath={handlePath} />
          <ContentImage image={showImage} event={event} />
        </>
      )}
    </>
  );
};

export default EventPage;
