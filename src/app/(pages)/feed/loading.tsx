const Loading = () => {
  const array = [...new Array(10)];

  return (
    <>
      {array.map((e, index) => (
        <div
          key={index}
          className="cursor-pointer mb-5 bg-[#613D37] animate-pulse relative w-80 h-64  border-radius-feed"
        ></div>
      ))}
    </>
  );
};

export default Loading;
