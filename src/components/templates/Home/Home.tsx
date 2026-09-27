import type { DashboardItemType } from "../../../types/dashboard-item-type";
import DashboardCard from "../../ui/DashboardCard/DashboardCard";

import styles from "./Home.module.css";
import clsx from "clsx";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

type Props = {
  items: DashboardItemType[];
};

function Home({ items }: Props) {
  const containerRef = useScrollAnimation();

  return (
    <div ref={containerRef} className={styles.home}>
      <div className={clsx(styles.header, "animate", "slide-left")}>
        <h2>داشبورد</h2>
      </div>

      <div className={clsx(styles.contant, "animate", "fade-down")}>
        {items?.map((item) => (
          <DashboardCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
