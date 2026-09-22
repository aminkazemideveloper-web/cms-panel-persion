import { apiRequest } from "../../confige/instance";

export const removeUser = async (id: string) => {
  const { data } = await apiRequest.delete(`/users/${id}`);
  return data;
};
