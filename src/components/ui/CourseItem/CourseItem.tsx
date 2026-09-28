import styles from "./CourseItem.module.css";

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
import Card from "../../shared/Card/Card";

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
    <Card className={styles.wrapper}>
      <div className={styles["img-box"]}>
        <img
          className={styles.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0hkVaniI4uOTgJUJOt43oprgmQgM3UOhPA&s"
          alt=""
        />
      </div>
      <div className={styles.content}>
        <TiTleSectionItem title={title} sub={desc} />

        <div className={styles.sub}>
          <div className={styles["sub-detailes"]}>
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
          <div className={styles["sub-actions"]}>
            <IconButton
              className={styles.remove}
              onClick={handleRemoveModalShowButtonClick}
            >
              <MingcuteDelete2Line />
            </IconButton>
            <IconButton className={styles.edit}>
              <MingcutePencil3AiLine />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={styles.badge}>
        {discount != 0 && (
          <Badge color="green" variant="Square" size="md">
            {discount}%
          </Badge>
        )}
      </div>

      <RemoveModal
        heading="حذف دوره"
        ref={showRemoveModalRef}
        onRemove={handleRemoveCourse}
        title={title}
      />
    </Card>
  );
}

export default CourseItem;
