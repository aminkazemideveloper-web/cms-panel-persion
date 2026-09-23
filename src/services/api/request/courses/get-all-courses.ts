import { apiRequest } from "../../config/instance";

export const getAllCoursesRequest = async () => {
  const { data } = await apiRequest.get("/courses");
  return data;
};
