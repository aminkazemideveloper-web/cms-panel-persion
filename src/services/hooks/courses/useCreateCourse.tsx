import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseRequest } from "../../api/request/courses/create-course";
import type { CourseType } from "../../../types/course-type";

type CourseProps = Omit<CourseType, "_id">;
export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newCourse: CourseProps) => createCourseRequest(newCourse),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
};
