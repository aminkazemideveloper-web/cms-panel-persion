import clsx from "clsx";

import HeaderSectionSkeleton from "../HeaderSectionSkeleton/HeaderSectionSkeleton";
import HeaderSkeleton from "../HeaderSkeleton/HeaderSkeleton";
import SidebarSkeleton from "../SidebarSkeleton/SidebarSkeleton";
import UsersSkeleton from "../UsersSkeleton/UsersSkeleton";
import styles from "./PageSkeleton.module.css";

function PageSkeleton() {
  return (
    <div className={clsx(styles["page-skeleton"], "container")}>
      <HeaderSkeleton />
      <main>
        <div className={styles.sidebar}>
          <SidebarSkeleton />
        </div>
        <div className={styles.content}>
          <HeaderSectionSkeleton />
          <UsersSkeleton />
        </div>
      </main>
    </div>
  );
}

export default PageSkeleton;
