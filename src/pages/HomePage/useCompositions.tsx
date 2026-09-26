import { BiBookContent, BiCodeCurly, BiSolidUserAccount } from "react-icons/bi";
import useGetAllArticles from "../../services/hooks/articles/useGetAllArticles";
import { useGetAllCourses } from "../../services/hooks/courses/useGetAllCourses";
import { useGetAllUsers } from "../../services/hooks/users/useGetAllUsers";

export const useCompositions = () => {
  const { data: users } = useGetAllUsers();
  const { data: articles } = useGetAllArticles();
  const { data: courses } = useGetAllCourses();

  const dashboardDatas = [
    {
      id: 1,
      title: "تعداد کاربران",
      icon: <BiSolidUserAccount />,
      link: "/users",
      count: users?.length ?? 0,
      color: "red",
    },
    {
      id: 2,
      title: "تعداد مقالات",
      icon: <BiBookContent />,
      link: "/articles",
      count: articles?.length ?? 0,
      color: "green",
    },
    {
      id: 3,
      title: "تعداد دوره ها",
      icon: <BiCodeCurly />,
      link: "/courses",
      count: courses?.length ?? 0,
      color: "blue",
    },
  ];

  return {
    dashboardDatas,
    users,
    articles,
    courses,
  };
};
