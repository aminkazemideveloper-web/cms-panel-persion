import { IoSearch } from "react-icons/io5";
import styles from "./SearchBox.module.css";

function SearchBox() {
  return (
    <label className={styles.search}>
      <input type="text" placeholder="جستجو" />
      <button type="button">
        <IoSearch />
      </button>
    </label>
  );
}

export default SearchBox;
