import { apiRequest } from "../../config/instance";

export const getAllArticlesRequest = async () => {
  const { data } = await apiRequest.get("/articles");
  return data;
};
