import { BiPlus } from "react-icons/bi";
import type { ArticleType } from "../../types/article-type";
import ArticleItem from "../ArticleItem/ArticleItem";
import Button from "../Button/Button";
import { useRef } from "react";
import styles from "./Articles.module.css";
import CreateArticleModal from "../../modals/createArticleModal/CreateArticleModal";
type Props = {
  articles: ArticleType[];
};

function Articles({ articles }: Props) {
  const createArticleModalRef = useRef<HTMLDialogElement | null>(null);

  const handleShowCreateCourseModal = () => {
    createArticleModalRef.current?.showModal();
  };
  return (
    <div className={styles.articleContainer}>
      {articles.length === 0 && (
        <div className={styles["articleContainer-warning"]}>
          مقاله ای اضافه نشده
        </div>
      )}
      <div className={styles.articles__items}>
        {articles?.map((article: ArticleType) => (
          <ArticleItem key={article._id} article={article} />
        ))}
      </div>
      <div className={styles["articles__btn"]}>
        <Button
          color="blue"
          variant="solid"
          size="lg"
          onclick={handleShowCreateCourseModal}
        >
          <BiPlus />
          افزودن مقاله ی جدید
        </Button>
      </div>
      <CreateArticleModal ref={createArticleModalRef} />
    </div>
  );
}

export default Articles;
