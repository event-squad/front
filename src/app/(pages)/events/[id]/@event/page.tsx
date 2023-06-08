"use client";

import showImage from "@/../public/images/showImage.jpg";
import Header from "./header";
import ContentImage from "./contentImage";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { EventContext } from "../context/eventContext";

const EventPage = async () => {
  const redirect = useRouter();
  const { event } = useContext(EventContext);

  const handlePath = () => redirect.back();

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
