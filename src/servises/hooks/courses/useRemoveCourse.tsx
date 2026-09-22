import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCourseRequest } from "../../api/request/courses/remove-course";

export const useRemoveCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => removeCourseRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
};
