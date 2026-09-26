import { NavLink } from "react-router";
import styles from "./NavbarLink.module.css";
import clsx from "clsx";
import type { Category } from "../../../../../types/category-type";

type Props = {
  category: Category;
};

function NavbarLink({ category }: Props) {
  return (
    <NavLink
      to={category.link}
      end
      className={({ isActive }) =>
        clsx(
          styles.navbar_item,
          category.color,
          isActive && styles["item-active"],
        )
      }
    >
      <span className={styles.icon}>{category.icon}</span>
      <span className={styles.label}>{category.label}</span>
    </NavLink>
  );
}

export default NavbarLink;
