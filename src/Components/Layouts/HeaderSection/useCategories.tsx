import type { Category } from "../../../types/category-type";
import MingcuteHome3Line from "../../../icons/MingcuteHome3Line";
import MingcuteUser1Fill from "../../../icons/MingcuteUser1Fill";
import MingcuteBook3Line from "../../../icons/MingcuteBook3Line";
import MingcuteNewdotLine from "../../../icons/MingcuteNewdotLine";

export const useCategories = () => {
  const categories: Category[] = [
    {
      id: 1,
      label: "خانه",
      link: "/",
      icon: <MingcuteHome3Line />,
      color: "red",
    },
    {
      id: 2,
      label: "کاربران",
      link: "/users",
      icon: <MingcuteUser1Fill />,
      color: "blue",
    },
    {
      id: 3,
      label: "مقاله",
      link: "/articles",
      icon: <MingcuteBook3Line />,
      color: "green",
    },
    {
      id: 4,
      label: "دوره ها",
      link: "/courses",
      icon: <MingcuteNewdotLine />,
      color: "purple",
    },
  ];

  return {
    categories,
  };
};
