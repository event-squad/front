type Props = {
 name: string | undefined,
 handlePath: (e: string) => void
};

import IconChevronBackOutline from "@/app/components/icons/arrowBack";
import IconShare from "@/app/components/icons/share";

const Header = ({ name, handlePath }: Props) => {
  return (
    <div className="z-10 absolute w-full flex justify-around items-center py-4">
      <div onClick={() => handlePath("/feed")} className="relative cursor-pointer flex justify-center items-center">
        <div className="rounded-full bg-white opacity-20 w-10 h-10"></div>
        <IconChevronBackOutline className="absolute text-2xl text-white" />
      </div>
      <h1 className="text-white text-lg font-extrabold">{name && name}</h1>
      <div>
        <div onClick={() => handlePath("/feed")} className="relative cursor-pointer flex justify-center items-center">
          <div className="rounded-full bg-white opacity-20 w-10 h-10"></div>
          <IconShare className="absolute text-1xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
