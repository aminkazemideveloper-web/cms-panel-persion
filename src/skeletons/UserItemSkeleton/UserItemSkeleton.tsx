import Skeleton from "../Skeleton/Skeleton";
import styles from "./UserItemSkeleton.module.css";

function UserItemSkeleton() {
  return (
    <div className={styles["userItem-skeleton"]}>
      <div className={styles["userItem-skeleton__right"]}>
        <Skeleton variant="circular" width="50px" height="50px" />

        <div className={styles["userItem-skeleton__content"]}>
          <Skeleton width="120px" height="16px" />
          <Skeleton width="180px" height="14px" />
        </div>
      </div>

      <div className={styles["userItem-skeleton__actions"]}>
        <Skeleton variant="circular" width="1rem" height="1rem" />

        <Skeleton variant="circular" width="1rem" height="1rem" />

        <Skeleton variant="circular" width="1rem" height="1rem" />
      </div>
    </div>
  );
}

export default UserItemSkeleton;
