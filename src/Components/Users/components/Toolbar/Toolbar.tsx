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

      <Button onClick={onShowModal} color="primary" varient="solid">
        <BiPlus className={styles.icon} />
        <span className={styles.text}>کاربر جدید</span>
      </Button>
    </div>
  );
}

export default Toolbar;
