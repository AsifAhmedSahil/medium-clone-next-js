import React from "react";
import SmallLogo from "../static/SmallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import sahil from  "../static/sahil.jpg"

const style = {
  logoContainer: "cursor-pointer",
  wrapper:"w-[5rem] h-screen flex  flex-col justify-between items-center p-[1rem]",
  iconContainer:"flex flex-col flex-1 justify-center gap-[1.4rem] text-2xl text-[#787878]",
  profileImageContainer:"w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center",
  profileImage:"object-cover"
};

const ReadersNav = () => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={SmallLogo} />
        </div>
      </Link>

      <div className={style.iconContainer}>
            <HiOutlineHome/>
            <FiBell/>
            <BiBookmarks/>
            <RiArticleLine/>
            <div className={style.divider}>
                <BsPencilSquare/>

            </div>
      </div>
      <div className={style.profileImageContainer}>
        <Image
            className={style.profileImage}
            src={sahil}
        />
      </div>
    </div>
  );
};

export default ReadersNav;
