import { useState, useEffect } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const storedDarkMode = localStorage.getItem("darkMode");
//     if (storedDarkMode) {
//       setDarkMode(JSON.parse(storedDarkMode));
//     }
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//     localStorage.setItem("darkMode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

  //   ************
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
      }
    }, []);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);

      localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    };

  return (
    <button className="text-gray-800 dark:text-white" onClick={toggleTheme}>
      {isDarkMode ? (
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
