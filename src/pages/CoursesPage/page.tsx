import useTitle from "../../hooks/useTitle";
import Courses from "../../components/templates/Courses/Courses";
import { useGetAllCourses } from "../../services/hooks/courses/useGetAllCourses";

import UsersSkeleton from "../../skeletons/UsersSkeleton/UsersSkeleton";
import Load from "../../components/shared/Load/Load";
function CoursesPage() {
  const { data: courses, isPending, isFetching } = useGetAllCourses();

  useTitle("دوره ها");

  if (isPending) {
    return <UsersSkeleton />;
  }

  return (
    <>
      {isFetching && <Load />}
      <Courses courses={courses!} />
    </>
  );
}

export default CoursesPage;
