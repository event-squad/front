type Props = {
  active: boolean;
  handleSideBar: () => void;
  handleLogOut: () => void;
};

import mapSvg from "@/../public/images/map-marker-svgrepo-com.svg";
import profile from "@/../public/images/profile-picture.webp";
import IconMenuLeft from "@/app/components/icons/bars";
import IconBackburger from "@/app/components/icons/sideMenuBack";
import IconSignOut16 from "@/app/components/icons/signOut";
import Img from "next/image";

const Header = ({ active, handleSideBar, handleLogOut }: Props) => {
  return (
    <>
      <div className={`absolute px-2 ${active ? "left-0" : "-left-80"} transition-all top-0 z-30 w-48 h-screen sidebar-bg`}>
        <div onClick={handleSideBar} className="p-2 cursor-pointer flex justify-end text-white text-3xl bg-[#270903]rounded-full">
          <IconBackburger />
        </div>
        <div onClick={handleLogOut} className="w-11/12 m-2 py-2 cursor-pointer flex justify-around items-center text-white font-extrabold rounded-sm border-solid border-white border-2 absolute bottom-0 left-0 hover:bg-[#613D37]">
          <h1>Fazer logout</h1>
          <IconSignOut16 className="text-2xl" />
        </div>
      </div>
      {active && <div onClick={handleSideBar} className="left-0 h-screen w-screen absolute z-20 top-0"></div>}
      <div className="flex items-center justify-between mt-4">
        <div onClick={handleSideBar} className="flex cursor-pointer justify-center items-center text-white text-2xl w-12 h-12 main-bg rounded-full">
          <IconMenuLeft />
        </div>
        <div className="flex">
          <Img className="w-4 mr-1" src={mapSvg} alt="map_svg" />
          <h1 className="text-white text-1xl font-extrabold">São Paulo, SP</h1>
        </div>
        <div className="flex justify-center items-center main-bg rounded-full w-12">
          <Img
            className="w-11 rounded-full"
            src={profile}
            alt="Profile_Picture"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
