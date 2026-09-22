import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArticle } from "../../api/request/articles/create-article";
import type { ArticleType } from "../../../types/article-type";

type Props = Omit<ArticleType, "_id">;

function useCreateArticle() {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newArticle: Props) => createArticle(newArticle),
    onSuccess : ()=>{
      queryClient.invalidateQueries({
        queryKey : ["articles"]
      })
    }
  });
}

export default useCreateArticle;
