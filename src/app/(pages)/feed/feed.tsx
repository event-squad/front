type Props = {
  handleEvent: (e: any) => void;
  events: undefined | eventDetails[];
};

import { eventDetails } from "@/app/types/event";
import IconCard from "./iconCard";
import Loading from "./loading";

const Feed = ({ handleEvent, events }: Props) => {
  return (
    <div className="no-scrollbar scrollbar-hide height pb-aa overflow-scroll flex gap-4 justify-center flex-wrap mt-4 mx-auto">
      {!events ? (
        <Loading />
      ) : (
        events.map((e) => (
          <IconCard key={e.id} event={e} handleEvent={handleEvent} />
        ))
      )}
    </div>
  );
};

export default Feed;
