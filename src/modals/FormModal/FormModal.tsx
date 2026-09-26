import { type ComponentPropsWithoutRef, type RefObject } from "react";
import Modal from "../Modal/Modal";
import styles from "./FormModal.module.css";
import clsx from "clsx";
import Button from "../../components/shared/Button/Button";

type Form = ComponentPropsWithoutRef<"form">;

type ModalForm = {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
};

type Props = Form &
  ModalForm & {
    disabled?: boolean;
  };

function FormModal({
  heading,
  disabled,
  ref,
  onSubmit,
  children,
  className,
  ...rest
}: Props) {
  const handleCloseModal = () => {
    ref.current?.close();
  };

  return (
    <Modal heading={heading} ref={ref}>
      <form
        onSubmit={onSubmit}
        className={clsx(styles["form-modal"], className)}
        {...rest}
      >
        <div className={styles.child}>{children}</div>
        <div className={styles.actions}>
          <Button color="primary" type="submit" disabled={disabled}>
            ذخیره
          </Button>
          <Button
            type="button"
            varient="solid"
            onClick={handleCloseModal}
            color="secondary"
          >
            انصراف
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default FormModal;
