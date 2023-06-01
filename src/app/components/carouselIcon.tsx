type Props = {
  text: string;
  icon: JSX.Element;
  handleFilter: (text: any) => void;
  filter: string;
};

const CarouselIcon = ({ filter, handleFilter, text, icon }: Props) => {
  return (
    <button
      onClick={() => handleFilter(text)}
      className={`box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 ${
        filter === text ? "bg-red-500" : "bg-[#613D37]"
      }`}
    >
      <div className="flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10">
        {icon}
      </div>
      <h1 className="text-lg text-white font-extrabold mx-3">{text}</h1>
    </button>
  );
};

export default CarouselIcon;
