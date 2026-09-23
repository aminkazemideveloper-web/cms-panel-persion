import type { UserType } from "../../../../types/user-type";
import { apiRequest } from "../../config/instance";

export const editUserRequest = async (_id: string, formData: UserType) => {
  const { data } = await apiRequest.put(`/users/:${_id}`, formData);
  return data;
};
