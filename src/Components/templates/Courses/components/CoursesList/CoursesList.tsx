import type { CourseType } from "../../../../../types/course-type";
import CourseItem from "../../../../ui/CourseItem/CourseItem";
import styles from "./CoursesList.module.css";

type Props = {
  courses: CourseType[];
};

function CoursesList({ courses }: Props) {
  return (
    <div className={styles.items}>
      {courses?.map((course: CourseType) => (
        <CourseItem key={course._id} course={course} />
      ))}
    </div>
  );
}

export default CoursesList;
