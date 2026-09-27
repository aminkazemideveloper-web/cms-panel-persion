import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserType } from "../../../types/user-type";
import { createUserRequest } from "../../api/request/users/create-user";

type UserProps = Omit<UserType, "_id">;

function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUserRequest,
    onMutate: async (newUser: UserProps) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });

      const prevUsers = queryClient.getQueryData<UserType[]>(["users"]);

      queryClient.setQueryData<UserType[]>(["users"], (old = []) => [
        ...old,
        newUser as UserType,
      ]);

      return { prevUsers };
    },
    onError: (_error, _variabels, onMutateResult) => {
      queryClient.setQueryData(["users"], onMutateResult?.prevUsers);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export default useCreateUser;

// mutationFn: (newUser: UserProps) => createUserRequest(newUser),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["users"],
//       });
//     },
