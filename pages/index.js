import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { MediumContext } from "../context/mediumContext";
import { useContext } from "react";

const style = {
  postLists:
    "flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3",
  container: "max-w-7xl flex-1",
  main: "flex justify-center ",
  wrapper:"mx-auto"
};
export default function Home() {
  const {posts} = useContext(MediumContext)

  console.log(posts, "🔥 ")
  return (
    <div className={style.wrapper}>
      <Header />
      <Banner />
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.postLists}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
