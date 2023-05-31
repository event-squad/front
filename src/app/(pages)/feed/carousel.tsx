import CarouselIcon from "@/app/components/carouselIcon";
import IconFlashOutline from "@/app/components/icons/flash";

const Carousel = () => {
  return (
    <div className="cursor-pointer">
      <h1 className="text-white font-extrabold text-md px-1">
        Próximos eventos
      </h1>

      <div className="flex overflow-y-scroll scrollbar-hide">

        <CarouselIcon text="Feed" icon={<IconFlashOutline className="text-3xl" />} />
        <CarouselIcon text="Feed" icon={<IconFlashOutline className="text-3xl" />} />
        <CarouselIcon text="Feed" icon={<IconFlashOutline className="text-3xl" />} />
        <CarouselIcon text="Feed" icon={<IconFlashOutline className="text-3xl" />} />
        <CarouselIcon text="Feed" icon={<IconFlashOutline className="text-3xl" />} />

      </div>
    </div>
  );
};

export default Carousel;
