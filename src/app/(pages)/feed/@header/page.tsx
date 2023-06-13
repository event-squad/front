'use client';

import SideBar from "./sideBar";
import MainHeader from "./mainHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Address from "@/app/api/address/address";
import { Address as AddressType } from "@/app/types/cep";

const Header = () => {
  const [active, setActive] = useState(false);
  const [address, setAddress] = useState<AddressType>()
  const redirect = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return redirect.push('/auth/signin');
    const response = Address.getAddress(token);

    response.then((res) => {
      setAddress(res);
    }).catch((err) => redirect.push('/auth/signin'))
  }, [])

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
      {<MainHeader handleSideBar={handleSideBar} addressDetails={address} />}
    </>
  );
};

export default Header;
