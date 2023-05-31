import IconFlashOutline from "@/app/components/ui/flash";

const Carousel = () => {
  return (
    <div className="cursor-pointer">
      <h1 className="text-white font-extrabold text-md px-1">
        Próximos eventos
      </h1>

      <div className="flex overflow-y-scroll scrollbar-hide">

        <div className="box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 bg-red-500">
          <div className="flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10">
            <IconFlashOutline className="text-3xl" />
          </div>
          <h1 className="text-lg text-white font-extrabold mx-3">Feed</h1>
        </div>
        <div className="box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 bg-red-500">
          <div className="flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10">
            <IconFlashOutline className="text-3xl" />
          </div>
          <h1 className="text-lg text-white font-extrabold mx-3">Feed</h1>
        </div>
        <div className="box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 bg-red-500">
          <div className="flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10">
            <IconFlashOutline className="text-3xl" />
          </div>
          <h1 className="text-lg text-white font-extrabold mx-3">Feed</h1>
        </div>
        <div className="box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 bg-red-500">
          <div className="flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10">
            <IconFlashOutline className="text-3xl" />
          </div>
          <h1 className="text-lg text-white font-extrabold mx-3">Feed</h1>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
