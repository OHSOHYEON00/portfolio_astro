import { useState, useEffect } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { LuMoon } from "react-icons/lu";

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "theme-light" : "dark";
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <button
      className=" cursor-pointer hover:scale-90 duration-150 "
      onClick={toggleTheme}
    >
      {theme === "theme-light" ? (
        <TiWeatherSunny className=" bg-main h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <LuMoon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </button>
  );
}
