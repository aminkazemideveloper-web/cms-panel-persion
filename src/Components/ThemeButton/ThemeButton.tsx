import { LuMoon, LuSun } from "react-icons/lu";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { setTheme, toggleTheme } from "../../Redux/slice/themeSlice";
import { useEffect } from "react";

function ThemeButton() {
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
    <Button
      color="brown"
      variant="solid"
      size="icon"
      onclick={handleToggleTheme}
    >
      {theme === "light" ? (
        <LuMoon className="sun_icon" />
      ) : (
        <LuSun className="sun_icon" />
      )}
    </Button>
  );
}

export default ThemeButton;
