import Skeleton from "../Skeleton/Skeleton";
import UserItemSkeleton from "../UserItemSkeleton/UserItemSkeleton";
import styles from "./UsersSkeleton.module.css";

function UsersSkeleton() {
  return (
    <div className={styles["users-skeleton"]}>
      <div className={styles["users-skeleton__top"]}>
        <Skeleton variant="rounded" width="80%" height="42px" />

        <Skeleton variant="rounded" width="120px" height="42px" />
      </div>

      <div className={styles["users-skeleton__list"]}>
        <UserItemSkeleton />
        <UserItemSkeleton />
        <UserItemSkeleton />
        <UserItemSkeleton />
        <UserItemSkeleton />
      </div>
    </div>
  );
}

export default UsersSkeleton;
