const Loading = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="z-20 flex justify-around items-center absolute bottom-0 bg-gradient-to-b from-transparent via-rgba(30, 12, 7, 0.8) to-black w-full h-32">
          <div className="w-20 h-20 rounded-full main-bg animate-pulse relative cursor-pointer flex justify-center items-center"></div>
          <div>
            <div className="w-56 h-20 p-1 rounded-full main-bg animate-pulse relative cursor-pointer flex justify-center items-center"></div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="mx-auto top-0 bg-center image-height" />
            <div className="absolute bg-gradient-to-t from-red-950 opacity-90 w-full py-2 bottom-0 flex justify-around items-center">
              <div>
                <h1 className="w-28 h-10 main-bg rounded-full animate-pulse"></h1>
                <p className="w-24 mt-1 h-10 main-bg rounded-full animate-pulse"></p>
              </div>
              <div className="w-4"></div>
              <div className="rounded-full main-bg animate-pulse w-28 h-10">
                <h1></h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around pt-4">
            <div className="text-white w-3/5 font-extrabold flex gap-4">
              <div className="text-white font-extrabold">
                <h1 className="main-bg rounded-full w-28 h-10 animate-pulse"></h1>
                <p className="main-bg rounded-full w-28 h-10 mt-1 animate-pulse"></p>
              </div>
              <div className="text-white font-extrabold">
                <h1 className="main-bg rounded-full w-28 h-10 animate-pulse"></h1>
                <p className="main-bg rounded-full w-28 h-10 mt-1 animate-pulse"></p>
              </div>
            </div>
            <h1 className="main-bg rounded-full w-12 h-10 mt-1 animate-pulse"></h1>
          </div>
          <h1 className="main-bg rounded mx-auto w-5/6 mt-4 h-40 animate-pulse"></h1>
        </div>
      </div>
    </>
  );
};

export default Loading;
