import { useEffect } from "react";
import { useTheme } from "./../context/themeContext";

export const useDarkMode = (): { theme: string; switchTheme: () => void } => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, switchTheme };
};
