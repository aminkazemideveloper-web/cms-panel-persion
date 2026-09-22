import Button from "../Button/Button";
import "./ArticleItem.css";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import type { ArticleType } from "../../types/article-type";
import { useRemoveArticle } from "../../services/hooks/articles/useRemoveArticle";
import { useRef } from "react";
import RemoveModal from "../../modals/RemoveModal/RemoveModal";
import { toast } from "react-toastify";
import { BiSolidEdit, BiTrash } from "react-icons/bi";

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
    <div className="articleItem__wrapper">
      <div className="articleItem__right">
        <img
          className="articleItem__right--img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSix75tPSUhzi38lV9hHrmIk2YzgUHxI1tRrw&s"
          alt=""
        />
      </div>
      <div className="articleItem__left">
        <div className="articleItem__left--top">
          <span className="articleItem__left--top-title">{title}</span>
          <span className="articleItem__left--top-desc">{desc}</span>
        </div>
        <div className="articleItem__left--bottom">
          <div className="articleItem__left--bottom--right">
            <div className="articleItem__left--bottom--right-group">
              <span className="articleItem__left--bottom--right-group--icon">
                <HiOutlineRectangleGroup />
              </span>
              <span>دسته بندی:</span>
              <span>{category}</span>
            </div>
            <div className="articleItem__left--bottom--right-count">
              <span className="articleItem__left--bottom--right-count--icon">
                <MdManageAccounts />
              </span>
              <span>تعداد بازدید:</span>
              <span>{views}</span>
            </div>
          </div>
          <div className="articleItem__left--bottom--left">
            <Button
              color="red"
              variant="solid"
              size="sm"
              type="button"
              onclick={handleShowRemoveModal}
            >
              <BiTrash />
              حذف
            </Button>
            <Button color="blue" size="sm" variant="solid">
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
