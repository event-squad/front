type Props = {
 active: string | undefined;
 handleClick: (e: any) => void;
}

import IconHeart from "@/app/components/icons/heart";
import IconHome16 from "@/app/components/icons/home";
import IconMapMarkerRadiusOutline from "@/app/components/icons/map";
import IconUser from "@/app/components/icons/user";

const Footer = ({ active, handleClick }: Props) => {
 return(
  <div
   className="flex justify-around items-center w-screen h-24 fixed left-0 bottom-0 bg-black bg-opacity-30"
  >
   <div onClick={handleClick} id='home' className={`cursor-pointer flex justify-center items-center w-14 h-14 rounded-full ${active === "home" && "bg-white"}`}>
    <IconHome16 id='home' className={`text-3xl ${active === "home" ? "text-red-500" : "text-white"}`} />
   </div>
   <div onClick={handleClick} id='map' className={`cursor-pointer flex justify-center items-center w-14 h-14 rounded-full ${active === "map" && "bg-white"}`}>
    <IconMapMarkerRadiusOutline id='map' className={`text-3xl ${active === "map" ? "text-red-500" : "text-white"}`} />
   </div>
   <div onClick={handleClick} id='heart' className={`cursor-pointer flex justify-center items-center w-14 h-14 rounded-full ${active === "heart" && "bg-white"}`}>
    <IconHeart id='heart' className={`text-3xl ${active === "heart" ? "text-red-500" : "text-white"}`} />
   </div>
   <div onClick={handleClick} id='user' className={`cursor-pointer flex justify-center items-center w-14 h-14 rounded-full ${active === "user" && "bg-white"}`}>
    <IconUser id='user' className={`text-3xl ${active === "user" ? "text-red-500" : "text-white"}`} />
   </div>
  </div>
 )
}

export default Footer;