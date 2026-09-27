import clsx from "clsx";

import type { ArticleType } from "../../../types/article-type";

import ArticleItem from "../../ui/ArticleItem/ArticleItem";
import Button from "../../shared/Button/Button";

import { useArticles } from "./useArticles";

import styles from "./Articles.module.css";
import EmptyCard from "../../ui/EmptyCard/EmptyCard";
import MingcuteAddFill from "../../../icons/MingcuteAddFill";

import useScrollAnimation from "../../../hooks/useScrollAnimation";
import CreateArticleModal from "../../../modals/createArticleModal/CreateArticleModal";

type Props = {
  articles: ArticleType[];
};

function Articles({ articles }: Props) {
  const { createArticleModalRef, handleShowCreateCourseModal } = useArticles();

  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className={styles.articleContainer}>
      {articles.length === 0 && <EmptyCard title="مقاله ای اضافه نشده" />}
      <div className={clsx(styles.articles__items, "animate", "fade-up")}>
        {articles?.map((article) => (
          <ArticleItem key={article._id} article={article} />
        ))}
      </div>
      <div className={clsx(styles["articles__btn"], "animate", "slide-right")}>
        <Button
          color="primary"
          varient="solid"
          onClick={handleShowCreateCourseModal}
          className={clsx(styles.btn, styles.primary)}
        >
          <MingcuteAddFill />
          افزودن مقاله ی جدید
        </Button>
      </div>
      <CreateArticleModal ref={createArticleModalRef} />
    </div>
  );
}

export default Articles;
