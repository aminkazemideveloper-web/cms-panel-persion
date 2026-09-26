import "./Modal.css";
import clsx from "clsx";

import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";

import MingcuteCloseLine from "../../icons/MingcuteCloseLine";
import IconButton from "../../components/shared/IconButton/IconButton";

type Props = ComponentPropsWithoutRef<"dialog"> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};

export default function Modal({
  ref,
  children,
  heading,
  className,
  onClick,
  ...rest
}: Props): ReactNode {
  const HandleClickBackdrup = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref?.current?.close();
    }
    onClick?.(e);
  };

  return (
    <dialog
      onClick={HandleClickBackdrup}
      ref={ref}
      className={clsx("modal", className)}
      {...rest}
    >
      <div className="content">
        <header>
          <IconButton onClick={() => ref?.current?.close()}>
            <MingcuteCloseLine />
          </IconButton>

          <div>{heading}</div>
        </header>

        <main>{children}</main>
      </div>
    </dialog>
  );
}
