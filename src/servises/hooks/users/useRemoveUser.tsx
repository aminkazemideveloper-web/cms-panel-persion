import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeUser } from "../../api/request/users/remove-user";

export const useRemoveUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};
