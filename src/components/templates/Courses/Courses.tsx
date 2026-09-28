import type { CourseType } from "../../../types/course-type";

import CreateCourseModal from "../../../modals/CreateCourseModal/CreateCourseModal";
import EmptyCard from "../../ui/EmptyCard/EmptyCard";
import CoursesList from "./components/CoursesList/CoursesList";
import CoursesActions from "./components/CoursesActions/CoursesActions";

import { useCourses } from "./useCourses";

import styles from "./Courses.module.css";

import clsx from "clsx";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

type Props = {
  courses: CourseType[];
};

function Courses({ courses }: Props) {
  const { handleShowCreateCourseButtonClick, showCreateCourseModalRef } =
    useCourses();
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div className={clsx("animate", "slide-right")}>
        {courses.length === 0 && (
          <EmptyCard title="در حال حاضر دوره ای ثبت نشده است" />
        )}
        <CoursesList courses={courses} />
      </div>
      <div className={clsx("animate", "fade-up")}>
        <CoursesActions showModal={handleShowCreateCourseButtonClick} />
      </div>
      <CreateCourseModal ref={showCreateCourseModalRef} />
    </div>
  );
}

export default Courses;
