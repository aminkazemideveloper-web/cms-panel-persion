import { apiRequest } from "../../confige/instance";

export const getAllUsers = async () => {
  const res = await apiRequest.get("/users");
  return res.data;
};
