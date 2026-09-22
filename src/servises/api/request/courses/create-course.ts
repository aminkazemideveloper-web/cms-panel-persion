import type { CourseType } from "../../../../types/course-type";
import { apiRequest } from "../../confige/instance";

type CreateCoursePayload = Omit<CourseType, "_id"> & {
  _id: string;
};

export const createCourseRequest = async (formData: CreateCoursePayload) => {
  const { data } = await apiRequest.post("/courses", formData);
  return data;
};
