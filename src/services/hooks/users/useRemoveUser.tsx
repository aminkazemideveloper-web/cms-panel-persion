import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeUser } from "../../api/request/users/remove-user";
import type { UserType } from "../../../types/user-type";
import { toast } from "react-toastify";

export const useRemoveUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeUser,
    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });

      const previousUsers = queryClient.getQueryData<UserType[]>(["users"]);

      queryClient.setQueryData<UserType[]>(
        ["users"],
        (oldUsers) => oldUsers?.filter((user) => user._id != userId) ?? [],
      );

      return { previousUsers };
    },

    onError: (_error, _userId, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(["users"], context.previousUsers);
      }
    },
    onSuccess: () => {
      toast.success("کاربر با موفقیت حذف شد");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
