import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseRequest } from "../../api/request/courses/create-course";
import type { CourseType } from "../../../types/course-type";

type CourseProps = Omit<CourseType, "_id">;
export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCourseRequest,
    onMutate: async (newCourse: CourseProps) => {
      await queryClient.cancelQueries({ queryKey: ["courses"] });

      const prevCourses = queryClient.getQueryData(["courses"]);

      queryClient.setQueryData<CourseType[]>(["courses"], (old = []) => [
        ...old,
        newCourse as CourseType,
      ]);

      return { prevCourses };
    },
    onError: (_error, _variables, onMutateResult) => {
      queryClient.setQueryData(["coursses"], onMutateResult?.prevCourses);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });
};
