"use client";

import { useRouter } from "next/navigation";
import Footer from "@/app/components/footer";

const Page = () => {
  const redirect = useRouter();

  const handleClick = (e: any) => {
    const path = e.target.id;
    switch (path) {
      case "home":
        return redirect.push("/feed");
      case "map":
        return redirect.push("/map");
      case "heart":
        return redirect.push("/feed");
      case "user":
        return redirect.push("/feed");
    }
  };

  return <Footer active={"home"} handleClick={handleClick} />;
};

export default Page;
