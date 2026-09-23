import { Outlet } from "react-router";
import styles from "./DashboardLayout.module.css";
import Container from "../../Container/Container";

import Header from "../../../ui/Header/Header";
import Sidebar from "../../../ui/Sidebar/Sidebar";
import HeaderSection from "../Common/HeaderSection/HeaderSection";

function DashboardLayout() {
  return (
    <Container>
      <div className={styles["dashboard__layout"]}>
        <Header />

        <main className={styles.main}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <HeaderSection />
            <Outlet />
          </div>
        </main>
      </div>
    </Container>
  );
}

export default DashboardLayout;
