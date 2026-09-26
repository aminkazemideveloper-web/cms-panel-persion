import { Outlet } from "react-router";
import styles from "./DashboardLayout.module.css";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import HeaderSection from "../HeaderSection/HeaderSection";
import clsx from "clsx";

function DashboardLayout() {
  return (
    <div className={clsx(styles["dashboard__layout"], "container")}>
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
  );
}

export default DashboardLayout;
