import type { CourseType } from "../../../../types/course-type";
import { apiRequest } from "../../config/instance";

type CreateCoursePayload = Omit<CourseType, "_id">;

export const createCourseRequest = async (formData: CreateCoursePayload) => {
  const { data } = await apiRequest.post("/courses", formData);
  return data;
};
