import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

type ThemeState = {
  theme: ThemeType;
};

const getInitialTheme = (): ThemeType => {
  const savedTheme = localStorage.getItem("theme");

  return savedTheme === "dark" ? "dark" : "light";
};


const initialState: ThemeState = {
  theme: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
