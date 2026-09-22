import clsx from "clsx";
import styles from "./Skeleton.module.css";

type Variant = "rounded" | "circular" | "text";

type Props = {
  variant?: Variant;
  width: string;
  height: string;
};

function Skeleton({ variant = "text", width, height }: Props) {
  return (
    <div
      className={clsx(styles.skeleton, styles[variant])}
      style={{ width, height }}
    ></div>
  );
}

export default Skeleton;
