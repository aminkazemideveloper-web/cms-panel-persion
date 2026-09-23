import { apiRequest } from "../../config/instance";

export const removeUser = async (id: string) => {
  const { data } = await apiRequest.delete(`/users/${id}`);
  return data;
};
