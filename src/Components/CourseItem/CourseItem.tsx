import Button from "../Button/Button";
import "./CourseItem.css";
import { FaSackDollar } from "react-icons/fa6";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import Badge from "../Badge/Badge";
import type { CourseType } from "../../types/course-type";
import RemoveModal from "../../modals/RemoveModal/RemoveModal";
import { useRef } from "react";
import { useRemoveCourse } from "../../services/hooks/courses/useRemoveCourse";
import { toast } from "react-toastify";
import TiTleSectionItem from "../TiTleSectionItem/TiTleSectionItem";
import SubGroup from "../SubGroup/SubGroup";
import Divider from "../Divider/Divider";

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
      onSuccess: () => {
        toast.success("با موفقیت حذف شد");
        showRemoveModalRef.current?.close();
      },
      onError: () => {
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
        <TiTleSectionItem title={title} sub={desc} />

        <div className="courseItem__left--bottom">
          <div className="courseItem__left--bottom--right">
            <SubGroup icon={<FaSackDollar />} lable="قیمت" value={price} />
            <Divider height="1rem" />
            <SubGroup
              icon={<HiOutlineRectangleGroup />}
              lable="دسته بندی"
              value={category}
            />
            <Divider height="1rem" />
            <SubGroup
              icon={<MdManageAccounts />}
              lable="تعدادفروش"
              value={registersCount}
            />
          </div>
          <div className="courseItem__left--bottom--left">
            <Button
              color="danger"
              varient="solid"
              onClick={handleRemoveModalShowButtonClick}
            >
              حذف
            </Button>
            <Button color="primary" varient="solid">
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
