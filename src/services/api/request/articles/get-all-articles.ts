import type { ArticleType } from "../../../../types/article-type";
import { apiRequest } from "../../config/instance";

export const getAllArticlesRequest = async (): Promise<ArticleType[]> => {
  const { data } = await apiRequest.get<ArticleType[]>("/articles");
  return data;
};
