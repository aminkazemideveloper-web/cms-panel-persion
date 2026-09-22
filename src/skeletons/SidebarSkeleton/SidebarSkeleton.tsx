import Skeleton from "../Skeleton/Skeleton";
import styles from "./SidebarSkeleton.module.css";

function SidebarSkeleton() {
  return (
    <div className={styles["sidebar-skeleton"]}>
      <div className={styles.profile}>
        <Skeleton width="5rem" height="5rem" variant="circular" />
      </div>
      <div className={styles.heading}>
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="50%" height="1rem" />
      </div>
      <div className={styles.detailes}>
        {Array.from({ length: 3 })
          .fill("")
          .map((_, index) => (
            <Skeleton key={index} width="100%" height="1rem" variant="text" />
          ))}
      </div>
      <div className={styles.btn}>
        <Skeleton width="100px" height="40px" variant="rounded" />
      </div>
    </div>
  );
}

export default SidebarSkeleton;
