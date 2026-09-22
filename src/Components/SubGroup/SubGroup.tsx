import { type ReactNode } from "react";
import styles from "./SubGroup.module.css";
type Props = {
  icon: ReactNode;
  lable: string;
  value: string | number;
};

function SubGroup({ lable, value, icon }: Props) {
  return (
    <div className={styles["sub-group"]}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{lable}:</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

export default SubGroup;
