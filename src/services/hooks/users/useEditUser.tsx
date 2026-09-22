import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editUserRequest } from "../../api/request/users/edit-user";
import type { UserType } from "../../../types/user-type";

type Props = {
  id: string;
  formData: UserType;
};

function useEditUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }: Props) => editUserRequest(id, formData),
    onSuccess: (data: UserType) => {
      queryClient.setQueryData(["users"], (oldData: UserType[] | undefined) => {
        if (!oldData) return oldData;

        return oldData.map((user) => (user._id === data._id ? data : user));
      });
    },
  });
}

export default useEditUser;
