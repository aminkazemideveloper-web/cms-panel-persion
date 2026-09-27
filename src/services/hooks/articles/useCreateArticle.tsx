import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArticle } from "../../api/request/articles/create-article";
import type { ArticleType } from "../../../types/article-type";

type Props = Omit<ArticleType, "_id">;

function useCreateArticle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createArticle,
    onMutate: (newArticle: Props) => {
      queryClient.cancelQueries({ queryKey: ["articles"] });

      const prevArticles = queryClient.getQueryData<ArticleType[]>([
        "articles",
      ]);

      queryClient.setQueryData<ArticleType[]>(["articles"], (old = []) => [
        ...old,
        newArticle as ArticleType,
      ]);

      return { prevArticles };
    },

    onError: (_error, _variables, onMutateResult) => {
      queryClient.setQueryData<ArticleType[]>(
        ["articles"],
        onMutateResult?.prevArticles,
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export default useCreateArticle;
