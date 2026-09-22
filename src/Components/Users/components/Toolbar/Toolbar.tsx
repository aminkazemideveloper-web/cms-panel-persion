import { BiPlus } from "react-icons/bi";
import Button from "../../../Button/Button";
import SearchBox from "../../../SearchBox/SearchBox";
import styles from "./Toolbar.module.css";

type Props = {
  onShowModal: () => void;
};

function Toolbar({ onShowModal }: Props) {
  return (
    <div className={styles.toolbar}>
      <SearchBox />

      <Button onclick={onShowModal} color="blue" size="md" variant="solid">
        <BiPlus className={styles.icon} />
        <span className={styles.text}>کاربر جدید</span>
      </Button>
    </div>
  );
}

export default Toolbar;
