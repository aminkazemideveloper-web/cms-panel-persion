import styles from "./DashboardItem.module.css";
import type { DashboardItemType } from "../../pages/Home/Home";
import { Link } from "react-router";
import clsx from "clsx";
import { BiArrowFromLeft, BiLeftArrow, BiSolidLeftArrow } from "react-icons/bi";

type Props = {
  item: DashboardItemType;
};

function DashboardItem({ item }: Props) {
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
          <BiSolidLeftArrow className={styles.arrow} />
        </Link>
      </div>
    </div>
  );
}

export default DashboardItem;
