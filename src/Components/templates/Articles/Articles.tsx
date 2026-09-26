import clsx from "clsx";

import { BiPlus } from "react-icons/bi";

import type { ArticleType } from "../../../types/article-type";

import ArticleItem from "../../ui/ArticleItem/ArticleItem";
import Button from "../../shared/Button/Button";
import CreateArticleModal from "../../../modals/CreateArticleModal/CreateArticleModal";
import { useArticles } from "./useArticles";

import styles from "./Articles.module.css";
import EmptyCard from "../../ui/EmptyCard/EmptyCard";

type Props = {
  articles: ArticleType[];
};

function Articles({ articles }: Props) {
  const { createArticleModalRef, handleShowCreateCourseModal } = useArticles();

  return (
    <div className={styles.articleContainer}>
      {articles.length === 0 && <EmptyCard title="مقاله ای اضافه نشده" />}
      <div className={styles.articles__items}>
        {articles?.map((article) => (
          <ArticleItem key={article._id} article={article} />
        ))}
      </div>
      <div className={styles["articles__btn"]}>
        <Button
          color="primary"
          varient="solid"
          onClick={handleShowCreateCourseModal}
          className={clsx(styles.btn, styles.primary)}
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
