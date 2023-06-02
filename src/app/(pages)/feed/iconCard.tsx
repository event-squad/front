type Props = {
  handleEvent: (e: any) => void;
  event: eventDetails;
};

import Image from "next/image";
import showImage from "@/../public/images/showImage.jpg";
import { eventDetails } from "@/app/types/event";

const IconCard = ({ handleEvent, event }: Props) => {
  console.log(event)
  const date = event.startDate.toString().split("T")[0]

  return (
    <div onClick={handleEvent} className="cursor-pointer border-solid border-black border-2 relative w-80 h-64  border-radius-feed overflow-hidden">
      <div className="absolute flex justify-center items-center m-5 w-auto rounded-md h-8 opacity-feed">
        <h1 className="text-xs text-white font-extrabold px-2">{date}</h1>
      </div>
      <Image
        className="z-0 object-cover w-full h-full"
        src={showImage}
        alt="show_image"
      />
      <div className="flex absolute gap-6 w-full h-auto bottom-0 bg-[#817793] opacity-feed ">
        <div className="text-white w-3/5 m-2 ml-5 mb-4 font-bold">
          <h1>{event.name}</h1>
          <p className="text-xs">{event.description} - {event.city} - {event.state}</p>
        </div>
        <div className="flex justify-center items-center my-auto w-16 h-8 rounded-xl font-extrabold text-xs text-black bg-white">
          <h1>R$ {event.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default IconCard;