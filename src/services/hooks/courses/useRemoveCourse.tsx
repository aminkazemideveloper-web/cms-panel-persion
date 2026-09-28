import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCourseRequest } from "../../api/request/courses/remove-course";
import type { CourseType } from "../../../types/course-type";
import { toast } from "react-toastify";

export const useRemoveCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeCourseRequest,
    onMutate: async (courseId: string) => {
      await queryClient.cancelQueries({ queryKey: ["courses"] });

      const prevCourses = queryClient.getQueryData<CourseType[]>(["courses"]);

      queryClient.setQueryData<CourseType[]>(["courses"], (old) =>
        old?.filter((course) => course._id != courseId),
      );

      return { prevCourses };
    },

    onError: (_error, _variables, onMutateResult) => {
      queryClient.setQueryData(["courses"], onMutateResult?.prevCourses);
    },
    onSuccess: () => {
      toast.success("کاربر با موفقیت حذف شد");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });
};
