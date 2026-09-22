import { BiCategory, BiPlusMedical, BiSolidOffer } from "react-icons/bi";
import type { CourseType } from "../../types/course-type";
import Button from "../Button/Button";
import CourseItem from "../CourseItem/CourseItem";
import CreateCourseModal from "../../modals/CreateCourseModal/CreateCourseModal";
import { useRef } from "react";
import "./Courses.css";

type Props = {
  courses: CourseType[];
};

function Courses({ courses }: Props) {
  const showCreateCourseModalRef = useRef<HTMLDialogElement | null>(null);

  const handleShowCreateCourseButtonClick = () => {
    showCreateCourseModalRef.current?.showModal();
  };
  return (
    <div className="coureses__wrapper">
      {courses.length === 0 && (
        <div className="coureses__warning">
          در حال حاضر دوره ای ثبت نشده است
        </div>
      )}
      <div className="coureses__items">
        {courses?.map((course: CourseType) => (
          <CourseItem key={course._id} course={course} />
        ))}
      </div>
      <div className="courses__btns">
        <Button
          color="blue"
          variant="solid"
          size="md"
          type="button"
          onclick={handleShowCreateCourseButtonClick}
        >
          <BiPlusMedical />
          افزودن دوره ی جدید
        </Button>
        <Button color="red" variant="solid" size="md">
          <BiSolidOffer />
          اعمال تخفیف همه دوره ها
        </Button>
        <Button color="brown" variant="solid" size="md">
          <BiCategory />
          افزودن دسته بندی
        </Button>
      </div>

      <CreateCourseModal ref={showCreateCourseModalRef} />
    </div>
  );
}

export default Courses;
