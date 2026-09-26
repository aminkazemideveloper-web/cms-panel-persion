import styles from "./TiTleSectionItem.module.css";

type Props = {
  title: string;
  sub: string;
};

function TiTleSectionItem({ title, sub }: Props) {
  return (
    <div className={styles["title-section"]}>
      <span className={styles.title}>{title}</span>
      <span className={styles.sub}>{sub}</span>
    </div>
  );
}

export default TiTleSectionItem;
