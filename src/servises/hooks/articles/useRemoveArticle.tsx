import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeArticleRequest } from "../../api/request/articles/remove-article";

export const useRemoveArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => removeArticleRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
