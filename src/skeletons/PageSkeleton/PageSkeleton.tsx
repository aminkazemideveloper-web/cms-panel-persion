import Container from "../../Components/Container/Container";
import HeaderSectionSkeleton from "../HeaderSectionSkeleton/HeaderSectionSkeleton";
import HeaderSkeleton from "../HeaderSkeleton/HeaderSkeleton";
import SidebarSkeleton from "../SidebarSkeleton/SidebarSkeleton";
import UsersSkeleton from "../UsersSkeleton/UsersSkeleton";
import styles from "./PageSkeleton.module.css";

function PageSkeleton() {
  return (
    <Container>
      <div className={styles["page-skeleton"]}>
        <HeaderSkeleton />
        <main>
          <div className={styles.sidebar}><SidebarSkeleton /></div>
          <div className={styles.content}>
            <HeaderSectionSkeleton />
            <UsersSkeleton />
          </div>
        </main>
      </div>
    </Container>
  );
}

export default PageSkeleton;
