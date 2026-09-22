import "./Modal.css";
import clsx from "clsx";

import {
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { BiWindowClose } from "react-icons/bi";

type Props = ComponentProps<"dialog"> & {
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
          <div onClick={() => ref?.current?.close()}>
            <BiWindowClose />
          </div>
          <div>{heading}</div>
        </header>

        <main>{children}</main>
      </div>
    </dialog>
  );
}
