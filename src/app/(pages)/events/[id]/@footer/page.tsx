'use client';

import IconHeart from "@/app/components/icons/heart";
import IconHeartFilled from "@/app/components/icons/heartFilled";
import { useState } from "react";

const Footer = async ({ params }: any) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-around items-center absolute bottom-0 bg-gradient-to-b from-transparent via-rgba(30, 12, 7, 0.8) to-black w-full h-32">
      <button onClick={handleActive} className="flex justify-center items-center pt-1 rounded-full w-20 h-20 bg-[#FFFFFF33] text-red">
        {active ? <IconHeartFilled className="text-5xl text-white" /> : <IconHeart className="text-5xl text-white" />}
      </button>
      <button className="rounded-full bg-red-500 text-1xl py-6 px-10 font-extrabold text-white">
        Comprar Ingresso
      </button>
    </div>
  );
};

export default Footer;
