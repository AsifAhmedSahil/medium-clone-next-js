import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "./../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

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
  
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
    thumbnailContainer: "flex-1",
};

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };
    getAuthorData();
  }, []);

  return (
    <Link href={`/post/${post.id}`}>
      <div className={style.wrapper}>
        <div className={style.postDetails}>
          <div className={style.authorContainer}>
            <div className={style.authorImageContainer}>
              <Image
                src={authorData.imgUrl}
                className={style.authorImage}
                width={40}
                height={40}
              />
            </div>
            <div className={style.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={style.title}>{post.data.title}</h1>
          <div className={style.briefing}>{post.data.breif}</div>
          <div className={style.detailsContainer}>
            <span className={style.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
              })}
              · {post.data.postlength} min read ·
              <span className={style.category}>{post.data.category}</span>
            </span>
            <span className={style.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={style.thumbnailContainer}>
          <Image
            height={100}
            width={100}
            src={post.data.bannerimage}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
