import styles from "./EmptyCard.module.css";

type Props = {
  title: string;
};

function EmptyCard({ title }: Props) {
  return <div className={styles.warning}>{title}</div>;
}

export default EmptyCard;
