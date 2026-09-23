import { BiBookContent, BiCodeCurly, BiSolidUserAccount } from "react-icons/bi";
import styles from "./Home.module.css";
import DashboardItem from "../../Components/DashboardItem/DashboardItem";
import type { ReactNode } from "react";
import { useGetAllUsers } from "../../services/hooks/users/useGetAllUsers";
import useGetAllArticles from "../../services/hooks/articles/useGetAllArticles";
import { useGetAllCourses } from "../../services/hooks/courses/useGetAllCourses";
import type { CardColor } from "../../types/car-color";

export type DashboardItemType = {
  id: number;
  title: string;
  icon: ReactNode;
  link: string;
  count: number;
  color: CardColor;
};

function Home() {
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
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h2>داشبورد</h2>
      </div>

      <div className={styles.contant}>
        {dashboardDatas.map((item: DashboardItemType) => (
          <DashboardItem key={item.id} item={item}  />
        ))}
      </div>
    </div>
  );
}

export default Home;
