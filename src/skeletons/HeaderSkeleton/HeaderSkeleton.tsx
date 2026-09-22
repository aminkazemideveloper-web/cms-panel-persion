import Skeleton from "../Skeleton/Skeleton";
import styles from "./HeaderSkeleton.module.css";

function HeaderSkeleton() {
  return (
    <div className={styles["header-skeleton"]}>
      <div className={styles.profile}>
        <Skeleton variant="circular" width="3rem" height="3rem" />
        <div className={styles.writing}>
          <Skeleton width="6rem" height="1rem" />
          <Skeleton width="4rem" height="1rem" />
        </div>
      </div>
      <div className={styles.actions}>
        <Skeleton width="2rem" height="1rem" variant="text" />
        <Skeleton width="2rem" height="1rem" variant="text" />
        <Skeleton width="2rem" height="1rem" variant="text" />
      </div>
    </div>
  );
}

export default HeaderSkeleton;
