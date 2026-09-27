import { useId, type ComponentProps, type ReactNode } from "react";

import styles from "./TextErea.module.css";
import clsx from "clsx";

type Props = ComponentProps<"textarea"> & {
  lable: string;
  error?: string | null;
};

export default function TextErea({
  className,
  lable,
  error,
  ...otherprops
}: Props): ReactNode {
  const id = useId();
  return (
    <div className={clsx(styles["text-area"], className)}>
      <label htmlFor={id}>{lable}</label>
      <textarea
        id={id}
        className={clsx(error ? styles.error : "")}
        {...otherprops}
      />
      <span className={styles.error}>{error || "\u00A0"}</span>
    </div>
  );
}
