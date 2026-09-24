import { apiRequest } from "../../config/instance";

export const removeCourseRequest = async (id: string) => {
  const { data } = await apiRequest.delete(`/courses/${id}`);
  return data;
};
