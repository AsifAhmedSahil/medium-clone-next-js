import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
// import ReplitLogo from "../static/replit.png"
// import TutorialImg from "../static/tutorial.png"
// import CPLogo from "../static/cp.png"
import sahil from "../static/sahil.jpg";
import JSLogo from "../static/jsLogo.png";

const style = {
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]",
  accentedButton:
    "flex items-cnter bg-black text-white justify-center py-[.6rem] rounded-full text-sm my-[2rem]",
  searchBar:
    "flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full",
  searchInput: "bg-transparent border-none outline-none w-full",
  authorProfileImageContainer: "h-[5rem] w-[5rem] rounded-full overflow-hidden",
  authorContainer: "my-[2rem] ",
  authorName: "font-semibold  mt-[1rem] mb-[.2rem]",
  authorFollowers: "text-[#787878]",
  authorActions: "flex gap-[0.6rem] my-[1rem]",
  actionButton: "bg-green-700 text-white rounded-full px-[.6rem] py-[.4rem]",
  title: "font-semibold",
  recomendationAuthorProfileImageContainer:
    "rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] ",
  recomendationAuthorContainer: "flex items-center gap-[.6rem] font-semibold",
  recomendationThumbnailContainer:
    "flex flex-1 items-center justify-center h-[4rem] w-[4rem]",
  recomendationThumbnail: "object-cover",
  articleContentWrapper:
    "flex items-center justify-between cursor-pointer my-[1rem]",
  articleContent: "flex-[4]",
};
const Recomendation = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.accentedButton}>Get Unlimited Button</div>
        <div className={style.searchBar}>
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            className={style.searchInput}
          />
        </div>
        <div className={style.authorContainer}>
          <div className={style.authorProfileImageContainer}>
            <Image src={sahil} height={100} width={100} />
          </div>
          <div className={style.authorName}>Asif Ahmed Sahil</div>
          <div className={style.authorFollowers}>308k followers</div>
          <div className={style.authorActions}>
            <button className={style.actionButton}>Follow</button>
            <button className={style.actionButton}>
              <MdMarkEmailUnread />
            </button>
          </div>
        </div>

        <div className={style.recomendationContainer}>
          <div className={style.title}>More From Medium</div>
          <div className={style.articleContainer}>
            <div className={style.articleContentWrapper}>
              <div className={style.articleContent}>
                <div className={style.recomendationAuthorContainer}>
                  <div
                    className={style.recomendationAuthorProfileImageContainer}
                  >
                    <Image src={sahil} height={100} width={100} />
                  </div>
                  <div className="text-sm">Asif Ahmed Sahil</div>
                </div>
                <div className="font-bold">
                  Ultimate Blockchain Course For Beginner
                </div>
              </div>
              <div className={style.recomendationThumbnailContainer}>
                <Image
                  className={style.recomendationThumbnail}
                  src={JSLogo}
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Recomendation;
