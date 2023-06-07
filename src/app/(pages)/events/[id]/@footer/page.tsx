"use client";

import Footer from "./footer";
import { EventContext } from "../context/eventContext";
import { useContext } from "react";

const Page = async () => {
  const { active, handleActive } = useContext(EventContext);

  return <Footer active={active} handleActive={handleActive} />;
};

export default Page;
