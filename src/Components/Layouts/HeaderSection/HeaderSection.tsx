import { useCategories } from "./useCategories";

import styles from "./HeaderSection.module.css";
import NavbarLink from "./components/NavbarLink/NavbarLink";
import { useLocation } from "react-router";

function HeaderSection() {
  const { categories } = useCategories();
  const location = useLocation();

  const activeIndex = categories.findIndex(
    (category) => category.link === location.pathname,
  );

  return (
    <div className={styles.wrapper}>
      <ul className={styles.navbar}>
        {categories.map((category) => (
          <li key={category.id} className={styles.item}>
            <NavbarLink category={category} />
          </li>
        ))}

        <span
          className={styles.indicator}
          style={{
            transform: `translateX(${activeIndex * -4}rem)`,
          }}
        />
      </ul>
    </div>
  );
}

export default HeaderSection;
