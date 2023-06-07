"use client";

import showImage from "@/../public/images/showImage.jpg";
import Events from "@/app/api/events/events";
import { eventDetails } from "@/app/types/event";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Header from "./header";
import ContentImage from "./contentImage";
import { EventContext } from "../context/eventContext";

const EventPage = async () => {
  const redirect = useRouter();
  const { event } = useContext(EventContext);

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
