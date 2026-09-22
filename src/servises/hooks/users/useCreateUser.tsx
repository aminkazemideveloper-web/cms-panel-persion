import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserType } from "../../../types/user-type";
import { createUserRequest } from "../../api/request/users/create-user";

type UserProps = Omit<UserType, "_id">;

function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: UserProps) => createUserRequest(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}

export default useCreateUser;
