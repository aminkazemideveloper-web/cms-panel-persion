import { Outlet } from "react-router";
import styles from "./DashboardLayout.module.css";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import HeaderSection from "../HeaderSection/HeaderSection";
import clsx from "clsx";
import Card from "../../shared/Card/Card";

function DashboardLayout() {
  return (
    <div className={clsx(styles["dashboard__layout"], "container")}>
      <Header />

      <main className={styles.main}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <Card className={styles.content}>
          <HeaderSection />
          <Outlet />
        </Card>
      </main>
    </div>
  );
}

export default DashboardLayout;
