import { NavLink } from "react-router";
import styles from "./HeaderSection.module.css";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { FaDiscourse, FaHome } from "react-icons/fa";
import clsx from "clsx";
import type { ReactNode } from "react";
import type { CardColor } from "../../../../types/car-color";

type Category = {
  id: number;
  label: string;
  link: string;
  icon: ReactNode;
  color: CardColor;
};

function HeaderSection() {
  const categories: Category[] = [
    { id: 1, label: "خانه", link: "/", icon: <FaHome />, color: "yellow" },
    {
      id: 2,
      label: "کاربران",
      link: "/users",
      icon: <FaRegUser />,
      color: "red",
    },
    {
      id: 3,
      label: "مقاله",
      link: "/articles",
      icon: <MdOutlineArticle />,
      color: "green",
    },
    {
      id: 4,
      label: "دوره ها",
      link: "/courses",
      icon: <AiOutlineFileText />,
      color: "blue",
    },
  ];

  return (
    <div>
      <ul className={styles.navbar}>
        {categories.map((category: Category) => (
          <li key={category.id}>
            <NavLink
              to={category.link}
              end
              className={({ isActive }) =>
                clsx(
                  styles["navbar_item"],
                  category.color,
                  isActive && styles["item_active"],
                )
              }
            >
              <span className={styles.icon}>{category.icon} </span>
              <span className={styles.label}>{category.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderSection;
