import Button from "../Button/Button";
import "./CourseItem.css";
import { FaSackDollar } from "react-icons/fa6";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import Badge from "../Badge/Badge";
import type { CourseType } from "../../types/course-type";
import RemoveModal from "../../modals/RemoveModal/RemoveModal";
import { useRef } from "react";
import { useRemoveCourse } from "../../servises/hooks/courses/useRemoveCourse";
import { toast } from "react-toastify";

type Props = {
  course: CourseType;
};

function CourseItem({ course }: Props) {
  const { title, desc, category, price, discount, registersCount, _id } =
    course;
  const removeCourseMutation = useRemoveCourse();
  const showRemoveModalRef = useRef<HTMLDialogElement | null>(null);

  const handleRemoveModalShowButtonClick = () => {
    showRemoveModalRef.current?.showModal();
  };

  const handleRemoveCourse = () => {
    removeCourseMutation.mutate(_id, {
      onSuccess: (data) => {
        console.log("data success", data);

        toast.success("با موفقیت حذف شد");
        showRemoveModalRef.current?.close();
      },
      onError: (error) => {
        console.log("remove error", error);
        toast.error("مشکلی پیش آمده");
        showRemoveModalRef.current?.close();
      },
    });
  };

  return (
    <div className="coureItem__wrapper">
      <div className="courseItem__right">
        <img
          className="courseItem__right--img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0hkVaniI4uOTgJUJOt43oprgmQgM3UOhPA&s"
          alt=""
        />
      </div>
      <div className="courseItem__left">
        <div className="courseItem__left--top">
          <span className="courseItem__left--top-title">{title}</span>
          <span className="courseItem__left--top-desc">{desc}</span>
        </div>
        <div className="courseItem__left--bottom">
          <div className="courseItem__left--bottom--right">
            <div className="courseItem__left--bottom--right-price">
              <span className="courseItem__left--bottom--right-price-icon">
                <FaSackDollar />
              </span>
              <span className="courseItem__left--bottom--right-price-tag">
                قیمت:
              </span>
              {price !== 0 ? (
                <span>{price.toLocaleString()}</span>
              ) : (
                <span>رایگان</span>
              )}
            </div>
            <div className="courseItem__left--bottom--right-group">
              <span className="courseItem__left--bottom--right-group-icon">
                <HiOutlineRectangleGroup />
              </span>
              <span className="courseItem__left--bottom--right-group-tag">
                دسته بندی:
              </span>
              <span>{category}</span>
            </div>
            <div className="courseItem__left--bottom--right-count">
              <span className="courseItem__left--bottom--right-count-icon">
                <MdManageAccounts />
              </span>
              <span className="courseItem__left--bottom--right-count-tag">
                تعداد فروش:
              </span>
              <span>{registersCount}</span>
            </div>
          </div>
          <div className="courseItem__left--bottom--left">
            <Button
              color="red"
              variant="solid"
              size="sm"
              onclick={handleRemoveModalShowButtonClick}
            >
              حذف
            </Button>
            <Button color="blue" size="sm" variant="solid">
              ویرایش
            </Button>
          </div>
        </div>
      </div>
      <div className="coureItem__badge">
        <Badge color="green" variant="Square" size="sm">
          {discount}%
        </Badge>
      </div>

      <RemoveModal
        heading={`حذف دوره ی ${title}`}
        ref={showRemoveModalRef}
        onRemove={handleRemoveCourse}
        title={title}
      />
    </div>
  );
}

export default CourseItem;
