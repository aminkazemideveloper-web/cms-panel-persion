import type { UserType } from "../../../../types/user-type";
import { apiRequest } from "../../config/instance";

export const getAllUsers = async (): Promise<UserType[]> => {
  const res = await apiRequest.get<UserType[]>("/users");
  return res.data;
};
