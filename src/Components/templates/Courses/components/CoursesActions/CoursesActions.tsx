import clsx from "clsx";
import Button from "../../../../shared/Button/Button";
import styles from "./CoursesActions.module.css";
import { BiCategory, BiPlusMedical, BiSolidOffer } from "react-icons/bi";

type Props = {
  showModal: () => void;
};

function CoursesActions({ showModal }: Props) {
  return (
    <div className={styles.actions}>
      <Button
        className={clsx(styles.btn, styles.primary)}
        color="primary"
        varient="solid"
        type="button"
        onClick={showModal}
      >
        <BiPlusMedical />
        افزودن دوره ی جدید
      </Button>
      <Button
        color="danger"
        varient="solid"
        className={clsx(styles.btn, styles.danger)}
      >
        <BiSolidOffer />
        اعمال تخفیف همه دوره ها
      </Button>
      <Button
        color="secondary"
        varient="solid"
        className={clsx(styles.btn, styles.secondary)}
      >
        <BiCategory />
        افزودن دسته بندی
      </Button>
    </div>
  );
}

export default CoursesActions;
