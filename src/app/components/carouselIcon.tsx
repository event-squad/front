type Props = {
 text: string;
 icon: JSX.Element
}

const CarouselIcon = ({ text, icon }: Props ) => {
  return (
    <div className="box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 bg-red-500">
      <div className="flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10">
        {icon}
      </div>
      <h1 className="text-lg text-white font-extrabold mx-3">{text}</h1>
    </div>
  );
};

export default CarouselIcon;
