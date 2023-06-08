const Loading = () => {
  const array = [...new Array(10)];
  const category = [...new Array(10)];

  return (
    <>
      <div className="mt-4">
        <h1 className="h-6 text-white font-extrabold text-md px-1">
        Eventos Curtidos...
        </h1>
      </div>
      <div className="flex-wrap justify-around no-scrollbar scrollbar-hide height pb-aa overflow-scroll flex gap-4 mt-4 mx-auto">
        {array.map((e, index) => (
          <div
            key={index}
            className="cursor-pointer mb-5 bg-[#613D37] animate-pulse relative w-80 h-64  border-radius-feed"
          ></div>
        ))}
      </div>
    </>
  );
};

export default Loading;
