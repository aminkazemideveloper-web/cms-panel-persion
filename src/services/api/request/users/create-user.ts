import type { UserType } from "../../../../types/user-type";
import { apiRequest } from "../../config/instance";

type CreateUserPayload = Omit<UserType, "_id">;

export const createUserRequest = async (formData: CreateUserPayload) => {
  const { data } = await apiRequest.post("/users", formData);
  return data;
};
