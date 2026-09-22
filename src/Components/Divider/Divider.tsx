import styles from "./Divider.module.css";

type Props = {
  height?: string;
};

function Divider({ height = "1rem" }: Props) {
  return <div className={styles.divider} style={{ height }}></div>;
}

export default Divider;
