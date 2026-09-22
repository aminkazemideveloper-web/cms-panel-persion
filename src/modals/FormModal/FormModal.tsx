import { type ComponentProps } from "react";
import Modal from "../Modal/Modal";
import styles from "./FormModal.module.css";
import clsx from "clsx";
import Button from "../../Components/Button/Button";
type Form = ComponentProps<"form">;
type ModalForm = {
  heading: ComponentProps<typeof Modal>["heading"];
  ref: ComponentProps<typeof Modal>["ref"];
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
          <Button color="blue" type="submit" disabled={disabled}>
            ذخیره
          </Button>
          <Button
            type="button"
            variant="ghost"
            onclick={handleCloseModal}
            color="brown"
          >
            انصراف
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default FormModal;
