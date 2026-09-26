import { type ComponentProps, type ComponentPropsWithoutRef } from "react";
import Modal from "../Modal/Modal";

import styles from "./RemoveModal.module.css";
import clsx from "clsx";
import Button from "../../components/shared/Button/Button";

type Props = ComponentPropsWithoutRef<"div"> & {
  heading: ComponentProps<typeof Modal>["heading"];
  ref: ComponentProps<typeof Modal>["ref"];
  title: string;
  onRemove: () => void;
};

function RemoveModal({
  title,
  heading,
  ref,
  className,
  onRemove,
  ...rest
}: Props) {
  const handleCancelClickButton = () => {
    ref?.current?.close();
  };

  return (
    <Modal heading={heading} ref={ref}>
      <div className={clsx(styles["remove-modal"], className)} {...rest}>
        <div className={styles.title}>آیا از حذف {title} مطمین هستید ؟؟</div>

        <div className={styles.actions}>
          <Button
            color="secondary"
            varient="outlined"
            onClick={handleCancelClickButton}
          >
            انصراف
          </Button>
          <Button
            color="primary"
            varient="solid"
            type="button"
            onClick={onRemove}
          >
            تایید
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default RemoveModal;
