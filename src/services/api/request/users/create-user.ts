import type { UserType } from "../../../../types/user-type";
import { apiRequest } from "../../confige/instance";

type CreateUserPayload = Omit<UserType, "_id"> & {
  _id: string;
};

export const createUserRequest = async (formData: CreateUserPayload) => {
  const { data } = await apiRequest.post("/users", formData);
  return data;
};
