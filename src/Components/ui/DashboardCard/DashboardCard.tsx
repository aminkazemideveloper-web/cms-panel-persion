import styles from "./DashboardCard.module.css";

import { Link } from "react-router";
import clsx from "clsx";

import type { DashboardItemType } from "../../../types/dashboard-item-type";
import MingcuteArrowLeftFill from "../../../icons/MingcuteArrowLeftFill";

type Props = {
  item: DashboardItemType;
};

function DashboardCard({ item }: Props) {
  return (
    <div className={clsx(styles["dashboard-item"], item.color)}>
      <div className={styles.header}>
        <div className={styles.written}>
          <h3>{item.title}</h3>
          <span>{item.icon}</span>
        </div>
        <div className={styles.count}>{item.count}</div>
      </div>

      <div className={styles.footer}>
        <Link className={styles.link} to={item.link}>
          <span> مشاهده صفحه</span>
          <MingcuteArrowLeftFill className={styles.arrow} />
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;
