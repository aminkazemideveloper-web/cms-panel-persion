import styles from "./ArticleItem.module.css";

import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import type { ArticleType } from "../../types/article-type";
import { useRemoveArticle } from "../../services/hooks/articles/useRemoveArticle";
import { useRef } from "react";
import RemoveModal from "../../modals/RemoveModal/RemoveModal";
import { toast } from "react-toastify";
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import TiTleSectionItem from "../TiTleSectionItem/TiTleSectionItem";
import SubGroup from "../SubGroup/SubGroup";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";

type Props = {
  article: ArticleType;
};

function ArticleItem({ article }: Props) {
  const { category, title, desc, views, _id } = article;

  const removeModalRef = useRef<HTMLDialogElement | null>(null);
  const removeMutation = useRemoveArticle();

  const handleShowRemoveModal = () => {
    removeModalRef.current?.showModal();
  };

  const handleRemoveArticle = () => {
    removeMutation.mutate(_id, {
      onSuccess: () => {
        toast.success("با موفقیت حذف دش");
        removeModalRef.current?.close();
      },
      onError: (error) => {
        toast.error("مشکلی پیش آمده");
        console.log(error);
      },
    });
  };
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
              icon={<HiOutlineRectangleGroup />}
              lable="دسته بندی"
              value={category}
            />
            <Divider />

            <SubGroup
              icon={<MdManageAccounts />}
              lable="تعداد بازدید"
              value={views}
            />
          </div>
          <div className={styles.actions}>
            <Button
              color="danger"
              varient="solid"
              type="button"
              onClick={handleShowRemoveModal}
            >
              <BiTrash />
              حذف
            </Button>
            <Button color="primary" varient="solid">
              <BiSolidEdit />
              ویرایش
            </Button>
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
