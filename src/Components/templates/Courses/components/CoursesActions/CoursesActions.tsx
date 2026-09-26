import clsx from "clsx";
import Button from "../../../../shared/Button/Button";
import styles from "./CoursesActions.module.css";

import MingcuteAddFill from "../../../../../icons/MingcuteAddFill";
import MingcutePercentageLine from "../../../../../icons/MingcutePercentageLine";
import MingcuteCalendarTimeAddLine from "../../../../../icons/MingcuteCalendarTimeAddLine";

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
        <MingcuteAddFill />
        افزودن دوره ی جدید
      </Button>
      <Button
        color="danger"
        varient="solid"
        className={clsx(styles.btn, styles.danger)}
      >
        <MingcutePercentageLine />
        اعمال تخفیف همه دوره ها
      </Button>
      <Button
        color="secondary"
        varient="solid"
        className={clsx(styles.btn, styles.secondary)}
      >
        <MingcuteCalendarTimeAddLine />
        افزودن دسته بندی
      </Button>
    </div>
  );
}

export default CoursesActions;
