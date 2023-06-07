type Props = {
  active: boolean;
  handleLogOut: () => void;
  handleSideBar: () => void;
};

import IconBackburger from "@/app/components/icons/sideMenuBack";
import IconSignOut16 from "@/app/components/icons/signOut";

const SideBar = ({ active, handleSideBar, handleLogOut }: Props) => {
  return (
    <div
      className={`absolute px-2 ${
        active ? "left-0" : "-left-80"
      } transition-all top-0 z-30 w-48 h-screen sidebar-bg`}
    >
      <div
        onClick={handleSideBar}
        className="p-2 cursor-pointer flex justify-end text-white text-3xl bg-[#270903]rounded-full"
      >
        <IconBackburger />
      </div>
      <div
        onClick={handleLogOut}
        className="w-11/12 m-2 py-2 cursor-pointer
        flex justify-around items-center text-white font-extrabold
        rounded-sm border-solid border-white border-2
        absolute bottom-0 left-0 hover:bg-[#613D37]"
      >
        <h1>Fazer logout</h1>
        <IconSignOut16 className="text-2xl" />
      </div>
    </div>
  );
};

export default SideBar;
