import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recomendation from "../../components/Recomendation";

const style = {
  content: "flex ",
};

const Post = () => {
  return (
    <div className={style.content}>
      <ReadersNav />
      <ArticleMain/>
      <Recomendation />
    </div>
  );
};

export default Post;
