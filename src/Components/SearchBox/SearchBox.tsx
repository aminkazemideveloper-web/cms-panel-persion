import { IoSearch } from "react-icons/io5";
import styles from "./SearchBox.module.css";
import { useEffect, useState, type ChangeEvent } from "react";
import useDebounce from "../../lib/hooks/useDebounce";
import Load from "../Load/Load";

type Props = {
  onSearch: (value: string) => void;
  loading: boolean;
};

function SearchBox({ onSearch, loading }: Props) {
  const [value, setValue] = useState<string>("");

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchText = useDebounce<string>(value, 500);

  useEffect(() => {
    onSearch(searchText);
  }, [searchText, onSearch]);

  return (
    <label className={styles.search}>
      <input
        type="text"
        placeholder="جستجو"
        value={value}
        onChange={handleChangeInputValue}
      />
      <button type="button">{loading ? <IoSearch /> : <Load />}</button>
    </label>
  );
}

export default SearchBox;
