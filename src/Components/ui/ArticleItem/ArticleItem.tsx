import styles from "./ArticleItem.module.css";

import type { ArticleType } from "../../../types/article-type";

import RemoveModal from "../../../modals/RemoveModal/RemoveModal";

import TiTleSectionItem from "../../shared/TiTleSectionItem/TiTleSectionItem";
import SubGroup from "../SubGroup/SubGroup";
import Divider from "../../shared/Divider/Divider";

import { useArticleItem } from "./useArticleItem";
import MingcuteNewdotLine from "../../../icons/MingcuteNewdotLine";
import MingcuteCalendarTimeAddLine from "../../../icons/MingcuteCalendarTimeAddLine";
import IconButton from "../../shared/IconButton/IconButton";
import MingcuteDelete2Line from "../../../icons/MingcuteDelete2Line";
import MingcutePencil3AiLine from "../../../icons/MingcutePencil3AiLine";

type Props = {
  article: ArticleType;
};

function ArticleItem({ article }: Props) {
  const { category, title, desc, views, _id } = article;
  const { removeModalRef, handleRemoveArticle, handleShowRemoveModal } =
    useArticleItem({
      id: _id,
    });
  return (
    <div className={styles["articleItem__wrapper"]}>
      <div className={styles["image-box"]}>
        <img
          className={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix75tPSUhzi38lV9hHrmIk2YzgUHxI1tRrw&s"
          alt=""
        />
      </div>
      <div className={styles.writing}>
        <TiTleSectionItem title={title} sub={desc} />
        <div className={styles.detailes}>
          <div className={styles.content}>
            <SubGroup
              icon={<MingcuteCalendarTimeAddLine />}
              lable="دسته بندی"
              value={category}
            />
            <Divider />

            <SubGroup
              icon={<MingcuteNewdotLine />}
              lable="تعداد بازدید"
              value={views}
            />
          </div>
          <div className={styles.actions}>
            <IconButton
              type="button"
              onClick={handleShowRemoveModal}
              className={styles.remove}
            >
              <MingcuteDelete2Line />
            </IconButton>
            <IconButton className={styles.edit}>
              <MingcutePencil3AiLine />
            </IconButton>
          </div>
        </div>
      </div>
      <RemoveModal
        ref={removeModalRef}
        heading="حذف مقاله"
        title={title}
        onRemove={handleRemoveArticle}
      />
    </div>
  );
}

export default ArticleItem;
