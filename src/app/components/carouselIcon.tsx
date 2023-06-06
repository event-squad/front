import { CategoryType } from "../types/category";

type Props = {
  text: string;
  icon: JSX.Element;
  handleFilter: (category: CategoryType) => void;
  filter: CategoryType | undefined;
  category: CategoryType;
};

const CarouselIcon = ({ category, filter, handleFilter, icon }: Props) => {
  return (
    <div
      onClick={() => handleFilter(category)}
      className={`cursor-pointer box-border flex mr-4 mt-2 justify-between items-center w-auto rounded-full h-14 ${
        filter?.categoryName === category.categoryName ? "bg-red-500" : "bg-[#613D37]"
      }`}
    >
      <div className="cursor-pointer flex justify-center items-center ml-2 bg-white rounded-full w-10 h-10">
        {icon}
      </div>
      <h1 className="text-center text-sm text-white font-extrabold mx-3">
        {category.categoryName}
      </h1>
    </div>
  );
};

export default CarouselIcon;
