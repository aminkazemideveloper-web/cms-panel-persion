import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/request/users/get-all-users";

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
};
