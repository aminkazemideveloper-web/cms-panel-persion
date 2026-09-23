import { apiRequest } from "../../config/instance";

export const removeArticleRequest = async (id: string) => {
  const { data } = await apiRequest.delete(`/articles/${id}`);
  return data;
};
