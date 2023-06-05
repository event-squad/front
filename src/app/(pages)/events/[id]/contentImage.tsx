import IconStar from "@/app/components/icons/star";
import { eventDetails } from "@/app/types/event";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  event: eventDetails;
};

const ContentImage = ({ image, event }: Props) => {
  return (
    <div className="mb-32">
      <div className="relative">
        <Image
          priority={true}
          className="mx-auto top-0 bg-center image-height md:w-2/4"
          src={image}
          alt="show image"
        />
        <div className="absolute bg-gradient-to-t from-red-950 opacity-90 w-full py-2 bottom-0 flex justify-around items-center">
          <div className="text-white font-extrabold">
            <h1 className="text-2xl">{event.name}</h1>
            <p className="text-gray-500">{event?.city}</p>
          </div>
          <div className="rounded-full bg-white p-2 font-extrabold">
            <h1>R$ {event.price}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-around pt-4">
        <div className="text-white w-3/5 font-extrabold flex gap-4">
          <div className="text-white font-extrabold">
            <h1 className="text-1xl">{event.startDate.toString()}</h1>
            <p className="text-gray-500 text-sm">{event.startDate.toString()}</p>
          </div>
          <div className="text-white font-extrabold">
            <h1 className="text-1xl">{event.startDate.toString()}</h1>
            <p className="text-gray-500 text-sm">{event.startDate.toString()}h</p>
          </div>
        </div>
        <h1 className="flex items-center text-yellow-500 gap-1">
          <IconStar /> {event.id}
        </h1>
      </div>
      <h1 className="text-white px-6 py-4">
        <strong className="font-extrabold">Sobre este evento: </strong>{event.description}
      </h1>
    </div>
  );
};

export default ContentImage;
