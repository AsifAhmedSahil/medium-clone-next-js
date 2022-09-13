import Image from "next/image";

import logo from "./../static/banner.png"
import React from "react";

const style = {
  accentedButton: "bg-black text-white py-2 px-3 rounded-full",
  content: "max-w-7xl flex-1 flex items-center justify-between ",
  wrapper:"h-max-[10rem] flex items-center justify-center border-y border-black bg-[#FCC017]"
};
const Banner = () => {
  return (
   <div className={style.wrapper}>
     <div className={style.content}>
      <div className="space-y-5 flex-[3] px-10">
        <h1 className="max-w-xl text-[6rem] font-medium">Stay Curious.</h1>
        <h3 className="text-2xl">
          Discover Stories, Thinking, and expertise from writters on any topic
        </h3>

        <button className={style.accentedButton}>Start Reading</button>
        
      </div>

      <Image
      className="object-contain h-32 md:inline-flex flex-1 hidden"
        src={logo.src}
        height={400}
        width={500}
      />

     
    </div>
   </div>
    
  );
};

export default Banner;
