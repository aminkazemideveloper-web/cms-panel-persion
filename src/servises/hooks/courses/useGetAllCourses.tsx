import { useQuery } from "@tanstack/react-query";
import { getAllCoursesRequest } from "../../api/request/courses/get-all-courses";

export const useGetAllCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getAllCoursesRequest,
  });
};
