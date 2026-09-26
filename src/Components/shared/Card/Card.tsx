import type { ComponentProps, PropsWithChildren } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

type Props = ComponentProps<"div">;

function Card({ children, className, ...rest }: Props) {
  return (
    <div className={clsx(styles.card, className)} {...rest}>
      {children}{" "}
    </div>
  );
}

export default Card;
