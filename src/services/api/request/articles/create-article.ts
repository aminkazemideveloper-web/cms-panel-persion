import type { ArticleType } from "../../../../types/article-type";
import { apiRequest } from "../../confige/instance";

type newArticlePayload = Omit<ArticleType, "_id">;

export const createArticle = async (newArticle: newArticlePayload) => {
  const { data } = await apiRequest.post("/articles", newArticle);
  return data;
};
