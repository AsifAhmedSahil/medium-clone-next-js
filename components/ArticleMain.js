import Image from "next/image";
import { AiFillPlaySquare } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkdin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import sahil from "../static/sahil.jpg";


const style = {
  wrapper: " flex items-center justify-center border-l border-r flex-[3] ",
  content: "h-screen  p-[2rem] ",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem] ",
  authorContainer: "flex gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem]  rounded-full grid-center overflow-hidden",
  column: "flex flex-col flex-1 justify-center",
  postDetailsContainer: "flex gap-[.2rem] text-[#787878] ",
  listenButton: "flex items-center text-green-600",
  socials:"flex gap-[1rem] text-[#787878] cursor-pointer",
  space:"gap-[.5rem]"
};

const ArticleMain = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.postHeaderContainer}>
          <div className={style.authorContainer}>
            <div className={style.authorProfileImageContainer}>
              <Image
                className="object-cover"
                src={sahil}
                height={100}
                width={100}
              />
            </div>
            <div className={style.column}>
              <div>Asif Ahmed sahil</div>
              <div className={style.postDetailsContainer}>
                <span>
                june 15 · 5 min read </span>
                <span className={style.listenButton}>
                  <AiFillPlaySquare /> Listen
                </span>
                
              </div>
            </div>
          </div>

          <div className={style.socials}>

            <IoLogoTwitter/>
            <FaFacebook/>
            
            <HiOutlineLink/>
            <div className={style.space}/>
            <BiBookmarks/>
            <FiMoreHorizontal/>
            


          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
