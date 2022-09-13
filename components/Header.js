import React from "react";
import Image from "next/image";
import logo from "../static/logo.png";

const style = {

    wrapper: "flex justify-center gap-10 p-5 bg-[#FCC017]",
    content: "max-w-7xl flex-1 flex justify-between",
    logoContainer: "flex items-center flex-start",
    logo: "cursor-pointer object-contain",
    bannerNav:"flex cursor-pointer space-x-5  items-center",
    accentedButton: "bg-black text-white py-2 px-3 rounded-full"

};

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.logoContainer}>
          <Image className={style.logo} src={logo} height={40} width={200} />
        </div>
        <div className={style.bannerNav}>

            <div>Our Story</div>
            <div>Membership</div>
            <div>Sign in</div>
            <div className={style.accentedButton}>Get Started</div>

        </div>
      </div>
    </div>
  );
};

export default Header;
