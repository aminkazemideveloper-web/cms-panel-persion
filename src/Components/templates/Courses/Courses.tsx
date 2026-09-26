import type { CourseType } from "../../../types/course-type";

import CreateCourseModal from "../../../modals/CreateCourseModal/CreateCourseModal";
import EmptyCard from "../../ui/EmptyCard/EmptyCard";
import CoursesList from "./components/CoursesList/CoursesList";
import CoursesActions from "./components/CoursesActions/CoursesActions";

import { useCourses } from "./useCourses";

import styles from "./Courses.module.css";

type Props = {
  courses: CourseType[];
};

function Courses({ courses }: Props) {
  const { handleShowCreateCourseButtonClick, showCreateCourseModalRef } =
    useCourses();

  return (
    <div className={styles.wrapper}>
      {courses.length === 0 && (
        <EmptyCard title="در حال حاضر دوره ای ثبت نشده است" />
      )}
      <CoursesList courses={courses} />
      <CoursesActions showModal={handleShowCreateCourseButtonClick} />
      <CreateCourseModal ref={showCreateCourseModalRef} />
    </div>
  );
}

export default Courses;
