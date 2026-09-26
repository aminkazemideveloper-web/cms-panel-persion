import useTitle from "../../hooks/useTitle";

import useGetAllArticles from "../../services/hooks/articles/useGetAllArticles";
import Articles from "../../components/templates/Articles/Articles";
import UsersSkeleton from "../../skeletons/UsersSkeleton/UsersSkeleton";
import Load from "../../components/shared/Load/Load";

function ArticlesPage() {
  const { data: articles, isPending, isFetching } = useGetAllArticles();

  useTitle("مقالات");

  if (isPending) {
    return <UsersSkeleton />;
  }

  return (
    <>
      {isFetching && <Load />}
      <Articles articles={articles!} />
    </>
  );
}

export default ArticlesPage;
