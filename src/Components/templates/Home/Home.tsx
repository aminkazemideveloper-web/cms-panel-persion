import type { DashboardItemType } from "../../../types/dashboard-item-type";
import DashboardCard from "../../ui/DashboardCard/DashboardCard";

import styles from "./Home.module.css";

type Props = {
  items: DashboardItemType[];
};

function Home({ items }: Props) {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h2>داشبورد</h2>
      </div>

      <div className={styles.contant}>
        {items?.map((item) => (
          <DashboardCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
