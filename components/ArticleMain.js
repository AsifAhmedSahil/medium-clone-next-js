import Image from "next/image";
import { AiFillPlaySquare } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkdin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import sahil from "../static/sahil.jpg";
import banner1 from "../static/banner1.png";
// import banner from "../static/banner.png";


const style = {
  wrapper: " flex items-center justify-center border-l border-r flex-[3] ",
  content: "w-full h-screen  p-[2rem] ",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem] ",
  authorContainer: "flex gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem]  rounded-full grid-center overflow-hidden",
  column: "flex flex-col flex-1 justify-center",
  postDetailsContainer: "flex gap-[.2rem] text-[#787878] ",
  listenButton: "flex items-center text-green-600",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "gap-[.5rem]",
  bannerContainer: "h-[18rem] w-full grid center overflow-hidden mb-[2rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  title:"font-bold text-3xl",
  subtitle:"font-semibold text-[1.4rem] text-[#292929]",
  articleText:"font-medium text-[1.1rem] text-[#292929]",
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
                <span>june 15 · 5 min read </span>
                <span className={style.listenButton}>
                  <AiFillPlaySquare /> Listen
                </span>
              </div>
            </div>
          </div>

          <div className={style.socials}>
            <IoLogoTwitter />
            <FaFacebook />

            <HiOutlineLink />
            <div className={style.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>

        <div className={style.articleMainContainer}>
          <div className={style.bannerContainer}>
            <Image
              src={banner1}
              className={style.image}
              width={1000}
              height={100}
            />
          </div>

          <h1 className={style.title}>
            7 free tools that will make you more productive in 2022
          </h1>
          <h4 className={style.subtitle}>
            <div>Asif Ahmed , june 15, 2022</div>
            <div>Productivity is a skill that can be learn</div>


          </h4>
          <div className={style.articleText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed sapiente porro eius, expedita labore cum quos inventore accusantium, vitae tenetur iure excepturi officiis odit atque vero, beatae quisquam veniam veritatis saepe voluptatem rem placeat vel! Repellat suscipit eligendi, dolorem totam quibusdam commodi eum officiis repellendus voluptatibus minus aspernatur et.

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;


