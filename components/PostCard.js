import React from "react";
import Image from "next/image";
import Link from "next/link"

import logo from "./../static/logo.png";
import { FiBookmark } from "react-icons/fi";

const style = {
  authorContainer: "flex gap-2",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  postDetails: "flex-[2.5rem] flex flex-col",
  title: "font-bold text-2xl",
  authorImage: "object-cover",
  authorName: "font-semibold",
  briefing: "text-gray-500",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#F2F3F2] p-1 rounded-full",
  bookmarkContainer: "cursor-pointer",
  thumbnailContainer: "",
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
};

const PostCard = () => {
  return (
    <Link href={`/post/123`}>
    
    <div className={style.wrapper}>
      <div className={style.postDetails}>
        <div className={style.authorContainer}>
          <div className={style.authorImageContainer}>
            <Image
              src={logo}
              className={style.authorImage}
              width={40}
              height={40}
            />
          </div>
          <div className={style.authorName}>asif ahmed</div>
        </div>
        <h1 className={style.title}>
          7 Free Tools That Will Make You More Productive In 2022
        </h1>
        <div className={style.briefing}>
          Productivity is a skill that can be learned.
        </div>
        <div className={style.detailsContainer}>
          <span className={style.articleDetails}>
            June 15 · 5 min read ·{" "}
            <span className={style.category}>productivity</span>
          </span>
          <span className={style.bookmarkContainer}>
            <FiBookmark className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div className={style.thumbnailContainer}>
        <Image height={100} width={100} src={logo} />
      </div>
    </div>
    </Link>
  );
};

export default PostCard;
