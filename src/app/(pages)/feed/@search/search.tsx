type Props = {
 handleSearch: (e: any) => void;
}

import IconSide_menu from "@/app/components/icons/menu";
import IconSearch from "@/app/components/icons/search";
import { Input } from "@/app/components/ui/input";

const SearchInput = ({ handleSearch }: Props) => {
  return (
    <div className="my-3 relative mx-auto w-full flex items-center h-16 justify-center">
      <IconSearch className="absolute left-0 z-10 w-12 text-white text-2xl" />
      <Input
        onChange={handleSearch}
        className="text-white h-14 mx-auto my-6 main-bg border-none w-full
       rounded-full placeholder:text-white text-md font-bold pl-11 pr-11"
        placeholder="Pesquisar eventos..."
      ></Input>
      <IconSide_menu className="absolute right-1 z-10 w-12 text-white text-4xl" />
    </div>
  );
};

export default SearchInput;
