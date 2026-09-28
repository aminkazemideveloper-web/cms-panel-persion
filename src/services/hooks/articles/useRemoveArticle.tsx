import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeArticleRequest } from "../../api/request/articles/remove-article";
import type { ArticleType } from "../../../types/article-type";
import { toast } from "react-toastify";

export const useRemoveArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeArticleRequest,
    onMutate: async (articleId: string) => {
      await queryClient.cancelQueries({ queryKey: ["articles"] });

      const prevArticles = queryClient.getQueryData<ArticleType[]>([
        "articles",
      ]);

      queryClient.setQueryData<ArticleType[]>(["articles"], (old) =>
        old?.filter((article) => article._id != articleId),
      );

      return { prevArticles };
    },
    onSuccess: () => {
      toast.success("کاربر با موفقیت حذف شد");
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
};
