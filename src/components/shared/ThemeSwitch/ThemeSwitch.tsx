import { clsx } from "clsx";
import styles from "./ThemeSwitch.module.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/slice/themeSlice";
import type { RootState } from "../../../redux/store";
import { useEffect } from "react";

import MingcuteMoonStarsFill from "../../../icons/MingcuteMoonStarsFill";
import MingcuteSunFill from "../../../icons/MingcuteSunFill";

function ThemeSwitch() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={clsx(styles["theme-switch"], styles[theme])}
      onClick={handleToggleTheme}
    >
      <div className={styles.track}>
        <div className={styles.thumb}>
          {theme === "light" ? (
            <MingcuteMoonStarsFill className={styles.moon} />
          ) : (
            <MingcuteSunFill className={styles.sun} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitch;
