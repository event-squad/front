const Loading = () => {
  const array = [...new Array(10)];
  const category = [...new Array(10)];

  return (
    <>
      <div className="mt-4">
        <h1 className="h-6 text-white font-extrabold text-md px-1">
        Próximos eventos
        </h1>
        <div className="scrollbar-hide no-scrollbar flex overflow-y-scroll scrollbar-hide">
          {category?.map((c, index) => (
            <div
              key={index}
              className={`cursor-pointer box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 main-bg`}
            >
              <div className="cursor-pointer main-bg flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10"></div>
              <h1 className="w-20 h-12 main-bg animate-pulse text-center text-sm text-white font-extrabold mx-3"></h1>
            </div>
          ))}
        </div>
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
