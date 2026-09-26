import type { CourseType } from "../../../../types/course-type";
import { apiRequest } from "../../config/instance";

export const getAllCoursesRequest = async (): Promise<CourseType[]> => {
  const { data } = await apiRequest.get<CourseType[]>("/courses");
  return data;
};
