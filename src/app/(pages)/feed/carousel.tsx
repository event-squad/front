type Props = {
  handleFilter: (text: any) => void;
  filter: string;
};

import CarouselIcon from "@/app/components/carouselIcon";
import IconFlashOutline from "@/app/components/icons/flash";
import IconMusic from "@/app/components/icons/music";
import IconPeopleGroup from "@/app/components/icons/people";

const Carousel = ({ filter, handleFilter }: Props) => {
  return (
    <div className="cursor-pointer">
      <h1 className="text-white font-extrabold text-md px-1">
        Próximos eventos
      </h1>
      <div className="scrollbar-hide no-scrollbar flex overflow-y-scroll scrollbar-hide">
        <CarouselIcon
          filter={filter}
          handleFilter={handleFilter}
          text="Feed"
          icon={<IconFlashOutline className="text-3xl" />}
        />
        <CarouselIcon
          filter={filter}
          handleFilter={handleFilter}
          text="Shows"
          icon={<IconMusic className="text-3xl" />}
        />
        <CarouselIcon
          filter={filter}
          handleFilter={handleFilter}
          text="Noite"
          icon={<IconPeopleGroup className="text-3xl" />}
        />
      </div>
    </div>
  );
};

export default Carousel;
