import { useQuery } from "@tanstack/react-query";
import { getAllArticlesRequest } from "../../api/request/articles/get-all-articles";

function useGetAllArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: getAllArticlesRequest,
  });
}

export default useGetAllArticles;
