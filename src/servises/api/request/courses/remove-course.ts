import { apiRequest } from "../../confige/instance";

export const removeCourseRequest = async (id: string) => {
  const { data } = await apiRequest.delete(`users/${id}`);
  return data;
};
