import Skeleton from "../Skeleton/Skeleton";
import styles from "./HeaderSectionSkeleton.module.css";

function HeaderSectionSkeleton() {
  return (
    <div className={styles["header-section-skeleton"]}>
      <Skeleton width="3rem" height="1lh" variant="rounded" />
      <Skeleton width="3rem" height="1lh" variant="rounded" />
      <Skeleton width="3rem" height="1lh" variant="rounded" />
    </div>
  );
}

export default HeaderSectionSkeleton;
