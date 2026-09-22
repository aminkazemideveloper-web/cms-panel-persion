import useTitle from "../../hooks/useTitle";
import Courses from "../../Components/Courses/Courses";
import { useGetAllCourses } from "../../servises/hooks/courses/useGetAllCourses";

import "./Courses.css";
import UsersSkeleton from "../../skeletons/UsersSkeleton/UsersSkeleton";
import Load from "../../Components/Load/Load";
function CoursesPage() {
  const { data: courses, isPending, isFetching } = useGetAllCourses();

  useTitle("دوره ها");

  if (isPending) {
    return <UsersSkeleton />;
  }

  return (
    <>
      {isFetching && <Load/>}
      <Courses courses={courses} />
    </>
  );
}

export default CoursesPage;
