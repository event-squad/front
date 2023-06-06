"use client";

import { useRouter } from "next/navigation";
import Footer from "../../components/footer";

const CarouselPage = () => {
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

  return (
    <div className="px-6">
      <Footer active={"home"} handleClick={handleClick} />
    </div>
  );
};

export default CarouselPage;
