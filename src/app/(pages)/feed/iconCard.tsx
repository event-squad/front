import Image from "next/image";
import showImage from "@/../public/images/showImage.png";

const IconCard = () => {
  return (
    <div className="relative w-80 h-64 bg-red-500 border-radius-feed overflow-hidden">
      <div className="absolute flex justify-center items-center m-5 w-14 rounded-md h-8 opacity-feed">
        <h1 className="text-xs text-white font-extrabold">25 Mai</h1>
      </div>
      <Image
        className="z-0 object-cover w-full h-full"
        src={showImage}
        alt="show_image"
      />
      <div className="flex absolute gap-6 w-full h-20 bottom-0 pt-1 pl-5 bg-[#817793] opacity-feed ">
        <div className="text-white w-3/5 font-bold">
          <h1>Oliver Tree Convert</h1>
          <p className="text-xs">Alameda Qaulity Center - 22h Bauru - SP</p>
        </div>
        <div className="flex justify-center items-center my-auto w-16 h-8 rounded-xl font-extrabold text-xs text-black bg-white">
          <h1>R$ 120,00</h1>
        </div>
      </div>
    </div>
  );
};

export default IconCard;