import { useState, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = (isDark: boolean) => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (!storedDarkMode) return;
    const theme = JSON.parse(storedDarkMode);
    changeTheme(theme);
    setDarkMode(theme);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevState) => {
      localStorage.setItem("darkMode", JSON.stringify(!prevState));
      changeTheme(!prevState);
      return !prevState;
    });
  };

  return (
    <button className="text-gray-800 dark:text-white" onClick={toggleTheme}>
      {darkMode ? (
        <BsFillMoonFill
          title="Dark"
          className="text-cyan-400 bg-cyan-100 h-12 w-12 p-3 rounded-xl border-2 border-cyan-200"
        />
      ) : (
        <BsSunFill
          title="Light"
          className="text-yellow-400 bg-yellow-100 h-12 w-12 p-3 rounded-xl border-2 border-yellow-200"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
