import { clsx } from "clsx";
import styles from "./ThemeSwitch.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../../../redux/slice/themeSlice";
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
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(JSON.parse(savedTheme)));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
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
