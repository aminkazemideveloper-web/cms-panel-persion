import { apiRequest } from "../../confige/instance";

export const getAllCoursesRequest = async () => {
  const { data } = await apiRequest.get("/courses");
  return data;
};
