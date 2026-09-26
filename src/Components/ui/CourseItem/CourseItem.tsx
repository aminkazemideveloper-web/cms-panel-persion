import "./CourseItem.css";

import Badge from "../../shared/Badge/Badge";
import type { CourseType } from "../../../types/course-type";
import RemoveModal from "../../../modals/RemoveModal/RemoveModal";
import TiTleSectionItem from "../../shared/TiTleSectionItem/TiTleSectionItem";
import SubGroup from "../SubGroup/SubGroup";
import Divider from "../../shared/Divider/Divider";
import { useCourseItem } from "./useCourseItem";
import MingcuteNewdotLine from "../../../icons/MingcuteNewdotLine";
import MingcuteCalendarTimeAddLine from "../../../icons/MingcuteCalendarTimeAddLine";
import MingcuteCurrencyDollar2Line from "../../../icons/MingcuteCurrencyDollar2Line";
import IconButton from "../../shared/IconButton/IconButton";
import MingcuteDelete2Line from "../../../icons/MingcuteDelete2Line";

import MingcutePencil3AiLine from "../../../icons/MingcutePencil3AiLine";

type Props = {
  course: CourseType;
};

function CourseItem({ course }: Props) {
  const { title, desc, category, price, discount, registersCount, _id } =
    course;
  const {
    handleRemoveCourse,
    handleRemoveModalShowButtonClick,
    showRemoveModalRef,
  } = useCourseItem({ id: _id });

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
            <SubGroup
              icon={<MingcuteCurrencyDollar2Line />}
              lable="قیمت"
              value={price}
            />
            <Divider height="1rem" />
            <SubGroup
              icon={<MingcuteCalendarTimeAddLine />}
              lable="دسته بندی"
              value={category}
            />
            <Divider height="1rem" />
            <SubGroup
              icon={<MingcuteNewdotLine />}
              lable="تعدادفروش"
              value={registersCount}
            />
          </div>
          <div className="courseItem__left--bottom--left">
            <IconButton
              color="danger"
              onClick={handleRemoveModalShowButtonClick}
            >
              <MingcuteDelete2Line className="remove" />
            </IconButton>
            <IconButton>
              <MingcutePencil3AiLine className="edit" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="coureItem__badge">
        <Badge color="green" variant="Square" size="sm">
          {discount}%
        </Badge>
      </div>

      <RemoveModal
        heading="حذف دوره"
        ref={showRemoveModalRef}
        onRemove={handleRemoveCourse}
        title={title}
      />
    </div>
  );
}

export default CourseItem;
