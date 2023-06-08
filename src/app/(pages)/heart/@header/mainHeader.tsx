type Props = {
 handleSideBar: () => void;

}

import IconMenuLeft from "@/app/components/icons/bars";
import Img from "next/image";
import { profile } from "console";
import mapSvg from "@/../public/images/map-marker-svgrepo-com.svg";
import fotoPerfil from "@/../public/images/profile-picture.webp";

const MainHeader = ({ handleSideBar }: Props) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div
        onClick={handleSideBar}
        className="flex cursor-pointer justify-center items-center text-white text-2xl w-12 h-12 main-bg rounded-full"
      >
        <IconMenuLeft />
      </div>
      <div className="flex">
        <Img className="w-4 mr-1" src={mapSvg} alt="map_svg" />
        <h1 className="text-white text-1xl font-extrabold">São Paulo, SP</h1>
      </div>
      <div className="flex justify-center items-center main-bg rounded-full w-12">
        <Img
          className="w-11 rounded-full"
          src={fotoPerfil}
          alt="Profile_Picture"
        />
      </div>
    </div>
  );
};

export default MainHeader;