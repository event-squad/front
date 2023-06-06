'use client';

import SideBar from "./sideBar";
import MainHeader from "./mainHeader";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [active, setActive] = useState(false);
  const redirect = useRouter();

  const handleSideBar = () => {
    return setActive(!active);
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    return redirect.push("/auth/signin")
  }

  return (
    <>
      {<SideBar active={active} handleLogOut={handleLogOut} handleSideBar={handleSideBar}/>}
      {active && <div onClick={handleSideBar} className="left-0 h-screen w-screen absolute z-20 top-0"></div>}
      {<MainHeader handleSideBar={handleSideBar} />}
    </>
  );
};

export default Header;
