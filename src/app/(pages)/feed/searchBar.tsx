import { Input } from "@/app/components/ui/input";
import IconSide_menu from "@/app/components/ui/menu";
import IconSearch from "@/app/components/ui/search";

const SearchBar = () => {
  return (
    <div className="my-3 relative mx-auto w-full flex items-center h-14 justify-center">
      <IconSearch className="absolute left-0 z-10 w-12 text-white text-2xl" />
      <Input
        className="w-3/4 text-white mx-auto my-6 main-bg border-none w-full
        rounded-full placeholder:text-white text-md font-bold pl-11 pr-11"
        placeholder="Pesquisar eventos..."
      ></Input>
      <IconSide_menu className="absolute right-1 z-10 w-12 text-white text-4xl" />
    </div>
  );
};

export default SearchBar;